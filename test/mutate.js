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

/* Mutation testing */
/* FIXES TO BE DONE: It's assuming every output should be different, which is not the case */
/* Some mutation functions don't guarantee change, which SHOULD be the case */
function testMutateMethod(method, type){
  var original = new Architect.Perceptron(2,3,3,3);
  var mutated = Network.fromJSON(original.toJSON());

  original.setOptimize(false);
  mutated.setOptimize(false);

  if(type == "Network"){
    mutated.mutate(method);
  } else if(type == "Layer"){
    mutated.layers.hidden[0].mutate(method);
  } else if(type == "Neuron"){
    mutated.layers.hidden[0].list[0].mutate(method);
  }

  var originalOutput = [];
  var mutatedOutput  = [];
  for(var i = 0; i <= 10; i++){
    for(var j = 0; j <= 10; j++){
      originalOutput.push(original.activate([i/10, j/10]));
      mutatedOutput.push(mutated.activate([i/10, j/10]));
    }
  }

  assert.notDeepEqual(originalOutput, mutatedOutput);
}

describe('Mutate', function () {
  it("Mutate.MODIFY_RANDOM_BIAS", function () {
    testMutateMethod(Methods.Mutate.MODIFY_RANDOM_BIAS, "Network"); ////
    testMutateMethod(Methods.Mutate.MODIFY_RANDOM_BIAS, "Layer");
    testMutateMethod(Methods.Mutate.MODIFY_RANDOM_BIAS, "Neuron");
  });
  it("Mutate.MODIFY_RANDOM_WEIGHT", function () {
    testMutateMethod(Methods.Mutate.MODIFY_RANDOM_WEIGHT, "Network");
    testMutateMethod(Methods.Mutate.MODIFY_RANDOM_WEIGHT, "Layer");
    testMutateMethod(Methods.Mutate.MODIFY_RANDOM_WEIGHT, "Neuron");
  });
  it("Mutate.SWAP_WEIGHT", function () {
    testMutateMethod(Methods.Mutate.SWAP_WEIGHT, "Network");
    testMutateMethod(Methods.Mutate.SWAP_WEIGHT, "Layer");
    testMutateMethod(Methods.Mutate.SWAP_WEIGHT, "Neuron");
  });
  it("Mutate.SWAP_BIAS", function () {
    testMutateMethod(Methods.Mutate.SWAP_BIAS, "Network"); ///
    testMutateMethod(Methods.Mutate.SWAP_BIAS, "Layer");
  });
  it("Mutate.MODIFY_NEURONS", function () {
    testMutateMethod(Methods.Mutate.MODIFY_NEURONS, "Network");
  });
  it("Mutate.MODIFY_CONNECTIONS", function () {
    testMutateMethod(Methods.Mutate.MODIFY_CONNECTIONS, "Network");
  });
  it("Mutate.MODIFY_SQUASH", function () {
    testMutateMethod(Methods.Mutate.MODIFY_SQUASH, "Network");
    testMutateMethod(Methods.Mutate.MODIFY_SQUASH, "Layer");
    testMutateMethod(Methods.Mutate.MODIFY_SQUASH, "Neuron");
  });
});
