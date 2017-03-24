/* Import */
var chai = require('chai');
chai.use(require('chai-stats'));
var assert = chai.assert;
var gynaptic = require('../src/gynaptic.js');

/* Shorten var names */
var Trainer   = gynaptic.Trainer;
var Neuron    = gynaptic.Neuron;
var Layer     = gynaptic.Layer;
var Network   = gynaptic.Network;
var Methods   = gynaptic.Methods;
var Architect = gynaptic.Architect;
var Evolution = gynaptic.Evolution;
var Brain     = gynaptic.Brain;

/* Mutation testing */
function testMutateMethod(method, type){
  var network = new Architect.Perceptron(2,4,2);
  network.setOptimize(false);
  var layer = new Layer(2);
  var neuron = new Neuron();

  var brain = new Brain({
    input: 2,
    hidden: [network, layer, neuron],
    output: 3,
    ratio: 5
  });

  var originalOutput = [];
  for(var i = 0; i <= 10; i++){
    for(var j = 0; j <= 10; j++){
      originalOutput.push(brain.activate([i/10, j/10]));
    }
  }

  if(type == "Brain"){
    brain.mutate(method);
  } else if(type == "Network"){
    brain.nodes[2].mutate(method);
  } else if(type == "Layer"){
    brain.nodes[3].mutate(method);
  } else if(type == "Neuron"){
    brain.nodes[4].mutate(method);
  }

  var mutatedOutput = [];

  for(var i = 0; i <= 10; i++){
    for(var j = 0; j <= 10; j++){
      mutatedOutput.push(brain.activate([i/10, j/10]));
    }
  }

  assert.notDeepEqual(originalOutput, mutatedOutput, type + "s shouldn't be equal!");
}

describe('Mutate', function () {
  describe("Mutate.MODIFY_RANDOM_BIAS", function () {
    it("Network", function(){
      testMutateMethod(Methods.Mutate.MODIFY_RANDOM_BIAS, "Network");
    });
    it("Layer", function(){
      testMutateMethod(Methods.Mutate.MODIFY_RANDOM_BIAS, "Layer");
    });
    it("Neuron", function(){
      testMutateMethod(Methods.Mutate.MODIFY_RANDOM_BIAS, "Neuron");
    });
  });
  describe("Mutate.MODIFY_RANDOM_WEIGHT", function () {
    it("Network", function(){
      testMutateMethod(Methods.Mutate.MODIFY_RANDOM_WEIGHT, "Network");
    });
    it("Layer", function(){
      testMutateMethod(Methods.Mutate.MODIFY_RANDOM_WEIGHT, "Layer");
    });
    it("Neuron", function(){
      testMutateMethod(Methods.Mutate.MODIFY_RANDOM_WEIGHT, "Neuron");
    });
  });
  describe("Mutate.SWAP_WEIGHT", function () {
    it("Brain", function(){
      testMutateMethod(Methods.Mutate.SWAP_WEIGHT, "Brain");
    });
    it("Network", function(){
      testMutateMethod(Methods.Mutate.SWAP_WEIGHT, "Network");
    });
    it("Layer", function(){
      testMutateMethod(Methods.Mutate.SWAP_WEIGHT, "Layer");
    });
    it("Neuron", function(){
      testMutateMethod(Methods.Mutate.SWAP_WEIGHT, "Neuron");
    });
  });
  describe("Mutate.SWAP_BIAS", function () {
    it("Network", function(){
      testMutateMethod(Methods.Mutate.SWAP_BIAS, "Network");
    });
    it("Layer", function(){
      testMutateMethod(Methods.Mutate.SWAP_BIAS, "Layer");
    });
  });
  describe("Mutate.MODIFY_NEURONS", function () {
    it("Network", function(){
      testMutateMethod(Methods.Mutate.MODIFY_NEURONS, "Network");
    });
  });
  describe("Mutate.MODIFY_CONNECTIONS", function () {
    it("Network", function(){
      testMutateMethod(Methods.Mutate.MODIFY_CONNECTIONS, "Network");
    });
  });
  describe("Mutate.MODIFY_SQUASH", function () {
    it("Network", function(){
      testMutateMethod(Methods.Mutate.MODIFY_SQUASH, "Network");
    });
    it("Layer", function(){
      testMutateMethod(Methods.Mutate.MODIFY_SQUASH, "Layer");
    });
    it("Neuron", function(){
      testMutateMethod(Methods.Mutate.MODIFY_SQUASH, "Neuron");
    });
  });
  describe("Mutate.MODIFY_NODES", function(){
    it("Brain", function(){
      testMutateMethod(Methods.Mutate.MODIFY_NODES, "Brain");
    });
  });
});
