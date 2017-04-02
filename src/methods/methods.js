var Methods = {
  Activation : require('./activation'),
  Mutation   : require('./mutation'),
  Selection  : require('./selection'),
  Crossover  : require('./crossover'),
  Cost       : require('./cost')
};

// CommonJS & AMD
if (typeof define !== 'undefined' && define.amd)
{
  define([], function(){ return Methods });
}

// Node.js
if (typeof module !== 'undefined' && module.exports)
{
  module.exports = Methods;
}

// Browser
if (typeof window == 'object')
{
  (function(){
    var oldMethods = window['methods'];
    Methods.ninja = function(){
      window['methods'] = oldMethods;
      return Methods;
    };
  })();

  window['methods'] = Methods;
}
