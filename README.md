<img src='http://i.imgur.com/2QqZem1.png' width="100%"/>
========
Gynaptic is an architecture-free [neural network](https://en.wikipedia.org/wiki/Artificial_neural_network) library with implementations to create [genetic neural networks](https://en.wikipedia.org/wiki/Neuroevolution). It gives the user the ability to create train neurol networks with evolutionary algorithms with just a few lines of code. The library is constantly updated with new mutation, crossover and selection methods. Gynaptics' main neural network code comes from the library [Synaptic](https://github.com/cazala/synaptic) by [Juan Cazala](https://github.com/cazala). Gynaptic will stay up to date with Synaptic's improvements as much as possible.

What Gynaptic adds to [Synaptic](https://github.com/cazala/synaptic):
- an easy-to-use genetic algorithm function
- 6 mutation methods
- 4 crossover methods
- 1 selection method
- 2 generation methods
- to/fromJSON for layers and neurons
- 3 squashing functions

In the future
- More network types
- Flexible network creation (no more 'layers',  these will become 'clusters')

<img src='http://i.imgur.com/OgUyWpC.png' width="100%"/>
========
Head over to the [wiki](https://github.com/wagenaartje/gynaptic/wiki) for documentation.

<img src='http://i.imgur.com/yHjswyy.png' width="100%"/>
========

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

<img src='http://i.imgur.com/SkJ1Pp6.png' width="100%"/>
========
Gynaptic files are hosted by rawgit, just copy this link into the `<head>` tag:
```html
<script src="https://cdn.rawgit.com/wagenaartje/gynaptic/d93630db/dist/gynaptic.js"></script>
```

<img src='http://i.imgur.com/isZsxET.png' width="100%"/>
========
- Create pool generation methods :white_check_mark:
- Add SHIFT mutation method, which replaces a random connection somewhere else in the network :white_check_mark:
- Add ADD/REMOVE mutation method, which adds or removes a random neuron in a network :white_check_mark:
- Export/Import layers, neurons, evolutions to/from JSON
- Convolutional neural network, not sure if it will work out with synaptic yet :clock5:
- Add MODIFY_SQUASH mutation method, which changes the squash of a neuron randomly :white_check_mark:

If you have any suggestions, please post them at the 'Issues' button at the top of the page.
