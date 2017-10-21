/* Export */
module.exports = Layer;

/* Import */
var methods = require('../methods/methods');
var Group = require('./group');
var Node = require('./node');

/*******************************************************************************
                                         Group
*******************************************************************************/

function Layer () {
  this.output = null;

  this.nodes = [];
  this.connections = { in: [],
    out: [],
    self: []
  };
}

Layer.prototype = {
  /**
   * Activates all the nodes in the group
   */
  activate: function (value) {
    var values = [];

    if (typeof value !== 'undefined' && value.length !== this.nodes.length) {
      throw new Error('Array with values should be same as the amount of nodes!');
    }

    for (var i = 0; i < this.nodes.length; i++) {
      var activation;
      if (typeof value === 'undefined') {
        activation = this.nodes[i].activate();
      } else {
        activation = this.nodes[i].activate(value[i]);
      }

      values.push(activation);
    }

    return values;
  },

  /**
   * Propagates all the node in the group
   */
  propagate: function (rate, momentum, target) {
    if (typeof target !== 'undefined' && target.length !== this.nodes.length) {
      throw new Error('Array with values should be same as the amount of nodes!');
    }

    for (var i = this.nodes.length - 1; i >= 0; i--) {
      if (typeof target === 'undefined') {
        this.nodes[i].propagate(rate, momentum, true);
      } else {
        this.nodes[i].propagate(rate, momentum, true, target[i]);
      }
    }
  },

  /**
   * Connects the nodes in this group to nodes in another group or just a node
   */
  connect: function (target, method, weight) {
    var connections;
    if (target instanceof Group || target instanceof Node) {
      connections = this.output.connect(target, method, weight);
    } else if (target instanceof Layer) {
      connections = target.input(this, method, weight);
    }

    return connections;
  },

  /**
   * Make nodes from this group gate the given connection(s)
   */
  gate: function (connections, method) {
    this.output.gate(connections, method);
  },

  /**
   * Sets the value of a property for every node
   */
  set: function (values) {
    for (var i = 0; i < this.nodes.length; i++) {
      var node = this.nodes[i];

      if (node instanceof Node) {
        if (typeof values.bias !== 'undefined') {
          node.bias = values.bias;
        }

        node.squash = values.squash || node.squash;
        node.type = values.type || node.type;
      } else if (node instanceof Group) {
        node.set(values);
      }
    }
  },

  /**
   * Disconnects all nodes from this group from another given group/node
   */
  disconnect: function (target, twosided) {
    twosided = twosided || false;

    // In the future, disconnect will return a connection so indexOf can be used
    var i, j, k;
    if (target instanceof Group) {
      for (i = 0; i < this.nodes.length; i++) {
        for (j = 0; j < target.nodes.length; j++) {
          this.nodes[i].disconnect(target.nodes[j], twosided);

          for (k = this.connections.out.length - 1; k >= 0; k--) {
            let conn = this.connections.out[k];

            if (conn.from === this.nodes[i] && conn.to === target.nodes[j]) {
              this.connections.out.splice(k, 1);
              break;
            }
          }

          if (twosided) {
            for (k = this.connections.in.length - 1; k >= 0; k--) {
              let conn = this.connections.in[k];

              if (conn.from === target.nodes[j] && conn.to === this.nodes[i]) {
                this.connections.in.splice(k, 1);
                break;
              }
            }
          }
        }
      }
    } else if (target instanceof Node) {
      for (i = 0; i < this.nodes.length; i++) {
        this.nodes[i].disconnect(target, twosided);

        for (j = this.connections.out.length - 1; j >= 0; j--) {
          let conn = this.connections.out[j];

          if (conn.from === this.nodes[i] && conn.to === target) {
            this.connections.out.splice(j, 1);
            break;
          }
        }

        if (twosided) {
          for (k = this.connections.in.length - 1; k >= 0; k--) {
            let conn = this.connections.in[k];

            if (conn.from === target && conn.to === this.nodes[i]) {
              this.connections.in.splice(k, 1);
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
  clear: function () {
    for (var i = 0; i < this.nodes.length; i++) {
      this.nodes[i].clear();
    }
  }
};

Layer.Dense = function (size) {
  // Create the layer
  var layer = new Layer();

  // Init required nodes (in activation order)
  var block = new Group(size);

  layer.nodes.push(block);
  layer.output = block;

  layer.input = function (from, method, weight) {
    if (from instanceof Layer) from = from.output;
    method = method || methods.connection.ALL_TO_ALL;
    return from.connect(block, method, weight);
  };

  return layer;
};

Layer.LSTM = function (size) {
  // Create the layer
  var layer = new Layer();

  // Init required nodes (in activation order)
  var inputGate = new Group(size);
  var forgetGate = new Group(size);
  var memoryCell = new Group(size);
  var outputGate = new Group(size);
  var outputBlock = new Group(size);

  inputGate.set({
    bias: 1
  });
  forgetGate.set({
    bias: 1
  });
  outputGate.set({
    bias: 1
  });

  // Set up internal connections
  memoryCell.connect(inputGate, methods.connection.ALL_TO_ALL);
  memoryCell.connect(forgetGate, methods.connection.ALL_TO_ALL);
  memoryCell.connect(outputGate, methods.connection.ALL_TO_ALL);
  var forget = memoryCell.connect(memoryCell, methods.connection.ONE_TO_ONE);
  var output = memoryCell.connect(outputBlock, methods.connection.ALL_TO_ALL);

  // Set up gates
  forgetGate.gate(forget, methods.gating.SELF);
  outputGate.gate(output, methods.gating.OUTPUT);

  // Add to nodes array
  layer.nodes = [inputGate, forgetGate, memoryCell, outputGate, outputBlock];

  // Define output
  layer.output = outputBlock;

  layer.input = function (from, method, weight) {
    if (from instanceof Layer) from = from.output;
    method = method || methods.connection.ALL_TO_ALL;
    var connections = [];

    var input = from.connect(memoryCell, method, weight);
    connections = connections.concat(input);

    connections = connections.concat(from.connect(inputGate, method, weight));
    connections = connections.concat(from.connect(outputGate, method, weight));
    connections = connections.concat(from.connect(forgetGate, method, weight));

    inputGate.gate(input, methods.gating.INPUT);

    return connections;
  };

  return layer;
};

Layer.GRU = function (size) {
  // Create the layer
  var layer = new Layer();

  var updateGate = new Group(size);
  var inverseUpdateGate = new Group(size);
  var resetGate = new Group(size);
  var memoryCell = new Group(size);
  var output = new Group(size);
  var previousOutput = new Group(size);

  previousOutput.set({
    bias: 0,
    squash: methods.activation.IDENTITY,
    type: 'constant'
  });
  memoryCell.set({
    squash: methods.activation.TANH
  });
  inverseUpdateGate.set({
    bias: 0,
    squash: methods.activation.INVERSE,
    type: 'constant'
  });
  updateGate.set({
    bias: 1
  });
  resetGate.set({
    bias: 0
  });

  // Update gate calculation
  previousOutput.connect(updateGate, methods.connection.ALL_TO_ALL);

  // Inverse update gate calculation
  updateGate.connect(inverseUpdateGate, methods.connection.ONE_TO_ONE, 1);

  // Reset gate calculation
  previousOutput.connect(resetGate, methods.connection.ALL_TO_ALL);

  // Memory calculation
  var reset = previousOutput.connect(memoryCell, methods.connection.ALL_TO_ALL);

  resetGate.gate(reset, methods.gating.OUTPUT); // gate

  // Output calculation
  var update1 = previousOutput.connect(output, methods.connection.ALL_TO_ALL);
  var update2 = memoryCell.connect(output, methods.connection.ALL_TO_ALL);

  updateGate.gate(update1, methods.gating.OUTPUT);
  inverseUpdateGate.gate(update2, methods.gating.OUTPUT);

  // Previous output calculation
  output.connect(previousOutput, methods.connection.ONE_TO_ONE, 1);

  // Add to nodes array
  layer.nodes = [updateGate, inverseUpdateGate, resetGate, memoryCell, output, previousOutput];

  layer.output = output;

  layer.input = function (from, method, weight) {
    if (from instanceof Layer) from = from.output;
    method = method || methods.connection.ALL_TO_ALL;
    var connections = [];

    connections = connections.concat(from.connect(updateGate, method, weight));
    connections = connections.concat(from.connect(resetGate, method, weight));
    connections = connections.concat(from.connect(memoryCell, method, weight));

    return connections;
  };

  return layer;
};

Layer.Memory = function (size, memory) {
  // Create the layer
  var layer = new Layer();
  // Because the output can only be one group, we have to put the nodes all in óne group

  var previous = null;
  var i;
  for (i = 0; i < memory; i++) {
    var block = new Group(size);

    block.set({
      squash: methods.activation.IDENTITY,
      bias: 0,
      type: 'constant'
    });

    if (previous != null) {
      previous.connect(block, methods.connection.ONE_TO_ONE, 1);
    }

    layer.nodes.push(block);
    previous = block;
  }

  layer.nodes.reverse();

  for (i = 0; i < layer.nodes.length; i++) {
    layer.nodes[i].nodes.reverse();
  }

  // Because output can only be óne group, fit all memory nodes in óne group
  var outputGroup = new Group(0);
  for (var group in layer.nodes) {
    outputGroup.nodes = outputGroup.nodes.concat(layer.nodes[group].nodes);
  }
  layer.output = outputGroup;

  layer.input = function (from, method, weight) {
    if (from instanceof Layer) from = from.output;
    method = method || methods.connection.ALL_TO_ALL;

    if (from.nodes.length !== layer.nodes[layer.nodes.length - 1].nodes.length) {
      throw new Error('Previous layer size must be same as memory size');
    }

    return from.connect(layer.nodes[layer.nodes.length - 1], methods.connection.ONE_TO_ONE, 1);
  };

  return layer;
};
