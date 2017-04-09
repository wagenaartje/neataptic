/* Export */
if (module) module.exports = Neat;

/* Import */
var Node = require('./node');
var Network = require('./network');
var Methods = require('./methods/methods');

/* Easier variable naming */
var Activation = Methods.Activation;
var Mutation   = Methods.Mutation;
var Selection  = Methods.Selection;
var Crossover  = Methods.Crossover;

/*******************************************************************************************
                                         NEAT
*******************************************************************************************/

function Neat(input, output, fitness, options){
  this.input   = input;   // The input size of the networks
  this.output  = output;  // The output size of the networks
  this.fitness = fitness; // The fitness function to evaluate the networks

  // Configure options
  this.equal        = options.equal        || false;
  this.popsize      = options.popsize      || 50;
  this.elitism      = options.elitism      || 0;
  this.mutation     = options.mutation     || [Mutation.ADD_NODE, Mutation.ADD_CONN];
  this.selection    = options.selection    || [Selection.FITNESS_PROPORTIONATE];
  this.crossover    = options.crossover    || [Crossover.UNIFORM];
  this.mutationRate = options.mutationRate || 0.3;
  this.mutationAmount = options.mutationAmount || 1;

  // Generation counter
  this.generation = 0;

  // Initialise the genomes
  this.createPool(options.network || new Network(this.input, this.output));
}

Neat.prototype = {
  /**
   * Create the initial pool of genomes
   */
  createPool: function(network){
    this.population = [];

    for(var i = 0; i < this.popsize; i++){
      var copy = Network.fromJSON(network.toJSON());
      this.population.push(copy);
    }
  },

  /**
   * Evaluates, selects, breeds and mutates population
   */
  evolve: function(){
    // Evaluate the population
    this.evaluate();
    this.sort();

    var newPopulation = [];

    // Elitism
    for(var i = 0; i < this.elitism; i++){
      newPopulation.push(this.population[i]);
    }

    // Breed the next individuals
    for(var i = 0; i < this.popsize - this.elitism; i++){
      var parent1 = this.getParent();
      var parent2 = this.getParent();

      if(this.equal == true){
        parent1.score = 0;
        parent2.score = 0;
      }
      var crossoverMethod = this.crossover[Math.floor(Math.random()*this.crossover.length)];
      var offspring = Network.crossOver(parent1, parent2, crossoverMethod);
      newPopulation.push(offspring);
    }

    // Mutate the new population
    for(genome in newPopulation){
      if(Math.random() <= this.mutationRate){
        for(var i = 0; i < this.mutationAmount; i++){
          var mutationMethod = this.mutation[Math.floor(Math.random() * this.mutation.length)];
          newPopulation[genome].mutate(mutationMethod);
        }
      }
    }

    // Replace the old population with the new population
    this.population = newPopulation;
    this.generation++;
  },

  /**
   * Evaluates the current population
   */
  evaluate: function(){
    for(genome in this.population){
      var score = this.fitness(this.population[genome]);
      this.population[genome].score = score;
    }
  },

  /**
   * Sorts the population by score
   */
  sort: function(){
    this.population.sort(function(a,b){
      return b.score - a.score;
    });
  },

  /**
   * Returns the fittest genome of the current population
   */
  getFittest: function(){
    // Check if evaluated
    if(typeof this.population[this.population.length-1].score == 'undefined'){
      this.evaluate();
    }

    this.sort();
    return this.population[0];
  },

  /**
   * Returns the average fitness of the current population
   */
   getAverage: function(){
     if(typeof this.population[this.population.length-1].score == 'undefined'){
       this.evaluate();
     }

     var score = 0;
     for(genome in this.population){
       score += this.population[genome].score;
     }

     return score / this.popsize;
   },

  /**
   * Gets a genome based on the selection function
   * @return {Network} genome
   */
  getParent: function(){
    var selectionMethod = this.selection[Math.floor(Math.random() * this.selection.length)];
    switch(selectionMethod){
      case Selection.FITNESS_PROPORTIONATE:
        var r = Math.floor(Selection.FITNESS_PROPORTIONATE.config(Math.random()) * this.popsize);
        return this.population[r];
        break;
    }
  },
};
