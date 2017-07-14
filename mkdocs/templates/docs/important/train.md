description: Documentation of the train function, used to train neural networks in Neataptic.
authors: Thomas Wagenaar
keywords: train, backpropagation, neural-network, dropout, momentum, learning rate

The train method allows you to train your network with given parameters. If this
documentation is too complicated, I recommend to check out the
[training tutorial](../tutorials/training.md)!

### Constructor
Initiating the training process is similar to initiating the evolution process:

<pre>
myNetwork.train(trainingSet, options)
</pre>

#### Training set

Where set is an array containing objects in the following way: <code>{ input: [input(s)], output: [output(s)] }</code>. So for example, this is how you would train an XOR:

<pre>
var network = new architect.Perceptron(2,4,1);

// Train the XOR gate
network.train([{ input: [0,0], output: [0] },
               { input: [0,1], output: [1] },
               { input: [1,0], output: [1] },
               { input: [1,1], output: [0] }]);

network.activate([0,1]); // 0.9824...
</pre>

#### Options

Options allow you to finetune the training process:

* `log` - If set to _n_, will output the training status every _n_ iterations (_log : 1_ will log every iteration)
* `error` - The target error to reach, once the network falls below this error, the process is stopped. Default: _0.03_
* `cost` - The cost function to use. See [cost methods](../methods/cost.md). Default: _methods.cost.MSE_
* `rate` - Sets the learning rate of the backpropagation process. Default: _0.3_.
* `dropout` - Sets the dropout of the hidden network nodes. Read more about it on the [regularization](../methods/regularization.md) page. Default: _0_.
* `shuffle` - When set to _true_, will shuffle the training data every iteration. A good option to use if your network is performing less in cross validation than in the real training set. Default: _false_
* `iterations` - Sets the amount of iterations the process will maximally run, even when the target error has not been reached. Default: _NaN_
* `schedule` - You can schedule tasks to happen every _n_ iterations. An example of usage is _schedule : { function: function(data){console.log(Date.now, data.error)}, iterations: 5}_. This will log the time and error every 5 iterations. This option allows for complex scheduled tasks during training.
* `clear` - If set to _true_, will clear the network after every activation. This is useful for training [LSTM](../builtins/lstm.md)'s, more importantly for timeseries prediction. Default: _false_
* `momentum` - Sets the momentum of the weight change. More info [here](https://www.willamette.edu/~gorr/classes/cs449/momrate.html). Default: _0_
* `ratePolicy` - Sets the rate policy for your training. This allows your rate to be dynamic, see the [rate policies page](../methods/rate.md). Default: _methods.rate.FIXED()_
* `batchSize` - Sets the (mini-) batch size of your training. Default: `1` (online training)

If you want to use the default options, you can either pass an empty object or
just dismiss the whole second argument:

```javascript
myNetwork.evolve(trainingSet, {});

// or

myNetwork.evolve(trainingSet);
```

The default value will be used for any option that is not explicitly provided
in the options object.

#### Example

So the following setup will train until the error of <code>0.0001</code> is reached or if the iterations hit <code>1000</code>. It will log the status every iteration as well. The rate has been lowered to <code>0.2</code>.

```javascript
var network = new architect.Perceptron(2,4,1);

var trainingSet = [
  { input: [0,0], output: [1] },
  { input: [0,1], output: [0] },
  { input: [1,0], output: [0] },
  { input: [1,1], output: [1] }
];

// Train the XNOR gate
network.train(trainingSet, {
  log: 1,
  iterations: 1000,
  error: 0.0001,
  rate: 0.2
});
```

#### Cross-validation

The last option is the **crossValidate** option, which will validate if the network also performs well enough on a non-trained part of the given set. Options:

* `crossValidate.testSize` - Sets the amount of test cases that should be assigned to cross validation. If set to _0.4_, 40% of the given set will be used for cross validation.
* `crossValidate.testError` - Sets the target error of the validation set.

So an example of cross validation would be:

```javascript
var network = new architect.Perceptron(2,4,1);

var trainingSet = [
  { input: [0,0], output: [1] },
  { input: [0,1], output: [0] },
  { input: [1,0], output: [0] },
  { input: [1,1], output: [1] }
];

// Train the XNOR gate
network.train(trainingSet, {
  crossValidate :
    {
      testSize: 0.4,
      testError: 0.02
    }
});
```

PS: don't use cross validation for small sets, this is just an example!
