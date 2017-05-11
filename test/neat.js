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

    // Construct the neat instance
    var neat = new Neat(2, 1, fitnessFunction, {
      mutationRate: 0.3
    });

    // Evolve the population
    for(var i = 0; i < 500; i++){
      if(neat.getAverage() > -2000) break;
      neat.evolve();
    }

    // Get average and check if it's enough
    var average = neat.getAverage();
    assert.isAbove(average, -2000);

    // Fitness function
    function fitnessFunction(genome){
      var score = 0;

      // AND distance
      score -= Methods.Cost.MSE([0], genome.activate([0, 0])) * 5000;
      score -= Methods.Cost.MSE([0], genome.activate([0, 1])) * 5000;
      score -= Methods.Cost.MSE([0], genome.activate([1, 0])) * 5000;
      score -= Methods.Cost.MSE([1], genome.activate([1, 1])) * 5000;

      // Size reduction
      if(score <= -5000){
        score -= Math.abs(6 - genome.nodes.length) * 1;
        score -= Math.abs(5 - genome.connections.length) * 1;
      }

      return Math.round(score);
    }
  });
  it("XOR", function(){
    this.timeout(40000);

    // Construct the neat instance
    var neat = new Neat(2, 1, fitnessFunction, {
      mutationRate: 0.3
    });

    // Evolve the population
    for(var i = 0; i < 500; i++){
      if(neat.getAverage() > -2000) break;
      neat.evolve();
    }

    // Get average and check if it's enough
    var average = neat.getAverage();
    assert.isAbove(average, -2000);

    // Fitness function
    function fitnessFunction(genome){
      var score = 0;

      // XOR distance
      score -= Methods.Cost.MSE([0], genome.activate([0, 0])) * 5000;
      score -= Methods.Cost.MSE([1], genome.activate([0, 1])) * 5000;
      score -= Methods.Cost.MSE([1], genome.activate([1, 0])) * 5000;
      score -= Methods.Cost.MSE([0], genome.activate([1, 1])) * 5000;

      // Size reduction
      if(score <= -5000){
        score -= Math.abs(6 - genome.nodes.length) * 1;
        score -= Math.abs(5 - genome.connections.length) * 1;
      }

      return score;
    }
  });
  it("XNOR", function(){
    this.timeout(60000);

    // Construct the neat instance
    var neat = new Neat(2, 1, fitnessFunction, {
      mutationRate: 0.4,
      mutation: [
        Methods.Mutation.ADD_NODE,
        Methods.Mutation.ADD_CONN,
        Methods.Mutation.MOD_WEIGHT,
        Methods.Mutation.MOD_BIAS,
        Methods.Mutation.MOD_ACTIVATION
      ]
    });

    // Evolve the population
    for(var i = 0; i < 500; i++){
      if(neat.getAverage() > -3000) break;
      neat.evolve();
    }

    // Get average and check if it's enough
    var average = neat.getAverage();
    assert.isAbove(average, -3000);

    // Fitness function
    function fitnessFunction(genome){
      var score = 0;

      // XNOR distance
      score -= Methods.Cost.MSE([1], genome.activate([0, 0])) * 5000;
      score -= Methods.Cost.MSE([0], genome.activate([0, 1])) * 5000;
      score -= Methods.Cost.MSE([0], genome.activate([1, 0])) * 5000;
      score -= Methods.Cost.MSE([1], genome.activate([1, 1])) * 5000;

      // Size reduction
      if(score <= -5000){
        score -= Math.abs(6 - genome.nodes.length) * 1;
        score -= Math.abs(5 - genome.connections.length) * 1;
      }

      return Math.round(score);
    }
  });
});
