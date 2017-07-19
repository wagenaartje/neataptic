description: Documentation on how to construct your own network with Neataptic
authors: Thomas Wagenaar
keywords: neural-network, architecture, node, build, connection


For example, I want to have a network that looks like a square:

```javascript
var A = new Node();
var B = new Node();
var C = new Node();
var D = new Node();

// Create connections
A.connect(B);
A.connect(C);
B.connect(D);
C.connect(D);

// Construct a network
var network = architect.Construct([A, B, C, D]);
```

And voila, basically a square, but stretched out, right?

![Square](https://i.gyazo.com/c91f9ce9df69f6e085535a642355b88a.png)

The `construct()` function looks for nodes that have no input connections, and labels them as an input node. The same for output nodes: it looks for nodes without an output connection (and gating connection), and labels them as an output node!

**You can also create networks with groups!** This speeds up the creation process and saves lines of code.

```javascript
// Initialise groups of nodes
var A = new Group(4);
var B = new Group(2);
var C = new Group(6);

// Create connections between the groups
A.connect(B);
A.connect(C);
B.connect(C);

// Construct a network
var network = architect.Construct([A, B, C, D]);
```

Keep in mind that you must always specify your input groups/nodes in **activation order**. Input and output nodes will automatically get sorted out, but all hidden nodes will be activated in the order that they were given.
