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
    name : "SUB_NODE",
    keep_gates: true
  },
  ADD_CONN : {
    name : "ADD_CONN"
  },
  SUB_CONN : {
    name : "REMOVE_CONN"
  },
  MOD_WEIGHT : {
    name: "MOD_WEIGHT",
    min: -1,
    max: 1
  },
  MOD_BIAS : {
    name: "MOD_BIAS",
    min: -1,
    max: 1
  },
  MOD_ACTIVATION : {
    name : "MOD_ACTIVATION",
    mutateOutput: true,
    allowed : [
      Activation.LOGISTIC,
      Activation.TANH,
      Activation.RELU,
      Activation.IDENTITY,
      Activation.STEP,
      Activation.SOFTSIGN,
      Activation.SINUSOID,
      Activation.GAUSSIAN,
      Activation.BENT_IDENTITY,
      Activation.BIPOLAR,
      Activation.BIPOLAR_SIGMOID,
      Activation.HARD_TANH,
      Activation.ABSOLUTE
    ]
  },
  ADD_SELF_CONN : {
    name: "ADD_SELF_CONN"
  },
  SUB_SELF_CONN : {
    name: "SUB_SELF_CONN"
  },
  ADD_GATE : {
    name: "ADD_GATE"
  },
  SUB_GATE : {
    name: "SUB_GATE"
  },
  ADD_BACK_CONN : {
    name: "ADD_BACK_CONN"
  },
  SUB_BACK_CONN : {
    name: "SUB_BACK_CONN"
  },
  SWAP_NODES : {
    name: "SWAP_NODES"
  }
};

/* Export */
if (module) module.exports = Mutation;
