/* Export */
if (module) module.exports = Neat;

/* Import */
var Node = require('./node');
var Network = require('./network');

/*******************************************************************************************
                                         NEAT
*******************************************************************************************/

function Neat(input, output, options){
  this.input = input;
  this.output = output;

  this.popsize = options.popsize || 50;
  
  // A network should be created and COPIED
}

Neat.prototype = {
};
