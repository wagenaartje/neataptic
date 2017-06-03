description: List of selection methods in Neataptic
authors: Thomas Wagenaar
keywords: genetic-algorithm, fitness, elitism, selection

[Selection](https://en.wikipedia.org/wiki/Selection_(genetic_algorithm)) is the
way in which a genetic algorithm decides which neural networks will be parents
for the new generation. There are a couple of selection methods, however only a
few have been integrated until now.

At the moment, there are 3 built-in selection methods:

Name |
---- |
Selection.POWER |
Selection.FITNESS_PROPORTIONATE |
Selection.TOURNAMENT |

_A description on how each of these work is given below_

### Usage
You can specify your selection method while calling the `evolve()` function on a
network or when constructing a new instance of the `NEAT` algorithm:

```javascript
var myNetwork = new Architect.Perceptron(1,1,1);
var myTrainingSet = [{ input:[0], output:[1]}, { input:[1], output:[0]}];

myNetwork.evolve(myTrainingSet, {
  generations: 10,
  selection: Methods.Selection.POWER // eg.
});
```

Next to selection methods, `elitism` is also built in the `NEAT` constructor.
[Elitism](https://en.wikipedia.org/wiki/Genetic_algorithm#Elitism) allows a
genetic algorithm to pass on `n` neural networks with the highest fitness from
the previous generation to the new generation, without any crossover steps in
between. At the moment, elitism is only possible inside a `Neat` object. They
can be passed on as follows:

```javascript
var evolution = new Neat({
  selection: Methods.Selection.FITNESS_PROPORTIONATE,
  elitism: 5 // amount of neural networks to keep from generation to generation
});
```

#### Selection.POWER
When using this selection method, a random decimal value between 0 and 1 will
be generated. E.g. `0.5`, then this value will get an exponential value, the
default power is `4`. So `0.5**4 = 0.0625`. This will be converted into an index
for the array of the current population, which is sorted from fittest to worst.

**Config:**

* _Selection.POWER.power_ : default is `4`. Increasing this value will increase the
chance fitter genomes are chosen.

#### Selection.FITNESS_PROPORTIONATE
This selection method will select genomes with a probability proportionate to their fitness:

![Formula](https://wikimedia.org/api/rest_v1/media/math/render/svg/89d0cb75150cdb5ad94ba7b168f217f9c290ee09)

Read more about roulette selection [here](https://en.wikipedia.org/wiki/Fitness_proportionate_selection).

#### Selection.TOURNAMENT
This selection method will select a group of genomes from the population randomly,
sort them by score, and choose the fittest individual with probability `p`, the
second fittest with probability `p*(1-p)`, the third fittest with probability
 `p*((1-p)^2)`and so on. Read more [here](https://en.wikipedia.org/wiki/Tournament_selection).

**Config:**

* _Selection.TOURNAMENT.size_ : default is `5`. Must always be lower than
the population size.
A higher value will result in a population that has more equal, but fitter, parents.
* _Selection.TOURNAMENT.probability_ : default is `0.5`. See the explanation above
on how it is implemented.
