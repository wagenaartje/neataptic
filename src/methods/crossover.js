/*******************************************************************************
                                      CROSSOVER
*******************************************************************************/

// https://en.wikipedia.org/wiki/Crossover_(genetic_algorithm)
var crossover = {
  SINGLE_POINT: {
    name: 'SINGLE_POINT',
    config: [0.4]
  },
  TWO_POINT: {
    name: 'TWO_POINT',
    config: [0.4, 0.9]
  },
  UNIFORM: {
    name: 'UNIFORM'
  },
  AVERAGE: {
    name: 'AVERAGE'
  }
};

/* Export */
module.exports = crossover;
