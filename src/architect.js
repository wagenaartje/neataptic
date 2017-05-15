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

    var options = {};
    options.memoryToMemory = last.memoryToMemory || false;
    options.outputToMemory = last.outputToMemory || false;
    options.outputToGates  = last.outputToGates  || false;
    options.inputToOutput  = last.inputToOutput  || true;

    var inputLayer  = new Group(args.shift()); // first argument
    var blocks = args; // all the arguments in the middle

    var nodes = [];
    nodes.push(inputLayer);

    var previous = null;
    for(var block in blocks){
      block = blocks[block];

      // Init required nodes (in activation order)
      var inputGate  = new Group(block);
      var forgetGate = new Group(block);
      var memoryCell = new Group(block);
      var outputGate = new Group(block);

      inputGate.set({ bias:1 });
      forgetGate.set({ bias:1 });
      outputGate.set({ bias:1 });

      // Connect the input with all the nodes
      var input = inputLayer.connect(memoryCell);
      inputLayer.connect(inputGate);
      inputLayer.connect(outputGate);
      inputLayer.connect(forgetGate);

      // Set up internal connections
      memoryCell.connect(inputGate);
      memoryCell.connect(forgetGate);
      memoryCell.connect(outputGate);
      var forget = memoryCell.connect(memoryCell);
      var output = memoryCell.connect(outputLayer);

      // Set up gates
      inputGate.gate(input, Methods.Gating.INPUT);
      forgetGate.gate(forget, Methods.Gating.SELF);
      outputGate.gate(output, Methods.Gating.OUTPUT);

      // Connect previous memory block to this block
      if(previous != null){
        previous.connect(memoryCell);
        previous.connect(inputGate);
        previous.connect(forgetGate);
        previous.connect(outputGate);
      }

      // Optional connections
      if(options.memoryToMemory){
        memoryCell.connect(memoryCell, Methods.Connection.ALL_TO_ELSE);
      }

      if(options.outputToMemory){
        outputLayer.connect(memoryCell);
      }

      if(options.outputToGates){
        outputLayer.connect(inputGate);
        outputLayer.connect(forgetGate);
        outputLayer.connect(outputGate);
      }

      // At to array
      nodes.push(inputGate);
      nodes.push(forgetGate);
      nodes.push(memoryCell);
      nodes.push(outputGate);

      previous = memoryCell;
    }

    // input to output direct connection
    if(options.inputToOutput){
      inputLayer.connect(outputLayer);
    }

    nodes.push(outputLayer);
    return Architect.Construct(nodes);
  },

  /**
   * Creates a hopfield network of the given size
   */
  Hopfield: function(size){
    var network = new Network(size, size);

    network.learn = function(patterns){
      var set = [];
      for (var p in patterns)
        set.push({
          input: patterns[p],
          output: patterns[p]
        });

      return network.train(set, {
        iterations: 500000,
        error: .00005,
        rate: 1
      });
    }

    network.feed = function(pattern){
      var output = this.activate(pattern);

      var pattern = [];
      for (var i in output){
        pattern[i] = output[i] >= .5 ? 1 : 0;
      }

      return pattern;
    }

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

      previous.connect(next, Methods.Connection.ALL_TO_ALL, 1);
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

      previous.connect(next, Methods.Connection.ALL_TO_ALL, 1);
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
