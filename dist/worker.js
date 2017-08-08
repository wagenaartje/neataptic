var neataptic = require('./neataptic');

var set = [];
var cost;
var A, S, data;
var F = neataptic.multi.snippets.activations;

function activate (input) {
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
}

function testSet () {
  // Calculate how much samples are in the set
  var error = 0;
  for (var i = 0; i < set.length / 2; i++) {
    let output = activate(set[i]);
    error += cost(set[i + 1], output);
  }

  return error / (set.length / 2);
}

process.on('message', function (e) {
  if (typeof e.set === 'undefined') {
    A = e.activations;
    S = e.states;
    data = e.conns;

    var result = testSet();

    process.send(result);
  } else {
    cost = neataptic.methods.cost[e.cost];

    var dataSet = e.set;
    var sampleSize = dataSet[0] + dataSet[1];
    for (var i = 0; i < (dataSet.length - 2) / sampleSize; i++) {
      let input = [];
      for (var j = 2 + i * sampleSize; j < 2 + i * sampleSize + dataSet[0]; j++) {
        input.push(dataSet[j]);
      }
      let output = [];
      for (j = 2 + i * sampleSize + dataSet[0]; j < 2 + i * sampleSize + sampleSize; j++) {
        output.push(dataSet[j]);
      }
      set.push(input);
      set.push(output);
    }
  }
});
