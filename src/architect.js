/* Import */
var Network = require('./network');
var Methods = require('./methods/methods');
var Node    = require('./node');
var Group   = require('./group');

/*******************************************************************************************
                                        ARCHITECT
*******************************************************************************************/

/**
 * Collection of built-in architectures
 */
var Architect = {
  /**
   * Construct a network from a given array of connected nodes
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

    // Calculate input and output size
    for(var node in nodes){
      if(nodes[node].connections.out.length + nodes[node].connections.gated.length == 0){
        nodes[node].type = 'output';
        network.output++;
      } else if(!nodes[node].connections.in.length){
        nodes[node].type = 'input';
        network.input++;
      }
    }

    if(network.input == 0 || network.output == 0){
      throw new Error('Given nodes have no clear input/output node!');
    }

    for(var node in nodes){
      for(var conn in nodes[node].connections.out){
        network.connections.push(nodes[node].connections.out[conn]);
      }
    }

    network.nodes = nodes;

    return network;
  },

  /**
   * Returns a multilayer perceptron (MLP)
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
   * Returns a randomly connected network
   */
  Random: function(input, hidden, output, ratio){
    ratio = ratio || 2;
    var network = new Network(input, output);

    for(var i = 0; i < hidden; i++){
      network.mutate(Methods.Mutation.ADD_NODE);
    }

    for(var i = 0; i < hidden * ratio; i++){
      network.mutate(Methods.Mutation.ADD_CONN);
    }

    return network;
  },

  LSTM: function(){
    var args = Array.prototype.slice.call(arguments);
    if (args.length < 3){
      throw new Error("not enough layers (minimum 3) !!");
    }
    var inputLayer  = new Group(args.shift()); // first argument
    var outputLayer = new Group(args.pop()); // last argument
    //debug
    var inputLayer = new Node();
    var outputLayer = new Node();

    var blocks = args; // all the arguments in the middle

    var nodes = [];
    nodes.push(inputLayer);

    for(var block in blocks){
      block = blocks[block];

      // Init required nodes (in activation order)
      var inputGate  = new Node();
      var forgetGate = new Node();
      var memoryCell = new Node();
      var outputGate = new Node();

      inputGate.bias = 1;
      forgetGate.bias = 1;
      outputGate.bias = 1;

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
      inputGate.gate(input);
      forgetGate.gate(forget);
      outputGate.gate(output);

      // At to array
      nodes.push(inputGate);
      nodes.push(forgetGate);
      nodes.push(memoryCell);
      nodes.push(outputGate);
    }

    // input to output direct connection
    if (true)
      inputLayer.connect(outputLayer);

    nodes.push(outputLayer);
    return Architect.Construct(nodes);
  },

  /**
   * Returns a hopfield network of the given size
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
  }
}

/* Export */
if (module) module.exports = Architect;
