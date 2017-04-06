/* Export */
if (module) module.exports = Trainer;

/* Import */
var Methods = require('./methods/methods');

/* Shorten var names */
var Cost = Methods.Cost;

/*******************************************************************************************
                                        TRAINER
*******************************************************************************************/

/**
 * Creates a trainer
 */
function Trainer(network, options) {
  options = options || {};
  this.network = network;
  this.rate = options.rate || .2;
  this.iterations = options.iterations || 100000;
  this.error = options.error || .005;
  this.cost = options.cost || null;
  this.crossValidate = options.crossValidate || null;
}

Trainer.prototype = {
  /**
   * Train a trainingset to a network
   */
  train: function(set, options) {
    var error = 1;
    var iterations = bucketSize = 0;
    var abort = false;
    var currentRate;
    var cost = options && options.cost || this.cost || Cost.MSE;
    var crossValidate = false, testSet, trainSet;

    var start = Date.now();

    // Configure given optoins
    if (options) {
      if (options.shuffle) {
        //+ Jonas Raoni Soares Silva
        //@ http://jsfromhell.com/array/shuffle [v1.0]
        function shuffle(o) { //v1.0
          for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
          return o;
        };
      }
      if (options.iterations) this.iterations = options.iterations;
      if (options.error) this.error = options.error;
      if (options.rate) this.rate = options.rate;
      if (options.cost) this.cost = options.cost;
      if (options.schedule) this.schedule = options.schedule;

      if (this.crossValidate || options.crossValidate) {
        if(!this.crossValidate) this.crossValidate = {};
        crossValidate = true;
        if (options.crossValidate.testSize)
          this.crossValidate.testSize = options.crossValidate.testSize;
        if (options.crossValidate.testError)
          this.crossValidate.testError = options.crossValidate.testError;
      }
    }

    // Splits the given rates, assigns it to chunks of iteration
    currentRate = this.rate;
    if(Array.isArray(this.rate)){
      var bucketSize = Math.floor(this.iterations / this.rate.length);
    }

    // Splits the given set into a training set and testing set if crossvalidation is enabled
    if(crossValidate){
      var numTrain = Math.ceil((1 - this.crossValidate.testSize) * set.length);
      trainSet = set.slice(0, numTrain);
      testSet = set.slice(numTrain);
    }

    while ((!abort && iterations < this.iterations && error > this.error)) {
      if (crossValidate && error <= this.crossValidate.testError) {
        break;
      }
      iterations++;

      // If the rate is a function, calculate the new rate
      if(typeof this.rate === 'function'){
        currentRate = this.rate(iterations, error);
      }

      error = 0;

      // Changes the rate depending on the iteration (if enabled)
      if(bucketSize > 0) {
        var currentBucket = Math.floor(iterations / bucketSize);
        currentRate = this.rate[currentBucket] || currentRate;
      }

      // Checks if cross validation is enabled
      if (crossValidate) {
        this._trainSet(trainSet, currentRate, cost);
        error += this.test(testSet).error;
      } else {
        error += this._trainSet(set, currentRate, cost);
        error /= set.length;
      }


      // Checks for options such as scheduled logs and shuffling
      if (options) {
        if (this.schedule && this.schedule.every && iterations % this.schedule.every == 0){
          abort = this.schedule.do({ error: error, iterations: iterations, rate: currentRate });
        } else if (options.log && iterations % options.log == 0){
          console.log('iterations', iterations, 'error', error, 'rate', currentRate);
        };

        if (options.shuffle) shuffle(set);
      }
    }

    // Creates an object of the results
    var results = {
      error: error,
      iterations: iterations,
      time: Date.now() - start
    };

    return results;
  },

  /**
   * Trains any given set to a network, using a WebWorker (only for the browser).
   * @return a Promise of the results.
   */
  trainAsync: function(set, options) {
    var train = this.workerTrain.bind(this);
    return new Promise(function(resolve, reject) {
      try {
        train(set, resolve, options, true)
      } catch(e) {
        reject(e)
      }
    })
  },

  /**
   * Performs one training epoch and returns the error
   * private function used in this.train
   */
  _trainSet: function(set, currentRate, costFunction) {
    var errorSum = 0;
    for (var train in set) {
      var input = set[train].input;
      var target = set[train].output;

      var output = this.network.activate(input);
      this.network.propagate(currentRate, target);

      errorSum += costFunction(target, output);
    }
    return errorSum;
  },

  /**
   * Tests a set and returns the error and elapsed time
   */
  test: function(set, options) {
    var error = 0;
    var input, output, target;
    var cost = options && options.cost || this.cost || Cost.MSE;

    var start = Date.now();

    for (var test in set) {
      input = set[test].input;
      target = set[test].output;
      output = this.network.activate(input);
      error += cost(target, output);
    }

    error /= set.length;

    var results = {
      error: error,
      time: Date.now() - start
    };

    return results;
  },

  /**
   * Trains any given set to a network using a WebWorker
   * [deprecated: use trainAsync instead]
   */
  workerTrain: function(set, callback, options, suppressWarning) {

    if (!suppressWarning) {
      console.warn('Deprecated: do not use `workerTrain`, use `trainAsync` instead.')
    }
    var that = this;

    if (!this.network.optimized)
      this.network.optimize();

    // Create a new worker
    var worker = this.network.worker(this.network.optimized.memory, set, options);

    // train the worker
    worker.onmessage = function(e) {
      switch(e.data.action) {
          case 'done':
            var iterations = e.data.message.iterations;
            var error = e.data.message.error;
            var time = e.data.message.time;

            that.network.optimized.ownership(e.data.memoryBuffer);

            // Done callback
            callback({
              error: error,
              iterations: iterations,
              time: time
            });

            // Delete the worker and all its associated memory
            worker.terminate();
          break;

          case 'log':
            console.log(e.data.message);

          case 'schedule':
            if (options && options.schedule && typeof options.schedule.do === 'function') {
              var scheduled = options.schedule.do
              scheduled(e.data.message)
            }
          break;
      }
    };

    // Start the worker
    worker.postMessage({action: 'startTraining'});
  },
};
