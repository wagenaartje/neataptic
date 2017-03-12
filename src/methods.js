//import
var Trainer = require('./trainer')

/*******************************************************************************************
                                        SETTINGS
*******************************************************************************************/


var methods = {};

methods.Cost = {
  CROSS_ENTROPY: function(target, output)
  {
    var crossentropy = 0;
    for (var i in output)
      crossentropy -= (target[i] * Math.log(output[i]+1e-15)) + ((1-target[i]) * Math.log((1+1e-15)-output[i])); // +1e-15 is a tiny push away to avoid Math.log(0)
    return crossentropy;
  },
  MSE: function(target, output)
  {
    var mse = 0;
    for (var i in output)
      mse += Math.pow(target[i] - output[i], 2);
    return mse / output.length;
  },
  BINARY: function(target, output){
    var misses = 0;
    for (var i in output)
      misses += Math.round(target[i] * 2) != Math.round(output[i] * 2);
    return misses;
  }
}

methods.Squash = {
  LOGISTIC : function(x, derivate) {
    if (!derivate)
      return 1 / (1 + Math.exp(-x));
    var fx = methods.Squash.LOGISTIC(x);
    return fx * (1 - fx);
  },
  TANH : function(x, derivate) {
    if (derivate)
      return 1 - Math.pow(methods.Squash.TANH(x), 2);
    return Math.tanh(x);
  },
  IDENTITY : function(x, derivate) {
    return derivate ? 1 : x;
  },
  HLIM : function(x, derivate) {
    return derivate ? 1 : x > 0 ? 1 : 0;
  },
  RELU : function(x, derivate) {
    if (derivate)
      return x > 0 ? 1 : 0;
    return x > 0 ? x : 0;
  },
  SOFTSIGN : function(x, derivate){
    var d = 1 + Math.abs(x);
    if(derivate)
      return x / Math.pow(d, 2);
    return x / d;
  },
  SINUSOID : function(x, derivate){
    if(derivate)
      return Math.cos(x);
    return Math.sin(x);
  },
  GAUSSIAN : function(x, derivate){
    var d = Math.exp(-Math.pow(x, 2));
    if(derivate)
      return -2 * x * d;
    return d;
  }
}

/*
  Mutation methods
*/
methods.Mutate = {
  SWAP_WEIGHT: {
    name: "SWAP_WEIGHT"
  },
  SWAP_BIAS: {
    name: "SWAP_BIAS"
  },
  MODIFY_RANDOM_WEIGHT: {
    name: "MODIFY_RANDOM_WEIGHT",
    config: {
      min: -1,
      max: 1
    }
  },
  MODIFY_RANDOM_BIAS: {
    name: "MODIFY_RANDOM_BIAS",
    config: {
      min: -1,
      max: 1
    }
  },
  MODIFY_CONNECTIONS: {
    name: "MODIFY_CONNECTIONS"
  },
  MODIFY_NEURONS: {
    name: "MODIFY_NEURONS"
  },
  MODIFY_SQUASH: {
    name: "MODIFY_SQUASH",
    config: {
      allowed: [
        methods.Squash.LOGISTIC,
        methods.Squash.TANH,
        methods.Squash.RELU,
        methods.Squash.IDENTITY,
        methods.Squash.HLIM,
        methods.Squash.SOFTSIGN,
        methods.Squash.SINUSOID,
        methods.Squash.GAUSSIAN
      ]
    }
  }
},

/*
  Crossover methods
  For now, parents for crossover should be the same size!
*/
methods.Crossover =  {
  SINGLE_POINT: {
    name: "SINGLE_POINT",
    config: [0.4]
  },
  TWO_POINT: {
    name: "TWO_POINT",
    config: [0.4, 0.9]
  },
  UNIFORM: {
    name: "UNIFORM"
  },
  AVERAGE: {
    name: "AVERAGE"
  }
},

/*
  Selection methods
*/
methods.Selection = {
  FITNESS_PROPORTIONATE: {
    name: "FITNESS_PROPORTIONATE",
    config: function(r){ return Math.pow(r,2); }
  }
},

/*
  Generation methods
*/
methods.Generation = {
  POINTS: {
    name: "POINTS",
    config: {
      points: 2,
      learningRate : 0.3,
      iterations: 50,
      shuffle: true,
      error: 0.0001,
      cost: methods.Cost.MSE
    }
  },
  DEFAULT: {
    name: "DEFAULT"
  }
},

/*
  Pooling methods
*/
methods.Pooling = {
  config: {
    size: [2,2]
  },
  MAX: {
    name: "MAX",
  },
  NONE: {
    name: "NONE"
  }
}

// export
if (module) module.exports = methods;
