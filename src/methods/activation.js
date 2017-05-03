/*******************************************************************************************
                                  ACTIVATION FUNCTIONS
*******************************************************************************************/

// https://en.wikipedia.org/wiki/Activation_function
// https://stats.stackexchange.com/questions/115258/comprehensive-list-of-activation-functions-in-neural-networks-with-pros-cons
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
  STEP : function(x, derivate) {
    return derivate ? 0 : x > 0 ? 1 : 0;
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
    return Math.log(Math.max(1 + Math.exp(x), 1e-15));
  },
  BENT_IDENTITY: function(x, derivate){
    var d = Math.sqrt(Math.pow(x, 2) + 1);
    if(derivate)
      return x / (2 * d) + 1;
    return (d - 1) / 2 + x;
  },
  // https://www.rocq.inria.fr/axis/modulad/Workshop_Franco_Bresilien/programme/GomesLudermir-slides.pdf
  COMPLEMENTARY_LOG_LOG : function(x, derivate){
    if(derivate)
      return Math.exp(x) * Math.exp(-Math.exp(x));
    return 1 - Math.exp(-Math.exp(x));
  },
  BIPOLAR : function(x, derivate){
    return derivate ? 0 : x > 0 ? 1 : -1;
  },
  BIPOLAR_SIGMOID : function(x, derivate){
    var d = 2 / (1 + Math.exp(-x)) - 1;
    if(derivate)
      return 1/2 * (1 + d) * (1 - d);
    return d;
  },
  HARD_TANH : function(x, derivate){
    if(derivate)
      return x > -1 && x < 1 ? 1 : 0;
    return Math.max(-1, Math.min(1, x));
  },
  ABSOLUTE : function(x, derivate){
    if(derivate)
      return x < 0 ? -1 : 1;
    return Math.abs(x);
  }
};

/* Export */
if (module) module.exports = Activation;
