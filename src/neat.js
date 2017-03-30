/* Export */
if (module) module.exports = Neat;

/* Import */
var Node = require('./node');
var Network = require('./network');
var Methods = require('./methods/methods');

/* Easier variable naming */
var Activation = Methods.Activation;
var Mutation   = Methods.Mutation;

/*******************************************************************************************
                                         NEAT
*******************************************************************************************/

function Neat(input, output, options){
  this.input = input;
  this.output = output;

  this.popsize = options.popsize || 50;
  this.mutation = options.mutation || [Mutation.ADD_NODE, Mutation.ADD_CONN];

  // A network should be created and COPIED
  this.createPool();
}

Neat.prototype = {
  createPool: function(){
    var network = new Network(this.input, this.output);
  }
};
