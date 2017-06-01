var Network = neataptic.Network;
var Methods = neataptic.Methods;
var Neat    = neataptic.Neat;
var Config  = neataptic.Config;

Config.warnings = false;

var examples = [
  {
    set: [
      { input: [0.0], output: [0.2] },
      { input: [0.2], output: [0.4] },
      { input: [0.4], output: [0.6] },
      { input: [0.6], output: [0.8] },
      { input: [0.8], output: [1.0] },
      { input: [1.0], output: [0.8] },
      { input: [0.8], output: [0.6] },
      { input: [0.6], output: [0.4] },
      { input: [0.4], output: [0.2] },
      { input: [0.2], output: [0.0] }
    ],
    options: {
      mutation: Methods.Mutation.ALL,
      equal: true,
      elitism: 5,
      iterations: 1500,
      clear: true,
      error: 0.003
    }
  },
  {
    set: [
      { input: [0], output: [0] },
      { input: [0], output: [0] },
      { input: [0], output: [0] },
      { input: [0], output: [0] },
      { input: [0], output: [0] },
      { input: [0], output: [0] },
      { input: [0], output: [0] },
      { input: [0], output: [0] },
      { input: [0], output: [0] },
      { input: [0], output: [1] }
    ],
    options: {
      mutation: Methods.Mutation.ALL,
      equal: true,
      elitism: 5,
      iterations: 1500,
      clear: true,
      error: 0.003
    }
  },
  {
    set: [
      { input: [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], output: [1] }, // A
      { input: [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], output: [0] }, // B
      { input: [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], output: [0] }, // C
      { input: [0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], output: [0] }, // D
      { input: [0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], output: [1] }, // E
      { input: [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], output: [0] }, // F
      { input: [0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], output: [0] }, // G
      { input: [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], output: [0] }, // H
      { input: [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], output: [1] }, // I
      { input: [0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], output: [0] }, // J
      { input: [0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], output: [0] }, // K
      { input: [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], output: [0] }, // L
      { input: [0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0], output: [0] }, // M
      { input: [0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0], output: [0] }, // N
      { input: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0], output: [1] }, // O
      { input: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0], output: [0] }, // P
      { input: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0], output: [0] }, // Q
      { input: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0], output: [0] }, // R
      { input: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0], output: [0] }, // S
      { input: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0], output: [0] }, // T
      { input: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0], output: [1] }, // U
      { input: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0], output: [0] }, // V
      { input: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0], output: [0] }, // W
      { input: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0], output: [0] }, // X
      { input: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0], output: [0] }, // Y
      { input: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], output: [0] }, // Z
    ],
    options: {
      mutation: Methods.Mutation.FFW,
      equal: true,
      elitism: 5,
      iterations: 1500,
      clear: true,
      error: 0.001
    }
  },
]

function showModal(id, type){
  if(type == 0){
    var set = examples[id-1].set;
    var s = '';
    for(var i = 0; i < set.length; i++){
      var input = JSON.stringify(set[i].input);
      var output = JSON.stringify(set[i].output);
      s += (`Input: ${input}, output: ${output}\n`);
    }
    $('.modalcontent').html(s);
    $('.modal-title').text('Training set');
  } else if(type == 1){
    var options = examples[id-1].options;
    var keys = Object.keys(options);
    var s = '';
    for(var i = 0; i < keys.length; i++){
      if(keys[i] == 'mutation'){
        var value = '';
        for(var j = 0; j < options[keys[i]].length; j++){
          value += options[keys[i]][j].name + ', ';
        }
      } else {
        var value = options[keys[i]];
      }
      s += (`${keys[i]}: ${value}\n`);
    }
    $('.modalcontent').html(s);
    $('.modal-title').text('Evolve settings');
  } else if(type == 2){
    $('.modalcontent').html(examples[id-1].output);
    $('.modal-title').text('Output');
  }
  $('#modal').modal();
}

function run(id){
  var set = examples[id-1].set;
  var options = examples[id-1].options;

  $('.status' + id).show();
  $('.status' + id).text('Running...');
  setTimeout(freeze, 10, id, set, options)
}

function freeze(id, set, options){
  var network = new Network(set[0].input.length, set[0].output.length);
  var results = network.evolve(set, options);
  $('.example' + id).width('100%');
  $('.example' + id).height(400);
  $('.example' + id).show();

  var width = $('.example' + id).width();
  drawGraph(network.graph(width, 400), '.example' + id, width, 400);

  var s = '';
  for(var i = 0; i < set.length; i++){
    var input = JSON.stringify(set[i].input);
    var targetoutput = JSON.stringify(set[i].output);
    var output = network.activate(set[i].input);

    for(var j = 0; j < output.length; j++){
      output[j] = Math.round(output[j] * 1000) / 1000;
    }

    output = JSON.stringify(output);
    s += (`Input: ${input}, wanted output: ${targetoutput}, actual: ${output}\n`);
  }
  examples[id-1].output = s;

  $('.status' + id).text('Show outputs');
  $('.error' + id).text('Error ' + Math.round(-results.error * 1000) / 1000);
  $('.error' + id).show();
}
