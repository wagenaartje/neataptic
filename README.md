<img src="https://cdn-images-1.medium.com/max/800/1*THG2__H9YHxYIt2sulzlTw.png" width="100%"/>

### Neataptic

<a href="https://www.npmjs.com/package/neataptic"><img src="https://img.shields.io/npm/v/neataptic.svg?style=flat-square"></a>
<a href="https://www.npmjs.com/package/neataptic"><img src="https://img.shields.io/npm/dm/neataptic.svg?style=flat-square"></a>
<a href="https://travis-ci.org/wagenaartje/neataptic"><img src="https://img.shields.io/travis/wagenaartje/neataptic/master.svg?style=flat-square"></a>


<hr>

Neataptic offers flexible neural networks; neurons and synapses can be removed with a single line of code. No fixed architecture is required for neural networks to function at all. This flexibility allows networks to be shaped for your dataset through neuro-evolution, which is done using multiple threads.

```js
// this network learns the XOR gate (through neuro-evolution)
var network = new Network(2,1);

var trainingSet = [
  { input: [0,0], output: [0] },
  { input: [0,1], output: [1] },
  { input: [1,0], output: [1] },
  { input: [1,1], output: [0] }
];

await network.evolve(trainingSet, {
  equal: true,
  error: 0.03
 });
```

Neataptic also backpropagates more than 5x faster than competitors. [Run the tests yourself](https://jsfiddle.net/tuet004f/11/). This is an example of regular training in Neataptic:

```js
// this network learns the XOR gate (through backpropagation)
var network = new architect.Perceptron(2, 4, 1);

// training set same as in above example
network.train(trainingSet, {
  error: 0.01
});

network.activate([1,1]); // 0.9824...
```

Use any of the <b>6</b> built-in networks with customisable sizes to create a network:

```javascript
var myNetwork = new architect.LSTM(1, 10, 5, 1);
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

var myNetwork = architect.Construct([input, hidden1, hidden2, output]);
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

## Usage
Head over to the [wiki](https://wagenaartje.github.io/neataptic/docs/) for detailed usage. If you want to visualise your graphs, head
over to the [graph](https://github.com/wagenaartje/neataptic/tree/master/graph) folder.

## Install
Neataptic files are hosted by rawgit, just copy this link into the `<head>` tag:

```html
<script src="https://wagenaartje.github.io/neataptic/cdn/1.4.7/neataptic.js"></script>
```

Installing with node is also possible:

```javascript
npm install neataptic
```

Make sure you have Node.js `v7.6` or higher installed!

## Further notices
Parts of [Synaptic](https://github.com/cazala/synaptic) where used to develop
Neataptic.

The neuro-evolution algorithm used is the [Instinct](https://medium.com/@ThomasWagenaar/neuro-evolution-on-steroids-82bd14ddc2f6) algorithm. 

<hr>

You made it all the way down! If you appreciate this repo and want to support the development of it, please consider donating :thumbsup:
[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=CXS3G8NHBYEZE)
