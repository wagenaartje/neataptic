description: Documentation of the Node instance in Neataptic
authors: Thomas Wagenaar
keywords: node, neuron, neural-network, activation, bias


Nodes are the key to neural networks. They provide the non-linearity in the output. A node can be created as follows:

```javascript
var node = new Node();
```

Node properties:

Property | contains
-------- | --------
bias    | the bias when calculating state
squash   | activation function
type    | 'input', 'hidden' or 'output', should not be used manually (setting to 'constant' will disable bias/weight changes)
activation | activation value
connections | dictionary of in and out connections
old | stores the previous activation
state | stores the state (before being squashed)

### activate
Actives the node. Calculates the state from all the input connections, adds the bias, and 'squashes' it.

```javascript
var node = new Node();
node.activate(); // 0.4923128591923
```

### noTraceActivate
Actives the node. Calculates the state from all the input connections, adds the bias, and 'squashes' it.
Does not calculate traces, so this can't be used to backpropagate afterwards.
That's also why it's quite a bit faster than regular `activate`.

```javascript
var node = new Node();
node.noTraceActivate(); // 0.4923128591923
```

### propagate
After an activation, you can teach the node what should have been the correct
output (a.k.a. train). This is done by backpropagating the error. To use the
propagate method you have to provide a learning rate, and a target value
(float between 0 and 1).

The arguments you can pass on are as follows:

```javascript
myNode.propagate(learningRate, momentum, update, target);
```

The target argument is optional. The default value of momentum is `0`. Read more
about momentum on the [regularization page](../methods/regularization.md). If you run
propagation without setting update to true, then the weights won't update. So if
you run propagate 3x with `update: false`, and then 1x with `update: true` then
the weights will be updated after the last propagation, but the deltaweights of
the first 3 propagation will be included too. For example, this is how you can
train node B to activate 0 when node A activates 1:

```javascript
var A = new Node();
var B = new Node('output');
A.connect(B);

var learningRate = .3;
var momentum = 0;

for(var i = 0; i < 20000; i++)
{
  // when A activates 1
  A.activate(1);

  // train B to activate 0
  B.activate();
  B.propagate(learningRate, momentum, true, 0);
}

// test it
A.activate(1);
B.activate(); // 0.006540565760853365
```


### connect
A node can project a connection to another node or group (i.e. connect node A with node B). Here is how it's done:

```javascript
var A = new Node();
var B = new Node();
A.connect(B); // A now projects a connection to B

// But you can also connect nodes to groups
var C = new Group(4);

B.connect(C); // B now projects a connection to all nodes in C
```

A neuron can also connect to itself, creating a selfconnection:

```javascript
var A = new Node();
A.connect(A); // A now connects to itself
```

### disconnect
Removes the projected connection from this node to the given node.

```javascript
var A = new Node();
var B = new Node();
A.connect(B); // A now projects a connection to B

A.disconnect(B); // no connection between A and B anymore
```

If the nodes project a connection to each other, you can also disconnect both connections at once:

```javascript
var A = new Node();
var B = new Node();
A.connect(B); // A now projects a connection to B
B.connect(A); // B now projects a connection to A


// A.disconnect(B)  only disconnects A to B, so use
A.disconnect(B, true); // or B.disconnect(A, true)
```

### gate
Neurons can gate connections. This means that the activation value of a neuron has influence on the value transported through a connection. You can either give an array of connections or just a connection as an argument.

```javascript
var A = new Node();
var B = new Node();
var C = new Node();

var connections = A.connect(B);

// Now gate the connection(s)
C.gate(connections);
```

Now the weight of the connection from A to B will always be multiplied by the activation of node C.

### ungate
You can also remove a gate from a connection.

```javascript
var A = new Node();
var B = new Node();
var C = new Node();

var connections = A.connect(B);

// Now gate the connection(s)
C.gate(connections);

// Now ungate those connections
C.ungate(connections);
```

### isProjectingTo
Checks if the node is projecting a connection to another neuron.

```javascript
var A = new Node();
var B = new Node();
var C = new Node();
A.connect(B);
B.connect(C);

A.isProjectingTo(B); // true
A.isProjectingTo(C); // false
```

### isProjectedBy
Checks if the node is projected by another node.

```javascript
var A = new Node();
var B = new Node();
var C = new Node();
A.connect(B);
B.connect(C);

A.isProjectedBy(C); // false
B.isProjectedBy(A); // true
```

### toJSON/fromJSON
Nodes can be stored as JSON's and then restored back:

```javascript
var exported = myNode.toJSON();
var imported = Network.fromJSON(exported);
```

imported will be a new instance of Node that is an exact clone of myNode.

### clear
Clears the context of the node. Useful for predicting timeseries with LSTM's.
