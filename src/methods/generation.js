/* Import */
var Cost   = require('./cost')

/*******************************************************************************************
                                        METHODS
*******************************************************************************************/

// https://en.wikipedia.org/wiki/Genetic_algorithm#Initialization
var Generation = {
  POINTS: {
    name: "POINTS",
    config: {
      points: 2,
      learningRate : 0.3,
      iterations: 50,
      shuffle: true,
      error: 0.0001,
      cost: Cost.MSE
    }
  },
  DEFAULT: {
    name: "DEFAULT"
  }
};

/* Export */
if (module) module.exports = Generation;
