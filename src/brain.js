/* Export */
if (module) module.exports = Brain;

/* Import */
var Neuron  = require('./neuron')
,   Layer   = require('./layer')
,   methods = require('./methods/methods.js');

/* Shorten var names */
var Mutate     = methods.Mutate
,   Squash     = methods.Squash
,   Crossover  = methods.Crossover
,   Selection  = methods.Selection
,   Generation = methods.Generation
,   Pooling    = methods.Pooling
,   Cost       = methods.Cost
,   Connection = methods.Connection;

/*******************************************************************************************
                                         BRAIN
*******************************************************************************************/

/**
 * Creates a neural network
 */
function Brain(options) {
  this.size = [options.input, options.hidden.length, options.output];
  this.nodes = [];

  for(var i = 0; i < options.input; i++){
    var node = new Neuron();
    node.input = true;
    this.nodes.push(node);
  }

  for(var i in options.hidden){
    options.hidden[i].input = false;
    this.nodes.push(options.hidden[i]);
  }

  for(var i = 0; i < options.output; i++){
    var node = new Neuron();
    node.input = false;
    this.nodes.push(node);
  }

  this.connect(options.memory, options.ratio);
}

Brain.prototype = {
  /**
   * Connects all the nodes
   * all nodes are connected forwardly using http://stackoverflow.com/a/7228322/4576519
   */
  connect: function(memory, ratio){
    memory = memory || 0;
    ratio  = ratio  || 3;
    // Give every node at least one output connection
    for(var j = 0; j < ratio; j++){
      for(var i = 0; i < this.size[0] + this.size[1]; i++){
        var output = i;
        var minBound = Math.max(i+1, this.size[0]);
        var input = Math.floor(Math.random() * (this.size[0] + this.size[1] + this.size[2] - minBound) + minBound); // an input node can't connected to an output node, this creates BIAS (?)

        this.nodes[output].project(this.nodes[input]);
        this.nodes[input].input = true;
      }
    }

    // Detect nodes without input connections, connect them
    for(var i = this.size[0]; i < this.size[0] + this.size[1] + this.size[2]; i++){
      var input = i;
      if(this.nodes[input].input == false){
        var output = Math.floor(Math.random() * i);

        this.nodes[output].project(this.nodes[input]);
        this.nodes[input].input = true;
      }
    }

    // Create 'memory connections' : connections that point backwards
    while(memory > 0){
      var output = Math.floor(Math.random() * (this.size[1] + this.size[2]) + this.size[0]);
      var input = Math.floor(Math.random() * output);

      this.nodes[output].project(this.nodes[input]);
      memory--;
    }
  },

  /**
   * Feed-forward activation of all nodes to get an output
   */
  activate: function(input) {
    if(input.length != this.size[0]){ throw new Error('Incorrect input size!') };
    var output = [];

    for(var i = 0; i < this.size[0] + this.size[1] + this.size[2]; i++){
      if(i < this.size[0]){ // input
        this.nodes[i].activate(input[i]);
      } else if(i >= this.size[0] + this.size[1]){ //output
        output.push(this.nodes[i].activate());
      } else { // hidden
        this.nodes[i].activate()
      }
    }

    return output;
  },

  /**
   * Back-propagate the error through the network
   */
  propagate: function(rate, target) {
    if(target.length != this.size[2]){ throw new Error('Incorrect target size!') };

    for(var i = this.size[0] + this.size[1] + this.size[2] - 1; i >= 0 ; i--){
      if(i < this.size[0]){
      } else if(i >= this.size[0] + this.size[1]){ //output
        this.nodes[i].propagate(rate, target[i - (this.size[0] + this.size[1] + this.size[2] - 1)])
      } else { // hidden
        this.nodes[i].propagate(rate);
      }
    }
  },

  /**
   * Clear all elegibility traces and extended elegibility traces
   * (the network forgets its context, but not what was trained)
   */
  clear: function() {
    for(var node in this.nodes){
      this.nodes[node].reset();
    }
  },

  /**
   * Resets all weights and clears all traces
   */
  reset: function() {
    for(var node in this.nodes){
      this.nodes[node].reset();
    }
  },

  /*
   * Breaks all connections so they can be reconnected again
   */
  disconnect: function(){
    for(var node in this.nodes){
      this.nodes[node].disconnect();
    }
  },

  /**
   * Mutates the brain
   */

  mutate: function(method){
    method = method || Mutate.MODIFY_RANDOM_WEIGHT;
    switch(method){
      case(Mutate.SWAP_WEIGHT):
        break;
      case(Mutate.MODIFY_RANDOM_WEIGHT):
        break;
      case(Mutate.MODIFY_CONNECTIONS):
        break;
      case(Mutate.MODIFY_NODES):
        if(Math.random() >= 0.5){
          // remove a node
        } else {
          // add a node
          var random = Math.floor(Math.random() * 3);
          switch(random){
            case(0): // network
              console.log('here');
              // create a randomly sized network
              var size = Math.floor(Math.random() * (Mutate.MODIFY_NODES.config.network.size[1] - Mutate.MODIFY_NODES.config.network.size[0]) + Mutate.MODIFY_NODES.config.network.size[0]);
              var hiddenSize =  Math.min(size-2, Math.floor(Math.random() * (Mutate.MODIFY_NODES.config.network.hidden[1] - Mutate.MODIFY_NODES.config.network.hidden[0]) + Mutate.MODIFY_NODES.config.network.hidden[0]));

              var layers = '';

              // x amount of size must be left for remaining layers and output
              var inputLayerSize = Math.floor(Math.random() * (size-(hiddenSize)-1) + 1);
              size -= inputLayerSize;
              layers += inputLayerSize + ', ';

              var hiddenLayerSizes = [];
              for(var i = 0; i < hiddenSize; i++){
                var hiddenLayerSize = Math.floor(Math.random() * (size-(hiddenSize - (i + 1) + 1)-1) + 1);
                hiddenLayerSizes.push(hiddenLayerSize);
                size -= hiddenLayerSize;
                layers += hiddenLayerSize + ', ';
              }

              var outputLayerSize = size;
              layers += outputLayerSize;

              var node = eval('new Architect.Perceptron(' + layers + ')');

              // must be inserted after input and before output
              var insert = Math.floor(Math.random() * this.size[1] + this.size[0]);
              this.nodes.splice(insert, 0, node);
              this.size[1]++;

              // now project it to another neurons ( should also be done with ratio, will be implemented later)
              var minBound = Math.max(insert+1, this.size[0]);
              var input = Math.floor(Math.random() * (this.size[0] + this.size[1] + this.size[2] - minBound) + minBound); // an input node can't connected to an output node, this creates BIAS (?)
              this.nodes[insert].project(this.nodes[input]);

              // now let it have an input connection
              var output = Math.floor(Math.random() * insert);
              this.nodes[output].project(this.nodes[insert]);
              break;
            case(1): // layer
              break;
            case(2): // neuron
              break;
          }
        }
        break;
      case(Mutate.MUTATE_NODES):
        break;
    }

  }


};
