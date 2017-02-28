Gynaptic
========
Gynaptic is an architecture-free [neural network](https://en.wikipedia.org/wiki/Artificial_neural_network) library with implementations to create [genetic neural networks](https://en.wikipedia.org/wiki/Neuroevolution). It gives the user the ability to create train neurol networks with evolutionary algorithms with just a few lines of code. The library is constantly updated with new mutation, crossover and selection methods. Gynaptics' main neural network code comes from the library [Synaptic](https://github.com/cazala/synaptic) by [Juan Cazala](https://github.com/cazala). Gynaptic will stay up to date with Synaptic's improvements as much as possible.

## Usage
Head over to the [wiki](https://github.com/wagenaartje/gynaptic/wiki) for documentation.

## Genetic neural network example

This is an example of the creation and loop of a genetic neural network. The goal of this genetic algorithm is too create a population that will output a value that is as high as possible (=`1`) when inputted `0`. Please note that this is just an example, and this problem is much easier to 'solve' by backpropagating.

```js
// Create the evolutionary algorithm
var GNN = new Evolution({
  size: 50,
  elitism: 5,
  mutationRate: 0.05,
  networkSize = [1,4,1],
  mutationMethod: [Mutate.MODIFY_RANDOM_BIAS, Mutate.MODIFY_RANDOM_WEIGHT],
  crossOverMethod: [Crossover.UNIFORM, Crossover.AVERAGE],
  selectionMethod: [Selection.FITNESS_PROPORTIONATE],
  fitnessFunction: function(network){
     return Math.round(network.activate([0]) * 200);
  }
});

// Loop the evolution process until a certain average score is reached
var notFinished = true;;
while(notFinished){
  GNN.evaluate();
  if(GNN.getAverage() > 190){
    notFinished = false;
  }

  GNN.select();
  GNN.crossOver();
  GNN.mutate();
  GNN.replace();
};
```

If you want to know how to set up one of these algorithms yourself, feel free to take a look at the wiki pages! If you want to implement a genetic neural network algorithm, but don't know how, feel free to contact me at wagenaartje@protonmail.com!

## Installation
Gynaptic files are hosted by rawgit, just copy this link into the `<head>` tag:
```html
<script src="https://cdn.rawgit.com/wagenaartje/gynaptic/c1682e4f/dist/gynaptic.js"></script>
```

## Planned improvements
- Turn connections into objects
- Create the ability to crossover connections
