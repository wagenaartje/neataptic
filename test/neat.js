/* Import */
var chai = require('chai');
var assert = chai.assert;

/* Shorten var names */
var { Network, methods, config } = neataptic;

/* Turn off warnings */
config.warnings = false;

/*******************************************************************************************
                      Tests the effectiveness of evolution
*******************************************************************************************/

describe('Neat', function () {
  it('AND', async function () {
    this.timeout(40000);

    // Train the AND gate
    var trainingSet = [
      { input: [0, 0], output: [0] },
      { input: [0, 1], output: [0] },
      { input: [1, 0], output: [0] },
      { input: [1, 1], output: [1] }
    ];

    var network = new Network(2, 1);
    var results = await network.evolve(trainingSet, {
      mutation: methods.mutation.FFW,
      equal: true,
      elitism: 10,
      mutationRate: 0.5,
      error: 0.03,
      threads: 1
    });

    assert.isBelow(results.error, 0.03);
  });
  it('XOR', async function () {
    this.timeout(40000);
    // Train the XOR gate
    var trainingSet = [
      { input: [0, 0], output: [0] },
      { input: [0, 1], output: [1] },
      { input: [1, 0], output: [1] },
      { input: [1, 1], output: [0] }
    ];

    var network = new Network(2, 1);
    var results = await network.evolve(trainingSet, {
      mutation: methods.mutation.FFW,
      equal: true,
      elitism: 10,
      mutationRate: 0.5,
      error: 0.03,
      threads: 1
    });

    assert.isBelow(results.error, 0.03);
  });
  it('XNOR', async function () {
    this.timeout(60000);

    // Train the XNOR gate
    var trainingSet = [
      { input: [0, 0], output: [1] },
      { input: [0, 1], output: [0] },
      { input: [1, 0], output: [0] },
      { input: [1, 1], output: [1] }
    ];

    var network = new Network(2, 1);
    var results = await network.evolve(trainingSet, {
      mutation: methods.mutation.FFW,
      equal: true,
      elitism: 10,
      mutationRate: 0.5,
      error: 0.03,
      threads: 1
    });

    assert.isBelow(results.error, 0.03);
  });
});
