var Network = neataptic.Network;
var Methods = neataptic.Methods;
var Architect = neataptic.Architect;

var network = new Network(2,1);
$( document ).ready(function() {
  refresh();
  activate();
});


function mutate(method){
  network.mutate(method);
  refresh();
  activate();
}

function activate(){
  var in1 = $('.input1').val();
  var in2 = $('.input2').val();

  if(in1 > 1 || in1 < 0 || in2 > 1 || in2 < 0){
    alert('Inputs must be between 0 and 1!');
  }
  
  var output = network.activate([in1, in2]);

  $('.output').text(output);
}
function refresh(){
  console.log( );
  drawGraph(network.graph($('.draw').width() / 1.4, $('.draw').height() / 1), '.draw');
}
