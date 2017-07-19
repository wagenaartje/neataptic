var Neataptic = {
  methods: require('./methods/methods'),
  Connection: require('./architecture/connection'),
  architect: require('./architecture/architect'),
  Network: require('./architecture/network'),
  config: require('./config'),
  Group: require('./architecture/group'),
  Layer: require('./architecture/layer'),
  Node: require('./architecture/node'),
  Neat: require('./neat'),
  multi: require('./multithreading/multi')
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
