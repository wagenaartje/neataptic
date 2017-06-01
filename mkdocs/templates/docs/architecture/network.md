description: Documentation of the network model in Neataptic
authors: Thomas Wagenaar
keywords: neural-network, recurrent, layers, neurons, connections, input, output, activation

Networks are very easy to create. All you have to do is specify an `input` size and an `output` size.

```javascript
// Network with 2 input neurons and 1 output neuron
var myNetwork = new Network(2, 1);

// If you want to create multi-layered networks
var myNetwork = new Architect.Perceptron(5, 20, 10, 5, 1);
```

If you want to create more advanced networks, check out the 'Networks' tab on the right.

### Functions

<details>
  <summary>train</summary>
   The train method allows you to train your network with given parameters. It also has an option for <a href="https://en.wikipedia.org/wiki/Cross-validation_(statistics)">cross-validation</a>.

<pre>
myNetwork.train(set, options)
</pre>

Where set is an error containing objects in the following way: <code>{ input: [input(s)], output: [output(s)] }</code>. So for example, this is how you would train an XOR:

<pre>
var network = new Architect.Perceptron(2,4,1);

// Train the XOR gate
network.train([{ input: [0,0], output: [0] },
               { input: [0,1], output: [1] },
               { input: [1,0], output: [1] },
               { input: [1,1], output: [0] }]);

network.activate([0,1]); // 0.9824...
</pre>

However, options allow you to finetune the training process:

<details>
  <summary>log</summary>
   If set to <code>n</code>, will output every <code>n</code> iterations (<code>log : 1</code> will log every iteration)
</details>

<details>
  <summary>error</summary>
   The target error to reach, once the network falls below this error, the process is stopped. Default: <code>0.005</code>
</details>

<details>
  <summary>cost</summary>
   The cost function to use. See [cost methods](../methods/cost.md). Default: <code>Methods.Cost.MSE</code>
</details>

<details>
  <summary>rate</summary>
   Sets the learning rate of the backpropagation process. Default: <codE>0.3</code>.
</details>

<details>
  <summary>dropout</summary>
   Sets the dropout of the hidden network nodes. Read more about it on the [Regularization](../methods/regularization.md) page. Default: <code>0</code>.
</details>


<details>
  <summary>shuffle</summary>
   When set to <code>true</code>, will shuffle the training data every iteration. A good option to use if your network is performing less in cross validation than in the real training set. Default: <code>false</code>
</details>

<details>
  <summary>iterations</summary>
   Sets the amount of iterations the process will maximally run, even when the target error has not been reached. Default: <code>NaN</code>
</details>

<details>
  <summary>schedule</summary>
    You can schedule tasks to happen every `n` iterations. An example of usage is <code>schedule : { function: function(){console.log(Date.now)}, iterations: 5}</code>. This will log the time every 5 iterations. This option allows for complex scheduled tasks during training.
</details>

<details>
  <summary>clear</summary>
   If set to <code>true</code>, will clear the network after every activation. This is useful for training [LSTM](../builtins/lstm.md)'s, more importantly for timeseries prediction. Default: <code>false</code>
</details>
&zwnj;

So the following setup will train until the error of <code>0.0001</code> is reached or if the iterations hit <code>1000</code>. It will log the status every iteration as well. The rate has been lowered to <code>0.2</code>.

<pre>
var network = new Architect.Perceptron(2,4,1);

var trainingSet = [
  { input: [0,0], output: [1] },
  { input: [0,1], output: [0] },
  { input: [1,0], output: [0] },
  { input: [1,1], output: [1] }
];

// Train the XNOR gate
network.train(trainingSet, {
  log: 1,
  iterations: 1000,
  error: 0.0001,
  rate: 0.2
});
</pre>

The last option is the <b>crossValidate</b> option, which will validate if the network also performs well enough on a non-trained part of the given set. Options:

<details>
  <summary>crossValidate.testSize</summary>
   Sets the amount of test cases that should be assigned to cross validation. If set to <code>0.4</code>, 40% of the given set will be used for cross validation.
</details>

<details>
  <summary>crossValidate.testError</summary>
   Sets the target error of the validation set.
</details>
&zwnj;

So an example of cross validation would be:

<pre>
var network = new Architect.Perceptron(2,4,1);

var trainingSet = [
  { input: [0,0], output: [1] },
  { input: [0,1], output: [0] },
  { input: [1,0], output: [0] },
  { input: [1,1], output: [1] }
];

// Train the XNOR gate
network.train(trainingSet, {
  crossValidate :
    {
      testSize: 0.4,
      testError: 0.02
    }
});
</pre>

PS: don't use cross validation for small sets, this is just an example!

<hr>
</details>

<details>
  <summary>evolve</summary>
  <p>The evolve function will evolve the network to conform the given training set. If you want to perform neuroevolution on problems without a training set, check out the [NEAT](../neat.md) wiki page</a>. This function may not always be succesful, so always specify a number of iterations for it too maximally run.</p>

<a href="https://wagenaartje.github.io/neataptic/articles/neuroevolution/">View a whole bunch of neuroevolution algorithms set up with Neataptic here.</a>

The constructor:

<pre>
myNetwork.evolve(set, options);
</pre>

Where <code>set</code> is your training set. An example is coming up ahead. Please note that there are <b>a lot</b> of options, here are the basic options:

<details>
  <summary>cost</summary>
   Specify the cost function for the evolution, this tells a genome in the population how well it's performing.
</details>

<details>
  <summary>amount</summary>
   Set the amount of times to test the trainingset on a genome each generation. Useful for timeseries. Do not use for regular feedfoward problems. Default is <code>1</code>.
</details>

<details>
  <summary>growth</summary>
Set the penalty you want to give for large networks. The penalty get's calculated as follows:

<pre>
penalty = (genome.nodes.length + genome.connectoins.length + genome.gates.length) * growth;
</pre>

This penalty will get added on top of the error. Your growth should be a very small number, the default value is <code>0.0001</code>
</details>

<details>
  <summary>iterations</summary>
  Set the maximum amount of iterations/generations for the algorithm to run. Always specify this, as the algorithm will not always converge.
</details>

<details>
  <summary>error</summary>
  Set the target error. The algorithm will stop once this target error has been reached. The default value is <code>0.005</code>.
</details>

<details>
  <summary>log</summary>
   If set to <code>n</code>, will output every <code>n</code> iterations (<code>log : 1</code> will log every iteration)
</details>

<details>
  <summary>schedule</summary>
    You can schedule tasks to happen every `n` iterations. An example of usage is <code>schedule : { function: function(){console.log(Date.now)}, iterations: 5}</code>. This will log the time every 5 iterations. This option allows for complex scheduled tasks during evolution.
</details>

<details>
  <summary>clear</summary>
   If set to <code>true</code>, will clear the network after every activation. This is useful for evolving recurrent networks, more importantly for timeseries prediction. Default: <code>false</code>
</details>
&zwnj;

This function will output an object containing the final error, amount of iterations, time and the evolved network:

<pre>
return results = {
  error: mse,
  generations: neat.generation,
  time: Date.now() - start,
  evolved: fittest
};
</pre>

Here are some evolution examples:

<details>
  <summary>XOR</summary>
   Activates the network. It will activate all the nodes in activation order and produce an output.
<pre>
var network = new Network(2,1);

// trainingSet is the same as in the previous example
network.evolve(trainingSet, {
  mutation: Methods.Mutation.FFW,
  equal: true,
  elitism: 5,
  mutationRate: 0.5
});

network.activate([0,0]); // 0.2413
network.activate([0,1]); // 1.0000
network.activate([1,0]); // 0.7663
network.activate([1,1]); // -0.008
</pre>
</details>

<hr>

</details>

<details>
  <summary>activate</summary>
   Activates the network. It will activate all the nodes in activation order and produce an output.

<pre>
// Create a network
var myNetwork = new Network(3, 2);

myNetwork.activate([0.8, 1, 0.21]); // gives: [0.49, 0.51]
</pre>
</details>

<details>
  <summary>propagate</summary>
   This function allows you to teach the network. If you want to do more complex training, use the <code>network.train()</code> function.

<pre>
var myNetwork = new Network(1,1);

// This trains the network to function as a NOT gate
for(var i = 0; i < 1000; i++){
  network.activate([0]);  
  network.propagate(0.2, [1]);

  network.activate([1]);
  network.propagate(0.3, [0]);
}
</pre>

The above example teaches the network to output <code>[1]</code> when input <code>[0]</code> is given and the other way around. Main usage:

<pre>
network.activate(input);
network.propagate(learning_rate, desired_output);
```
</pre>
</details>

<details>
  <summary>merge</summary>
   The merge functions takes two networks, the output size of <code>network1</code> should be the same size as the input of <code>network2</code>. Merging will always be one to one to conserve the purpose of the networks. Usage:

<pre>
var XOR = Architect.Perceptron(2,4,1); // assume this is a trained XOR
var NOT = Architect.Perceptron(1,2,1); // assume this is a trained NOT

// combining these will create an XNOR
var XNOR = Network.merge(XOR, NOT);
</pre>
</details>

<details>
  <summary>connect</summary>
   Connects two nodes in the network:

<pre>
myNetwork.connect(myNetwork.nodes[4], myNetwork.nodes[5]);
</pre>
</details>

<details>
  <summary>remove</summary>
   Removes a node from a network, all its connections will be redirected. If it gates a connection, the gate will be removed.

<pre>
myNetwork = new Architect.Perceptron(1,4,1);

// Remove a node
myNetwork.remove(myNetwork.nodes[2]);
</pre>
</details>

<details>
  <summary>disconnect</summary>
   Disconnects two nodes in the network:

<pre>
myNetwork.disconnect(myNetwork.nodes[4], myNetwork.nodes[5]);
// now node 4 does not have an effect on the output of node 5 anymore
</pre>
</details>

<details>
  <summary>gate</summary>
   Makes a network node gate a connection:

<pre>
myNetwork.gate(myNetwork.nodes[1], myNetwork.connections[5]
</pre>

Now the weight of connection 5 is multiplied with the activation of node 1!
</details>

<details>
  <summary>ungate</summary>
   Removes a gate from a connection:

<pre>
myNetwork = new Architect.Perceptron(1, 4, 2);

// Gate a connection
myNetwork.gate(myNetwork.nodes[2], myNetwork.connections[5]);

// Remove the gate from the connection
myNetwork.ungate(myNetwork.connections[5]);
</pre>
</details>

<details>
  <summary>mutate</summary>
   Mutates the network. See [mutation methods](../methods/mutation.md).
</details>

<details>
  <summary>toJSON/fromJSON</summary>
   Networks can be stored as JSON's and then restored back:

<pre>
var exported = myNetwork.toJSON();
var imported = Network.fromJSON(exported);
</pre>

<code>imported</code> will be a new instance of <code>Network</code> that is an exact clone of <code>myNetwork</code>.
</details>

<details>
  <summary>crossOver</summary>
   Creates a new 'baby' network from two parent networks. Networks are not required to have the same size, however input and output size should be the same!

<pre>
// Initialise two parent networks
var network1 = new Architect.Perceptron(2, 4, 3);
var network2 = new Architect.Perceptron(2, 4, 5, 3);

// Produce an offspring
var network3 = Network.crossOver(network1, network2);
</pre>
</details>

<details>
  <summary>set</summary>
   Sets the properties of all nodes in the network to the given values, e.g.:

<pre>
var network = new Architect.Random(4, 4, 1);

// All nodes in 'network' now have a bias of 1
network.set({bias: 1});
</pre>
</details>

<details>
  <summary>clear</summary>
   Clears the context of the network. Useful for predicting timeseries with LSTM's. `clear()` has little to no effecton regular NN, use on RNN's!
</details>

### Properties
Each network only has a small number of properties.

<details>
  <summary>input</summary>
   Input size of the network
</details>

<details>
  <summary>output</summary>
   Output size of the network
</details>

<details>
  <summary>nodes</summary>
   Array of nodes
</details>

<details>
  <summary>connections</summary>
   Array of connections
</details>

<details>
  <summary>gates</summary>
   Array of gated connections
</details>

<details>
  <summary>selfconns</summary>
   Array of self connections
</details>
