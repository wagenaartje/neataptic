description: A simple tutorial on how to get started on training neural networks with Neataptic
authors: Thomas Wagenaar
keywords: training, machine-learning, neural-network, backpropagation

Training your network is not that hard to do - it's the preparation that is harder.

### The training set
First of all, you should normalize your data. That means you have to convert all your input and output data to values within a range of `0` to `1`. If you are unsure how to do this, visit the [Normalization](normalization.md) page. Each training sample in your training set should be an object that looks as follows:

```javascript
{ input: [], output: [] }
```

So an example of a training set would be (XOR):

```javascript
var myTrainingSet = [
  { input: [0,0], output: [0] },
  { input: [0,1], output: [1] },
  { input: [1,0], output: [1] },
  { input: [1,1], output: [0] }
];
```

### The network architecture
There is no fixed rule of thumb for choosing your network architecture. Adding more layers makes your neural network recognize more abstract relationships, although it requires more computation. Any function can be mapped with just one (big) hidden layer, but I do not advise this. I advise to use any of the following architectures if you're a starter:

* [Perceptron](../builtins/perceptron.md) - a fully connected feed forward network
* [LSTM](../builtins/lstm.md) - a recurrent network that can recognize patterns over very long time lags between inputs.
* [NARX](../builtins/narx.md) - a recurrent network that remembers previous inputs and outputs

But for most problems, a perceptron is sufficient. Now you only have to determine the size and amount of the network layers. I advise you to take a look at this [StackExchange question](https://stats.stackexchange.com/questions/181/how-to-choose-the-number-of-hidden-layers-and-nodes-in-a-feedforward-neural-netw) for more help on deciding the hidden size.

For the training set I provided above (XOR), there are only 2 inputs and one output. I use the rule of thumb: `input size + output size = hidden size`. So the creation of my network would like this:

```javascript
myNetwork = architect.Perceptron(2, 3, 1);
```

### Training the network
Finally: we're going to train the network. The function for training your network is very straight-forward:

```javascript
yourNetwork.train(yourData, yourOptions);
```

There are _a lot_ of options. I won't go over all of them here, but you can check out the [Network wiki](../architecture/network.md) for all the options.

I'm going to use the following options:

* `log: 10` - I want to log the status every 10 iterations
* `error: 0.03` - I want the training to stop if the error is below 0.03
* `iterations: 1000` - I want the training to stop if the error of 0.03 hasn't been reached after 1000 iterations
* `rate: 0.3` - I want a learning rate of 0.3

So let's put it all together:

```javascript
myNetwork.train(myTrainingSet, {
  log: 10,
  error: 0.03,
  iterations: 1000,
  rate: 0.3
});

// result: {error: 0.02955628620843985, iterations: 566, time: 31}
```

Now let us check if it _actually_ works:

```javascript
myNetwork.activate([0,0]); // [0.1257225731473885]
myNetwork.activate([0,1]); // [0.9371910625522613]
myNetwork.activate([1,0]); // [0.7770757408042104]
myNetwork.activate([1,1]); // [0.1639697315652196]
```

And it works! If you want it to be more precise, lower the target error.

### Help
If you need more help, feel free to create an issue [here](https://github.com/wagenaartje/neataptic/issues)!
