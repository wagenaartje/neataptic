description: How to use the Perceptron network in Neataptic
authors: Thomas Wagenaar
keywords: feed-forward, neural-network, perceptron, MLP, architecture

This architecture allows you to create multilayer perceptrons, also known as feed-forward neural networks. They consist of a sequence of layers, each fully connected to the next one.

![multilayer perceptron](http://www.codeproject.com/KB/dotnet/predictor/network.jpg "Multilayer Perceptron Architecture")

You have to provide a minimum of 3 layers (input, hidden and output), but you can use as many hidden layers as you wish. This is a `Perceptron` with 2 neurons in the input layer, 3 neurons in the hidden layer, and 1 neuron in the output layer:

```javascript
var myPerceptron = new architect.Perceptron(2,3,1);
```

And this is a deep multilayer perceptron with 2 neurons in the input layer, 4 hidden layers with 10 neurons each, and 1 neuron in the output layer

```javascript
var myPerceptron = new architect.Perceptron(2, 10, 10, 10, 10, 1);
```
