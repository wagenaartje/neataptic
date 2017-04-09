var Network = neataptic.Network;
var Methods = neataptic.Methods;
var Neat    = neataptic.Neat;

// Global vars
var parent1;
var parent2;
var offspring;

$( document ).ready(function() {
  parent1 = new Network(2, 1);
  parent2 = Network.fromJSON(parent1.toJSON());

  refresh('1');
  refresh('2');
});
