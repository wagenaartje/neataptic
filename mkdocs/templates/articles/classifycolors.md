description: Classify different colors through genetic algorithms
authors: Thomas Wagenaar
keywords: color classification, genetic-algorithm, NEAT, Neataptic

Classifying is something a neural network can do quite well. In this article
I will demonstrate how you can set up the evolution process of a neural network
that learns to classify colors with Neataptic.

Colors:
<label class="checkbox-inline"><input class="colors" type="checkbox" value="red" checked="true">Red</label>
<label class="checkbox-inline"><input class="colors" type="checkbox" value="orange">Orange</label>
<label class="checkbox-inline"><input class="colors" type="checkbox" value="yellow">Yellow</label>
<label class="checkbox-inline"><input class="colors" type="checkbox" value="green" checked="true">Green</label>
<label class="checkbox-inline"><input class="colors" type="checkbox" value="blue" checked="true">Blue</label>
<label class="checkbox-inline"><input class="colors" type="checkbox" value="purple">Purple</label>
<label class="checkbox-inline"><input class="colors" type="checkbox" value="pink">Pink</label>
<label class="checkbox-inline"><input class="colors" type="checkbox" value="monochrome">Monochrome</label>

<a href="#" class="start" style="text-decoration: none"><span class="glyphicon glyphicon-play"></span> Start evolution</a>

<pre class="stats">Iteration: <span class="iteration">0</span>                                                        Best-fitness: <span class="bestfitness">0</span></pre>
<div class="row" style="margin-top: -15px;">
  <div class="col-md-6">
    <center><h2 class="blocktext">Set sorted by color</h3></center>
    <div class="row set" style="padding: 30px; margin-top: -40px; padding-right: 40px;">
    </div>
  </div>
  <div class="col-md-6">
    <center><h2 class="blocktext">Set sorted by NN</h3></center>
    <div class="row fittestset" style="padding-left: 40px;">
    </div>
  </div>
</div>

<hr>

### How it works
The algorithm to this classification is actually _pretty_ easy. One of my biggest
problem was generating the colors, however I stumbled upon [this](https://github.com/davidmerfield/randomColor)
Javascript library that allows you to generate colors randomly by name - exactly
what I needed (but it also created a problem, read below). So I used it to create
a training set:

```javascript
function createSet(){
  var set = [];

  for(index in COLORS){
    var color = COLORS[index];

    var randomColors = randomColor({ hue : color, count: PER_COLOR, format: 'rgb'});

    for(var random in randomColors){
      var rgb = randomColors[random];
      random = rgb.substring(4, rgb.length-1).replace(/ /g, '').split(',');
      for(var y in random) random[y] = random[y]/255;

      var output = Array.apply(null, Array(COLORS.length)).map(Number.prototype.valueOf, 0);
      output[index] = 1;

      set.push({ input: random, output: output, color: color, rgb: rgb});
    }
  }

  return set;
}
```

_COLORS_ is an array storing all color names in strings. The possible colors are
listed above. Next, we convert this rgb string to an array and normalize the
values between 0 and 1. Last of all, we normalize the colors using
[one-hot encoding](https://www.quora.com/What-is-one-hot-encoding-and-when-is-it-used-in-data-science).
Please note that the `color`and `rgb` object attributes are irrelevant for the algorithm.

```javascript
network.evolve(set, {
  iterations: 1,
  mutationRate: 0.6,
  elisitm: 5,
  popSize: 100,
  mutation: methods.mutation.FFW,
  cost: methods.cost.MSE
});
```

Now we create the built-in genetic algorithm in neataptic.js. We define
that we want to use all possible mutation methods and set the mutation rate
higher than normal. Sprinkle in some elitism and double the default population
size. Experiment with the parameters yourself, maybe you'll find even better parameters!

The fitness function is the most vital part of the algorithm. It basically
calculates the [Mean Squared Error](https://en.wikipedia.org/wiki/Mean_squared_error)
of the entire set. Neataptic saves the programming of this fitness calculation.
At the same time the default `growth` parameter is used, so the networks will
get penalized for being too large.

And putting together all this code will create a color classifier.
