Gynaptic
========
Gynaptic is a modification of [Synaptic](https://github.com/cazala/synaptic), adding methods to insert genetic algorithms in your code. Numerous of mutation, crossover and selection methods are created so you don't have to create your own. 

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
layer.mutate(Mutate.SWAP_WEIGHT); // e.g.
```
###### layers
```javascript
var network = new Architect.Perceptron(2,4,2);
network.clear();
network.mutate(Mutate.SWAP_WEIGHT); // e.g.
```
###### neurons
```javascript
var neuron = new Neuron();
neuron.clear();
neuron.mutate(Mutate.SWAP_WEIGHT); // e.g.
```


### Crossover methods
The `Network`, `Layer` and `Neuron` objects all have a `object.crossOver()` function which returns a new offspring from the two parents provided. Below are all the crossover methods as of now, `Crossover.UNIFORM` is the default method.
```javascript
Crossover.SINGLE_POINT // takes all the values from one parent till a certain point, afterwards the other parent
Crossover.TWO_POINT // same as single point, but switches twice
Crossover.UNIFORM // the offspring inherits a random 50% of each parents biases and weights
Crossover.AVERAGE // the offspring inherits the average value of each weight and bias of its parents
// more to come
```
Currently the crossovermethod is only implemented on networks. The rest will be added soon. Crossing over two networks looks like this:
```javascript
var network1 = new Architect.Perceptron(2,4,2);
var network2 = new Architect.Perceptron(2,4,2);

var offspring = Network.crossOver(network1, network2, Crossover.UNIFORM)
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
Selection.ELITISM
Selection.FITNESS_PROPORTIONATE
// more to come
```
Some of the selection methods will be combinable with others.
