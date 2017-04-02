/* Import */
var chai = require('chai');
var assert = chai.assert;
var neataptic = require('../src/neataptic.js');

/* Shorten var names */
var Connection = neataptic.Connection;
var Neat       = neataptic.Neat;
var Node       = neataptic.Node;
var Network    = neataptic.Network;
var Methods    = neataptic.Methods;

/* Functions used in the testing process */
function checkMutation(method){
  var network = new Network(2,2);

  // it should have a few extra nodes to begin with
  for(var i = 0; i < 3; i++){
    network.mutate(Methods.Mutation.ADD_NODE);
  }

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

  assert.notDeepEqual(originalOutput, mutatedOutput, method.name + " failed!");
}

/* Start tesing */
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

});
