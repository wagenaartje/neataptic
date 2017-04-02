/*******************************************************************************************
                                    COST FUNCTIONS
*******************************************************************************************/

// https://en.wikipedia.org/wiki/Loss_function
var Cost = {
  CROSS_ENTROPY: function(target, output)
  {
    var crossentropy = 0;
    for (var i in output)
      crossentropy -= target[i] * Math.log(output[i]+1e-15) + (1-target[i]) * Math.log((1+1e-15) - output[i]); // +1e-15 is a tiny push away to avoid Math.log(0)
    return crossentropy;
  },
  MSE: function(target, output)
  {
    var mse = 0;
    for (var i in output)
      mse += Math.pow(target[i] - output[i], 2);
    return mse / output.length;
  },
  BINARY: function(target, output){
    var misses = 0;
    for (var i in output)
      misses += Math.round(target[i] * 2) != Math.round(output[i] * 2);
    return misses;
  }
};

/* Export */
if (module) module.exports = Cost;
