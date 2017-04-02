/* Import */
var Network = require('./network');
var Methods = require('./methods/methods');
var Node    = require('./node')

/*******************************************************************************************
                                        ARCHITECT
*******************************************************************************************/

/**
 * Collection of built-in architectures
 */
var Architect = {

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
  }
}

/* Export */
if (module) module.exports = Architect;
