description: Classify different colors through genetic algorithms
authors: Thomas Wagenaar
keywords: color classification, genetic-algorithm, NEAT, Neataptic

> This article was written a while ago, it might be outdated!

Classifying is something a neural network can do quite well. In this article
I will demonstrate how you can set up the evolution process of a neural network
that learns to classify colors. Keep in mind: this simulation is far from optimal.

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

<pre class="stats">Iteration: <span class="iteration">0</span>         Best-fitness: <span class="bestfitness">0</span>          Average-fitness: <span class="averagefitness">0</span></pre>
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
The algorithm to this classification is actually _pretty_ easy.
One of my biggest problem was generating the colors, however I stumbled
upon [this](https://github.com/davidmerfield/randomColor)
Javascript module that allows you to generate colors randomly by name
- exactly what I needed (but it also created a problem, read below).
So I used it to create a training set:

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

      set.push({ input: random, output: [index / (COLORS.length - 1)], color: color, rgb:rgb});
    }
  }
}

return set;
```

_COLORS_ is an array storing all color names in strings. The
possible colors are listed above. Next, we convert this rgb string to
an array and normalize the values between 0 and 1. Last of all, we normalize
the colors to a number between 0 and 1 as well. Please note that the `color`
and `rgb` object attributes are irrelevant for the algorithm.

```javascript
function createNeat(){
  neat = new Neat(3, 1, fitness, {
    mutation: [
      Methods.Mutation.ADD_NODE,
      Methods.Mutation.ADD_CONN,
      Methods.Mutation.MOD_WEIGHT,
      Methods.Mutation.MOD_BIAS,
      Methods.Mutation.SUB_NODE,
      Methods.Mutation.MOD_ACTIVATION
    ],
    mutationRate: 0.6,
    elitism: 5,
    popsize: 100,
  });
}
```

Now we create the built-in genetic algorithm in neataptic.js. We define
that we want to use all possible mutation methods (except _SUB_CONN_)
and set the mutation rate higher than normal. Sprinkle in some elitism and
double the default population size. Experiment with the parameters yourself,
maybe you'll find even better parameters!

```javascript
function fitness(genome){
  var score = 0;

  for(var item in set){
    item = set[item];
    score -= Methods.Cost.MSE(item.output, genome.activate(item.input));
  }

  score -= genome.nodes.length * Math.abs(-5 - score) / (PER_COLOR * COLORS.length * 10);
  return score;
}
```

The fitness function is the most vital part of the algorithm. It basically
calculates the [Mean Squared Error](https://en.wikipedia.org/wiki/Mean_squared_error)
of the entire set. However, the small line beneath it gives a tiny penalty when
networks get bigger. This makes sure the network won't overfit the data. The penalty
is still small enough to allow small improvements.

Last but not least, we define the loop. This loop is very simple:

```javascript
function loop(){
  neat.evolve();
  if(running) setTimeout(loop, 1);
}
```

And putting together all this code will create a color classifier. There are some slight issues though:

* The networks tend to stay way too small and they hate forming
  new connections. Something I may change in the fitness function in the future!
