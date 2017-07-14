/*******************************************************************************
                                  SNIPPETS
*******************************************************************************/

var snippets = {
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
  ],

  activate: function (input) {
    for (var i = 0; i < data[0]; i++) A[i] = input[i];
    for (i = 2; i < data.length; i++) {
      let index = data[i++];
      S[index] = data[i++]; // bias
      let squash = data[i++];
      while (data[i] !== -2) {
        if (index === A[data[i]]) { // selfconn
          S[index] += S[data[i++]] * data[i++] *
            (data[i++] === -1 ? 1 : A[data[i - 1]]);
        } else { // normal conn
          S[index] += A[data[i++]] * data[i++] *
            (data[i++] === -1 ? 1 : A[data[i - 1]]);
        }
      }
      A[index] = F[squash](S[index]);
    }

    var output = [];
    for (i = A.length - data[1]; i < A.length; i++) output.push(A[i]);
    return output;
  },

  testSerializedSet: function (set) {
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
};

/** Export */
module.exports = snippets;
