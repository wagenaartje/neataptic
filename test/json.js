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

/* JSON testing */
describe('JSON equivalency', function () {
  it("Networks", function () {
    var network = new Architect.Perceptron(2,4,5,2);
    var copyNetwork  = Network.fromJSON(network.toJSON());

    for(var i = 0; i <= 10; i++){
      for(var j = 0; j <= 10; j++){
        assert.deepEqual(network.activate([i/10, j/10]), copyNetwork.activate([i/10, j/10]), "Networks don't have identical output");
      }
    }
  });
  it("Layers", function () {
    var inputLayer  = new Layer(2);
    var hiddenLayer = new Layer(3);
    var outputLayer = new Layer(1);

    inputLayer.project(hiddenLayer, Methods.Connection.ALL_TO_ALL, 1);
    hiddenLayer.project(outputLayer, Methods.Connection.ALL_TO_ALL, 1);

    var copyInputLayer  = Layer.fromJSON(inputLayer.toJSON());
    var copyHiddenLayer = Layer.fromJSON(hiddenLayer.toJSON());
    var copyOutputLayer = Layer.fromJSON(outputLayer.toJSON());

    copyInputLayer.project(copyHiddenLayer, Methods.Connection.ALL_TO_ALL, 1);
    copyHiddenLayer.project(copyOutputLayer, Methods.Connection.ALL_TO_ALL, 1);

    var network = new Network({
      input: inputLayer,
      hidden: [hiddenLayer],
      output: outputLayer
    });

    var copyNetwork = new Network({
      input: copyInputLayer,
      hidden: [copyHiddenLayer],
      output: copyOutputLayer
    });

    for(var i = 0; i <= 10; i++){
      for(var j = 0; j <= 10; j++){
        assert.deepEqual(network.activate([i/10, j/10]), copyNetwork.activate([i/10, j/10]), "Layers don't have identical output");
      }
    }
  });
  it("Neurons", function () {
    var neuron = new Neuron();
    var copyNeuron = Neuron.fromJSON(neuron.toJSON());


    var hiddenLayer = new Layer(0);
    var copyHiddenLayer = new Layer(0);

    var inputLayer = new Layer(2);
    var outputLayer = new Layer(4);

    for(var i = 0; i < 3; i++){
      hiddenLayer.list.push(neuron);
      copyHiddenLayer.list.push(copyNeuron);
    }

    var network = new Network({
      input: inputLayer,
      hidden: [hiddenLayer],
      output: outputLayer
    });

    var copyNetwork = new Network({
      input: inputLayer,
      hidden: [copyHiddenLayer],
      output: outputLayer
    });

    for(var i = 0; i <= 10; i++){
      for(var j = 0; j <= 10; j++){
        assert.deepEqual(network.activate([i/10, j/10]), copyNetwork.activate([i/10, j/10]), "Neurons don't have identical output");
      }
    }
  });
});
