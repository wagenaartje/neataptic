/* Import */
var chai = require('chai');
var assert = chai.assert;
var neataptic = require('../src/neataptic.js');

/* Shorten var names */
var Connection = neataptic.Connection;
var Architect  = neataptic.Architect;
var Trainer    = neataptic.Trainer;
var Neat       = neataptic.Neat;
var Node       = neataptic.Node;
var Network    = neataptic.Network;
var Methods    = neataptic.Methods;

/* Functions used in the testing process */
function checkMutation(method){
  var network = new Architect.Perceptron(2, 4, 4, 4, 2);

  var originalOutput = [];
  for(var i = 0; i <= 10; i++){
    for(var j = 0; j <= 10; j++){
      originalOutput.push(network.activate([i/10, j/10]));
    }
  }

  network.mutate(method);

  var mutatedOutput = [];

  for(var i = 0; i <= 10; i++){
    for(var j = 0; j <= 10; j++){
      mutatedOutput.push(network.activate([i/10, j/10]));
    }
  }

  assert.notDeepEqual(originalOutput, mutatedOutput, "Output of original network should be different from the mutated network!");
}

function learnSet(set, iterations, error){
  var network = new Architect.Perceptron(set[0].input.length, 5, set[0].output.length);
  var trainer = new Trainer(network);

  var options = {
    iterations: iterations,
    error: .001,
    shuffle: true
  };

  var results = trainer.train(set, options);

  assert.isBelow(results.error, error);
}

/*******************************************************************************************
                          Test the performance of networks
*******************************************************************************************/

describe('Networks', function () {
  describe("Mutation", function(){
    it("ADD_NODE", function(){
      checkMutation(Methods.Mutation.ADD_NODE);
    });
    it("ADD_CONNECTION", function(){
      checkMutation(Methods.Mutation.ADD_CONN);
    });
    it("MOD_BIAS", function(){
      checkMutation(Methods.Mutation.MOD_BIAS);
    });
    it("MOD_WEIGHT", function(){
      checkMutation(Methods.Mutation.MOD_WEIGHT);
    });
    it("SUB_CONN", function(){
      checkMutation(Methods.Mutation.SUB_CONN);
    });
    it("SUB_NODE", function(){
      checkMutation(Methods.Mutation.SUB_NODE);
    });
  });
  describe("Structure", function(){
    it("Feed-forward", function(){
      var network1 = new Network(2,2);
      var network2 = new Network(2,2);

      // mutate it a couple of times
      for(var i = 0; i < 100; i++){
        network1.mutate(Methods.Mutation.ADD_NODE);
        network2.mutate(Methods.Mutation.ADD_NODE);
      }
      for(var i = 0; i < 400; i++){
        network1.mutate(Methods.Mutation.ADD_CONN);
        network2.mutate(Methods.Mutation.ADD_NODE);
      }

      // Crossover
      var network = Network.crossOver(network1, network2);

      // Check if the network is feed-forward correctly
      for(conn in network.connections){
        var from = network.nodes.indexOf(network.connections[conn].from);
        var to = network.nodes.indexOf(network.connections[conn].to);

        // Exception will be made for memory connections soon
        assert.isBelow(from, to, "network is not feeding forward correctly");
      }
    });
  });
  describe('Learning capability', function () {
    it("AND gate", function(){
      learnSet([{
        input: [0, 0],
        output: [0]
      }, {
        input: [0, 1],
        output: [0]
      }, {
        input: [1, 0],
        output: [0]
      }, {
        input: [1, 1],
        output: [1]
      }], 1000, 0.002);
    });
    it("XOR gate", function(){
      learnSet([{
        input: [0, 0],
        output: [0]
      }, {
        input: [0, 1],
        output: [1]
      }, {
        input: [1, 0],
        output: [1]
      }, {
        input: [1, 1],
        output: [0]
      }], 2000, 0.002);
    });
    it("NOT gate", function(){
      learnSet([{
        input: [0],
        output: [1]
      }, {
        input: [1],
        output: [0]
      }], 1000, 0.002);
    });
    it("XNOR gate", function(){
      learnSet([{
        input: [0, 0],
        output: [1]
      }, {
        input: [0, 1],
        output: [0]
      }, {
        input: [1, 0],
        output: [0]
      }, {
        input: [1, 1],
        output: [1]
      }], 2000, 0.002);
    });
    it("OR gate", function(){
      learnSet([{
        input: [0, 0],
        output: [0]
      }, {
        input: [0, 1],
        output: [1]
      }, {
        input: [1, 0],
        output: [1]
      }, {
        input: [1, 1],
        output: [1]
      }], 1000, 0.002);
    });
    it("SIN function", function(){
      this.timeout(30000);
      var mySin = function (x) {
        return (Math.sin(x) + 1) / 2;
      };

      var set = [];

      while (set.length < 100) {
        var inputValue = Math.random() * Math.PI * 2;
        set.push({
          input: [inputValue],
          output: [mySin(inputValue)]
        });
      }

      learnSet(set, 1000, 0.05);
    });
    it("Bigger than", function(){
      this.timeout(30000);
      var set = [];

      for(var i = 0; i < 100; i++){
        var x = Math.random();
        var y = Math.random();
        var z = x > y ? 1 : 0;

        set.push({ input: [x,y], output: [z] });
      }

      learnSet(set, 500, 0.05);
    });
  });
});
