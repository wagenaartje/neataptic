description: How to use the Random model network in Neataptic
authors: Thomas Wagenaar
keywords: recurrent, feed-forward, gates, neural-network, random, architecture

A random network is similar to a liquid network. This network will start of with a given pool of nodes, and will then create random connections between them. This network is really only useful for the initialization of the population for a genetic algorithm.

```javascript
new architect.Random(input_size, hidden_size, output_size, options);
```

* `input_size` : amount of input nodes
* `hidden_size` : amount of nodes inbetween input and output
* `output_size` : amount of output nodes

Options:
* `connections` : amount of connections (default is `2 * hidden_size`, should always be bigger than `hidden_size`!)
* `backconnections` : amount of recurrent connections (default is `0`)
* `selfconnections` : amount of selfconnections (default is `0`)
* `gates` : amount of gates (default is `0`)

For example:

```javascript
var network = architect.Random(1, 20, 2, {
  connections: 40,
  gates: 4,
  selfconnections: 4
});

drawGraph(network.graph(1000, 800), '.svg');
```

will produce:

<img src="https://i.gyazo.com/a6a8076ce043f4892d0a77c6f816f0c0.png" width="100%"/>
