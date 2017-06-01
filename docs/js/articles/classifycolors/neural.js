var Neat    = neataptic.Neat;
var Methods = neataptic.Methods;
var Network = neataptic.Network;

var set;
var neat;
var running = false;
var iteration = 0;

var PER_COLOR = 50;
// Possible colors: red, orange, yellow, green, blue, purple, pink and monochrome
var COLORS = ['red', 'green', 'blue'];

$( document ).ready(function(){
  set = createSet();
  visualiseSet();
});

function createNeat(){
  neat = new Neat(3, 1, fitness, {
    mutation: [
      Methods.Mutation.ADD_NODE,
      Methods.Mutation.ADD_CONN,
      Methods.Mutation.MOD_WEIGHT,
      Methods.Mutation.MOD_BIAS,
      Methods.Mutation.SUB_NODE,
      Methods.Mutation.MOD_ACTIVATION
    ],
    mutationRate: 0.6,
    elitism: 5,
    popsize: 100,
  });
}

function visualiseSet(){
  $('.set').empty();
  for(color in COLORS){
    $('.set').append('<div class="row ' + COLORS[color] + '"><h3>' + COLORS[color] + '</h3></div>');
  }

  for(var item in set){
    item = set[item];
    $('.'+ item.color).append('<div id="circle" style="background-color:' + item.rgb + '"></div>');
  }
}

function visualiseGenomeSet(genome){
  $('.fittestset').empty();
  for(color in COLORS){
    $('.fittestset').append('<div class="row fittest' + COLORS[color] + '"><h3>' + COLORS[color] + '</h3></div>');
  }

  for(var item in set){
    item = set[item];
    var color = COLORS[Math.round(genome.activate(item.input) * (COLORS.length-1))];

    $('.fittest'+ color).append('<div id="circle" style="background-color:' + item.rgb + '"></div>');
  }
}

function loop(){
  neat.evolve();

  var network = neat.getFittest();

  visualiseGenomeSet(network);

  $('.iteration').text(iteration);
  $('.bestfitness').text(network.score);
  $('.averagefitness').text(neat.getAverage());

  iteration++;
  if(running) setTimeout(loop, 1);
}

function fitness(genome){
  var score = 0;

  for(var item in set){
    item = set[item];
    score -= Methods.Cost.MSE(item.output, genome.activate(item.input));
  }

  score -= genome.nodes.length * Math.abs(-5 - score) / (PER_COLOR * COLORS.length * 10);

  return score;
}

// Thanks to https://github.com/davidmerfield/randomColor !!
function createSet(){
  var set = [];

  for(index in COLORS){
    var color = COLORS[index];

    var randomColors = randomColor({ hue : color, count: PER_COLOR, format: 'rgb'});

    for(var random in randomColors){
      var rgb = randomColors[random];
      random = rgb.substring(4, rgb.length-1).replace(/ /g, '').split(',');
      for(var y in random) random[y] = random[y]/255;

      set.push({ input: random, output: [index / (COLORS.length - 1)], color: color, rgb:rgb});
    }
  }

  return set;
}
