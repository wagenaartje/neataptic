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
  options = options || {};
  this.equal          = options.equal          || false;
  this.popsize        = options.popsize        || 50;
  this.elitism        = options.elitism        || 0;
  this.mutationRate   = options.mutationRate   || 0.3;
  this.mutationAmount = options.mutationAmount || 1;

  this.selection      = options.selection ||  Methods.Selection.POWER;
  this.crossover      = options.crossover || [Methods.Crossover.SINGLE_POINT,
                                              Methods.Crossover.TWO_POINT,
                                              Methods.Crossover.UNIFORM,
                                              Methods.Crossover.AVERAGE];
  this.mutation       = options.mutation  ||  Methods.Mutation.FFW;

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
      copy.score = null;
      this.population.push(copy);
    }
  },

  /**
   * Evaluates, selects, breeds and mutates population
   */
  evolve: function(){
    // Check if evaluated, sort the population
    if(this.population[this.population.length-1].score == null){
      this.evaluate();
    }
    this.sort();

    var newPopulation = [];

    // Elitism
    for(var i = 0; i < this.elitism; i++){
      newPopulation.push(this.population[i]);
    }

    // Breed the next individuals
    for(var i = 0; i < this.popsize - this.elitism; i++){
      newPopulation.push(this.getOffspring());
    }

    // Replace the old population with the new population
    this.population = newPopulation;
    this.mutate();

    // Reset the scores
    for(var i = 0; i < this.population.length; i++){
      this.population[i].score = null;
    }

    this.generation++;
  },

  /**
   * Breeds two parents into an offspring, population MUST be surted
   */
   getOffspring: function(){
     var parent1 = this.getParent();
     var parent2 = this.getParent();

     if(this.equal == true){
       parent1.score = 0;
       parent2.score = 0;
     }

     //var crossoverMethod = this.crossover[Math.floor(Math.random()*this.crossover.length)];
     return Network.crossOver(parent1, parent2);
   },

  /**
   * Mutates the given (or current) population
   */
  mutate: function(){
    for(genome in this.population){
      if(Math.random() <= this.mutationRate){
        for(var i = 0; i < this.mutationAmount; i++){
          var mutationMethod = this.mutation[Math.floor(Math.random() * this.mutation.length)];
          this.population[genome].mutate(mutationMethod);
        }
      }
    }
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
    if(this.population[this.population.length-1].score == null){
      this.evaluate();
    }

    this.sort();
    return this.population[0];
  },

  /**
   * Returns the average fitness of the current population
   */
   getAverage: function(){
     if(this.population[this.population.length-1].score == null){
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
    switch(this.selection){
      case Selection.POWER:
        if(this.population[0].score < this.population[1].score) this.sort();

        var index = Math.floor(Math.pow(Math.random(), this.selection.power) * this.popsize);
        return this.population[index];
        break;
      case Selection.FITNESS_PROPORTIONATE:
        // As negative fitnesses are possible
        // https://stackoverflow.com/questions/16186686/genetic-algorithm-handling-negative-fitness-values
        // this is unnecessarily run for every individual, should be changed

        var totalFitness = 0;
        var minimalFitness = 0;
        for(var genome in this.population){
          var score = this.population[genome].score;
          minimalFitness = score < minimalFitness ? score : minimalFitness;
          totalFitness += score
        }

        minimalFitness = Math.abs(minimalFitness);
        totalFitness += minimalFitness * this.popsize;

        var random = Math.random() * totalFitness;
        var value = 0;

        for(var genome in this.population){
          genome = this.population[genome];
          value += genome.score + minimalFitness;
          if(random < value) return genome;
        }

        // if all scores equal, return random genome
        return this.population[Math.floor(Math.random() * this.population.length)];
        break;
      case Selection.TOURNAMENT:
        if(this.selection.size > this.popsize){
          throw new Error('Your tournament size should be lower than the population size, please change Methods.Selection.TOURNAMENT.size');
        }

        // Create a tournament
        var individuals = [];
        for(var i = 0; i < this.selection.size; i++){
          var random = this.population[Math.floor(Math.random() * this.population.length)];
          individuals.push(random);
        }

        // Sort the tournament individuals by score
        individuals.sort(function(a,b){
          return b.score - a.score;
        });

        // Select an individual
        for(var i = 0; i < this.selection.size; i++){
          if(Math.random() < this.selection.probability || i == this.selection.size - 1){
            return individuals[i];

          }
        }
    }
  },

  /**
   * Export the current population to a json object
   */
  export: function(){
    var json = [];
    for(var genome in this.population){
      genome = this.population[genome];
      json.push(genome.toJSON());
    }

    return json;
  },

  /**
   * Import population from a json object
   */
  import: function(json){
    var population = [];
    for(var genome in json){
      genome = json[genome];
      population.push(Network.fromJSON(genome));
    }
    this.population = population;
    this.popsize = population.length;
  }
};
