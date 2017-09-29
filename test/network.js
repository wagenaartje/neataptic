/* Import */
var chai = require('chai');
var assert = chai.assert;

/* Shorten var names */
var { architect, Network, methods, config } = neataptic;

/* Turn off warnings */
config.warnings = false;

/* Functions used in the testing process */
function checkMutation (method) {
  var network = new architect.Perceptron(2, 4, 4, 4, 2);
  network.mutate(methods.mutation.ADD_GATE);
  network.mutate(methods.mutation.ADD_BACK_CONN);
  network.mutate(methods.mutation.ADD_SELF_CONN);

  var originalOutput = [];
  var i, j;
  for (i = 0; i <= 10; i++) {
    for (j = 0; j <= 10; j++) {
      originalOutput.push(network.activate([i / 10, j / 10]));
    }
  }

  network.mutate(method);

  var mutatedOutput = [];

  for (i = 0; i <= 10; i++) {
    for (j = 0; j <= 10; j++) {
      mutatedOutput.push(network.activate([i / 10, j / 10]));
    }
  }

  assert.notDeepEqual(originalOutput, mutatedOutput, 'Output of original network should be different from the mutated network!');
}

function learnSet (set, iterations, error) {
  var network = new architect.Perceptron(set[0].input.length, 5, set[0].output.length);

  var options = {
    iterations: iterations,
    error: error,
    shuffle: true,
    rate: 0.3,
    momentum: 0.9
  };

  var results = network.train(set, options);

  assert.isBelow(results.error, error);
}

function testEquality (original, copied) {
  for (var j = 0; j < 50; j++) {
    var input = [];
    var a;
    for (a = 0; a < original.input; a++) {
      input.push(Math.random());
    }

    var ORout = original.activate([input]);
    var COout = copied instanceof Network ? copied.activate([input]) : copied([input]);

    for (a = 0; a < original.output; a++) {
      ORout[a] = ORout[a].toFixed(9);
      COout[a] = COout[a].toFixed(9);
    }
    assert.deepEqual(ORout, COout, copied instanceof Network
      ? 'Original and JSON copied networks are not the same!'
      : 'Original and standalone networks are not the same!'
    );
  }
}

/*******************************************************************************************
                          Test the performance of networks
*******************************************************************************************/

describe('Networks', function () {
  describe('Mutation', function () {
    it('ADD_NODE', function () {
      checkMutation(methods.mutation.ADD_NODE);
    });
    it('ADD_CONNECTION', function () {
      checkMutation(methods.mutation.ADD_CONN);
    });
    it('MOD_BIAS', function () {
      checkMutation(methods.mutation.MOD_BIAS);
    });
    it('MOD_WEIGHT', function () {
      checkMutation(methods.mutation.MOD_WEIGHT);
    });
    it('SUB_CONN', function () {
      checkMutation(methods.mutation.SUB_CONN);
    });
    it('SUB_NODE', function () {
      checkMutation(methods.mutation.SUB_NODE);
    });
    it('MOD_ACTIVATION', function () {
      checkMutation(methods.mutation.MOD_ACTIVATION);
    });
    it('ADD_GATE', function () {
      checkMutation(methods.mutation.ADD_GATE);
    });
    it('SUB_GATE', function () {
      checkMutation(methods.mutation.SUB_GATE);
    });
    it('ADD_SELF_CONN', function () {
      checkMutation(methods.mutation.ADD_SELF_CONN);
    });
    it('SUB_SELF_CONN', function () {
      checkMutation(methods.mutation.SUB_SELF_CONN);
    });
    it('ADD_BACK_CONN', function () {
      checkMutation(methods.mutation.ADD_BACK_CONN);
    });
    it('SUB_BACK_CONN', function () {
      checkMutation(methods.mutation.SUB_BACK_CONN);
    });
    it('SWAP_NODES', function () {
      checkMutation(methods.mutation.SWAP_NODES);
    });
  });
  describe('Structure', function () {
    it('Feed-forward', function () {
      this.timeout(30000);
      var network1 = new Network(2, 2);
      var network2 = new Network(2, 2);

      // mutate it a couple of times
      var i;
      for (i = 0; i < 100; i++) {
        network1.mutate(methods.mutation.ADD_NODE);
        network2.mutate(methods.mutation.ADD_NODE);
      }
      for (i = 0; i < 400; i++) {
        network1.mutate(methods.mutation.ADD_CONN);
        network2.mutate(methods.mutation.ADD_NODE);
      }

      // Crossover
      var network = Network.crossOver(network1, network2);

      // Check if the network is feed-forward correctly
      for (i = 0; i < network.connections.length; i++) {
        let from = network.nodes.indexOf(network.connections[i].from);
        let to = network.nodes.indexOf(network.connections[i].to);

        // Exception will be made for memory connections soon
        assert.isBelow(from, to, 'network is not feeding forward correctly');
      }
    });
    it('from/toJSON equivalency', function () {
      this.timeout(10000);
      var original, copy;
      original = new architect.Perceptron(Math.floor(Math.random() * 5 + 1), Math.floor(Math.random() * 5 + 1), Math.floor(Math.random() * 5 + 1));
      copy = Network.fromJSON(original.toJSON());
      testEquality(original, copy);

      original = new Network(Math.floor(Math.random() * 5 + 1), Math.floor(Math.random() * 5 + 1));
      copy = Network.fromJSON(original.toJSON());
      testEquality(original, copy);

      original = new architect.LSTM(Math.floor(Math.random() * 5 + 1), Math.floor(Math.random() * 5 + 1), Math.floor(Math.random() * 5 + 1));
      copy = Network.fromJSON(original.toJSON());
      testEquality(original, copy);

      original = new architect.GRU(Math.floor(Math.random() * 5 + 1), Math.floor(Math.random() * 5 + 1), Math.floor(Math.random() * 5 + 1), Math.floor(Math.random() * 5 + 1));
      copy = Network.fromJSON(original.toJSON());
      testEquality(original, copy);

      original = new architect.Random(Math.floor(Math.random() * 5 + 1), Math.floor(Math.random() * 10 + 1), Math.floor(Math.random() * 5 + 1));
      copy = Network.fromJSON(original.toJSON());
      testEquality(original, copy);

      original = new architect.NARX(Math.floor(Math.random() * 5 + 1), Math.floor(Math.random() * 10 + 1), Math.floor(Math.random() * 5 + 1), Math.floor(Math.random() * 5 + 1), Math.floor(Math.random() * 5 + 1));
      copy = Network.fromJSON(original.toJSON());
      testEquality(original, copy);

      original = new architect.Hopfield(Math.floor(Math.random() * 5 + 1));
      copy = Network.fromJSON(original.toJSON());
      testEquality(original, copy);
    });
    it('standalone equivalency', function () {
      this.timeout(10000);
      var original;
      original = new architect.Perceptron(Math.floor(Math.random() * 5 + 1), Math.floor(Math.random() * 5 + 1), Math.floor(Math.random() * 5 + 1));
      eval(original.standalone());
      testEquality(original, activate);

      original = new Network(Math.floor(Math.random() * 5 + 1), Math.floor(Math.random() * 5 + 1));
      eval(original.standalone());
      testEquality(original, activate);

      original = new architect.LSTM(Math.floor(Math.random() * 5 + 1), Math.floor(Math.random() * 5 + 1), Math.floor(Math.random() * 5 + 1));
      eval(original.standalone());
      testEquality(original, activate);

      original = new architect.GRU(Math.floor(Math.random() * 5 + 1), Math.floor(Math.random() * 5 + 1), Math.floor(Math.random() * 5 + 1), Math.floor(Math.random() * 5 + 1));
      eval(original.standalone());
      testEquality(original, activate);

      original = new architect.Random(Math.floor(Math.random() * 5 + 1), Math.floor(Math.random() * 10 + 1), Math.floor(Math.random() * 5 + 1));
      eval(original.standalone());
      testEquality(original, activate);

      original = new architect.NARX(Math.floor(Math.random() * 5 + 1), Math.floor(Math.random() * 5 + 1), Math.floor(Math.random() * 5 + 1), Math.floor(Math.random() * 5 + 1), Math.floor(Math.random() * 5 + 1));
      eval(original.standalone());
      testEquality(original, activate);

      original = new architect.Hopfield(Math.floor(Math.random() * 5 + 1));
      eval(original.standalone());
      testEquality(original, activate);
    });
  });
  describe('Learning capability', function () {
    it('AND gate', function () {
      learnSet([
        { input: [0, 0], output: [0] },
        { input: [0, 1], output: [0] },
        { input: [1, 0], output: [0] },
        { input: [1, 1], output: [1] }
      ], 1000, 0.002);
    });
    it('XOR gate', function () {
      learnSet([
        { input: [0, 0], output: [0] },
        { input: [0, 1], output: [1] },
        { input: [1, 0], output: [1] },
        { input: [1, 1], output: [0] }
      ], 3000, 0.002);
    });
    it('NOT gate', function () {
      learnSet([
        { input: [0], output: [1] },
        { input: [1], output: [0] }
      ], 1000, 0.002);
    });
    it('XNOR gate', function () {
      learnSet([
        { input: [0, 0], output: [1] },
        { input: [0, 1], output: [0] },
        { input: [1, 0], output: [0] },
        { input: [1, 1], output: [1] }
      ], 3000, 0.002);
    });
    it('OR gate', function () {
      learnSet([
        { input: [0, 0], output: [0] },
        { input: [0, 1], output: [1] },
        { input: [1, 0], output: [1] },
        { input: [1, 1], output: [1] }
      ], 1000, 0.002);
    });
    it('SIN function', function () {
      this.timeout(30000);
      var set = [];

      while (set.length < 100) {
        var inputValue = Math.random() * Math.PI * 2;
        set.push({
          input: [inputValue / (Math.PI * 2)],
          output: [(Math.sin(inputValue) + 1) / 2]
        });
      }

      learnSet(set, 1000, 0.05);
    });
    it('Bigger than', function () {
      this.timeout(30000);
      var set = [];

      for (var i = 0; i < 100; i++) {
        var x = Math.random();
        var y = Math.random();
        var z = x > y ? 1 : 0;

        set.push({ input: [x, y], output: [z] });
      }

      learnSet(set, 500, 0.05);
    });
    it('LSTM XOR', function () {
      this.timeout(30000);
      var lstm = new architect.LSTM(1, 1, 1);

      lstm.train([
        { input: [0], output: [0] },
        { input: [1], output: [1] },
        { input: [1], output: [0] },
        { input: [0], output: [1] },
        { input: [0], output: [0] }
      ], {
        error: 0.001,
        iterations: 5000,
        rate: 0.3
      });

      lstm.activate([0]);

      function getActivation(sensors) {
        return lstm.activate(sensors)[0];
      }

      assert.isBelow(0.9, getActivation([1]), 'LSTM error');
      assert.isBelow(getActivation([1]), 0.1, 'LSTM error');
      assert.isBelow(0.9, getActivation([0]), 'LSTM error');
      assert.isBelow(getActivation([0]), 0.1, 'LSTM error');
    });
    it('GRU XOR', function () {
      this.timeout(30000);
      var gru = new architect.GRU(1, 2, 1);

      gru.train([
        { input: [0], output: [0] },
        { input: [1], output: [1] },
        { input: [1], output: [0] },
        { input: [0], output: [1] },
        { input: [0], output: [0] }
      ], {
        error: 0.001,
        iterations: 5000,
        rate: 0.1,
        clear: true
      });

      gru.activate([0]);

      function getActivation(sensors) {
        return gru.activate(sensors)[0];
      }

      assert.isBelow(0.9, getActivation([1]), 'GRU error');
      assert.isBelow(getActivation([1]), 0.1, 'GRU error');
      assert.isBelow(0.9, getActivation([0]), 'GRU error');
      assert.isBelow(getActivation([0]), 0.1, 'GRU error');
    });
    it('NARX Sequence', function () {
      var narx = new architect.NARX(1, 5, 1, 3, 3);

      // Train the XOR gate (in sequence!)
      var trainingData = [
        { input: [0], output: [0] },
        { input: [0], output: [0] },
        { input: [0], output: [1] },
        { input: [1], output: [0] },
        { input: [0], output: [0] },
        { input: [0], output: [0] },
        { input: [0], output: [1] }
      ];

      narx.train(trainingData, {
        iterations: 1000,
        error: 0.005,
        rate: 0.05
      });

      assert.isBelow(narx.test(trainingData).error, 0.005);
    });
    it('SIN + COS', function () {
      this.timeout(30000);
      var set = [];

      while (set.length < 100) {
        var inputValue = Math.random() * Math.PI * 2;
        set.push({
          input: [inputValue / (Math.PI * 2)],
          output: [
            (Math.sin(inputValue) + 1) / 2,
            (Math.cos(inputValue) + 1) / 2
          ]
        });
      }

      learnSet(set, 1000, 0.05);
    });
    it('SHIFT', function () {
      var set = [];

      for (var i = 0; i < 1000; i++) {
        var x = Math.random();
        var y = Math.random();
        var z = Math.random();

        set.push({ input: [x, y, z], output: [z, x, y] });
      }

      learnSet(set, 500, 0.03);
    });
  });
});
