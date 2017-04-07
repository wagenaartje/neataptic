var Network = neataptic.Network;
var Methods = neataptic.Methods;
var Neat    = neataptic.Neat;

var neat;

function newNeat(){
  neat = new Neat(2, 1, fitnessFunction, {
    mutation: [
      Methods.Mutation.ADD_NODE,
      Methods.Mutation.ADD_CONN,
      Methods.Mutation.MOD_WEIGHT,
      Methods.Mutation.MOD_BIAS,
      Methods.Mutation.SUB_NODE,
      Methods.Mutation.MOD_ACTIVATION
    ],
    mutationRate: 0.4,
    equal: true
  });
}

function fitnessFunction(genome){
  var score = 0;

  // XOR distance
  score -= Methods.Cost.MSE([0], genome.activate([0, 0])) * 5000;
  score -= Methods.Cost.MSE([1], genome.activate([0, 1])) * 5000;
  score -= Methods.Cost.MSE([1], genome.activate([1, 0])) * 5000;
  score -= Methods.Cost.MSE([0], genome.activate([1, 1])) * 5000;

  // Size reduction
  if(score <= -5000){
    score -= Math.abs(6 - genome.nodes.length) * 1;
    score -= Math.abs(5 - genome.connections.length) * 1;
  }

  score -= genome.nodes.length + genome.connections.length * (-5000/score);
  if(!isFinite(score)) score = 0;

  return Math.round(score);
}

function loop(){
  for(var i = 0; i < 50; i++){
    neat.evolve();
  }

  var fittest = neat.getFittest();

  drawGraph(
    fittest.graph($(".xor").width(), $(".xor").height()),
    '.xor'
  );

  $('.00').text(Math.round(fittest.activate([0,0]) * 100) / 100);
  $('.01').text(Math.round(fittest.activate([0,1]) * 100) / 100);
  $('.10').text(Math.round(fittest.activate([1,0]) * 100) / 100);
  $('.11').text(Math.round(fittest.activate([1,1]) * 100) / 100);


  $(".score").text(fittest.score);
  $(".nodes").text(fittest.nodes.length);
  $(".conns").text(fittest.connections.length);

  $(".gen").text(neat.generation);

  if(fittest.score < -500 && neat.generation < 500){
    setTimeout(loop, 100);
  } else {
    $( ".start" ).text('Again');
  }
}
