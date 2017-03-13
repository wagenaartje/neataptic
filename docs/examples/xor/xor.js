var GNN;
var counter = 0;

var Network = gynaptic.Network;
var Architect = gynaptic.Architect;
var Evolution = gynaptic.Evolution;
var Methods = gynaptic.Methods;
var Trainer = gynaptic.Trainer;

Methods.Selection.FITNESS_PROPORTIONATE.config = function(r){ return Math.pow(r,1.5); };
Methods.Mutate.MODIFY_RANDOM_BIAS.config = {min: -2, max: 2};
Methods.Mutate.MODIFY_RANDOM_WEIGHT.config = {min: -2, max: 2};

function TrainXOR(){
  GNN = new Evolution({
    size: 50,
    elitism: 0,
    mutationRate: 0.45,
    networkSize : [2,3,1],
    mutationMethod: [
      Methods.Mutate.MODIFY_RANDOM_BIAS,
      Methods.Mutate.MODIFY_RANDOM_WEIGHT,
      Methods.Mutate.SWAP_BIAS,
      Methods.Mutate.SWAP_WEIGHT
    ],
    crossOverMethod: [
      Methods.Crossover.UNIFORM,
      Methods.Crossover.AVERAGE,
      Methods.Crossover.SINGLE_POINT,
      Methods.Crossover.TWO_POINT
    ],
    selectionMethod: [
      Methods.Selection.FITNESS_PROPORTIONATE
    ],
    generationMethod: [
      Methods.Generation.POINTS
    ],
    fitnessFunction: function(network){
      var score = 0;

      score -= network.activate([0, 0]) * 5000;
      score += network.activate([1, 0]) * 5000;
      score += network.activate([0, 1]) * 5000;
      score -= network.activate([1, 1]) * 5000;

      return Math.round(score);
    }
  });

  // Loop the evolution process until a certain average score is reached
  setTimeout(loop, 1);
}

function loop(){
  GNN.evaluate();

  var average = GNN.getAverage();
  $('.results').html(`
    <p style="margin-bottom: 0; margin-top: 5">Current fitness: <span class="label label-default">${average}</span></p>
    <p style="margin-bottom: 0; margin-top: 5">Goal fitness: <span class="label label-danger">8000</span></p>
  `);

  if(average >= 8000){
    var fittest = GNN.getFittestGenome();
    $('.train').text('Again');
    $('.results').html(`
      <p style="margin-bottom: 15; margin-top: 15"><span class="label label-success">Success</span></p>
      <p style="margin-bottom: 0; margin-top: 5">Input: <span class="label label-default">[ 0 , 0 ]</span> Output <span class="label label-default">${Math.round(fittest.activate([0,0]) * 100) / 100}</span></p>
      <p style="margin-bottom: 0; margin-top: 5">Input: <span class="label label-default">[ 0 , 1 ]</span> Output <span class="label label-default">${Math.round(fittest.activate([0,1]) * 100) / 100}</span></p>
      <p style="margin-bottom: 0; margin-top: 5">Input: <span class="label label-default">[ 1 , 0 ]</span> Output <span class="label label-default">${Math.round(fittest.activate([1,0]) * 100) / 100}</span></p>
      <p style="margin-bottom: 0; margin-top: 5">Input: <span class="label label-default">[ 1 , 1 ]</span> Output <span class="label label-default">${Math.round(fittest.activate([1,1]) * 100) / 100}</span></p>
      <p style="margin-bottom: 0; margin-top: 15"><span class="label label-info">Iterations: ${counter}</span></p>
    `);
    return true;
  } else if(counter >= 1000){
    $('.train').text('Retry');
    $('.results').html(`<span class="label label-success>Success</span>`);
    return false;
  }

  GNN.select();
  GNN.crossOver();
  GNN.mutate();
  GNN.replace();

  counter++;
  setTimeout(loop, 1); // so DOM doesn't freeze
}

$( document ).ready(function() {
  $('.train').click(function(){
    $('.train').text('Training...');
    setTimeout(TrainXOR, 1);
  });
});
