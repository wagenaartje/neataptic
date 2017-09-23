description: Neural agents learn to seek targets through neuro-evolution
authors: Thomas Wagenaar
keywords: target seeking, AI, genetic-algorithm, NEAT, Neataptic

In the simulation below, neural networks that have been evolved through roughly
100 generations try to seek a target. Their goal is to stay as close to the target
as possible at all times. If you want to see how one of these networks looks like,
check out the [complete simulation](https://wagenaartje.github.io/target-seeking-ai/).

<div id="field" height="500px">
</div>

_Click on the field to relocate the target! Source code [here](https://wagenaartje.github.io/target-seeking-ai/)._

The neural agents are actually performing really well. At least one agent will have
'solved the problem' after roughly 20 generations. That is because the base of the solution
is quite easy: one of the inputs of the neural networks is the angle to the target, so all it
has to do is output some value that is similar to this input value. This can easily be done
through the identity activation function, but surprisingly, most agents in the simulation above
tend to avoid this function.

You can check out the topology of the networks [here](https://wagenaartje.github.io/target-seeking-ai/).
If you manage to evolve the genomes quicker or better than this simulation with different settings, please
perform a pull request on [this](https://wagenaartje.github.io/target-seeking-ai/) repo.

### The making of

In the previous article I have gone more into depth on the environment of the algorithm, but in this article
I will focus more on the settings and inputs/outputs of the algorithm itself.


If you have any questions about the code in the linked repo, please create an issue on [this](https://github.com/wagenaartje/neataptic) repo.


### The agents
The agents' task is very simple. They have to get in the vicinity of the target which is set to about
100 pixels, once they are in that vicinity, each agents' score will be increased proportionally `(100 - dist)``
to the distance. There is one extra though: for every node in the agents' network, the score of the agent will
be decreased. This has two reasons; 1. networks shouldn't overfit the solution and 2. having smaller networks
reduces computation power.

Agents have some kind of momentum. They don't have mass, but they do have acceleration, so it takes a small
amount of time for a agent to reach the top speed in a certain direction.


**Each agent has the following inputs**:

* Its own speed in the x-axis
* Its own speed in the y-axis
* The targets' speed in the x-axis
* The targets' speed in the y-axis
* The angle towards the target
* The distance to the target


The output of each agent is just the desired movement direction.

There is no kind of collision, except for the walls of the fields. In the future, it might be interesting to
add collisions between multiple agents and/or the target to reveal some new tactics. This would require the
agent to know the location of surrounding agents.

### The target
The target is fairly easy. It's programmed to switch direction every now and then by a random amount. There
is one important thing however: _the target moves with half the speed of the agents_, this makes sure
that agents always have the ability to catch up with the target. Apart from that, the physics for the target
are similar to the agents' physics.

### The genetic algorithm

The genetic algorithm is the core of the AI. In the first frame, a certain
amount of players are initialized with a neural network as brain. The brains
represent the population of a generation. These brains are then evolved by
putting the entire population in óne playing field and letting them compete
against each other. The fittest brains are moved on the next generation,
the less fit brains have a high chance of being removed.

```javascript
// Networks shouldn't get too big
for(var genome in neat.population){
  genome = neat.population[genome];
  genome.score -= genome.nodes.length * SCORE_RADIUS / 10;
}

// Sort the population by score
neat.sort();

// Draw the best genome
drawGraph(neat.population[0].graph($('.best').width(), $('.best').height()), '.best', false);

// Init new pop
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

The above code shows the code run when the evaluation is finished. It is very similar
to the built-in `evolve()` function of Neataptic, however adapted to avoid a fitness
function as all genomes must be evaluated at the same time.

The scoring of the genomes is quite easy: when a certain amount of iterations has been reached,
each genome is ranked by their final score. Genomes with a higher score have a small amount of nodes
and have been close to the target throughout the iteration.

**Some (configurable) settings**:

* An evaluation runs for 250 frames
* The mutation rate is 0.3
* The elitism is 10%
* Each genome starts with 0 hidden nodes
* All mutation methods are allowed

### Issues/future improvements
* ... none yet! [Tell me your ideas!](https://github.com/wagenaartje/neataptic)

**Forks**

* [corpr8's fork](https://corpr8.github.io/neataptic-targetseeking-tron/)
gives each neural agent its own acceleration, as well as letting each arrow
remain in the same place after each generation. This creates a much more
'fluid' process.
