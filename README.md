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

Neataptic trains more than 5x faster than competitors. [Run the tests yourself](https://jsfiddle.net/tuet004f/11/).

Use any of the <b>6</b> built-in networks with customisable sizes to create a network:

```javascript
var myNetwork = new Architect.LSTM(1,10,5,1);
```

Or built your <b>own</b> network with pre-built layers:

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
<summary><a href="https://wagenaartje.github.io/neataptic/docs/">Visit the wiki to get started</a></summary>
</details>
<details>
<summary><a href="https://wagenaartje.github.io/neataptic/articles/playground/">or play around with neural networks</a></summary>
</details>

<img src="https://i.gyazo.com/27e8003df60dbbd21e240a53f8ec093a.png" width="33%"/><img src="https://i.gyazo.com/5325ca9217dbca3151a891739548a01d.png" width="33%"/><img src="https://i.gyazo.com/f566d2364af43dd3a78c8926ed204a51.png" width="33%"/>

## Examples
Neural networks can be used for nearly anything; driving a car, playing a game and even to predict words! At this moment,
the website only displays a small amount of examples. If you have an interesting project that you want to share with other users
of Neataptic, feel free to create a pull request!

Basic XOR example:

```js
var network = new Architect.Perceptron(2,4,1);

// Train the XOR gate
network.train([{ input: [0,0], output: [0] },
               { input: [0,1], output: [1] },
               { input: [1,0], output: [1] },
               { input: [1,1], output: [0] }]);

network.activate([0,1]); // 0.9824...
```

Or predict timeseries with a NARX network ([run it here yourself](https://jsfiddle.net/wagenaartje/1o7t91yk/2/)):

```javascript
var narx = new Architect.NARX(1, 5, 1, 3, 3);

// Train a sequence: 00100100..
narx.train([
  { input: [0], output: [0] },
  { input: [0], output: [0] },
  { input: [0], output: [1] },
  { input: [1], output: [0] },
  { input: [0], output: [0] },
  { input: [0], output: [0] },
  { input: [0], output: [1] }
]);

narx.activate([0]); // 0.0275
narx.activate([0]); // 0.0370
narx.activate([0]); // 0.8695
```

You can also evolve neural networks to perform as an XOR gate (in sequence):

```js
// this network even learns to do an XOR sequence (recurrent)
var network = new Network(1,1);

// trainingSet = XOR sequence
network.evolve(trainingSet, {
  mutation: Methods.Mutation.ALL,
  equal: true,
  popSize: 100,
  elitism: 10,
  amount: 10
});

network.activate([0]); // 0.0398
network.activate([1]); // 0.9711
network.activate([1]); // 0.0008
network.activate([0]); // 0.9756
```

More:
<details>
<summary><a href="https://wagenaartje.github.io/neataptic/articles/neuroevolution/">Neuroevolution examples</a> (supervised)</summary>
</details>
<details>
<summary><a href="http://stackoverflow.com/questions/43574799/dead-simple-example-of-synaptic-js-lstm-rnn-algorithm/43734612#43734612">LSTM timeseries</a> (supervised)</summary>
</details>
<details>
<summary><a href="https://wagenaartje.github.io/neataptic/articles/classifycolors">Color classification</a> (supervised)</summary>
</details>
<details>
<summary><a href="https://wagenaartje.github.io/neataptic/articles/agario/">Agar.io-AI</a> (unsupervised)</summary>
</details>
<details>
<summary><a href="https://wagenaartje.github.io/neataptic/articles/targetseeking/">Target seeking AI</a> (unsupervised)</summary>
</details>
<details>
<summary><a href="https://wagenaartje.github.io/neataptic/articles/crossover/">Crossover playground</a></summary>
</details>
&zwnj;

I need your opinion [here](https://github.com/wagenaartje/neataptic/issues/15)!

## Usage
Head over to the [wiki](https://wagenaartje.github.io/neataptic/docs/) for detailed usage. If you want to visualise your graphs, head
over to the [graph](https://github.com/wagenaartje/neataptic/tree/master/graph) folder.

## Install
Neataptic files are hosted by rawgit, just copy this link into the `<head>` tag:
```html
<script src="https://wagenaartje.github.io/neataptic/cdn/1.2.26/neataptic.js"></script>
```

Installing with node is also possible:

```javascript
npm install neataptic
```

## Further notices
Parts of [Synaptic](https://github.com/cazala/synaptic) where used to develop
Neataptic. 

<hr>

You made it all the way down! If you appreciate this repo and want to support the development of it, please consider donating :thumbsup:
[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=CXS3G8NHBYEZE)
