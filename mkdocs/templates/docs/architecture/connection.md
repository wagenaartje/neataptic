description: Documentation of the Connection instance in Neataptic
authors: Thomas Wagenaar
keywords: connection, neural-network, architecture, synapse, weight

A connection instance defines the connection between two nodes. All you have to do is pass on a from and to node, and optionally a weight.

```javascript
var B = new Node();
var C = new Node();
var connection = new Connection(A, B, 0.5);
```

Connection properties:

Property | contains
-------- | --------
from | connection origin node
to | connection destination node
weight | the weight of the connection
gater | the node gating this connection
gain | for gating, gets multiplied with weight

### Connection methods
There are three connection methods:

* **methods.connection.ALL_TO_ALL** connects all nodes from group `x` to all nodes from group `y`
* **methods.connection.ALL_TO_ELSE** connects every node from group `x` to all nodes in the same group except itself
* **methods.connection.ONE_TO_ONE** connects every node in group `x` to one node in group `y`

Every one of these connection methods can also be used on the group itself! (`x.connect(x, METHOD)`)
