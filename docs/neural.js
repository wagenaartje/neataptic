var Network = neataptic.Network;
var Methods = neataptic.Methods;

var network;

$( document ).ready(function() {
  network = new Network(2,2);

  refresh();
  mutate();
});

function refresh(){
  drawGraph(network.graph(width, height), ".mainsvg");
}


function mutate(){
  var methods = [Methods.Mutation.ADD_NODE, Methods.Mutation.ADD_CONN];
  var method = methods[Math.floor(Math.random() * methods.length)];
  if(method == Methods.Mutation.ADD_CONN){
    for(var i = 0; i < 5; i++){
      network.mutate(method);
    }
  } else {
    for(var i = 0; i < 3; i++){
      network.mutate(method);
    }
  }


  refresh();

  if(network.nodes.length < 20){
    setTimeout(mutate, 750);
  }
}
