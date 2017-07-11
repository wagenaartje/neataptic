/* Export */
module.exports = WebWorker;

/* Import */
var Multi = require('./multi');

/*******************************************************************************
                                WEBWORKER
*******************************************************************************/

function WebWorker (dataSet, cost) {
  var blob = new Blob([this._createBlobString(cost)]);
  this.url = window.URL.createObjectURL(blob);
  this.worker = new Worker(this.url);

  var data = { set: new Float64Array(dataSet).buffer };
  this.worker.postMessage(data, [data.set]);
}

WebWorker.prototype = {
  evaluate: function (network) {
    return new Promise((resolve, reject) => {
      var serialzed = network.serialize();

      var data = {
        activations: serialzed[0].buffer,
        states: serialzed[1].buffer,
        conns: serialzed[2].buffer
      };

      this.worker.onmessage = function (e) {
        var error = new Float64Array(e.data.buffer)[0];
        resolve(error);
      };

      this.worker.postMessage(data, [data.activations, data.states, data.conns]);
    });
  },

  terminate: async function () {
    this.worker.terminate();
    window.URL.revokeObjectURL(this.url);
  },

  _createBlobString: function (cost) {
    var source = `
      var A, S, data;
      var F = [${Multi.snippets.activations.toString()}];
      var cost = ${cost.toString()};
      var test = ${Multi.snippets.testSerializedSet.toString()};
      var activate = ${Multi.snippets.activate.toString()};
      var set;

      var onmessage = function (e) {
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
