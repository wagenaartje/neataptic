/*******************************************************************************
                            MULTITHREADING FUNCTIONS
                        used to set up workers and such
*******************************************************************************/

var compiledActivations = [
  function (x) { return 1 / (1 + Math.exp(-x)); },
  function (x) { return Math.tanh(x); },
  function (x) { return x; },
  function (x) { return x > 0 ? 1 : 0; },
  function (x) { return x > 0 ? x : 0; },
  function (x) { return x / (1 + Math.abs(x)); },
  function (x) { return Math.sin(x); },
  function (x) { return Math.exp(-Math.pow(x, 2)); },
  function (x) { return (Math.sqrt(Math.pow(x, 2) + 1) - 1) / 2 + x; },
  function (x) { return x > 0 ? 1 : -1; },
  function (x) { return 2 / (1 + Math.exp(-x)) - 1; },
  function (x) { return Math.max(-1, Math.min(1, x)); },
  function (x) { return Math.abs(x); },
  function (x) { return 1 - x; },
  function (x) {
    var a = 1.6732632423543772848170429916717;
    return (x > 0 ? x : a * Math.exp(x) - a) * 1.0507009873554804934193349852946;
  }
];

module.exports = {
  /**
   * Converts a dataset to a single array, which can be used to create Float64Array
   */
  serializeDataSet: function (dataSet) {
    var serialized = [dataSet[0].input.length, dataSet[0].output.length];

    for (var i = 0; i < dataSet.length; i++) {
      var j;
      for (j = 0; j < serialized[0]; j++) {
        serialized.push(dataSet[i].input[j]);
      }
      for (j = 0; j < serialized[1]; j++) {
        serialized.push(dataSet[i].output[j]);
      }
    }

    return serialized;
  },

  /**
   * Returns a worker that tests networks on a dataset
   */
  testWorker: function (cost) {
    var source = '';
    source += `var F = [${compiledActivations.toString()}];`;
    source += `var cost = ${cost.toString()};`;
    source += 'var set;';

    var onmessage = function (e) {
      if(typeof e.data.set === 'undefined'){
        var A = new Float64Array(e.data.activations);
        var S = new Float64Array(e.data.states);
        var data = new Float64Array(e.data.conns);

        function activate (input) {
          var i;
          for (i = 0; i < data[0]; i++) A[i] = input[i];
          for (i = 2; i < data.length; i++) {
            let index = data[i++];
            S[index] = data[i++]; // bias
            let squash = data[i++];
            while (data[i] !== -2) {
              if (index === A[data[i]]) { // selfconn
                S[index] += S[data[i++]] * data[i++] * (data[i++] === -1 ? 1 : A[data[i - 1]]);
              } else { // normal conn
                S[index] += A[data[i++]] * data[i++] * (data[i++] === -1 ? 1 : A[data[i - 1]]);
              }
            }
            A[index] = F[squash](S[index]);
          }

          var output = [];
          for (i = A.length - data[1]; i < A.length; i++) output.push(A[i]);
          return output;
        }

        var ins = set[0];
        var out = set[1];

        var error = 0;
        // Calculate how much samples are in the set
        for (var i = 0; i < (set.length - 2) / (ins + out); i++) {
          let input = [];
          var j;
          for (j = 2 + i * (ins + out); j < 2 + i * (ins + out) + ins; j++) {
            input.push(set[j]);
          }
          let target = [];
          for (j = 2 + i * (ins + out) + ins; j < 2 + i * (ins + out) + ins + out; j++) {
            target.push(set[j]);
          }

          let output = activate(input);
          error += cost(target, output);
        }

        var answer = { buffer: new Float64Array([error / ((set.length - 2) / (ins + out))]).buffer };
        postMessage(answer, [answer.buffer]);
      } else {
        set = new Float64Array(e.data.set);
      }
    };

    source += `onmessage = ${onmessage.toString()}`;

    var blob = new Blob([source]);
    var blobURL = window.URL.createObjectURL(blob);
    var worker = new Worker(blobURL);

    return { url: blobURL, worker: worker };
  }
};
