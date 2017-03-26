/* Import */
var Squash   = require('./squash')

/*******************************************************************************************
                                      MUTATION
*******************************************************************************************/

//https://en.wikipedia.org/wiki/Mutation_(genetic_algorithm)
var Mutate = {
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
    name: "MODIFY_CONNECTIONS",
    config: {
      memory: false // should it add memory connections? for BRAIN only now
    }
  },
  MODIFY_NEURONS: {
    name: "MODIFY_NEURONS"
  },
  MODIFY_SQUASH: {
    name: "MODIFY_SQUASH",
    config: {
      allowed: [ // which squash methods are allowed (due to normalization)
        Squash.LOGISTIC,
        Squash.TANH,
        Squash.RELU,
        Squash.IDENTITY,
        Squash.HLIM,
        Squash.SOFTSIGN,
        Squash.SINUSOID,
        Squash.GAUSSIAN
      ]
    }
  },
  MODIFY_NODES: {
    name: "MODIFY_NODES",
    config : {
      network : {
        size: [3,10],
        hidden: [1,3]
      },
      layer: {
        size: [2,5]
      }
    }
  }
};

Mutate.MUTATE_NODES = {
  name: "MODIFY_NODES",
  config: {
    allowed: [
      Mutate.SWAP_WEIGHT,
      Mutate.SWAP_BIAS,
      Mutate.MODIFY_RANDOM_SQUASH,
      Mutate.MODIFY_RANDOM_BIAS,
      Mutate.MODIFY_CONNECTIONS,
      Mutate.MODIFY_NEURONS,
      Mutate.MODIFY_SQUASH
    ]
  }
}

/* Export */
if (module) module.exports = Mutate;
