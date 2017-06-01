description: List of selection methods in Neataptic
authors: Thomas Wagenaar
keywords: genetic-algorithm, fitness, elitisim, selection

[Selection](https://en.wikipedia.org/wiki/Selection_(genetic_algorithm)) is the way in which a genetic algorithm decides which neural networks will be parents for the new generation. There are a couple of selection methods, however only a few have been integrated until now.

At the moment, there is 1 built-in selection method:
```javascript
Methods.Selection.FITNESS_PROPORTIONATE; // gives networks with a higher fitness a higher chance of selection
```

However, next to selection methods, `ELITISM` is also built in. [Elitism](https://en.wikipedia.org/wiki/Genetic_algorithm#Elitism) allows a genetic algorithm to pass on `n` neural networks with the highest fitness from the previous generation to the new generation, without any crossover steps in between. At the moment, selection is only possible inside a `Neat` object. They can be passed on as follows:

```javascript
var evolution = new Neat({
  selection: [Methods.Selection.FITNESS_PROPORTIONATE],
  elitism: 5 // amount of neural networks to keep from generation to generation
});
```

`Methods.Selection.FITNESS_PROPORTIONATE` default is `function(r){ return Math.pow(r,2); }`, which means that fitter neural networks are quadratically more likely to be select as parents. The steepness of this curve can be modified easily by changing the `2`.
