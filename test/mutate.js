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
describe('Mutate', function () {
  it("Mutate.MODIFY_RANDOM_WEIGHT", function () {
    // NETWORKS
    var network = new Architect.Perceptron(2,4,2);
    var mutatedNetwork = Network.fromJSON(network.toJSON());
    network.setOptimize(false);
    mutatedNetwork.setOptimize(false);

    // Multiple times, while sometimes it modifies input BIAS (will be fixed later)
    for(var i = 0; i < 10; i++){
      mutatedNetwork.mutate(Methods.Mutate.MODIFY_RANDOM_BIAS);
    }

    for(var i = 0; i <= 10; i++){
      for(var j = 0; j <= 10; j++){
        assert.notDeepEqual(network.activate([i/10, j/10]), mutatedNetwork.activate([i/10, j/10]), "Mutated network is the same as original network");
      }
    }

    // LAYERS
    network = mutatedNetwork;
    mutatedNetwork = Network.fromJSON(network.toJSON());
    mutatedNetwork.setOptimize(false);

    mutatedNetwork.layers.hidden[0].mutate(Methods.Mutate.MODIFY_RANDOM_BIAS);

    for(var i = 0; i <= 10; i++){
      for(var j = 0; j <= 10; j++){
        assert.notDeepEqual(network.activate([i/10, j/10]), mutatedNetwork.activate([i/10, j/10]), "Mutated layer is the same as original layer");
      }
    }

    // Neurons
    network = mutatedNetwork;
    mutatedNetwork = Network.fromJSON(network.toJSON());
    mutatedNetwork.setOptimize(false);

    mutatedNetwork.layers.hidden[0].list[0].mutate(Methods.Mutate.MODIFY_RANDOM_BIAS);

    for(var i = 0; i <= 10; i++){
      for(var j = 0; j <= 10; j++){
        assert.notDeepEqual(network.activate([i/10, j/10]), mutatedNetwork.activate([i/10, j/10]), "Mutated neuron is the same as original neuron");
      }
    }
  });
});
