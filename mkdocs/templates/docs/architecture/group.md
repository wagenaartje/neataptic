description: Documentation of the Group instance in Neataptic
authors: Thomas Wagenaar
keywords: group, neurons, nodes, neural-network, activation


A group instance denotes a group of nodes. Beware: once a group has been used to construct a network, the groups will fall apart into individual nodes. They are purely for the creation and development of networks. A group can be created like this:

```javascript
// A group with 5 nodes
var A = new Group(5);
```

Group properties:

Property | contains
-------- | --------
nodes | an array of all nodes in the group
connections | dictionary with connections

### activate
Will activate all the nodes in the network.

```javascript
myGroup.activate();

// or (array length must be same length as nodes in group)
myGroup.activate([1, 0, 1]);
```

### propagate
Will backpropagate all nodes in the group, make sure the group receives input from another group or node!

```javascript
myGroup.propagate(rate, momentum, target);
```

The target argument is optional. An example would be:

```javascript
var A = new Group(2);
var B = new Group(3);

A.connect(B);

A.activate([1,0]); // set the input
B.activate(); // get the output

// Then teach the network with learning rate and wanted output
B.propagate(0.3, 0.9, [0,1]);
```

The default value for momentum is `0`. Read more about momentum on the
[regularization page](../methods/regularization.md).

### connect
Creates connections between this group and another group or node. There are different connection methods for groups, check them out [here](connection.md).

```javascript
var A = new Group(4);
var B = new Group(5);

A.connect(B, methods.connection.ALL_TO_ALL); // specifying a method is optional
```

### disconnect
(not yet implemented)

### gate
Makes the nodes in a group gate an array of connections between two other groups. You have to specify a gating method, which can be found [here](../methods/gating.md).

```javascript
var A = new Group(2);
var B = new Group(6);

var connections = A.connect(B);

var C = new Group(2);

// Gate the connections between groups A and B
C.gate(connections, methods.gating.INPUT);
```

### set
Sets the properties of all nodes in the group to the given values, e.g.:

```javascript
var group = new Group(4);

// All nodes in 'group' now have a bias of 1
group.set({bias: 1});
```

### disconnect
Disconnects the group from another group or node. Can be twosided.

```javascript
var A = new Group(4);
var B = new Node();

// Connect them
A.connect(B);

// Disconnect them
A.disconnect(B);

// Twosided connection
A.connect(B);
B.connect(A);

// Disconnect from both sides
A.disconnect(B, true);
```

### clear
Clears the context of the group. Useful for predicting timeseries with LSTM's.
