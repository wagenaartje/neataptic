'use strict';

/**
 * Performance tests intended to be run in browser (Chrome)
 *
 * Author: Mattias Nilsson <allbinmani@github>
 */

const neataptic = require('../../src/neataptic');

/* Shorten var names */
const { Network, architect, methods, config } = neataptic;

/* Handle running in node or browser */
const performance = (typeof global.performance === 'undefined' ? Date : global.performance);

/* Define training sets */

const training_sets = {
	xor: [
    	{input: [0,0], output: [0]},	
    	{input: [0,1], output: [1]},
    	{input: [1,0], output: [1]},	
    	{input: [1,1], output: [0]},
	],
	bin_count: [
    	{input: [0,0,0,0,0], output: [1/1]},
    	{input: [0,0,0,0,1], output: [1/2]},
    	{input: [0,0,0,1,0], output: [1/3]},
    	{input: [0,0,0,1,1], output: [1/4]},
    	{input: [0,0,1,0,0], output: [1/5]},
    	{input: [0,0,1,0,1], output: [1/6]},
    	{input: [0,0,1,1,0], output: [1/7]},
    	{input: [0,0,1,1,1], output: [1/8]},
    	{input: [0,1,0,0,0], output: [1/9]},
    	{input: [0,1,0,0,1], output: [1/10]},
    	{input: [0,1,0,1,0], output: [1/11]},
    	{input: [0,1,0,1,1], output: [1/12]},
    	{input: [0,1,1,0,0], output: [1/13]},
    	{input: [0,1,1,0,1], output: [1/14]},
    	{input: [0,1,1,1,1], output: [1/15]},
    	{input: [1,0,0,0,0], output: [1/16]},
    	{input: [1,0,0,0,1], output: [1/17]},
    	{input: [1,0,0,1,0], output: [1/18]},
    	{input: [1,0,0,1,1], output: [1/19]},
    	{input: [1,0,1,0,0], output: [1/20]},
    	{input: [1,0,1,0,1], output: [1/21]},
    	{input: [1,0,1,1,0], output: [1/22]},
    	{input: [1,0,1,1,1], output: [1/23]},
    	{input: [1,1,0,0,0], output: [1/24]},
    	{input: [1,1,0,0,1], output: [1/25]},
    	{input: [1,1,0,1,0], output: [1/26]},
    	{input: [1,1,0,1,1], output: [1/27]},
    	{input: [1,1,1,0,0], output: [1/28]},
    	{input: [1,1,1,0,1], output: [1/29]},
    	{input: [1,1,1,1,0], output: [1/30]},
    	{input: [1,1,1,1,1], output: [1/31]}
    ]
};

/**
 * Creates a network from Neataptic.Architect predefined networks
 *
 * @param options {Object}
 * @param options.type {String} Network type (Perceptron|LSTM|GRU|NARX..)
 * @param options.inputs {int} # of inputs
 * @param options.hidden {int|array} # of hidden layers or array of hidden layers
 * @param options.narx {Object} NARX network specific options (type==='NARX')
 * @param options.narx.mem_in {int} NARX input memory
 * @param options.narx.mem_out {int} NARX output memory
 * @param options.inputs {int} # of inputs
 */
const create_network = (options) => {
  const o = options;
  let net_spec = [o.inputs]
    .concat(o.network_type === 'NARX' ? [o.hidden] : o.hidden)
    .concat([o.outputs]);
  if (o.type === 'NARX') {
    net_spec.push(o.narx.mem_in);
    net_spec.push(o.narx.mem_out);
  }
  return architect[o.type]
    .apply(this, net_spec);
};



const perf_test = (network_options, training_set, training_options={}, times=100) => {
	if(network_options.inputs === undefined) {
		network_options.inputs = training_set[0].input.length;
	}
	if(network_options.outputs === undefined) {
		network_options.outputs = training_set[0].output.length;
	}
	if(network_options.hidden === undefined) {
		network_options.hidden = 1;
	}
	console.log('Creating network with options %j', network_options);
    const network = create_network(network_options);

	console.log('Training with options %j', training_options);
	let timings = new Array(times);
    const from = performance.now();
	for(let i=0; i < times; i++) {
	    const start = performance.now();
	    const tres = network.train(training_set, training_options);
	    timings[i] = performance.now()-start;
	}
	const to = performance.now();
	//console.log('timings', timings);
	const min = timings.reduce((a,v) => v<a ? v : a, Number.MAX_SAFE_INTEGER);
	const max = timings.reduce((a,v) => v>a ? a : v, 0);
	const avg = timings.reduce((a,v) => a+v,0) / timings.length;
    console.log('time: %d, min/avg/max time: %d/%d/%d', (to-from), min,avg,max);
};

Object.keys(training_sets).forEach(key => {
	const tset = training_sets[key];
	console.log('== Training set: %s, length: %d', key, tset.length);
	perf_test({type: 'Perceptron', hidden: 2}, tset, {rate: 0.1, iterations: 100, error: 0.01, log: 0});
	perf_test({type: 'LSTM', 	   hidden: 2}, tset, {rate: 0.1, iterations: 1000, error: 0.001, log: 0});
	perf_test({type: 'GRU',  	   hidden: 2}, tset, {rate: 0.1, iterations: 1000, error: 0.001, log: 0});
	perf_test({type: 'NARX', 	   hidden: 2, narx: {mem_in: 1, mem_out: 1}}, tset, {rate: 0.1, iterations: 1000, error: 0.001, log: 0});
});
