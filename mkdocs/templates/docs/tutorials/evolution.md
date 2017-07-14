description: A simple tutorial on how to get started on evolving neural networks with Neataptic
authors: Thomas Wagenaar
keywords: evolution, machine-learning, neural-network, neuro-evolution, neat

Neuro-evolution is something that is fairly underused in the machine learning
community. It is quite interesting to see new architectures develop for
complicated problems. In this guide I will tell you how to set up a simple
supervised neuro-evolution process. If you want to do an unsupervised
neuro-evolution process, head over to the [NEAT](../neat.md) page.

### The training set
You always have to supply a training set for supervised learning. First of all,
you should normalize your data. That means you have to convert all your input and
output data to values within a range of `0` to `1`. If you are unsure how to do
this, visit the [Normalization](normalization.md) tutorial. Each training sample
in your training set should be an object that looks as follows:

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
You can start off with _any_ architecture. You can even use the evolution process
to optimize already trained networks. However, I advise you to start with an empty
network, as originally described in the [NEAT](http://nn.cs.utexas.edu/downloads/papers/stanley.ec02.pdf)
 paper. The constructor of an empty network is as follows:

```javascript
var myNetwork = new Network(inputSize, outputSize);
```

So for the training set I made above, the network can be constructed as follows:

```javascript
var myNetwork = new Network(2, 1); // 2 inputs, 1 output
```

Now we have our network. We don't have to tinker around anymore; the evolution
process will do that _for_ us.

### Evolving the network
Be warned: there are _a lot_ of options involved in the evolution of a process.
It's a matter of trial and error before you reach options that work really well.
Please note that most options are optional, as default values have been configured.

Please note that the `evolve` function is an `async` function, so you need to wrap
it in an async function to call `await`.

The evolve function is as follows:

```javascript
yourNetwork.evolve(yourData, yourOptions);
```

Check out the evolution options [here](../architecture/network.md) and [here](../neat.md). I'm going to use the following options to evolve the network:

* `mutation: methods.mutation.FFW` - I want to solve a feed forward problem, so I supply all feed forward mutation methods. More info [here](../methods/mutation.md).
* `equal: true` - During the crossover process, parent networks will be equal. This allows the spawning of new network architectures more easily.
* `popsize: 100` - The default population size is 50, but 100 worked better for me.
* `elitism: 10` - I want to keep the fittest 10% of the population to the next generation without breeding them.
* `log: 10` - I want to log the status every 10 iterations.
* `error: 0.03` - I want the evolution process when the error is below 0.03;
* `iterations: 1000` - I want the evolution process to stop after 1000 iterations if the target error hasn't been reached yet.
* `mutationRate: 0.5` - I want to increase the mutation rate to surpass possible local optima.

So let's put it all together:

```javascript
await myNetwork.evolve(myTrainingSet, {
  mutation: methods.mutation.FFW,
  equal: true,
  popsize: 100,
  elitism: 10,
  log: 10,
  error: 0.03,
  iterations: 1000,
  mutationRate: 0.5
});

// results: {error: 0.0009000000000000001, generations: 255, time: 1078}
// please note that there is a hard local optima that has to be beaten
```

Now let us check if it _actually_ works:

```javascript
myNetwork.activate([0,0]); // [0]
myNetwork.activate([0,1]); // [1]
myNetwork.activate([1,0]); // [1]
myNetwork.activate([1,1]); // [0]
```

Notice how precise the results are. That is because the evolution process makes
full use of the diverse activation functions. It actually uses the [Activation.STEP](../methods/activation.md)
function to get a binary `0` and `1` output.

### Help
If you need more help, feel free to create an issue [here](https://github.com/wagenaartje/neataptic/issues)!
