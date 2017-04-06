/*******************************************************************************************
                                  ACTIVATION FUNCTIONS
*******************************************************************************************/

// https://en.wikipedia.org/wiki/Activation_function
var Activation = {
  LOGISTIC : function(x, derivate) {
    if (!derivate)
      return 1 / (1 + Math.exp(-x));
    var fx = Activation.LOGISTIC(x);
    return fx * (1 - fx);
  },
  TANH : function(x, derivate) {
    if (derivate)
      return 1 - Math.pow(Activation.TANH(x), 2);
    return Math.tanh(x);
  },
  IDENTITY : function(x, derivate) { // not normalized
    return derivate ? 1 : x;
  },
  HLIM : function(x, derivate) {
    return derivate ? 1 : x > 0 ? 1 : 0;
  },
  RELU : function(x, derivate) { // not normalized
    if (derivate)
      return x > 0 ? 1 : 0;
    return x > 0 ? x : 0;
  },
  SOFTSIGN : function(x, derivate){
    var d = 1 + Math.abs(x);
    if(derivate)
      return x / Math.pow(d, 2);
    return x / d;
  },
  SINUSOID : function(x, derivate){
    if(derivate)
      return Math.cos(x);
    return Math.sin(x);
  },
  GAUSSIAN : function(x, derivate){
    var d = Math.exp(-Math.pow(x, 2));
    if(derivate)
      return -2 * x * d;
    return d;
  },
  SOFTPLUS : function(x, derivate){
    if(derivate)
      return Activation.LOGISTIC(x);
    return Math.log(1 + Math.exp(x));
  },
  BENT_IDENTITY: function(x, derivate){
    var d = Math.sqrt(Math.pow(x, 2) + 1);
    if(derivate)
      return x / (2 * d) + 1;
    return (d - 1) / 2 + x;
  }
};

/* Export */
if (module) module.exports = Activation;
