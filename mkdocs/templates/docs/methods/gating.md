description: List of gating methods in Neataptic
authors: Thomas Wagenaar
keywords: gating, recurrent, LSTM, neuron, activation

Gating is quite the interesting: it makes the weights in networks more dynamic, by adapting them to their gating node. Read more about it [here](https://en.wikipedia.org/wiki/Synaptic_gating). For specific implementation of gating, check out the [Node](../architecture/node.md), [Group](../architecture/group.md) and [Network](../architecture/network.md) wikis!

There are 3 gating methods:

* **Methods.Gating.OUTPUT** every node in the gating group will gate (at least) 1 node in the emitting group and all its connections to the other, receiving group
* **Methods.Gating.INPUT** every node in the gating group will gate (at least) 1 node in the receiving group and all its connections from the other, emitting group
* **Methods.Gating.SELF** every node in the gating group will gate (at least) 1 self connection in the emitting/receiving group
