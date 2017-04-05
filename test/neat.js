/* Import */
var chai = require('chai');
var assert = chai.assert;
var neataptic = require('../src/neataptic.js');

/* Shorten var names */
var Connection = neataptic.Connection;
var Architect  = neataptic.Architect;
var Trainer    = neataptic.Trainer;
var Neat       = neataptic.Neat;
var Node       = neataptic.Node;
var Network    = neataptic.Network;
var Methods    = neataptic.Methods;

/*******************************************************************************************
                      Tests the effectiveness of evolution
*******************************************************************************************/

describe('Neat', function () {
  it("AND", function(){
    this.timeout(40000);

    // Construct the neat instance
    var neat = new Neat(2, 1, fitnessFunction, {
      mutation: [
        Methods.Mutation.ADD_NODE,
        Methods.Mutation.ADD_CONN,
        Methods.Mutation.MOD_WEIGHT,
        Methods.Mutation.MOD_BIAS,
        Methods.Mutation.SUB_NODE
      ],
      mutationRate: 0.3,
      equal: true
    });

    // Evolve the population
    for(var i = 0; i < 200; i++){
      neat.evolve();
    }

    // Get average and check if it's enough
    var average = neat.getAverage();
    assert.isAbove(average, -1500);

    // Fitness function
    function fitnessFunction(genome){
      var score = 0;

      // XOR distance
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
      mutation: [
        Methods.Mutation.ADD_NODE,
        Methods.Mutation.ADD_CONN,
        Methods.Mutation.MOD_WEIGHT,
        Methods.Mutation.MOD_BIAS,
        Methods.Mutation.SUB_NODE
      ],
      mutationRate: 0.3,
      equal: true
    });

    // Evolve the population
    for(var i = 0; i < 200; i++){
      neat.evolve();
    }

    // Get average and check if it's enough
    var average = neat.getAverage();
    assert.isAbove(average, -1500);

    // Fitness functionmocah
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
      mutation: [
        Methods.Mutation.ADD_NODE,
        Methods.Mutation.ADD_CONN,
        Methods.Mutation.MOD_WEIGHT,
        Methods.Mutation.MOD_BIAS,
        Methods.Mutation.SUB_NODE
      ],
      mutationRate: 0.3,
      equal: true
    });

    // Evolve the population
    for(var i = 0; i < 200; i++){
      neat.evolve();
    }

    // Get average and check if it's enough
    var average = neat.getAverage();
    assert.isAbove(average, -2500);

    // Fitness function
    function fitnessFunction(genome){
      var score = 0;

      // XOR distance
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
