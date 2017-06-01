description: Neataptic is the JavaScript neural-network solution.
authors: Thomas Wagenaar
keywords: neuro-evolution, neural-network, machine-learning, backpropagation, JavaScript, library

<p align="center">
  <a href="https://wagenaartje.github.io/neataptic/">
    <img src="http://i.imgur.com/0PSJuPX.png" width="200">
  </a>
</p>

<h3 align="center">
  Neataptic
</h3>

<p align="center">
  Backprop + neuro-evolution in the browser</a>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/neataptic"><img src="https://img.shields.io/npm/v/neataptic.svg?style=flat-square"></a>
  <a href="https://www.npmjs.com/package/neataptic"><img src="https://img.shields.io/npm/dm/neataptic.svg?style=flat-square"></a>
  <a href="https://travis-ci.org/wagenaartje/neataptic"><img src="https://img.shields.io/travis/wagenaartje/neataptic/master.svg?style=flat-square"></a>
</p>

<hr>

Neataptic offers extremely flexible networks; neurons and synapses can be removed with a single line of code. No fixed architecture is required for neural networks to function at all. An important aspect that Neataptic introduces is the evolution of neural-networks: for every problem, a neural network can be evolved.

Use any of the **6** built-in networks with customizable sizes to create a network:

```javascript
var myNetwork = new Architect.LSTM(1,10,5,1);
```

Or built your **own** network with pre-built layers:

```javascript
var input = new Layer.Dense(2);
var hidden1 = new Layer.LSTM(5);
var hidden2 = new Layer.GRU(3);
var output = new Layer.Dense(1);

input.connect(hidden1);
hidden1.connect(hidden2);
hidden2.connect(output);

var myNetwork = Architect.Construct([input, hidden1, hidden2, output]);
```

You can even built your network neuron-by-neuron using <b>nodes</b> and <b>groups</b>!

<details>
<summary>[Visit the wiki to get started](docs/index.md)</summary>
</details>
<details>
<summary>[or play around with neural networks](articles/playground.md)</summary>
</details>

<img src="https://i.gyazo.com/27e8003df60dbbd21e240a53f8ec093a.png" width="33%"/><img src="https://i.gyazo.com/5325ca9217dbca3151a891739548a01d.png" width="33%"/><img src="https://i.gyazo.com/f566d2364af43dd3a78c8926ed204a51.png" width="33%"/>
