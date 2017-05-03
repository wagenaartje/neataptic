/*******************************************************************************************
                                    COST FUNCTIONS
*******************************************************************************************/

// https://en.wikipedia.org/wiki/Loss_function
var Cost = {
  // Cross entropy error
  CROSS_ENTROPY: function(target, output){
    var error = 0;
    for(var i in output){
      // Avoid negative and zero numbers, use 1e-15 http://bit.ly/2p5W29A
      error -= target[i] * Math.log(Math.max(output[i],1e-15)) + (1-target[i]) * Math.log(1 - Math.max(output[i],1e-15));
    }
    return error;
  },
  // Mean Squared Error
  MSE: function(target, output){
    var error = 0;
    for(var i in output){
      error += Math.pow(target[i] - output[i], 2);
    }

    return error / output.length;
  },
  // Binary error
  BINARY: function(target, output){
    var misses = 0;
    for(var i in output){
      misses += Math.round(target[i] * 2) != Math.round(output[i] * 2);
    }

    return misses;
  },
  // Mean Absolute Error
  MAE: function(target, output){
    var error = 0;
    for(var i in output){
      error += Math.abs(target[i] - output[i]);
    }

    return error / output.length;
  },
  // Mean Absolute Percentage Error
  MAPE: function(target, output){
    var error = 0;
    for(var i in output){
      error += Math.abs((output[i] - target[i]) / Math.max(target[i], 1e-15));
    }

    return error / output.length;
  },
  // Mean Squared Logarithmic Error
  MSLE: function(target, output){
    var error = 0;
    for(var i in output){
      error += Math.log(Math.max(target[i], 1e-15)) - Math.log(Math.max(output[i], 1e-15));
    }

    return error;
  },
  // Hinge loss, for classifiers
  HINGE: function(target, output){
    var error = 0;
    for(var i in output){
      error += Math.max(0, 1 - target[i] * output[i]);
    }

    return error;
  }
};

/* Export */
if (module) module.exports = Cost;
