description: Documentation of the network model in Neataptic
authors: Thomas Wagenaar
keywords: neural-network, recurrent, layers, neurons, connections, input, output, activation

Networks are very easy to create. All you have to do is specify an `input` size and an `output` size.

```javascript
// Network with 2 input neurons and 1 output neuron
var myNetwork = new Network(2, 1);

// If you want to create multi-layered networks
var myNetwork = new architect.Perceptron(5, 20, 10, 5, 1);
```

If you want to create more advanced networks, check out the 'Networks' tab on the left.



### Functions
Check out the [train](../important/train.md) and [evolve](../important/evolve.md) functions on their separate pages!

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
  <summary>noTraceActivate</summary>
   Activates the network. It will activate all the nodes in activation order and produce an output.
   Does not calculate traces, so backpropagation is not possible afterwards. That makes
   it faster than the regular `activate` function.

<pre>
// Create a network
var myNetwork = new Network(3, 2);

myNetwork.noTraceActivate([0.8, 1, 0.21]); // gives: [0.49, 0.51]
</pre>
</details>

<details>
  <summary>propagate</summary>
   This function allows you to teach the network. If you want to do more complex
   training, use the <code>network.train()</code> function. The arguments for
   this function are:

<pre>
myNetwork.propagate(rate, momentum, update, target);
</pre>

Where target is optional. The default value of momentum is `0`. Read more about
momentum on the [regularization page](../methods/regularization.md). If you run
propagation without setting update to true, then the weights won't update. So if
you run propagate 3x with `update: false`, and then 1x with `update: true` then
the weights will be updated after the last propagation, but the deltaweights of
the first 3 propagation will be included too.

<pre>
var myNetwork = new Network(1,1);

// This trains the network to function as a NOT gate
for(var i = 0; i < 1000; i++){
  network.activate([0]);  
  network.propagate(0.2, 0, true, [1]);

  network.activate([1]);
  network.propagate(0.3, 0, true, [0]);
}
</pre>

The above example teaches the network to output <code>[1]</code> when input <code>[0]</code> is given and the other way around. Main usage:

<pre>
network.activate(input);
network.propagate(learning_rate, momentum, update_weights, desired_output);
</pre>
</details>

<details>
  <summary>merge</summary>
   The merge functions takes two networks, the output size of <code>network1</code> should be the same size as the input of <code>network2</code>. Merging will always be one to one to conserve the purpose of the networks. Usage:

<pre>
var XOR = architect.Perceptron(2,4,1); // assume this is a trained XOR
var NOT = architect.Perceptron(1,2,1); // assume this is a trained NOT

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
myNetwork = new architect.Perceptron(1,4,1);

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
myNetwork = new architect.Perceptron(1, 4, 2);

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
  <summary>serialize</summary>
  Serializes the network to 3 <code>Float64Arrays</code>. Used for transferring
  networks to other threads fast.
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
  <summary>standalone</summary>
   Networks can be used in Javascript without the need of the Neataptic library,
   this function will transform your network into a function accompanied by arrays.

<pre>
var myNetwork = new architect.Perceptron(2,4,1);
myNetwork.activate([0,1]); // [0.24775789809]

// a string
var standalone = myNetwork.standalone();

// turns your network into an 'activate' function
eval(standalone);

// calls the standalone function
activate([0,1]);// [0.24775789809]
</pre>

The reason an `eval` is being called is because the standalone can't be a simply
a function, it needs some kind of global memory. You can easily copy and paste the
result of `standalone` in any JS file and run the `activate` function!

Note that this is still in development, so for complex networks, it might not be
precise.

</details>

<details>
  <summary>crossOver</summary>
   Creates a new 'baby' network from two parent networks. Networks are not required to have the same size, however input and output size should be the same!

<pre>
// Initialise two parent networks
var network1 = new architect.Perceptron(2, 4, 3);
var network2 = new architect.Perceptron(2, 4, 5, 3);

// Produce an offspring
var network3 = Network.crossOver(network1, network2);
</pre>
</details>

<details>
  <summary>set</summary>
   Sets the properties of all nodes in the network to the given values, e.g.:

<pre>
var network = new architect.Random(4, 4, 1);

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
