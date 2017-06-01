description: How to evolve neural networks to play Agar.io with Neataptic
authors: Thomas Wagenaar
keywords: neuro-evolution, agar.io, Neataptic, AI

Agar.io is quite a simple game to play... well, for humans it is. However is it just as simple for artificial agents? In this article I will tell you how I have constructed a genetic algorithm that evolves neural networks to play in an Agario.io-like environment. The following simulation shows agents that resulted from 1000+ generations of running the algorithm:

<div id="field" height="500px"></div>

_Hover your mouse over a blob to see some more info! Source code [here](https://github.com/wagenaartje/agario-ai)_

As you might have noticed, the genomes are performing quite well, but far from perfect. The genomes shows human-like traits: searching food, avoiding bigger blobs and chasing smaller blobs. However sometimes one genome just runs into a bigger blob for no reason at all. That is because each genome **can only see 3 other blobs and 3 food blobs**. But above all, the settings of the GA are far from optimized. That is why I invite you to optimize the settings, and perform a pull request on this repo.

### The making of
The code consists of 3 main parts: the field, the player and the genetic algorithm. In the following few paragraphs i'll go into depth on this topics, discussing my choices made. At the bottom of this article you will find a list of improvements I have thought of, but not made yet.

If you have any questions about the code in the linked repo, please create an issue on [this](https://github.com/wagenaartje/neataptic) repo.

#### The field
The field consists of 2 different objects: food and players. Food is stationary, and has no 'brain'. Every piece of food has a static feeding value. Once food has been eaten, it just moves to a new location on the field. Players on the other hand are capable of making decisions through neural networks. They slowly decay in size when not replenished (either by eating other players or food).

The field has no borders; when a blob hits the left wall, it will 'teleport' to the right wall. During tests with a bordered field, the entire population of genomes tended to stick to one of the walls without ever evolving to a more flexible population. However, having borderless walls comes with a problem of which a fix has not yet been implemented: genomes that are for example near the left wall, won't detect blobs that are close to the right wall - even though the distance between the blobs can be very small.

**Some (configurable) settings**:

* There is one food blob per ~2500 pixels
* There is one player per ~12500 pixels

#### The player
The player is a simplified version of the player in the real game. A genome can't split and shoot - it can only move. The output of each genomes brain consists of merely a movement direction and movement speed.

Genomes can't accelerate, they immediately adapt to the speed given by their brain. They can only eat other blobs when they are 10% bigger, and they can move freely through other blobs that are less than 10% bigger. Each genome will only see the 3 closest players and the 3 closest food blobs within a certain radius.

**Some (configurable) settings**:

* A player must be 10% bigger than a blob to eat it
* The minimal area of a player is 400 pixels
* The maximal area of a player is 10000 pixels
* The detection radius is 150 pixels
* A player can see up to 3 other players in its detection radius
* A player can see up to 3 food blobs in its detection radius
* The maximum speed of a player is 3px/frame
* The minimal speed of a player is 0.6px/frame
* Every frame, the player loses 0.2% of its mass

#### The genetic algorithm
The genetic algorithm is the core of the AI. In the first frame, a certain amount of players are initialized with a neural network as brain. The brains represent the population of a generation. These brains are then evolved by putting the entire population in a single playing field and letting them compete against each other. The fittest brains are moved on the next generation, the less fit brains have a high chance of being removed.

```javascript
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
```

The above code shows the code run when the evaluation is finished. It is very similar to the built-in evolve() function of Neataptic, however adapted to avoid a fitness function as all genomes must be evaluated at the same time.

The scoring of the genomes is quite easy: when a certain amount of iterations has been reached, each genome is ranked by their area. Better performing genomes have eaten more blobs, and thus have a bigger area. This scoring is identical to the scoring in Agar.io. I have experimented with other scoring systems, but lots of them stimulated small players to finish themselves off if their score was too low for a certain amount of time.

**Some (configurable) settings**:

* An evaluation runs for 1000 frames
* The mutation rate is 0.3
* The elitism is 10%
* Each genome starts with 0 hidden nodes
* All mutation methods are allowed

### Issues/future improvements
There are a couple of known issues. However, most of them linked are linked to a future improvement in some way or another.

**Issues**:

* Genomes tend to avoid hidden nodes (this is really bad)

**Future improvements**:

* Players must be able to detect close players, even if they are on the other side of the field
* Players/food should not be spawned at locations occupied by players
* The genetic algorithm should be able to run without any visualization
* [.. tell me your idea!](https://github.com/wagenaartje/neataptic)
