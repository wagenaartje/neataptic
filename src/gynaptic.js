var Gynaptic = {
  Neuron    : require('./nodes/neuron'),
  Layer     : require('./nodes/layer'),
  Network   : require('./nodes/network'),
  Evolution : require('./evolution'),
  Trainer   : require('./trainer'),
  Methods   : require('./methods/methods'),
  Architect : require('./architect'),
  Brain     : require('./brain')
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
