/* Import */
var chai = require('chai');
var assert = chai.assert;

/* Shorten var names */
var Connection = neataptic.Connection;
var Architect  = neataptic.Architect;
var Trainer    = neataptic.Trainer;
var Neat       = neataptic.Neat;
var Node       = neataptic.Node;
var Network    = neataptic.Network;
var Methods    = neataptic.Methods;
var Config     = neataptic.Config;

/* Turn off warnings */
Config.warnings = false;

/*******************************************************************************************
                      Tests the effectiveness of evolution
*******************************************************************************************/

describe('Neat', function () {
  it("AND", function(){
    this.timeout(40000);

    // Train the AND gate
    var trainingSet = [
       { input: [0,0], output: [0] },
       { input: [0,1], output: [0] },
       { input: [1,0], output: [0] },
       { input: [1,1], output: [1] }
    ];

    var network = new Network(2,1);
    var results = network.evolve(trainingSet, {
      mutation: Methods.Mutation.FFW,
      equal: true,
      popSize: 100,
      elitism: 10,
      mutationRate: 0.5,
      error: 0.004
    });

    // Get average and check if it's enough
    var test = results.evolved.test(trainingSet);
    assert.isBelow(test.error, 0.005);
  });
  it("XOR", function(){
    this.timeout(40000);

    // Train the XOR gate
    var trainingSet = [
       { input: [0,0], output: [0] },
       { input: [0,1], output: [1] },
       { input: [1,0], output: [1] },
       { input: [1,1], output: [0] }
    ];

    var network = new Network(2,1);
    var results = network.evolve(trainingSet, {
      mutation: Methods.Mutation.FFW,
      equal: true,
      popSize: 100,
      elitism: 10,
      mutationRate: 0.5,
      error: 0.003
    });

    // Get average and check if it's enough
    var test = results.evolved.test(trainingSet);
    assert.isBelow(test.error, 0.005);
  });
  it("XNOR", function(){
    this.timeout(60000);

      // Train the XNOR gate
      var trainingSet = [
         { input: [0,0], output: [1] },
         { input: [0,1], output: [0] },
         { input: [1,0], output: [0] },
         { input: [1,1], output: [1] }
      ];

      var network = new Network(2,1);
      var results = network.evolve(trainingSet, {
        mutation: Methods.Mutation.FFW,
        equal: true,
        popSize: 100,
        elitism: 10,
        mutationRate: 0.5,
        error: 0.004
      });

      // Get average and check if it's enough
      var test = results.evolved.test(trainingSet);
      assert.isBelow(test.error, 0.005);
  });
});
