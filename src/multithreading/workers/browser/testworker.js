/* Export */
module.exports = TestWorker;

/* Import */
var snippets = require('../../snippets');

/*******************************************************************************
                                WEBWORKER
*******************************************************************************/

function TestWorker (dataSet, cost) {
  var blob = new Blob([this._createBlobString(cost)]);
  this.url = window.URL.createObjectURL(blob);
  this.worker = new Worker(this.url);

  var data = { set: new Float64Array(dataSet).buffer };
  this.worker.postMessage(data, [data.set]);
}

TestWorker.prototype = {
  evaluate: function (network) {
    return new Promise((resolve, reject) => {
      var serialzed = network.serialize();

      var data = {
        activations: new Float64Array(serialzed[0]).buffer,
        states: new Float64Array(serialzed[1]).buffer,
        conns: new Float64Array(serialzed[2]).buffer
      };

      this.worker.onmessage = function (e) {
        var error = new Float64Array(e.data.buffer)[0];
        resolve(error);
      };

      this.worker.postMessage(data, [data.activations, data.states, data.conns]);
    });
  },

  terminate: function () {
    this.worker.terminate();
    window.URL.revokeObjectURL(this.url);
  },

  _createBlobString: function (cost) {
    var source = `
      var A, S, data;
      var F = [${snippets.activations.toString()}];
      var cost = ${cost.toString()};
      var test = ${snippets.testSerializedSet.toString()};
      var activate = ${snippets.activate.toString()};
      var set;

      this.onmessage = function (e) {
        if(typeof e.data.set === 'undefined'){
          A = new Float64Array(e.data.activations);
          S = new Float64Array(e.data.states);
          data = new Float64Array(e.data.conns);

          var error = test(set);

          var answer = { buffer: new Float64Array([error ]).buffer };
          postMessage(answer, [answer.buffer]);
        } else {
          set = new Float64Array(e.data.set);
        }
      };`;

    return source;
  }
};
