description: Documentation of the Neuro-evolution of Augmenting Topologies technique in Neataptic
authors: Thomas Wagenaar
keywords: neuro-evolution, NEAT, genetic=algorithm

The built-in NEAT class allows you create evolutionary algorithms with just a few lines of code. If you want to evolve neural networks to conform a given dataset, check out [this](https://github.com/wagenaartje/neataptic/wiki/Network#functions) page. The following code is from the [Agario-AI](https://github.com/wagenaartje/agario-ai) built with Neataptic.

```javascript
/** Construct the genetic algorithm */
function initNeat(){
  neat = new Neat(
    1 + PLAYER_DETECTION * 3 + FOOD_DETECTION * 2,
    2,
    null,
    {
      mutation: methods.mutation.ALL
      popsize: PLAYER_AMOUNT,
      mutationRate: MUTATION_RATE,
      elitism: Math.round(ELITISM_PERCENT * PLAYER_AMOUNT),
      network: new architect.Random(
        1 + PLAYER_DETECTION * 3 + FOOD_DETECTION * 2,
        START_HIDDEN_SIZE,
        2
      )
    }
  );

  if(USE_TRAINED_POP) neat.population = population;
}

/** Start the evaluation of the current generation */
function startEvaluation(){
  players = [];
  highestScore = 0;

  for(var genome in neat.population){
    genome = neat.population[genome];
    new Player(genome);
  }
}

/** End the evaluation of the current generation */
function endEvaluation(){
  console.log('Generation:', neat.generation, '- average score:', neat.getAverage());

  neat.sort();
  var newPopulation = [];

  // Elitism
  for(var i = 0; i < neat.elitism; i++){
    newPopulation.push(neat.population[i]);
  }

  // Breed the next individuals
  for(var i = 0; i < neat.popsize - neat.elitism; i++){
    newPopulation.push(neat.getOffspring());
  }

  // Replace the old population with the new population
  neat.population = newPopulation;
  neat.mutate();

  neat.generation++;
  startEvaluation();
}
```

You might also want to check out the [target-seeking project](https://github.com/wagenaartje/target-seeking-ai) built with Neataptic.

## Options
The constructor comes with various options. The constructor works as follows:

```javascript
new Neat(input, output, fitnessFunction, options); // options should be an object
```

Every generation, each genome will be tested on the `fitnessFunction`. The
fitness function should return a score (a number). Through evolution, the
genomes will try to _maximize_ the output of the fitness function.

Negative scores are allowed.

You can provide the following options in an object for the `options` argument:

<details>
  <summary>popsize</summary>
   Sets the population size of each generation. Default is 50.
</details>

<details>
  <summary>elitism</summary>
   Sets the <a href="https://www.researchgate.net/post/What_is_meant_by_the_term_Elitism_in_the_Genetic_Algorithm">elitism</a> of every evolution loop. Default is 0.
</details>

<details>
  <summary>provenance</summary>
   Sets the provenance of the genetic algorithm. Provenance means that during every evolution, the given amount of genomes will be inserted which all have the original
   network template (which is <code>Network(input,output)</code> when no <code>network</code> option is given). Default is 0.
</details>

<details>
  <summary>mutation</summary>
Sets the allowed <a href="https://wagenaartje.github.io/neataptic/docs/methods/mutation/">mutation methods</a> used in the evolutionary process. Must be an array (e.g. <code>[methods.mutation.ADD_NODE, methods.mutation.SUB_NODE]</code>). Default mutation methods are all non-recurrent mutation methods. A random mutation method will be chosen from the array when mutation occrus.
</details>

<details>
  <summary>selection</summary>
Sets the allowed <a href="https://wagenaartje.github.io/neataptic/docs/methods/selection/">selection method</a> used in the evolutionary process. Must be a single method (e.g. <code>Selection.FITNESS_PROPORTIONATE</code>). Default is <code>FITNESS_PROPORTIONATE</code>.
</details>

<details>
  <summary>crossover</summary>
Sets the allowed crossover methods used in the evolutionary process. Must be an array. <b>disabled as of now</b>
</details>

<details>
  <summary>fitnessPopulation</summary>
  If set to <code>true</code>, you will have to specify a fitness function that
  takes an array of genomes as input and sets their <code>.score</code> property.
</details>

<details>
  <summary>mutationRate</summary>
Sets the mutation rate. If set to <code>0.3</code>, 30% of the new population will be mutated. Default is <code>0.3</code>.
</details>

<details>
  <summary>mutationAmount</summary>
If mutation occurs (<code>randomNumber < mutationRate</code>), sets the amount of times a mutation method will be applied to the network. Default is <code>1</code>.
</details>

<details>
  <summary>network</summary>
If you want to start the algorithm from a specific network, specify your network here.
</details>

<details>
  <summary>equal</summary>
If set to true, all networks will be viewed equal during crossover. This stimulates more diverse network architectures. Default is <code>false</code>.
</details>

<details>
  <summary>clear</summary>
Clears the context of the network before activating the fitness function. Should be applied to get consistent outputs from recurrent networks. Default is <code>false</code>.
</details>

## Properties
There are only a few properties

<details>
  <summary>input</summary>
   The amount of input neurons each genome has
</details>

<details>
  <summary>output</summary>
   The amount of output neurons each genome has
</details>

<details>
  <summary>fitness</summary>
   The fitness function that is used to evaluate genomes
</details>

<details>
  <summary>generation</summary>
   Generation counter
</details>

<details>
  <summary>population</summary>
   An array containing all the genomes of the current generation
</details>

## Functions
There are a few built-in functions. For the client, only `getFittest()` and `evolve()` is important. In the future, there will be a combination of backpropagation and evolution. Stay tuned

<details>
  <summary>createPool()</summary>
   Initialises the first set of genomes. Should not be called manually.
</details>

<details>
  <summary><i>async</i> evolve()</summary>
   Loops the generation through a evaluation, selection, crossover and mutation process.
</details>

<details>
  <summary><i>async</i> evaluate()</summary>
   Evaluates the entire population by passing on the genome to the fitness function and taking the score.
</details>

<details>
  <summary>sort()</summary>
   Sorts the entire population by score. Should be called after <code>evaluate()</code>
</details>

<details>
  <summary>getFittest()</summary>
   Returns the fittest genome (highest score) of the current generation
</details>

<details>
  <summary>mutate()</summary>
   Mutates genomes in the population, each genome has <code>mutationRate</code> chance of being mutated.
</details>

<details>
  <summary>getOffspring()</summary>
   This function selects two genomes from the population with <code>getParent()</code>, and returns the offspring from those parents.
</details>

<details>
  <summary>getAverage()</summary>
   Returns the average fitness of the current population
</details>

<details>
  <summary>getParent()</summary>
   Returns a parent selected using one of the selection methods provided. Should be called after evaluation. Should not be called manually.
</details>

<details>
  <summary>export()</summary>
   Exports the current population of the set up algorithm to a list containing json objects of the networks. Can be used later with <code>import(json)</code> to reload the population
</details>

<details>
  <summary>import(json)</summary>
   Imports population from a json. Must be an array of networks that have converted to json (with <code>myNetwork.toJSON()</code>)
</details>
