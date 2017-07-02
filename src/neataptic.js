var Neataptic = {
  Methods: require('./methods/methods'),
  Connection: require('./connection'),
  Architect: require('./architect'),
  Network: require('./network'),
  Config: require('./config'),
  Group: require('./group'),
  Layer: require('./layer'),
  Node: require('./node'),
  Neat: require('./neat')
};

// CommonJS & AMD
if (typeof define !== 'undefined' && define.amd) {
  define([], function () { return Neataptic; });
}

// Node.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Neataptic;
}

// Browser
if (typeof window === 'object') {
  (function () {
    var old = window['neataptic'];
    Neataptic.ninja = function () {
      window['neataptic'] = old;
      return Neataptic;
    };
  })();

  window['neataptic'] = Neataptic;
}
