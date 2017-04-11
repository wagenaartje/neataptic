var Neataptic = {
  Node      : require('./node'),
  Neat      : require('./neat'),
  Network   : require('./network'),
  Methods   : require('./methods/methods'),
  Architect : require('./architect')
};

// CommonJS & AMD
if (typeof define !== 'undefined' && define.amd)
{
  define([], function(){ return Neataptic });
}

// Node.js
if (typeof module !== 'undefined' && module.exports)
{
  module.exports = Neataptic;
}

// Browser
if (typeof window == 'object')
{
  (function(){
    var old = window['neataptic'];
    Neataptic.ninja = function(){
      window['neataptic'] = old;
      return Neataptic;
    };
  })();

  window['neataptic'] = Neataptic;
}
