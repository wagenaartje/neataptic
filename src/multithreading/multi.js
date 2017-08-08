/*******************************************************************************
                                MULTITHREADING
*******************************************************************************/

var multi = {
  /** Workers */
  workers: require('./workers/workers'),

  /** Serializes a dataset */
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

  /** Activate a serialized network */
  activateSerializedNetwork: function (input, A, S, data, F) {
    for (var i = 0; i < data[0]; i++) A[i] = input[i];
    for (i = 2; i < data.length; i++) {
      let index = data[i++];
      let bias = data[i++];
      let squash = data[i++];
      let selfweight = data[i++];
      let selfgater = data[i++];

      S[index] = (selfgater === -1 ? 1 : A[selfgater]) * selfweight * S[index] + bias;

      while (data[i] !== -2) {
        S[index] += A[data[i++]] * data[i++] * (data[i++] === -1 ? 1 : A[data[i - 1]]);
      }
      A[index] = F[squash](S[index]);
    }

    var output = [];
    for (i = A.length - data[1]; i < A.length; i++) output.push(A[i]);
    return output;
  },

  /** Deserializes a dataset to an array of arrays */
  deserializeDataSet: function (serializedSet) {
    var set = [];

    var sampleSize = serializedSet[0] + serializedSet[1];
    for (var i = 0; i < (serializedSet.length - 2) / sampleSize; i++) {
      let input = [];
      for (var j = 2 + i * sampleSize; j < 2 + i * sampleSize + serializedSet[0]; j++) {
        input.push(serializedSet[j]);
      }
      let output = [];
      for (j = 2 + i * sampleSize + serializedSet[0]; j < 2 + i * sampleSize + sampleSize; j++) {
        output.push(serializedSet[j]);
      }
      set.push(input);
      set.push(output);
    }

    return set;
  },

  /** A list of compiled activation functions in a certain order */
  activations: [
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
  ]
};

multi.testSerializedSet = function (set, cost, A, S, data, F) {
  // Calculate how much samples are in the set
  var error = 0;
  for (var i = 0; i < set.length; i += 2) {
    let output = multi.activateSerializedNetwork(set[i], A, S, data, F);
    error += cost(set[i + 1], output);
  }

  return error / (set.length / 2);
};

/* Export */
for (var i in multi) {
  module.exports[i] = multi[i];
}
