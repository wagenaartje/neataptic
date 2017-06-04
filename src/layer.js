/* Export */
if (module) module.exports = Layer;

/* Import */
var Methods    = require('./methods/methods');
var Connection = require('./connection');
var Node       = require('./node');
var Config     = require('./config');
var Architect  = require('./architect');
var Group      = require('./group');

/* Easier variable naming */
var Activation = Methods.Activation;
var Mutation   = Methods.Mutation;

/******************************************************************************************
                                         Group
*******************************************************************************************/

function Layer(){
  this.output = null;

  this.nodes = [];
  this.connections = { in : [], out: [] , self: [] };
}

Layer.prototype = {
  /**
   * Activates all the nodes in the group
   */
  activate: function(value){
    var values = [];

    if(typeof value != 'undefined' && value.length != this.nodes.length){
      throw new Error('Array with values should be same as the amount of nodes!');
    }

    for(var i = 0; i < this.nodes.length; i++){
      if(typeof value == 'undefined'){
        var activation = this.nodes[i].activate();
      } else {
        var activation = this.nodes[i].activate(value[i]);
      }

      values.push(activation);
    }

    return values;
  },

  /**
   * Propagates all the node in the group
   */
  propagate: function(rate, momentum, target){
    if(typeof target != 'undefined' && target.length != this.nodes.length){
      throw new Error('Array with values should be same as the amount of nodes!');
    }

    for(var i = this.nodes.length - 1; i >= 0; i--){
      if(typeof target == 'undefined'){
        this.nodes[i].propagate(rate, momentum);
      } else {
        this.nodes[i].propagate(rate, momentum, target[i]);
      }
    }
  },

  /**
   * Connects the nodes in this group to nodes in another group or just a node
   */
  connect: function(target, method, weight){
    if(target instanceof Group || target instanceof Node){
      var connections = this.output.connect(target, method, weight);
    } else if (target instanceof Layer){
      var connections = target.input(this, method, weight);
    }

    return connections;
  },

  /**
   * Make nodes from this group gate the given connection(s)
   */
  gate: function(connections, method){
    this.output.gate(connections, method);
  },

  /**
   * Sets the value of a property for every node
   */
  set: function(values){
    for(var node in this.nodes){
      node = this.nodes[node];

      if(node instanceof Node){
        if(typeof values.bias != 'undefined'){
          node.bias = values.bias;
        }

        node.squash = values.squash || node.squash;
        node.type   = values.type   || node.type;
      } else if(node instanceof Group){
        node.set(values);
      }
    }
  },

  /**
   * Disconnects all nodes from this group from another given group/node
   */
  disconnect: function(target, twosided){
    twosided = twosided || false;

    // In the future, disconnect will return a connection so indexOf can be used
    if(target instanceof Group){
      for(var i = 0; i < this.nodes.length; i++){
        for(var j = 0; j < target.nodes.length; j++){
          this.nodes[i].disconnect(target.nodes[j], twosided);

          for(index in this.connections.out){
            var conn = this.connections.out[index];

            if(conn.from == this.nodes[i] && conn.to == target.nodes[j]){
              this.connections.out.splice(index, 1);
              break;
            }
          }

          if(twosided){
            for(index in this.connections.in){
              var conn = this.connections.in[index];

              if(conn.from == target.nodes[j] && conn.to == this.nodes[i]){
                this.connections.in.splice(index, 1);
                break;
              }
            }
          }
        }
      }
    } else if(target instanceof Node){
      for(var i = 0; i < this.nodes.length; i++){
        var connection = this.nodes[i].disconnect(target, twosided);

        for(index in this.connections.out){
          var conn = this.connections.out[index];

          if(conn.from == this.nodes[i] && conn.to == target){
            this.connections.out.splice(index, 1);
            break;
          }
        }

        if(twosided){
          for(index in this.connections.in){
            var conn = this.connections.in[index];

            if(conn.from == target && conn.to == this.nodes[i]){
              this.connections.in.splice(index, 1);
              break;
            }
          }
        }
      }
    }
  },

  /**
   * Clear the context of this group
   */
  clear: function(){
    for(var node in this.nodes){
      this.nodes[node].clear();
    }
  }
}

Layer.Dense = function(size){
  // Create the layer
  var layer = new Layer();

  // Init required nodes (in activation order)
  var block = new Group(size);

  layer.nodes.push(block);
  layer.output = block;

  layer.input = function(from, method, weight){
    if(from instanceof Layer) from = from.output;
    method = method || Methods.Connection.ALL_TO_ALL;
    return from.connect(block, method, weight);
  }

  return layer;
}

Layer.LSTM = function(size){
  // Create the layer
  var layer = new Layer();

  // Init required nodes (in activation order)
  var inputGate   = new Group(size);
  var forgetGate  = new Group(size);
  var memoryCell  = new Group(size);
  var outputGate  = new Group(size);
  var outputBlock = new Group(size);

  inputGate.set({ bias:1 });
  forgetGate.set({ bias:1 });
  outputGate.set({ bias:1 });

  // Set up internal connections
  memoryCell.connect(inputGate,  Methods.Connection.ALL_TO_ALL);
  memoryCell.connect(forgetGate, Methods.Connection.ALL_TO_ALL);
  memoryCell.connect(outputGate, Methods.Connection.ALL_TO_ALL);
  var forget = memoryCell.connect(memoryCell,  Methods.Connection.ONE_TO_ONE);
  var output = memoryCell.connect(outputBlock, Methods.Connection.ALL_TO_ALL);

  // Set up gates
  forgetGate.gate(forget, Methods.Gating.SELF);
  outputGate.gate(output, Methods.Gating.OUTPUT);

  // Add to nodes array
  layer.nodes = [inputGate, forgetGate, memoryCell, outputGate, outputBlock];

  // Define output
  layer.output = outputBlock;

  layer.input = function(from, method, weight){
    if(from instanceof Layer) from = from.output;
    method = method || Methods.Connection.ALL_TO_ALL;
    var connections = [];

    var input = from.connect(memoryCell, method, weight);
    connections = connections.concat(input);

    connections = connections.concat(from.connect(inputGate,  method, weight));
    connections = connections.concat(from.connect(outputGate, method, weight));
    connections = connections.concat(from.connect(forgetGate, method, weight));

    inputGate.gate(input, Methods.Gating.INPUT);

    return connections;
  }

  return layer;
};

Layer.GRU = function(size){
  // Create the layer
  var layer = new Layer();

  var updateGate        = new Group(size);
  var inverseUpdateGate = new Group(size);
  var resetGate         = new Group(size);
  var memoryCell        = new Group(size);
  var output            = new Group(size);
  var previousOutput    = new Group(size);

  previousOutput.set({ bias: 0, squash: Methods.Activation.IDENTITY, type: 'constant'});
  memoryCell.set({ squash: Methods.Activation.TANH });
  inverseUpdateGate.set({ bias: 0, squash: Methods.Activation.INVERSE, type: 'constant'});
  updateGate.set({ bias: 1 });
  resetGate.set({ bias: 0 });

  // Update gate calculation
  previousOutput.connect(updateGate, Methods.Connection.ALL_TO_ALL);

  // Inverse update gate calculation
  updateGate.connect(inverseUpdateGate, Methods.Connection.ONE_TO_ONE, 1);

  // Reset gate calculation
  previousOutput.connect(resetGate, Methods.Connection.ALL_TO_ALL);

  // Memory calculation
  var reset = previousOutput.connect(memoryCell, Methods.Connection.ALL_TO_ALL);

  resetGate.gate(reset, Methods.Gating.OUTPUT); // gate

  // Output calculation
  var update1 = previousOutput.connect(output, Methods.Connection.ALL_TO_ALL);
  var update2 = memoryCell.connect(output, Methods.Connection.ALL_TO_ALL);

  updateGate.gate(update1, Methods.Gating.OUTPUT);
  inverseUpdateGate.gate(update2, Methods.Gating.OUTPUT);

  // Previous output calculation
  output.connect(previousOutput, Methods.Connection.ONE_TO_ONE, 1);

  // Add to nodes array
  layer.nodes = [updateGate, inverseUpdateGate, resetGate, memoryCell, output, previousOutput];

  layer.output = output;

  layer.input = function(from, method, weight){
    if(from instanceof Layer) from = from.output;
    method = method || Methods.Connection.ALL_TO_ALL;
    var connections = [];

    connections = connections.concat(from.connect(updateGate, method, weight));
    connections = connections.concat(from.connect(resetGate,  method, weight));
    connections = connections.concat(from.connect(memoryCell, method, weight));

    return connections;
  }

  return layer;
}

Layer.Memory = function(size, memory){
  // Create the layer
  var layer = new Layer();
  // Because the output can only be one group, we have to put the nodes all in óne group

  var previous = null;
  for(var i = 0; i < memory; i++){
    var block = new Group(size);

    block.set({
      squash: Methods.Activation.IDENTITY,
      bias: 0,
      type: 'constant'
    });

    if(previous != null){
      previous.connect(block, Methods.Connection.ONE_TO_ONE, 1);
    }

    layer.nodes.push(block);
    previous = block;
  }

  layer.nodes.reverse();

  for(var group in layer.nodes){
    layer.nodes[group].nodes.reverse();
  }

  // Because output can only be óne group, fit all memory nodes in óne group
  var outputGroup = new Group(0);
  for(var group in layer.nodes){
    outputGroup.nodes = outputGroup.nodes.concat(layer.nodes[group].nodes);
  }
  layer.output = outputGroup;

  layer.input = function(from, method, weight){
    if(from instanceof Layer) from = from.output;
    method = method || Methods.Connection.ALL_TO_ALL;

    if(from.nodes.length != layer.nodes[layer.nodes.length-1].nodes.length){
      throw new Error('Previous layer size must be same as memory size');
    }

    return from.connect(layer.nodes[layer.nodes.length-1], Methods.Connection.ONE_TO_ONE, 1);
  }

  return layer;
}
