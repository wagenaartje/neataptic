var neataptic = require('./neataptic');
var snippets = neataptic.multi.snippets;
var methods = neataptic.methods;

var set, cost;
var A, S, data;
var F = snippets.activations;

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
  var inOut = set[0] + set[1];

  // Calculate how much samples are in the set
  var error = 0;
  for (var i = 0; i < (set.length - 2) / inOut; i++) {
    let input = [];
    for (var j = 2 + i * inOut; j < 2 + i * inOut + set[0]; j++) {
      input.push(set[j]);
    }
    let target = [];
    for (j = 2 + i * inOut + set[0]; j < 2 + i * inOut + inOut; j++) {
      target.push(set[j]);
    }

    let output = activate(input);
    error += cost(target, output);
  }

  return error / ((set.length - 2) / inOut);
}

process.on('message', function (e) {
  if (typeof e.set !== 'undefined') {
    set = e.set;
    cost = methods.cost[e.cost];
  } else {
    A = e.activations;
    S = e.states;
    data = e.conns;

    var result = testSet();
    process.send(result);
  }
});
