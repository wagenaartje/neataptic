var { multi, methods } = require('./neataptic');

var set = [];
var cost;
var F = multi.snippets.activations;

process.on('message', function (e) {
  if (typeof e.set === 'undefined') {
    var A = e.activations;
    var S = e.states;
    var data = e.conns;

    var result = multi.snippets.testSerializedSet(set, cost, A, S, data, F);

    process.send(result);
  } else {
    cost = methods.cost[e.cost];
    set = multi.snippets.processSerializedSet(e.set);
  }
});
