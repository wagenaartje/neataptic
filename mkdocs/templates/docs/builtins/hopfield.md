description: How to use the Hopfield network in Neataptic
authors: Thomas Wagenaar
keywords: feed-forward, neural-network, hopfield, architecture

> This network might be removed soon

The hopfield architecture is excellent for remembering patterns. Given an input, it will output the most similar pattern it was trained. The output will always be binary, due to the usage of the `Activation.STEP` function.

```javascript
var network = architect.Hopfield(10);
var trainingSet = [
  { input: [0, 1, 0, 1, 0, 1, 0, 1, 0, 1], output: [0, 1, 0, 1, 0, 1, 0, 1, 0, 1] },
  { input: [1, 1, 1, 1, 1, 0, 0, 0, 0, 0], output: [1, 1, 1, 1, 1, 0, 0, 0, 0, 0] }
];

network.train(trainingSet);

network.activate([0,1,0,1,0,1,0,1,1,1]); // [0, 1, 0, 1, 0, 1, 0, 1, 0, 1]
network.activate([1,1,1,1,1,0,0,1,0,0]); // [1, 1, 1, 1, 1, 0, 0, 0, 0, 0]
```

The input for the training set must always be the same as the output.
