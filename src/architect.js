/* Import */
var Network = require('./network');
var Methods = require('./methods/methods');
var Node    = require('./node');
var Trainer = require('./trainer');

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
  Construct: function(nodes){
    // Create a network
    var network = new Network(0, 0);

    // Calculate input and output size
    for(var node in nodes){
      if(!nodes[node].connections.out.length){
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
      network.nodes.push(nodes[node]);
    }

    return network;
  },

  /**
   * Returns a multilayer perceptron (MLP)
   */
  Perceptron: function() {
    // Convert arguments to Array
    var args = Array.prototype.slice.call(arguments);
    if (args.length < 3){
      throw new Error("not enough layers (minimum 3) !!");
    }

    var inputs = args.shift(); // first argument
    var outputs = args.pop(); // last argument
    var layers = args; // all the arguments in the middle

    // Create the network
    var network = new Network(inputs, outputs);

    // Reset network connections
    network.connections = [];
    for(var node in network.nodes){
      network.nodes[node].connections = { in : [], out : [] };
    }


    // Add in hidden nodes
    for (var level in layers) {
      for(var i = 0; i < layers[level]; i++){
        var node = new Node();
        network.nodes.splice(inputs, 0, node);
      }
    }


    // Connect all the layers
    var total = 0;
    var previous = inputs;
    layers.push(outputs);

    for(var level in layers){
      for(var i = total; i < total + previous; i++){
        for(var j = total + previous; j < total + previous + layers[level]; j++){
          network.connect(network.nodes[i], network.nodes[j]);
        }
      }

      total += previous;
      previous = layers[level];
    }

    // Return the network
    return network;
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

  /**
   * Returns a hopfield network of the given size
   */
  Hopfield: function(size){
    var network = new Network(size, size);
    var trainer = new Trainer(network);

    network.learn = function(patterns){
      var set = [];
      for (var p in patterns)
        set.push({
          input: patterns[p],
          output: patterns[p]
        });

      return trainer.train(set, {
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
