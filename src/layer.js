// export
if (module) module.exports = Layer;

// import
var Neuron  = require('./neuron')
,   Network = require('./network')
,   methods = require('./methods')

var Mutate     = methods.Mutate
,   Squash     = methods.Squash
,   Crossover  = methods.Crossover
,   Selection  = methods.Selection
,   Generation = methods.Generation
,   Pooling    = methods.Pooling
,   Cost       = methods.Cost;

/*******************************************************************************************
                                            LAYER
*******************************************************************************************/

function Layer(size, label) {
  this.size = size | 0;
  this.list = [];
  this.label = label || null;
  this.connectedTo = [];

  while (size--) {
    var neuron = new Neuron();
    this.list.push(neuron);
  }
}

Layer.prototype = {

  // activates all the neurons in the layer
  activate: function(input) {

    var activations = [];

    if (typeof input != 'undefined') {
      if (input.length != this.size)
        throw new Error("INPUT size and LAYER size must be the same to activate!");

      for (var id in this.list) {
        var neuron = this.list[id];
        var activation = neuron.activate(input[id]);
        activations.push(activation);
      }
    } else {
      for (var id in this.list) {
        var neuron = this.list[id];
        var activation = neuron.activate();
        activations.push(activation);
      }
    }
    return activations;
  },

  // propagates the error on all the neurons of the layer
  propagate: function(rate, target) {

    if (typeof target != 'undefined') {
      if (target.length != this.size)
        throw new Error("TARGET size and LAYER size must be the same to propagate!");

      for (var id = this.list.length - 1; id >= 0; id--) {
        var neuron = this.list[id];
        neuron.propagate(rate, target[id]);
      }
    } else {
      for (var id = this.list.length - 1; id >= 0; id--) {
        var neuron = this.list[id];
        neuron.propagate(rate);
      }
    }
  },

  // projects a connection from this layer to another one
  project: function(layer, type, weights) {

    if (layer instanceof Network)
      layer = layer.layers.input;

    if (layer instanceof Layer) {
      if (!this.connected(layer))
        return new Layer.connection(this, layer, type, weights);
    } else
      throw new Error("Invalid argument, you can only project connections to LAYERS and NETWORKS!");


  },

  // gates a connection betwenn two layers
  gate: function(connection, type) {

    if (type == Layer.gateType.INPUT) {
      if (connection.to.size != this.size)
        throw new Error("GATER layer and CONNECTION.TO layer must be the same size in order to gate!");

      for (var id in connection.to.list) {
        var neuron = connection.to.list[id];
        var gater = this.list[id];
        for (var input in neuron.connections.inputs) {
          var gated = neuron.connections.inputs[input];
          if (gated.ID in connection.connections)
            gater.gate(gated);
        }
      }
    } else if (type == Layer.gateType.OUTPUT) {
      if (connection.from.size != this.size)
        throw new Error("GATER layer and CONNECTION.FROM layer must be the same size in order to gate!");

      for (var id in connection.from.list) {
        var neuron = connection.from.list[id];
        var gater = this.list[id];
        for (var projected in neuron.connections.projected) {
          var gated = neuron.connections.projected[projected];
          if (gated.ID in connection.connections)
            gater.gate(gated);
        }
      }
    } else if (type == Layer.gateType.ONE_TO_ONE) {
      if (connection.size != this.size)
        throw new Error("The number of GATER UNITS must be the same as the number of CONNECTIONS to gate!");

      for (var id in connection.list) {
        var gater = this.list[id];
        var gated = connection.list[id];
        gater.gate(gated);
      }
    }
    connection.gatedfrom.push({layer: this, type: type});
  },

  // true or false whether the whole layer is self-connected or not
  selfconnected: function() {

    for (var id in this.list) {
      var neuron = this.list[id];
      if (!neuron.selfconnected())
        return false;
    }
    return true;
  },

  // true of false whether the layer is connected to another layer (parameter) or not
  connected: function(layer) {
    // Check if ALL to ALL connection
    var connections = 0;
    for (var here in this.list) {
      var from = this.list[here];
      for (var there in layer.list) {
        var to = layer.list[there];
        var connected = from.connected(to);
        if (connected.type == 'projected')
          connections++;
      }
    }
    if (connections == this.size * layer.size)
      return Layer.connectionType.ALL_TO_ALL;

    // Check if ONE to ONE connection
    connections = 0;
    for (var neuron in this.list) {
      var from = this.list[neuron];
      var to = layer.list[neuron];
      var connected = from.connected(to);
      if (connected.type == 'projected')
        connections++;
    }
    if (connections == this.size)
      return Layer.connectionType.ONE_TO_ONE;
  },

  // clears all the neuorns in the layer
  clear: function() {
    for (var id in this.list) {
      var neuron = this.list[id];
      neuron.clear();
    }
  },

  // resets all the neurons in the layer
  reset: function() {
    for (var id in this.list) {
      var neuron = this.list[id];
      neuron.reset();
    }
  },

  // returns all the neurons in the layer (array)
  neurons: function() {
    return this.list;
  },

  // adds a neuron to the layer
  add: function(neuron) {
    this.neurons[neuron.ID] = neuron || new Neuron();
    this.list.push(neuron);
    this.size++;
  },

  set: function(options) {
    options = options || {};

    for (var i in this.list) {
      var neuron = this.list[i];
      if (options.label)
        neuron.label = options.label + '_' + neuron.ID;
      if (options.squash)
        Squash = options.squash;
      if (options.bias)
        neuron.bias = options.bias;
    }
    return this;
  },

  mutate: function(method){
    method = method || Mutate.MODIFY_RANDOM_WEIGHT;
    switch(method){
      case Mutate.SWAP_WEIGHT:
        var neuron1 = this.list[Math.floor(Math.random()*this.list.length)];
        var neuron2 = this.list[Math.floor(Math.random()*this.list.length)];

        var connectionType1 = ['gated', 'inputs', 'projected'];
        var connectionType2 = ['gated', 'inputs', 'projected'];

        for(var i = 2;i >= 0; i--){
          if(Object.keys(neuron1.connections[connectionType1[i]]).length == 0){
            connectionType1.splice(i, 1);
          }
          if(Object.keys(neuron2.connections[connectionType2[i]]).length == 0){
            connectionType2.splice(i, 1);
          }
        }

        connectionType1 = connectionType1[Math.floor(Math.random()*connectionType1.length)];
        var connectionKeys1 = Object.keys(neuron1.connections[connectionType1]);
        var connection1 = connectionKeys1[Math.floor(Math.random()*connectionKeys1.length)];

        connectionType2 = connectionType2[Math.floor(Math.random()*connectionType2.length)];
        var connectionKeys2 = Object.keys(neuron2.connections[connectionType2]);
        var connection2 = connectionKeys2[Math.floor(Math.random()*connectionKeys2.length)];

        var temp = neuron1.connections[connectionType1][connection1].weight;
        neuron1.connections[connectionType1][connection1].weight = neuron2.connections[connectionType2][connection2].weight;
        neuron2.connections[connectionType2][connection2].weight = temp;
        break;
      case Mutate.SWAP_BIAS:
        var neuron1 = Math.floor(Math.random()*this.list.length);
        var neuron2 = Math.floor(Math.random()*this.list.length);

        var temp = this.list[neuron1].bias;
        this.list[neuron1].bias = this.list[neuron2].bias;
        this.list[neuron2].bias = temp;
        break;
      case Mutate.MODIFY_RANDOM_BIAS:
        var neuron = Math.floor(Math.random()*this.list.length);
        var modification = Math.random() * (Mutate.MODIFY_RANDOM_BIAS.config.max - Mutate.MODIFY_RANDOM_BIAS.config.min) + Mutate.MODIFY_RANDOM_BIAS.config.min;
        this.list[neuron].bias += modification;
        break;
      case Mutate.MODIFY_RANDOM_WEIGHT:
        var neuron = this.list[Math.floor(Math.random()*this.list.length)];
        var connectionType = ['gated', 'inputs', 'projected'];

        for(var i = connectionType.length-1;i >= 0; i--){
          if(Object.keys(neuron.connections[connectionType[i]]).length == 0){
            connectionType.splice(i, 1);
          }
        }

        connectionType = connectionType[Math.floor(Math.random()*connectionType.length)];
        var connectionKeys = Object.keys(neuron.connections[connectionType]);
        var connection = connectionKeys[Math.floor(Math.random()*connectionKeys.length)];

        var modification = Math.random() * (Mutate.MODIFY_RANDOM_WEIGHT.config.max - Mutate.MODIFY_RANDOM_WEIGHT.config.min) + Mutate.MODIFY_RANDOM_WEIGHT.config.min;
        neuron.connections[connectionType][connection].weight += modification;
        break;
      case Mutate.MODIFY_SQUASH:
        var neuron = Math.floor(Math.random()*this.list.length);
        var squash = Math.floor(Math.random()*Mutate.MODIFY_SQUASH.config.allowed.length);
        this.list[neuron].squash = Mutate.MODIFY_SQUASH.config.allowed[squash];
    }
  },

  toJSON: function(){
    var list = this.list;
    var neurons = []
    // link id's to positions in the array
    var ids = {};
    for (var i in list) {
      var neuron = list[i];
      ids[neuron.ID] = i;
      var copy = neuron.toJSON();

      neurons.push(copy);
    }

    return {
      neurons: neurons
    }
  }
}

Layer.crossOver = function(layer1, layer2, method){
  method = method || Crossover.UNIFORM;
  var offspring = new Layer(layer1.list.length);

  switch(method){
    case Crossover.UNIFORM:
      for(var i = 0; i < offspring.list.length; i++){
        if(Math.random() >= 0.5){
          offspring.list[i].bias = layer1.list[i].bias;
          offspring.list[i].squash = layer1.list[i].squash;
        } else {
          offspring.list[i].bias = layer2.list[i].bias;
          offspring.list[i].squash = layer2.list[i].squash;
        }
      }
      break;
    case Crossover.AVERAGE:
      for(var i = 0; i < offspring.list.length; i++){
        var bias1 = layer1.list[i].bias;
        var bias2 = layer2.list[i].bias;

        offspring.list[i].bias = (bias1 + bias2) / 2;

        // Can't average squash...
        if(Math.random() >= 0.5){
          offspring.list[i].squash = layer1.list[i].squash;
        } else {
          offspring.list[i].squash = layer2.list[i].squash;
        }
      }
      break;
    case Crossover.SINGLE_POINT:
      for(var i = 0; i < offspring.list.length; i++){
        if(i/offspring.list.length < Crossover.SINGLE_POINT[0]){
          offspring.list[i].bias = layer1.list[i].bias;
          offspring.list[i].squash = layer1.list[i].squash;
        } else {
          offspring.list[i].bias = layer2.list[i].bias;
          offspring.list[i].squash = layer2.list[i].squash;
        }
      }
      break;
    case Crossover.TWO_POINT:
      for(var i = 0; i < offspring.list.length; i++){
        if(i/offspring.list.length < Crossover.SINGLE_POINT[0] || i/offspring.list.length > Crossover.SINGLE_POINT[1]){
          offspring.list[i].bias = layer1.list[i].bias;
          offspring.list[i].squash = layer1.list[i].squash;
        } else {
          offspring.list[i].bias = layer2.list[i].bias;
          offspring.list[i].squash = layer2.list[i].squash;
        }
      }
      break;
  }

  return offspring;
}

Layer.fromJSON = function(json){
  var neurons = [];
  for (var i in json.neurons) {
    var config = json.neurons[i];

    var neuron = new Neuron();
    neuron.trace.elegibility = {};
    neuron.trace.extended = {};
    neuron.state = config.state;
    neuron.old = config.old;
    neuron.activation = config.activation;
    neuron.bias = config.bias;
    Squash = config.squash in Squash ? Squash[config.squash] : Squash.LOGISTIC;
    neurons.push(neuron);
  }

  var layer = new Layer(neurons.length);
  layer.list = neurons;
  return layer;
}

// represents a connection from one layer to another, and keeps track of its weight and gain
Layer.connection = function LayerConnection(fromLayer, toLayer, type, weights) {
  this.ID = Layer.connection.uid();
  this.from = fromLayer;
  this.to = toLayer;
  this.selfconnection = toLayer == fromLayer;
  this.type = type;
  this.connections = {};
  this.list = [];
  this.size = 0;
  this.gatedfrom = [];

  if (typeof this.type == 'undefined')
  {
    if (fromLayer == toLayer)
      this.type = Layer.connectionType.ONE_TO_ONE;
    else
      this.type = Layer.connectionType.ALL_TO_ALL;
  }

  if (this.type == Layer.connectionType.ALL_TO_ALL ||
      this.type == Layer.connectionType.ALL_TO_ELSE) {
    for (var here in this.from.list) {
      for (var there in this.to.list) {
        var from = this.from.list[here];
        var to = this.to.list[there];
        if(this.type == Layer.connectionType.ALL_TO_ELSE && from == to)
          continue;
        var connection = from.project(to, weights);

        this.connections[connection.ID] = connection;
        this.size = this.list.push(connection);
      }
    }
  } else if (this.type == Layer.connectionType.ONE_TO_ONE) {

    for (var neuron in this.from.list) {
      var from = this.from.list[neuron];
      var to = this.to.list[neuron];
      var connection = from.project(to, weights);

      this.connections[connection.ID] = connection;
      this.size = this.list.push(connection);
    }
  }

  fromLayer.connectedTo.push(this);
}

// types of connections
Layer.connectionType = {};
Layer.connectionType.ALL_TO_ALL = "ALL TO ALL";
Layer.connectionType.ONE_TO_ONE = "ONE TO ONE";
Layer.connectionType.ALL_TO_ELSE = "ALL TO ELSE";

// types of gates
Layer.gateType = {};
Layer.gateType.INPUT = "INPUT";
Layer.gateType.OUTPUT = "OUTPUT";
Layer.gateType.ONE_TO_ONE = "ONE TO ONE";

(function() {
  var connections = 0;
  Layer.connection.uid = function() {
    return connections++;
  }
})();
