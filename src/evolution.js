/*******************************************************************************************
                                        EVOLUTION
*******************************************************************************************/

function Evolution(options){
  options = options || {};
  this.size = options.size || 50;
  this.mutationRate = options.mutationRate || 0.05;
  this.mutationMethod = options.mutationMethod || [Mutate.MODIFY_RANDOM_WEIGHT];
  this.crossOverMethod = options.crossOverMethod || [Crossover.UNIFORM];
  this.selectionMethod = options.selectionMethod || [Selection.FITNESS_PROPORTIONATE];
  this.fitnessFunction = options.fitnessFunction;
  this.networkSize = options.networkSize || [1, 4, 1];
  this.elitism = options.elitism || Math.round(this.size/20);

  this.population = [];
  this.createPool();

  this.newPopulation = [];
  this.parentSelection = [];
  this.scores = [];

  this.generation = 0;
}

Evolution.prototype = {
  createPool: function(){
    for(var i = 0; i < this.size; i++){
      var inputLayer = new Layer(this.networkSize[0]);
      var outputLayer = new Layer(this.networkSize[this.networkSize.length-1]);
      var hiddenLayers = [];

      for(var j = 0; j < this.networkSize.length - 2; j++){
        hiddenLayers.push(new Layer(this.networkSize[j+1]));
        if(j > 0){
          hiddenLayers[j-1].project(hiddenLayers[j]);
        }
      }

      inputLayer.project(hiddenLayers[0]);
      hiddenLayers[hiddenLayers.length-1].project(outputLayer);

      this.population.push(new Network({
        input: inputLayer,
        hidden: hiddenLayers,
        output: outputLayer
      }));
    }
  },

  evaluate: function(){
    for(var i in this.population){
      var score = this.fitnessFunction(this.population[i]);
      this.scores.push(score);
    }
  },

  select: function(){
    var sortedIndex = this.getSortedIndex();

    if(this.elitism > 0){
      for(var i = 0; i < this.elitism; i++){
        this.newPopulation.push(this.population[sortedIndex[i]]);
      }
    }
    for(var i = 0; i < this.size - this.elitism; i++){
      var parent = this.getParent(sortedIndex);
      this.parentSelection.push(parent);
      var parent = this.getParent(sortedIndex);
      this.parentSelection.push(parent);
    }
  },

  crossOver: function(){
    for(var i = 0; i < this.parentSelection.length; i+=2 ){
      var crossOverMethod = this.crossOverMethod[Math.floor(Math.random()*this.crossOverMethod.length)];
      var offspring = Network.crossOver(
        this.parentSelection[i],
        this.parentSelection[i+1],
        crossOverMethod
      );
      this.newPopulation.push(offspring);
    }
  },

  mutate: function(){
    for(var i = 0; i < this.newPopulation.length; i++){
      if(Math.random() < this.mutationRate){
        var mutateMethod = this.mutationMethod[Math.floor(Math.random() * this.mutationMethod.length)];
        this.newPopulation[i].mutate(mutateMethod);
      }
    }
  },

  replace: function(){
    this.population = [];
    for(var i = 0; i < this.newPopulation.length; i++){
      this.population.push(this.newPopulation[i]);
    }
    this.newPopulation = [];
    this.parentSelection = [];
    this.scores = [];

    this.generation ++;
  },

  getParent: function(sortedIndex){
    switch(this.selectionMethod[0]){
      case Selection.FITNESS_PROPORTIONATE:
        var r = Math.floor(Selection.FITNESS_PROPORTIONATE(Math.random()) * this.size);
        return this.population[sortedIndex[r]];
        break;
    }
  },

  getSortedIndex: function(){
    // Makes an array with indices of scores from highest -> lowest values
    var copyScores = this.scores.slice();
    var sortedIndex = [];

    for(var i = 0; i < copyScores.length; i++){
      var indexHighest = copyScores.indexOf(Math.max.apply(Math, copyScores));
      copyScores[indexHighest] = -1;
      sortedIndex.push(indexHighest);
    }
    return sortedIndex;
  },

  getAverage: function(){
    var sum = this.scores.reduce(function(a, b) { return a + b; });
    return sum / this.scores.length;
  }
}
