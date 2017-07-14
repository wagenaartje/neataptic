description: How to use the Gated Recurrent Unit network in Neataptic
authors: Thomas Wagenaar
keywords: recurrent, neural-network, GRU, architecture

> Please be warned: GRU is still being tested, it might not always work for your dataset.

The Gated Recurrent Unit network is very similar to the LSTM network. GRU networks have óne gate less and no selfconnections. Similarly to LSTM's, GRU's are well-suited to classify, process and predict time series when there are very long time lags of unknown size between important events.

<img src="http://colah.github.io/posts/2015-08-Understanding-LSTMs/img/LSTM3-var-GRU.png" width="100%"/>

To use this architecture you have to set at least one input node, one gated recurrent unit assembly, and an output node. The gated recurrent unit assembly consists of seven nodes: input, update gate, inverse update gate, reset gate, memorycell, output and previous output memory.

```javascript
var myLSTM = new architect.GRU(2,6,1);
```

Also you can set many layers of gated recurrent units:

```javascript
var myLSTM = new architect.GRU(2, 4, 4, 4, 1);
```

The above network has 3 hidden layers, with 4 GRU assemblies each. It has two inputs and óne output.

While training sequences or timeseries prediction to a GRU, make sure you set the `clear` option to true while training. Additionally, through trial and error, I have discovered that using a lower rate than normal works best for GRU networks (e.g. `0.1` instead of `0.3`).

This is an example of training the sequence XOR gate to a a GRU network:

```js
var trainingSet = [
  { input: [0], output: [0]},
  { input: [1], output: [1]},
  { input: [1], output: [0]},
  { input: [0], output: [1]},
  { input: [0], output: [0]}
];

var network = new architect.GRU(1,1,1);

// Train a sequence: 00100100..
network.train(trainingSet, {
  log: 1,
  rate: 0.1,
  error: 0.005,
  iterations: 3000,
  clear: true
});
```
[Run it here yourself!](https://jsfiddle.net/dzywa15x/)
