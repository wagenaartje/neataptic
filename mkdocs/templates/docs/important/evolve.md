The evolve function will evolve the network to conform the given training set. If you want to perform neuro-evolution on problems without a training set, check out the [NEAT](../neat.md) wiki page. This function may not always be successful, so always specify a number of iterations for it too maximally run.

<a href="https://wagenaartje.github.io/neataptic/articles/neuroevolution/">View a whole bunch of neuroevolution algorithms set up with Neataptic here.</a>

The constructor:

```javascript
myNetwork.evolve(set, options);
```

Where `set` is your training set. An example is coming up ahead. Please note that there are **a lot** of options, here are the basic options:

* `cost` - Specify the cost function for the evolution, this tells a genome in the population how well it's performing. Default: _Methods.Cost.MSE_ (recommended).
* `amount`- Set the amount of times to test the trainingset on a genome each generation. Useful for timeseries. Do not use for regular feedfoward problems. Default is _1_.
* `growth` - Set the penalty you want to give for large networks. The penalty get's calculated as follows: _penalty = (genome.nodes.length + genome.connectoins.length + genome.gates.length) * growth;_
This penalty will get added on top of the error. Your growth should be a very small number, the default value is _0.0001_

* `iterations` - Set the maximum amount of iterations/generations for the algorithm to run. Always specify this, as the algorithm will not always converge.
* `error` - Set the target error. The algorithm will stop once this target error has been reached. The default value is _0.005_.
* `log` - If set to _n_, will output every _n_ iterations (_log : 1_ will log every iteration)
* `schedule` -  You can schedule tasks to happen every _n_ iterations. An example of usage is _schedule : { function: function(){console.log(Date.now)}, iterations: 5}_. This will log the time every 5 iterations. This option allows for complex scheduled tasks during evolution.
* `clear` - If set to _true_, will clear the network after every activation. This is useful for evolving recurrent networks, more importantly for timeseries prediction. Default: _false_

Please note that you can also specify _any_ of the options that are specified on
the [neat page](../neat.md).

This function will output an object containing the final error, amount of iterations, time and the evolved network:

```javascript
return results = {
  error: mse,
  generations: neat.generation,
  time: Date.now() - start,
  evolved: fittest
};
```

Here are some evolution examples:

<details>
  <summary>XOR</summary>
   Activates the network. It will activate all the nodes in activation order and produce an output.
<pre>
var network = new Network(2,1);

// trainingSet is the same as in the previous example
network.evolve(trainingSet, {
  mutation: Methods.Mutation.FFW,
  equal: true,
  elitism: 5,
  mutationRate: 0.5
});

network.activate([0,0]); // 0.2413
network.activate([0,1]); // 1.0000
network.activate([1,0]); // 0.7663
network.activate([1,1]); // -0.008
</pre>
</details>
