/*******************************************************************************************
                                        SETTINGS
*******************************************************************************************/

/*
  Mutation methods
*/
Mutate = {
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
        Neuron.squash.LOGISTIC,
        Neuron.squash.TANH,
        Neuron.squash.RELU,
        Neuron.squash.IDENTITY,
        Neuron.squash.HLIM,
        Neuron.squash.SOFTSIGN,
        Neuron.squash.SINUSOID,
        Neuron.squash.GAUSSIAN
      ]
    }
  }
};

/*
  Crossover methods
  For now, parents for crossover should be the same size!
*/
Crossover = {
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
};

/*
  Selection methods
*/
Selection = {
  FITNESS_PROPORTIONATE: {
    name: "FITNESS_PROPORTIONATE",
    config: function(r){ return Math.pow(r,2); }
  }
};

/*
  Generation methods
*/
Generation = {
  POINTS: {
    name: "POINTS",
    config: {
      points: 2,
      learningRate : 0.3,
      iterations: 50,
      shuffle: true,
      error: 0.0001,
      cost: Trainer.cost.MSE
    }
  },
  DEFAULT: {
    name: "DEFAULT"
  }
};

/*
  Pooling methods
*/
Pooling = {
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
