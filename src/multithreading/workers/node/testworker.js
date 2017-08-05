/* Export */
module.exports = TestWorker;

/* Import */
var cp = require('child_process');

/*******************************************************************************
                                WEBWORKER
*******************************************************************************/

function TestWorker (dataSet, cost) {
  this.worker = cp.fork(__dirname + '/worker');

  this.worker.send({ set: dataSet, cost: cost.name });
}

TestWorker.prototype = {
  evaluate: function (network) {
    return new Promise((resolve, reject) => {
      var serialized = network.serialize();

      var data = {
        activations: [].slice.call(serialized[0]),
        states: [].slice.call(serialized[1]),
        conns: [].slice.call(serialized[2])
      };

      var _that = this.worker;
      this.worker.on('message', function callback (e) {
        _that.removeListener('message', callback);
        resolve(e);
      });

      this.worker.send(data);
    });
  },

  terminate: function () {
    this.worker.kill();
  }
};
