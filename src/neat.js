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
  this.clear          = options.clear          || false;
  this.popsize        = options.popsize        || 50;
  this.elitism        = options.elitism        || 0;
  this.provenance     = options.provenance     || 0;
  this.mutationRate   = options.mutationRate   || 0.3;
  this.mutationAmount = options.mutationAmount || 1;

  this.selection      = options.selection ||  Methods.Selection.POWER;
  this.crossover      = options.crossover || [Methods.Crossover.SINGLE_POINT,
                                              Methods.Crossover.TWO_POINT,
                                              Methods.Crossover.UNIFORM,
                                              Methods.Crossover.AVERAGE];
  this.mutation       = options.mutation  ||  Methods.Mutation.FFW;
  this.template       = options.network   || new Network(this.input, this.output)

  // Generation counter
  this.generation = 0;

  // Initialise the genomes
  this.createPool(this.template);
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
    var elitists = [];
    for(var i = 0; i < this.elitism; i++){
      elitists.push(this.population[i]);
    }

    // Provenance
    for(var i = 0; i < this.provenance; i++){
      newPopulation.push(Network.fromJSON(this.template.toJSON()))
    }

    // Breed the next individuals
    for(var i = 0; i < this.popsize - this.elitism - this.provenance; i++){
      newPopulation.push(this.getOffspring());
    }

    // Replace the old population with the new population
    this.population = newPopulation;
    this.mutate();

    for(var i = 0; i < elitists.length; i++){
      this.population.push(elitists[i]);
    }

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

     return Network.crossOver(parent1, parent2, this.equal);
   },

  /**
   * Mutates the given (or current) population
   */
  mutate: function(){
    // Elitist genomes should not be included
    for(var i = 0; i < this.population.length; i++){
      if(Math.random() <= this.mutationRate){
        for(var j = 0; j < this.mutationAmount; j++){
          var mutationMethod = this.mutation[Math.floor(Math.random() * this.mutation.length)];
          this.population[i].mutate(mutationMethod);
        }
      }
    }
  },

  /**
   * Evaluates the current population
   */
  evaluate: function(){
    for(var i = 0; i < this.population.length; i++){
      var genome = this.population[i];
      if(this.clear) genome.clear();
      var score = this.fitness(genome);
      this.population[i].score = score;
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
     for(var i = 0; i < this.population.length; i++){
       score += this.population[i].score;
     }

     return score / this.population.length;
   },

  /**
   * Gets a genome based on the selection function
   * @return {Network} genome
   */
  getParent: function(){
    switch(this.selection){
      case Selection.POWER:
        if(this.population[0].score < this.population[1].score) this.sort();

        var index = Math.floor(Math.pow(Math.random(), this.selection.power) * this.population.length);
        return this.population[index];
        break;
      case Selection.FITNESS_PROPORTIONATE:
        // As negative fitnesses are possible
        // https://stackoverflow.com/questions/16186686/genetic-algorithm-handling-negative-fitness-values
        // this is unnecessarily run for every individual, should be changed

        var totalFitness = 0;
        var minimalFitness = 0;
        for(var i = 0; i < this.population.length; i++){
          var score = this.population[i].score;
          minimalFitness = score < minimalFitness ? score : minimalFitness;
          totalFitness += score
        }

        minimalFitness = Math.abs(minimalFitness);
        totalFitness += minimalFitness * this.population.length;

        var random = Math.random() * totalFitness;
        var value = 0;

        for(var i = 0; i < this.population.length; i++){
          var genome = this.population[i];
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
    for(var i = 0; i < this.population.length; i++){
      var genome = this.population[i];
      json.push(genome.toJSON());
    }

    return json;
  },

  /**
   * Import population from a json object
   */
  import: function(json){
    var population = [];
    for(var i = 0; i < json.length; i++){
      var genome = json[i];
      population.push(Network.fromJSON(genome));
    }
    this.population = population;
    this.popsize = population.length;
  }
};
