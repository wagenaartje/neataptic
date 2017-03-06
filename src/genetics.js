/*******************************************************************************************
                                        GENETICS
*******************************************************************************************/

Mutate = {
  SWAP_WEIGHT: {
    name: "SWAP_WEIGHT"
  },
  SWAP_BIAS: {
    name: "SWAP_BIAS"
  },
  MODIFY_RANDOM_WEIGHT: {
    name: "MODIFY_RANDOM_WEIGHT"
  },
  MODIFY_RANDOM_BIAS: {
    name: "MODIFY_RANDOM_BIAS"
  }
};

// For now, parents for crossover should be the same size!
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

Selection = {
  FITNESS_PROPORTIONATE: {
    name: "FITNESS_PROPORTIONATE",
    config: function(r){ return Math.pow(r,2); }
  }
};

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
