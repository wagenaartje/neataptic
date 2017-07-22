/* Import */
var methods = require('../methods/methods');
var Network = require('./network');
var Group = require('./group');
var Layer = require('./layer');
var Node = require('./node');

/*******************************************************************************
                                        architect
*******************************************************************************/

var architect = {
  /**
   * Constructs a network from a given array of connected nodes
   */
  Construct: function (list) {
    // Create a network
    var network = new Network(0, 0);

    // Transform all groups into nodes
    var nodes = [];

    var i;
    for (i = 0; i < list.length; i++) {
      let j;
      if (list[i] instanceof Group) {
        for (j = 0; j < list[i].nodes.length; j++) {
          nodes.push(list[i].nodes[j]);
        }
      } else if (list[i] instanceof Layer) {
        for (j = 0; j < list[i].nodes.length; j++) {
          for (var k = 0; k < list[i].nodes[j].nodes.length; k++) {
            nodes.push(list[i].nodes[j].nodes[k]);
          }
        }
      } else if (list[i] instanceof Node) {
        nodes.push(list[i]);
      }
    }

    // Determine input and output nodes
    var inputs = [];
    var outputs = [];
    for (i = nodes.length - 1; i >= 0; i--) {
      if (nodes[i].type === 'output' || nodes[i].connections.out.length + nodes[i].connections.gated.length === 0) {
        nodes[i].type = 'output';
        network.output++;
        outputs.push(nodes[i]);
        nodes.splice(i, 1);
      } else if (nodes[i].type === 'input' || !nodes[i].connections.in.length) {
        nodes[i].type = 'input';
        network.input++;
        inputs.push(nodes[i]);
        nodes.splice(i, 1);
      }
    }

    // Input nodes are always first, output nodes are always last
    nodes = inputs.concat(nodes).concat(outputs);

    if (network.input === 0 || network.output === 0) {
      throw new Error('Given nodes have no clear input/output node!');
    }

    for (i = 0; i < nodes.length; i++) {
      let j;
      for (j = 0; j < nodes[i].connections.out.length; j++) {
        network.connections.push(nodes[i].connections.out[j]);
      }
      for (j = 0; j < nodes[i].connections.gated.length; j++) {
        network.gates.push(nodes[i].connections.gated[j]);
      }
      if (nodes[i].connections.self.weight !== 0) {
        network.selfconns.push(nodes[i].connections.self);
      }
    }

    network.nodes = nodes;

    return network;
  },

  /**
   * Creates a multilayer perceptron (MLP)
   */
  Perceptron: function () {
    // Convert arguments to Array
    var layers = Array.prototype.slice.call(arguments);
    if (layers.length < 3) {
      throw new Error('You have to specify at least 3 layers');
    }

    // Create a list of nodes/groups
    var nodes = [];
    nodes.push(new Group(layers[0]));

    for (var i = 1; i < layers.length; i++) {
      var layer = layers[i];
      layer = new Group(layer);
      nodes.push(layer);
      nodes[i - 1].connect(nodes[i], methods.connection.ALL_TO_ALL);
    }

    // Construct the network
    return architect.Construct(nodes);
  },

  /**
   * Creates a randomly connected network
   */
  Random: function (input, hidden, output, options) {
    options = options || {};

    var connections = options.connections || hidden * 2;
    var backconnections = options.backconnections || 0;
    var selfconnections = options.selfconnections || 0;
    var gates = options.gates || 0;

    var network = new Network(input, output);

    var i;
    for (i = 0; i < hidden; i++) {
      network.mutate(methods.mutation.ADD_NODE);
    }

    for (i = 0; i < connections - hidden; i++) {
      network.mutate(methods.mutation.ADD_CONN);
    }

    for (i = 0; i < backconnections; i++) {
      network.mutate(methods.mutation.ADD_BACK_CONN);
    }

    for (i = 0; i < selfconnections; i++) {
      network.mutate(methods.mutation.ADD_SELF_CONN);
    }

    for (i = 0; i < gates; i++) {
      network.mutate(methods.mutation.ADD_GATE);
    }

    return network;
  },

  /**
   * Creates a long short-term memory network
   */
  LSTM: function () {
    var args = Array.prototype.slice.call(arguments);
    if (args.length < 3) {
      throw new Error('You have to specify at least 3 layers');
    }

    var last = args.pop();

    var outputLayer;
    if (typeof last === 'number') {
      outputLayer = new Group(last);
      last = {};
    } else {
      outputLayer = new Group(args.pop()); // last argument
    }

    outputLayer.set({
      type: 'output'
    });

    var options = {};
    options.memoryToMemory = last.memoryToMemory || false;
    options.outputToMemory = last.outputToMemory || false;
    options.outputToGates = last.outputToGates || false;
    options.inputToOutput = last.inputToOutput === undefined ? true : last.inputToOutput;
    options.inputToDeep = last.inputToDeep === undefined ? true : last.inputToDeep;

    var inputLayer = new Group(args.shift()); // first argument
    inputLayer.set({
      type: 'input'
    });

    var blocks = args; // all the arguments in the middle

    var nodes = [];
    nodes.push(inputLayer);

    var previous = inputLayer;
    for (var i = 0; i < blocks.length; i++) {
      var block = blocks[i];

      // Init required nodes (in activation order)
      var inputGate = new Group(block);
      var forgetGate = new Group(block);
      var memoryCell = new Group(block);
      var outputGate = new Group(block);
      var outputBlock = i === blocks.length - 1 ? outputLayer : new Group(block);

      inputGate.set({
        bias: 1
      });
      forgetGate.set({
        bias: 1
      });
      outputGate.set({
        bias: 1
      });

      // Connect the input with all the nodes
      var input = previous.connect(memoryCell, methods.connection.ALL_TO_ALL);
      previous.connect(inputGate, methods.connection.ALL_TO_ALL);
      previous.connect(outputGate, methods.connection.ALL_TO_ALL);
      previous.connect(forgetGate, methods.connection.ALL_TO_ALL);

      // Set up internal connections
      memoryCell.connect(inputGate, methods.connection.ALL_TO_ALL);
      memoryCell.connect(forgetGate, methods.connection.ALL_TO_ALL);
      memoryCell.connect(outputGate, methods.connection.ALL_TO_ALL);
      var forget = memoryCell.connect(memoryCell, methods.connection.ONE_TO_ONE);
      var output = memoryCell.connect(outputBlock, methods.connection.ALL_TO_ALL);

      // Set up gates
      inputGate.gate(input, methods.gating.INPUT);
      forgetGate.gate(forget, methods.gating.SELF);
      outputGate.gate(output, methods.gating.OUTPUT);

      // Input to all memory cells
      if (options.inputToDeep && i > 0) {
        let input = inputLayer.connect(memoryCell, methods.connection.ALL_TO_ALL);
        inputGate.gate(input, methods.gating.INPUT);
      }

      // Optional connections
      if (options.memoryToMemory) {
        let input = memoryCell.connect(memoryCell, methods.connection.ALL_TO_ELSE);
        inputGate.gate(input, methods.gating.INPUT);
      }

      if (options.outputToMemory) {
        let input = outputLayer.connect(memoryCell, methods.connection.ALL_TO_ALL);
        inputGate.gate(input, methods.gating.INPUT);
      }

      if (options.outputToGates) {
        outputLayer.connect(inputGate, methods.connection.ALL_TO_ALL);
        outputLayer.connect(forgetGate, methods.connection.ALL_TO_ALL);
        outputLayer.connect(outputGate, methods.connection.ALL_TO_ALL);
      }

      // Add to array
      nodes.push(inputGate);
      nodes.push(forgetGate);
      nodes.push(memoryCell);
      nodes.push(outputGate);
      if (i !== blocks.length - 1) nodes.push(outputBlock);

      previous = outputBlock;
    }

    // input to output direct connection
    if (options.inputToOutput) {
      inputLayer.connect(outputLayer, methods.connection.ALL_TO_ALL);
    }

    nodes.push(outputLayer);
    return architect.Construct(nodes);
  },

  /**
   * Creates a gated recurrent unit network
   */
  GRU: function () {
    var args = Array.prototype.slice.call(arguments);
    if (args.length < 3) {
      throw new Error('not enough layers (minimum 3) !!');
    }

    var inputLayer = new Group(args.shift()); // first argument
    var outputLayer = new Group(args.pop()); // last argument
    var blocks = args; // all the arguments in the middle

    var nodes = [];
    nodes.push(inputLayer);

    var previous = inputLayer;
    for (var i = 0; i < blocks.length; i++) {
      var layer = new Layer.GRU(blocks[i]);
      previous.connect(layer);
      previous = layer;

      nodes.push(layer);
    }

    previous.connect(outputLayer);
    nodes.push(outputLayer);

    return architect.Construct(nodes);
  },

  /**
   * Creates a hopfield network of the given size
   */
  Hopfield: function (size) {
    var input = new Group(size);
    var output = new Group(size);

    input.connect(output, methods.connection.ALL_TO_ALL);

    input.set({
      type: 'input'
    });
    output.set({
      squash: methods.activation.STEP,
      type: 'output'
    });

    var network = new architect.Construct([input, output]);

    return network;
  },

  /**
   * Creates a NARX network (remember previous inputs/outputs)
   */
  NARX: function (inputSize, hiddenLayers, outputSize, previousInput, previousOutput) {
    if (!Array.isArray(hiddenLayers)) {
      hiddenLayers = [hiddenLayers];
    }

    var nodes = [];

    var input = new Layer.Dense(inputSize);
    var inputMemory = new Layer.Memory(inputSize, previousInput);
    var hidden = [];
    var output = new Layer.Dense(outputSize);
    var outputMemory = new Layer.Memory(outputSize, previousOutput);

    nodes.push(input);
    nodes.push(outputMemory);

    for (var i = 0; i < hiddenLayers.length; i++) {
      var hiddenLayer = new Layer.Dense(hiddenLayers[i]);
      hidden.push(hiddenLayer);
      nodes.push(hiddenLayer);
      if (typeof hidden[i - 1] !== 'undefined') {
        hidden[i - 1].connect(hiddenLayer, methods.connection.ALL_TO_ALL);
      }
    }

    nodes.push(inputMemory);
    nodes.push(output);

    input.connect(hidden[0], methods.connection.ALL_TO_ALL);
    input.connect(inputMemory, methods.connection.ONE_TO_ONE, 1);
    inputMemory.connect(hidden[0], methods.connection.ALL_TO_ALL);
    hidden[hidden.length - 1].connect(output, methods.connection.ALL_TO_ALL);
    output.connect(outputMemory, methods.connection.ONE_TO_ONE, 1);
    outputMemory.connect(hidden[0], methods.connection.ALL_TO_ALL);

    input.set({
      type: 'input'
    });
    output.set({
      type: 'output'
    });

    return architect.Construct(nodes);
  }
};

/* Export */
module.exports = architect;
