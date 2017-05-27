/* Import */
var Network = require('./network');
var Methods = require('./methods/methods');
var Node    = require('./node');
var Group   = require('./group');

/*******************************************************************************************
                                        ARCHITECT
*******************************************************************************************/

var Architect = {
  /**
   * Constructs a network from a given array of connected nodes
   */
  Construct: function(list){
    // Create a network
    var network = new Network(0, 0);

    // Transform all groups into nodes
    var nodes = [];

    for(item in list){
      if(list[item] instanceof Group){
        for(var node in list[item].nodes){
          nodes.push(list[item].nodes[node]);
        }
      } else if(list[item] instanceof Node){
        nodes.push(list[item]);
      }
    }

    // Determine input and output nodes
    var inputs = [];
    var outputs = [];
    for(var i = nodes.length - 1; i >= 0; i--){
      if(nodes[i].type == 'output' || nodes[i].connections.out.length + nodes[i].connections.gated.length == 0){
        nodes[i].type = 'output';
        network.output++;
        outputs.push(nodes[i]);
        nodes.splice(i, 1);
      } else if(nodes[i].type == 'input' || !nodes[i].connections.in.length){
        nodes[i].type = 'input';
        network.input++;
        inputs.push(nodes[i]);
        nodes.splice(i, 1);
      }
    }

    // Input nodes are always first, output nodes are always last
    nodes = inputs.concat(nodes).concat(outputs);

    if(network.input == 0 || network.output == 0){
      throw new Error('Given nodes have no clear input/output node!');
    }

    for(var node in nodes){
      for(var conn in nodes[node].connections.out){
        network.connections.push(nodes[node].connections.out[conn]);
      }
      for(var conn in nodes[node].connections.gated){
        network.gates.push(nodes[node].connections.gated[conn]);
      }
      if(nodes[node].connections.self.weight != 0){
        network.selfconns.push(nodes[node].connections.self);
      }
    }

    network.nodes = nodes;

    return network;
  },

  /**
   * Creates a multilayer perceptron (MLP)
   */
  Perceptron: function() {
    // Convert arguments to Array
    var layers = Array.prototype.slice.call(arguments);
    if (layers.length < 3){
      throw new Error("not enough layers (minimum 3) !!");
    }

    // Create a list of nodes/groups
    var nodes = [];
    nodes.push(new Group(layers[0]));

    for(var i = 1; i < layers.length; i++){
      var layer = layers[i];
      var layer = new Group(layer);
      nodes.push(layer);
      nodes[i-1].connect(nodes[i]);
    }

    // Return the network
    return Architect.Construct(nodes);
  },


  /**
   * Creates a randomly connected network
   */
  Random: function(input, hidden, output, options){
    options = options || {};

    var connections      = options.connections      || hidden * 2;
    var backconnections  = options.backconnections  || 0;
    var selfconnections  = options.selfconnections  || 0;
    var gates            = options.gates            || 0;

    var network = new Network(input, output);

    for(var i = 0; i < hidden; i++){
      network.mutate(Methods.Mutation.ADD_NODE);
    }

    for(var i = 0; i < connections - hidden; i++){
      network.mutate(Methods.Mutation.ADD_CONN);
    }

    for(var i = 0; i < backconnections; i++){
      network.mutate(Methods.Mutation.ADD_BACK_CONN);
    }

    for(var i = 0; i < selfconnections; i++){
      network.mutate(Methods.Mutation.ADD_SELF_CONN);
    }

    for(var i = 0; i < gates; i++){
      network.mutate(Methods.Mutation.ADD_GATE);
    }

    return network;
  },

  /**
   * Creates a long short-term memory network
   */
  LSTM: function(){
    var args = Array.prototype.slice.call(arguments);
    if (args.length < 3){
      throw new Error("not enough layers (minimum 3) !!");
    }

    var last = args.pop();

    if(typeof last == 'number'){
      var outputLayer = new Group(last);
      last = {};
    } else {
      var outputLayer = new Group(args.pop()); // last argument
    }

    outputLayer.set({ type: 'output'});

    var options = {};
    options.memoryToMemory = last.memoryToMemory || false;
    options.outputToMemory = last.outputToMemory || false;
    options.outputToGates  = last.outputToGates  || false;
    options.inputToOutput  = last.inputToOutput == undefined ? true : last.inputToOutput;
    options.inputToDeep    = last.inputToDeep   == undefined ? true : last.inputToDeep;

    var inputLayer  = new Group(args.shift()); // first argument
    inputLayer.set({ type: 'input'});


    var blocks = args; // all the arguments in the middle

    var nodes = [];
    nodes.push(inputLayer);

    var previous = inputLayer;
    for(var i = 0; i < blocks.length; i++){
      var block = blocks[i];

      // Init required nodes (in activation order)
      var inputGate   = new Group(block);
      var forgetGate  = new Group(block);
      var memoryCell  = new Group(block);
      var outputGate  = new Group(block);
      var outputBlock = i == blocks.length-1 ? outputLayer : new Group(block);

      inputGate.set({ bias:1 });
      forgetGate.set({ bias:1 });
      outputGate.set({ bias:1 });

      // Connect the input with all the nodes
      var input = previous.connect(memoryCell, Methods.Connection.ALL_TO_ALL);
      previous.connect(inputGate,  Methods.Connection.ALL_TO_ALL);
      previous.connect(outputGate, Methods.Connection.ALL_TO_ALL);
      previous.connect(forgetGate, Methods.Connection.ALL_TO_ALL);

      // Set up internal connections
      memoryCell.connect(inputGate,  Methods.Connection.ALL_TO_ALL);
      memoryCell.connect(forgetGate, Methods.Connection.ALL_TO_ALL);
      memoryCell.connect(outputGate, Methods.Connection.ALL_TO_ALL);
      var forget = memoryCell.connect(memoryCell,  Methods.Connection.ONE_TO_ONE);
      var output = memoryCell.connect(outputBlock, Methods.Connection.ALL_TO_ALL);

      // Set up gates
      inputGate.gate(input, Methods.Gating.INPUT);
      forgetGate.gate(forget, Methods.Gating.SELF);
      outputGate.gate(output, Methods.Gating.OUTPUT);

      // Input to all memory cells
      if(options.inputToDeep && i > 0){
        var input = inputLayer.connect(memoryCell, Methods.Connection.ALL_TO_ALL);
        inputGate.gate(input, Methods.Gating.INPUT);
      }

      // Optional connections
      if(options.memoryToMemory){
        var input = memoryCell.connect(memoryCell, Methods.Connection.ALL_TO_ELSE);
        inputGate.gate(input, Methods.Gating.INPUT);
      }

      if(options.outputToMemory){
        var input = outputLayer.connect(memoryCell, Methods.Connection.ALL_TO_ALL);
        inputGate.gate(input, Methods.Gating.INPUT);
      }

      if(options.outputToGates){
        outputLayer.connect(inputGate,  Methods.Connection.ALL_TO_ALL);
        outputLayer.connect(forgetGate, Methods.Connection.ALL_TO_ALL);
        outputLayer.connect(outputGate, Methods.Connection.ALL_TO_ALL);
      }

      // Add to array
      nodes.push(inputGate);
      nodes.push(forgetGate);
      nodes.push(memoryCell);
      nodes.push(outputGate);
      if(i != blocks.length - 1) nodes.push(outputBlock);

      previous = outputBlock;
    }

    // input to output direct connection
    if(options.inputToOutput){
      inputLayer.connect(outputLayer, Methods.Connection.ALL_TO_ALL);
    }

    nodes.push(outputLayer);
    return Architect.Construct(nodes);
  },

  /**
   * Creates a gated recurrent unit network
   */
  GRU: function(){
    var args = Array.prototype.slice.call(arguments);
    if (args.length < 3){
      throw new Error("not enough layers (minimum 3) !!");
    }

    var outputLayer = new Group(args.pop()); // last argument
    var inputLayer  = new Group(args.shift()); // first argument
    var blocks = args; // all the arguments in the middle

    var nodes = [];
    nodes.push(inputLayer);

    var previous = inputLayer;
    for(var block in blocks){
      block = blocks[block];

      // Init required nodes (in activation order)
      var updateGate = new Group(block);
      var inverseUpdateGate = new Group(block);
      var resetGate = new Group(block);
      var memoryCell = new Group(block);
      var output = new Group(block);
      var previousOutput = new Group(block);

      previousOutput.set({ bias: 0, squash: Methods.Activation.IDENTITY, type: 'constant'});
      memoryCell.set({ squash: Methods.Activation.TANH });
      inverseUpdateGate.set({ bias: 0, squash: Methods.Activation.INVERSE, type: 'constant'});
      updateGate.set({ bias: 1 });
      resetGate.set({ bias: 0 });

      // Update gate calculation
      previous.connect(updateGate, Methods.Connection.ALL_TO_ALL);
      previousOutput.connect(updateGate, Methods.Connection.ALL_TO_ALL);

      // Inverse update gate calculation
      updateGate.connect(inverseUpdateGate, Methods.Connection.ONE_TO_ONE, 1);

      // Reset gate calculation
      previous.connect(resetGate, Methods.Connection.ALL_TO_ALL);
      previousOutput.connect(resetGate, Methods.Connection.ALL_TO_ALL);

      // Memory calculation
      previous.connect(memoryCell, Methods.Connection.ALL_TO_ALL);
      var reset = previousOutput.connect(memoryCell, Methods.Connection.ALL_TO_ALL);

      resetGate.gate(reset, Methods.Gating.OUTPUT); // gate

      // Output calculation
      var update1 = previousOutput.connect(output, Methods.Connection.ALL_TO_ALL);
      var update2 = memoryCell.connect(output, Methods.Connection.ALL_TO_ALL);

      updateGate.gate(update1, Methods.Gating.OUTPUT);
      inverseUpdateGate.gate(update2, Methods.Gating.OUTPUT);

      // Previous output calculation
      output.connect(previousOutput, Methods.Connection.ONE_TO_ONE, 1);

      // output is afhankelijk van input en previous, maar deze zijn in de gegeven opstelling GELIJK
      nodes = nodes.concat([updateGate, inverseUpdateGate, resetGate, memoryCell, output, previousOutput]);

      previous = output;
    }

    previous.connect(outputLayer, Methods.Connection.ALL_TO_ALL);
    nodes.push(outputLayer);

    return Architect.Construct(nodes);
  },

  /**
   * Creates a hopfield network of the given size
   */
  Hopfield: function(size){
    var input = new Group(size);
    var output = new Group(size)

    input.connect(output, Methods.Connection.ALL_TO_ALL);

    input.set({type: 'input'});
    output.set({squash: Methods.Activation.STEP, type: 'output'});

    var network = new Architect.Construct([input, output]);

    return network;
  },

  /**
   * Creates a NARX network (remember previous inputs/outputs)
   */
  NARX: function(inputSize, hiddenLayers, outputSize, previousInput, previousOutput){
    if(!Array.isArray(hiddenLayers)){
      hiddenLayers = [hiddenLayers];
    }

    var nodes = [];

    // Create input
    var input = new Group(inputSize);
    input.set({type: 'input'});

    // Create output
    var output = new Group(outputSize);
    output.set({type: 'output'});

    // Create hidden layers
    var hidden = [];
    var previous = new Group(hiddenLayers[0]);
    hidden.push(previous);

    for(var i = 1; i < hiddenLayers.length; i++){
      var next = new Group(hiddenLayers[i]);
      previous.connect(next, Methods.Connection.ALL_TO_ALL);
      hidden.push(next);

      previous = next;
    }

    input.connect(hidden[0]);
    hidden[hiddenLayers.length - 1].connect(output);

    // Create previous outputs
    var pOutputs = [];
    var previous = output;
    for(var i = 0; i < previousOutput; i++){
      var next = new Group(outputSize);

      next.set({
        squash: Methods.Activation.IDENTITY,
        bias: 0,
        type: 'constant'
      });

      previous.connect(next, Methods.Connection.ONE_TO_ONE, 1);
      next.connect(hidden[0]);

      pOutputs.push(next);

      previous = next;
    }
    pOutputs.reverse();

    // Create previous inputs
    var pInputs = [];
    var previous = input;
    for(var i = 0; i < previousInput; i++){
      var next = new Group(inputSize);
      next.set({
        squash: Methods.Activation.IDENTITY,
        bias: 0,
        type: 'constant'
      });

      previous.connect(next, Methods.Connection.ONE_TO_ONE, 1);
      next.connect(hidden[0]);

      pInputs.push(next);

      previous = next;
    }
    pInputs.reverse();

    // INPUT > SHIFT OUTPUT > HIDDEN > SHIFT INPUT > OUTPUT (activation order)
    nodes = nodes.concat(input);
    nodes = nodes.concat(pOutputs);
    nodes = nodes.concat(hidden);
    nodes = nodes.concat(pInputs);
    nodes = nodes.concat(output);

    return Architect.Construct(nodes);
  }
}

/* Export */
if (module) module.exports = Architect;
