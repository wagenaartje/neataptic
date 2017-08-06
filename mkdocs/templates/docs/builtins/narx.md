description: How to use the Nonlinear Autoregressive Exogenous model network in Neataptic
authors: Thomas Wagenaar
keywords: recurrent, neural-network, NARX, architecture

Just like LSTM's, [NARX networks](https://en.wikipedia.org/wiki/Nonlinear_autoregressive_exogenous_model) are very good at timeseries prediction. That is because they use previous inputs and their corresponding output values as the next input to the hidden layer.

![](http://i.imgur.com/qcLyVcw.png)

The constructor looks like this:

```js
var network = new architect.NARX(inputSize, hiddenLayers, outputSize, previousInput, previousOutput);
```

A quick explanation of each argument:

* `inputSize`: the amount of input nodes
* `hiddenLayers`: an array containing hidden layer sizes, e.g. `[10,20,10]`. If only one hidden layer, can be a number (of nodes)
* `outputSize`: the amount of output nodes
* `previousInput`: the amount of previous inputs you want it to remember
* `previousOutput`: the amount of previous outputs you want it to remember

Example:

```javascript
var narx = new architect.NARX(1, 5, 1, 3, 3);

// Train the XOR gate (in sequence!)
var trainingData = [
  { input: [0], output: [0] },
  { input: [0], output: [0] },
  { input: [0], output: [1] },
  { input: [1], output: [0] },
  { input: [0], output: [0] },
  { input: [0], output: [0] },
  { input: [0], output: [1] },
];

narx.train(trainingData, {
  log: 1,
  iterations: 3000,
  error: 0.03,
  rate: 0.05
});
```
[Run it here](https://jsfiddle.net/wagenaartje/1o7t91yk/2/)

The NARX network type has 'constant' nodes. These nodes won't affect the weight of their incoming connections and their bias will never change. Please do note that mutation CAN change all of these.
