var Gynaptic = {
  Neuron: require('./neuron'),
  Evolution: require('./evolution'),
  Trainer: require('./trainer'),
  Methods: require('./methods'),
  Layer: require('./layer'),
  Network: require('./network'),
  Architect: require('./architect')
};

// CommonJS & AMD
if (typeof define !== 'undefined' && define.amd)
{
  define([], function(){ return Gynaptic });
}

// Node.js
if (typeof module !== 'undefined' && module.exports)
{
  module.exports = Gynaptic;
}

// Browser
if (typeof window == 'object')
{
  (function(){
    var oldGynaptic = window['gynaptic'];
    Gynaptic.ninja = function(){
      window['gynaptic'] = oldGynaptic;
      return Gynaptic;
    };
  })();

  window['gynaptic'] = Gynaptic;
}
