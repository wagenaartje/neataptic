/* Export */
if (module) module.exports = Evolution;

/* Import */
var Layer   = require('./layer')
,   Network = require('./network')
,   Trainer = require('./trainer')
,   methods = require('./methods');

/* Shorten var names */
var Mutate     = methods.Mutate
,   Squash     = methods.Squash
,   Crossover  = methods.Crossover
,   Selection  = methods.Selection
,   Generation = methods.Generation
,   Pooling    = methods.Pooling
,   Cost       = methods.Cost
,   Connection = methods.Connection;

/*******************************************************************************************
                                        EVOLUTION
*******************************************************************************************/

/**
 * Creates the genetic algorithm based on options
 */
function Evolution(options){
  options = options || {};
  this.size = options.size || 50;
  this.mutationRate = options.mutationRate || 0.05;
  this.generationMethod = options.generationMethod || [Generation.POINTS];
  this.mutationMethod = options.mutationMethod || [Mutate.MODIFY_RANDOM_WEIGHT, Mutate.MODIFY_RANDOM_BIAS];
  this.crossOverMethod = options.crossOverMethod || [Crossover.UNIFORM];
  this.selectionMethod = options.selectionMethod || [Selection.FITNESS_PROPORTIONATE];
  this.fitnessFunction = options.fitnessFunction;
  this.networkSize = options.networkSize || [1, 4, 1];
  this.elitism = options.elitism || Math.round(this.size/20);

  this.population = [];
  this.createPool();

  this.newPopulation = [];
  this.parentSelection = [];
  this.scores = [];

  this.generation = 0;
}

Evolution.prototype = {
  /**
   * Creates the initial set of genomes
   */
  createPool: function(){
    for(var i = 0; i < this.size; i++){
      var network = this.createNetwork();
      this.population.push(network);
    }
  },

  /**
   * Creates and modifies a network based on Generation.METHOD
   */
  createNetwork: function(){
    var inputLayer = new Layer(this.networkSize[0]);
    var outputLayer = new Layer(this.networkSize[this.networkSize.length-1]);
    var hiddenLayers = [];

    for(var j = 0; j < this.networkSize.length - 2; j++){
      hiddenLayers.push(new Layer(this.networkSize[j+1]));
      if(j > 0){
        hiddenLayers[j-1].project(hiddenLayers[j]);
      }
    }

    inputLayer.project(hiddenLayers[0]);
    hiddenLayers[hiddenLayers.length-1].project(outputLayer);

    var network = new Network({
      input: inputLayer,
      hidden: hiddenLayers,
      output: outputLayer
    });

    var generationMethod = this.generationMethod[Math.floor(Math.random() * this.generationMethod.length)];
    switch(generationMethod){
      case(Generation.DEFAULT):
        break;
      case(Generation.POINTS):
        var trainer = new Trainer(network);
        var trainingSet = []
        for(var i = 0; i < Generation.POINTS.config.points; i++){
          var randomInput = [];
          var randomOutput = [];

          for(var i = 0; i < inputLayer.size; i++){
            randomInput.push(Math.random());
          }
          for(var i = 0; i < outputLayer.size; i++){
            randomOutput.push(Math.random());
          }

          trainingSet.push({input: randomInput, output: randomOutput});
        }

        trainer.train(trainingSet, {
          rate: Generation.POINTS.config.rate,
          error: Generation.POINTS.config.error,
          iterations: Generation.POINTS.config.iterations,
          shuffle: Generation.POINTS.config.shuffle,
          cost: Generation.POINTS.config.cost,
        });
    }

    return network;
  },

  /**
   * Evaluates the population and assigns each genome a score
   */
  evaluate: function(){
    for(var i in this.population){
      var score = this.fitnessFunction(this.population[i]);
      this.scores.push(score);
    }
  },

  /**
   * Selects genomes from the population based on their score
   */
  select: function(){
    var sortedIndex = this.getSortedIndex();

    for(var i = 0; i < this.elitism; i++){
      this.newPopulation.push(this.population[sortedIndex[i]]);
    }

    for(var i = 0; i < (this.size - this.elitism) * 2; i++){
      var parent = this.getParent(sortedIndex);
      this.parentSelection.push(parent);
    }
  },

  /**
   * Breeds new genomes from the selected genomes of the previous generation
   */
  crossOver: function(){
    for(var i = 0; i < this.parentSelection.length; i+=2 ){
      var crossOverMethod = this.crossOverMethod[Math.floor(Math.random()*this.crossOverMethod.length)];
      var offspring = Network.crossOver(
        this.parentSelection[i],
        this.parentSelection[i+1],
        crossOverMethod
      );
      this.newPopulation.push(offspring);
    }
  },

  /**
   * Mutates the new population
   */
  mutate: function(){
    for(var i = 0; i < this.newPopulation.length; i++){
      if(Math.random() < this.mutationRate){
        var mutateMethod = this.mutationMethod[Math.floor(Math.random() * this.mutationMethod.length)];
        this.newPopulation[i].mutate(mutateMethod);
      }
    }
  },

  /**
   * Replaces the old generation with the new generation
   */
  replace: function(){
    this.population = this.newPopulation;
    this.newPopulation = [];

    this.parentSelection = [];
    this.scores = [];

    this.generation ++;
  },

  /**
   * Gets a genome based on the selection function
   * @param {Array} sortedIndex
   * @return {Number} genome
   */
  getParent: function(sortedIndex){
    var selectionMethod = this.selectionMethod[Math.floor(Math.random() * this.selectionMethod.length)];
    switch(selectionMethod){
      case Selection.FITNESS_PROPORTIONATE:
        var r = Math.floor(Selection.FITNESS_PROPORTIONATE.config(Math.random()) * this.size);
        return this.population[sortedIndex[r]];
        break;
    }
  },

  /**
   * Returns a list of sorted population indices based on score
   */
  getSortedIndex: function(){
    // Makes an array with indices of scores from highest -> lowest values
    var copyScores = this.scores.slice();
    var sortedIndex = [];

    for(var i = 0; i < copyScores.length; i++){
      var indexHighest = copyScores.indexOf(Math.max.apply(Math, copyScores));
      copyScores[indexHighest] = -Infinity;
      sortedIndex.push(indexHighest);
    }
    return sortedIndex;
  },

  /**
   * Returns the average fitness of the population
   */
  getAverage: function(){
    var sum = this.scores.reduce(function(a, b) { return a + b; });
    return sum / this.scores.length;
  },

  /**
   * Returns the highest scoring genome of the current population
   */
   getFittestGenome: function(){
     var sortedIndex = this.getSortedIndex();
     return this.population[sortedIndex[0]];
   },

   /**
    * Exports the population to an array
    */
    exportPool: function(){
      var file = [];
      for(var i in this.population){
        file.push(this.population[i].toJSON());
      }
      return file;
    },

    /**
     * Imports the population from an array
     */
     importPool: function(file){
       this.size = file.length;
       this.population = [];

       for(var i in file){
         var genome = Network.fromJSON(file[i]);
         this.population.push(genome)
       }
     }
}
