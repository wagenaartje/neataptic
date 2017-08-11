/* Export */
module.exports = TestWorker;

/* Import */
var multi = require('../../multi');

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
      var serialized = network.serialize();

      var data = {
        activations: new Float64Array(serialized[0]).buffer,
        states: new Float64Array(serialized[1]).buffer,
        conns: new Float64Array(serialized[2]).buffer
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
      var F = [${multi.activations.toString()}];
      var cost = ${cost.toString()};
      var multi = {
        deserializeDataSet: ${multi.deserializeDataSet.toString()},
        testSerializedSet: ${multi.testSerializedSet.toString()},
        activateSerializedNetwork: ${multi.activateSerializedNetwork.toString()}
      };

      this.onmessage = function (e) {
        if(typeof e.data.set === 'undefined'){
          var A = new Float64Array(e.data.activations);
          var S = new Float64Array(e.data.states);
          var data = new Float64Array(e.data.conns);

          var error = multi.testSerializedSet(set, cost, A, S, data, F);

          var answer = { buffer: new Float64Array([error ]).buffer };
          postMessage(answer, [answer.buffer]);
        } else {
          set = multi.deserializeDataSet(new Float64Array(e.data.set));
        }
      };`;

    return source;
  }
};
