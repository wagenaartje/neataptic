Gynaptic
========
Gynaptic is an architecture-free [neural network](https://en.wikipedia.org/wiki/Artificial_neural_network) library with implementations to create [genetic neural networks](https://en.wikipedia.org/wiki/Neuroevolution). It gives the user the ability to create train neurol networks with evolutionary algorithms with just a few lines of code. The library is constantly updated with new mutation, crossover and selection methods. Gynaptics' main neural network code comes from the library [Synaptic](https://github.com/cazala/synaptic) by [Juan Cazala](https://github.com/cazala). Gynaptic will stay up to date with Synaptic's improvements as much as possible.

## Usage
This is simple documentation on how to use the methods. Once the project has been sufficiently attributed, I will add a Wiki going into debt of each method and showing how you can add your own.

### Mutation methods
There are 4 mutation methods at the moment. More will be added in the future.
```javascript
Mutate.SWAP_WEIGHT // swaps two random connection weights
Mutate.SWAP_BIAS // swaps two random neuron biases
Mutate.MODIFY_RANDOM_WEIGHT // adds or substracts a random value from a random connection weight
Mutate.MODIFY_RANDOM_BIAS // adds or substracts a random value from a random neuron bias
// more to come
```
Each of these mutation methods can be used on the `Neuron`, `Layer` and `Network` objects. The only exception is the `Mutate.SWAP_BIAS`, which does not work on a `Neuron`.

Before mutating, make sure to `clear()` your object! For some reason not doing this will have no effects on your activiation values. I'm trying to figure out why contextual data enhances mutation. For now, the code would look like this:

###### networks
```javascript
var layer = new Layer(4);
layer.clear();
layer.mutate(Mutate.SWAP_WEIGHT);
```
###### layers
```javascript
var network = new Architect.Perceptron(2,4,2);
network.clear();
network.mutate(Mutate.SWAP_BIAS);
```
###### neurons
```javascript
var neuron = new Neuron();
neuron.clear();
neuron.mutate(Mutate.MODIFY_RANDOM_WEIGHT);
```


### Crossover methods
The `Network`, `Layer` and `Neuron` objects all have a `object.crossOver()` function which returns a new offspring from the two parents provided. Below are all the crossover methods as of now, `Crossover.UNIFORM` is the default method.
```javascript
Crossover.SINGLE_POINT // takes all the values from one parent till a certain point, afterwards the other parent
Crossover.TWO_POINT // same as single point, but switches twice
Crossover.UNIFORM // the offspring inherits a random 50% of each parents biases and weights
Crossover.AVERAGE // the offspring inherits the average value of each weight and bias of its parents

// Planned methods
Crossover.PERCENTAGE;
```
Please note, when you crossover layers or neurons, this will *not* crossover the weights of the connections! In the future, it will be possible to crossover internal connections (self-connections). If you crossover a layer or a neuron, you can use this to construct new connections. You cannot insert these layers or neurons into existing networks, as they won't be connected! Also, if you crossover a network or a layer, they should be the same size!

###### networks
```javascript
var network1 = new Architect.Perceptron(2,4,2);
var network2 = new Architect.Perceptron(2,4,2);

var offspring = Network.crossOver(network1, network2, Crossover.UNIFORM);
```

###### layers
```javascript
var layer1 = new Layer(4);
var layer2 = new Layer(4);

var offspring = Layer.crossOver(layer1, layer2, Crossover.SINGLE_POINT);
```

###### neurons
```javascript
var neuron1 = new Neuron();
var neuron2 = new Neuron();

var offspring = Neuron.crossOver(neuron1, neuron2, Crossover.AVERAGE);
```

The `Crossover.SINGLE_POINT` and `Crossover.TWO_POINT` have configurable points which can be set as follows:
```javascript
// e.g. 0.4 --> first 40% from parent1, next 60% from parent2
Crossover.SINGLE_POINT = [point];
// e.g. 0.3 and 0.8 --> first 30% from parent1, next 50% from parent2, last 20% from parent1
Crossover.TWO_POINT = [point, point];
```
### Selection methods
Work in progress, planned methods:
```javascript
// Planned methods
Selection.ELITISM
Selection.FITNESS_PROPORTIONATE
```
Some of the selection methods will be combinable with others.

## Planned improvements
- Turn connections into objects
- Create the ability to crossover connections
