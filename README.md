# Neataptic [![Build Status](https://travis-ci.org/wagenaartje/neataptic.svg?branch=master)](https://travis-ci.org/wagenaartje/neataptic) [![Downloads](https://img.shields.io/npm/dm/neataptic.svg?colorB=ffa500)](https://www.npmjs.com/package/neataptic) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/wagenaartje/neataptic/master/LICENSE)

Neataptic is thé Javascript neural network solution. Not only does it allow you to create neural networks on-the-go, it also allows you
to visualise your networks to understand what's really going on. An important aspect that neataptic introduces in comparison with its
competitors is neuro-evolution. You can evolve neural networks through a process described in the
[NEAT](http://nn.cs.utexas.edu/downloads/papers/stanley.gecco02_1.pdf) paper. An example of neuro-evolution is [Agar.io AI](https://wagenaartje.github.io/neataptic/articles/agario/), where neural agents learn to play Agar.io by evolving their topology! Appreciate the repo? Show it by starring it! :star:

<img src="https://i.gyazo.com/27e8003df60dbbd21e240a53f8ec093a.png" width="33%"/><img src="https://i.gyazo.com/5325ca9217dbca3151a891739548a01d.png" width="33%"/><img src="https://i.gyazo.com/f566d2364af43dd3a78c8926ed204a51.png" width="33%"/>
[Click here to play around with neural networks!](https://wagenaartje.github.io/neataptic/articles/playground/)

## Examples
Neural networks can be used for nearly anything; driving a car, playing a game and even to predict words! At this moment,
the website only displays a small amount of examples. If you have an interesting project that you want to share with other users
of Neataptic, feel free to create a pull request!

Basic XOR example:

```js
var network = new neataptic.Architect.Perceptron(2,4,1);

// Train the XOR gate
network.train([{ input: [0,0], output: [0] },
               { input: [0,1], output: [1] },
               { input: [1,0], output: [1] },
               { input: [1,1], output: [0] }]);

network.activate([0,1]); // 0.9824...
```

Or predict timeseries with a NARX network ([run it here yourself](https://jsfiddle.net/wagenaartje/1o7t91yk/2/)):

```javascript
var narx = new neataptic.Architect.NARX(1, 5, 1, 3, 3);

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
Head over to the [wiki](https://github.com/wagenaartje/neataptic/wiki) for detailed usage. If you want to visualise your graphs, head
over to the [graph](https://github.com/wagenaartje/neataptic/tree/master/graph) folder.

## Install
Neataptic files are hosted by rawgit, just copy this link into the `<head>` tag:
```html
<script src="https://wagenaartje.github.io/neataptic/cdn/neataptic.js"></script>
```

Installing with node is also possible:

```javascript
npm install neataptic
```

<hr>

You made it all the way down! If you appreciate this repo and want to support the development of it, please consider donating :thumbsup:
[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=CXS3G8NHBYEZE)
