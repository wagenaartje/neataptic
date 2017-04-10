# Neataptic [![Build Status](https://travis-ci.org/wagenaartje/neataptic.svg?branch=master)](https://travis-ci.org/wagenaartje/neataptic)

Neataptic is thé Javascript neural network solution. Not only does it allow you to create neural networks on-the-go, it also allows you
to visualise your networks to understand what's really going on. An important aspect that neataptic introduces in comparison with its
competitors is neuro-evolution. You can evolve neural networks through a process described in the 
[NEAT](http://nn.cs.utexas.edu/downloads/papers/stanley.gecco02_1.pdf) paper. Scroll down for some examples! Appreciate the repo? Show it by starring it! :star:

<img src="https://i.gyazo.com/5f05245edc02d4c28097d40928568ee1.png" width="33%"/><img src="https://i.gyazo.com/0c2009a073053af5d3729bd361f8b8a6.png" width="33%"/><img src="https://i.gyazo.com/9934cb575d0c24a6faa23dbc3a055ffd.png" width="33%"/>
[Click here to play around with neural networks!](https://wagenaartje.github.io/neataptic/articles/crossover/)

## Usage
Head over to the [wiki](https://github.com/wagenaartje/neataptic/wiki) for detailed usage. If you want to visualise your graphs, head
over to the [graph](https://github.com/wagenaartje/neataptic/tree/master/graph) folder. This example shows how to create a basic neural network, and teaching it to perform as an XOR gate:

```javascript
var network = new Architect.Perceptron(2,4,1);
var trainer = new Trainer(network); 

// Train the XOR gate
trainer.train([
  { input: [0,0], output: [0] },
  { input: [0,1], output: [1] },
  { input: [1,0], output: [1] },
  { input: [1,1], output: [0] },
],
{
  iterations: 5000,
  error: 0.001,
  log: 1
}
);
```

If you want to get started on visualisation, [check this out](https://github.com/wagenaartje/neataptic/wiki/Visualising-101).

## Examples
Neural networks can be used for nearly anything; driving a car, playing a game and even to predict words! At this moment, 
the website only displays a small amount of examples. If you have an interesting project that you want to share with other users
of Neataptic, feel free to create a pull request!

- [Evolve XOR](https://wagenaartje.github.io/neataptic/articles/evolvexor/)
- [Crossover](https://wagenaartje.github.io/neataptic/articles/crossover/)
- [Color classification](https://wagenaartje.github.io/neataptic/articles/classifycolors/)

## Install
Neataptic files are hosted by rawgit, just copy this link into the `<head>` tag:
```html
<script src="https://cdn.rawgit.com/wagenaartje/neataptic/36f51134/dist/neataptic.js"></script>
```

Installing with node is also possible:

```javascript
npm install neataptic
```
