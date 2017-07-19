description: List of mutation methods in Neataptic
authors: Thomas Wagenaar
keywords: genetic-algorithm, mutation, modify, add, substract, genome, neural-network

[Mutation](https://en.wikipedia.org/wiki/Mutation_(genetic_algorithm)) is an important aspect of genetic algorithms. Without any mutation, there is low probability of improvement. Mutating will change the bias or weights in neural networks, changing the output of the neural network. It can have a positive, but also a negative effect on the outcome of the neural network. However, one of the [guidelines](https://en.wikipedia.org/wiki/Genetic_algorithm#Selection) of genetic algorithms is too make sure that only the positive effects will be carried on.

### Methods

At the moment, there are 7 built-in mutation methods (all for networks):

Name | Action |
---- | ------ |
ADD_NODE | Adds a node
SUB_NODE | Removes node
ADD_CONN | Adds a connection between two nodes
SUB_CONN | Removes a connection between two nodes
MOD_WEIGHT | Modifies the weight of a connection
MOD_BIAS | Modifies the bias of a node
MOD_ACTIVATION | Modifies the activation function of a node
ADD_SELF_CONN | Adds a self-connection to a node
SUB_SELF_CONN | Removes a self-connection from a node
ADD_GATE | Makes a node gate a connection
SUB_GATE | Removes a gate from a connection
ADD_BACK_CONN | Adds a recurrent connection
SUB_BACK_CONN | Removes a recurrent connection
SWAP_NODES | Swaps the bias and squash function between two nodes

### Usage
All of these mutation functions can be executed on any kind of network:

```javascript
myNetwork.mutate(methods.mutation.<MUTATION_METHOD>);

// eg.
myNetwork.mutate(methods.mutation.ADD_NODE);
```

And some on them on nodes (`MOD_BIAS` and `MOD_ACTIVATION`):

```javascript
myNode.mutate(methods.mutation.<MUTATION_METHOD>);

// eg.
myNode.mutate(methods.mutation.MOD_BIAS);
```

For `network.evolve()` and `neat()` options, specify a list of mutation methods as follows in the options (example):

```js
network.evolve(trainingset, {
  mutation: [methods.mutation.MOD_BIAS, methods.mutation.ADD_NODE]
}
```

You can also specify groups of methods:

```js
network.evolve(trainingset, {
  mutation: methods.mutation.ALL // all mutation methods
}

network.evolve(trainingset, {
  mutation: methods.mutation.FFW// all feedforward mutation methods
}
```

# Config
Some methods are configurable! You can change these config values as follows:

```js
option = value;

// eg.
methods.mutation.MOD_ACTIVATION.mutateOutput = false;
```

Or you can edit the `methods/mutation.js` file to change the default values.

&zwnj;

```js
methods.mutation.SUB_NODE.keep_gates // default: true
```
When removing a node, you remove the connections and initialize new ones. Setting this option to true will make sure if the removed connections were gated, so will the new ones be.

&zwnj;

```js
methods.mutation.MOD_WEIGHT.min // default: -1
methods.mutation.MOD_WEIGHT.max // default: 1
```
Sets the upper and lower bounds of the modification of connection weights.

&zwnj;

```js
methods.mutation.MOD_BIAS.min // default: -1
methods.mutation.MOD_BIAS.max // default: 1
```
Sets the upper and lower bounds of the modification of neuron biases.

&zwnj;

```js
methods.mutation.MOD_ACTIVATION.mutateOutput // default: true
methods.mutation.SWAP_NODES.mutateOutput     // default: true
```
Disable this option if you want the have the activation function of the output neurons unchanged. Useful if you want to keep the output of your neural network normalized.

&zwnj;

```js
methods.mutation.MOD_ACTIVATION.allowed

// default:
[
  activation.LOGISTIC,
  activation.TANH,
  activation.RELU,
  activation.IDENTITY,
  activation.STEP,
  activation.SOFTSIGN,
  activation.SINUSOID,
  activation.GAUSSIAN,
  activation.BENT_IDENTITY,
  activation.BIPOLAR,
  activation.BIPOLAR_SIGMOID,
  activation.HARD_TANH,
  activation.ABSOLUTE
]
```

This option allows you to specify which [activation functions](activation.md) you want to allow in your neural network.

&zwnj;
