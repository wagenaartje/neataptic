/* Import */
var Activation = require('./activation');

/*******************************************************************************************
                                      MUTATION
*******************************************************************************************/

//https://en.wikipedia.org/wiki/Mutation_(genetic_algorithm)
var Mutation = {
  ADD_NODE : {
    name : "ADD_NODE"
  },
  SUB_NODE : {
    name : "REMOVE_NODE"
  },
  ADD_CONN : {
    name : "ADD_CONNECTION"
  },
  SUB_CONN : {
    name : "REMOVE_CONN"
  },
  MOD_WEIGHT : {
    name: "MOD_WEIGHT",
    config: {
      min: -1,
      max: 1
    }
  },
  MOD_BIAS : {
    name: "MOD_BIAS",
    config: {
      min: -1,
      max: 1
    }
  },
  MOD_ACTIVATION : {
    name : "MOD_ACTIVATION",
    config : {
      allowed : [
        Activation.LOGISTIC,
        Activation.TANH,
        Activation.RELU,
        Activation.IDENTITY,
        Activation.HLIM,
        Activation.SOFTSIGN,
        Activation.SINUSOID,
        Activation.GAUSSIAN,
        Activation.SOFTPLUS,
        Activation.BENT_IDENTITY
      ]
    }
  },
  config : {
    warnings: false,
  }
};

/* Export */
if (module) module.exports = Mutation;
