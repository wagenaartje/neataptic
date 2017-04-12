/*!
 * The MIT License (MIT)
 * 
 * Copyright 2017 Thomas Wagenaar
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE
 * 
 */
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var Methods = {
  Activation : __webpack_require__(6),
  Mutation   : __webpack_require__(11),
  Selection  : __webpack_require__(12),
  Crossover  : __webpack_require__(10),
  Cost       : __webpack_require__(9)
};

// CommonJS & AMD
if (true)
{
  !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function(){ return Methods }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}

// Node.js
if (typeof module !== 'undefined' && module.exports)
{
  module.exports = Methods;
}

// Browser
if (typeof window == 'object')
{
  (function(){
    var oldMethods = window['methods'];
    Methods.ninja = function(){
      window['methods'] = oldMethods;
      return Methods;
    };
  })();

  window['methods'] = Methods;
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* Export */
if (module) module.exports = Node;

/* Import */
var Methods    = __webpack_require__(1);
var Connection = __webpack_require__(5);
var Group      = __webpack_require__(3);

/* Easier variable naming */
var Activation = Methods.Activation;
var Mutation   = Methods.Mutation;

/******************************************************************************************
                                         Node
*******************************************************************************************/

function Node(type) {
  this.bias = (type == 'input') ? 0 : Math.random() * .2 - .1;
  this.squash = Activation.LOGISTIC;
  this.type = type || 'hidden'; // hidden if not specified

  this.activation = 0;

  this.connections = {
    in : [],
    gate: [],
    out : [] ,
    self : new Connection(this, this, 0)
  };

  this.state = 0;

  // Data for backpropagation
  this.error = { responsibility: 0, gated: 0, projected: 0 };
  this.trace = { elegibility: [] , extended: [], influences: [] };
}

Node.prototype = {
  /**
   * Activates the node (rewritten from https://github.com/cazala/synaptic)
   */
  activate: function(input){
    // Check if an input is given
    if (typeof input != 'undefined') {
      this.activation = input;
      this.derivative = 0;
      this.bias = 0;
      return this.activation;
    }

    // All activation sources coming from the node itself (self-connections coming in the future)
    this.state = this.connections.self.gain * this.connections.self.weight *
    this.state + this.bias;

    // Activation sources coming from connections
    for(connection in this.connections.in){
      var connection = this.connections.in[connection];
      this.state += connection.from.activation * connection.weight * connection.gain;
    }

    // Squash the values received
    this.activation = this.squash(this.state);
    this.derivative = this.squash(this.state, true);

    for (var index in this.connections.in) {
      var input = this.connections.in[index];

      // Elegibility trace
      //this.trace.elegibility[index] = this.connections.self.gain * this.connections.self.weight *
      this.trace.elegibility[index] = input.from.activation * input.gain;
    }

    return this.activation;
  },

  /**
   * Back-propagate the error (rewritten from https://github.com/cazala/synaptic)
   */
  propagate: function(rate, target) {
    // Error accumulator
    var error = 0;

    // Output nodes get their error from the enviroment
    if (this.type == 'output'){
      this.error.responsibility = this.error.projected = target - this.activation;
    } else { // the rest of the nodes compute their error responsibilities by backpropagation
      // error responsibilities from all the connections projected from this node
      for (var index in this.connections.out) {
        var connection = this.connections.out[index];
        var node = connection.to;
        // Eq. 21
        error += node.error.responsibility * connection.weight * connection.gain;
      }

      // Projected error responsibility
      this.error.projected = this.derivative * error;

      // Error responsibility
      this.error.responsibility = this.error.projected;
    }

    // Learning rate
    rate = rate || .1;

    // Adjust all the node's incoming connections
    for (var index in this.connections.in) {
      var input = this.connections.in[index];
      var gradient = this.error.projected * this.trace.elegibility[index];

      input.weight += rate * gradient; // Adjust weights
    }

    // Adjust bias
    this.bias += rate * this.error.responsibility;
  },

  /**
   * Creates a connection from this node to the given node
   */
  connect: function(target){
    var connections = [];
    if(target instanceof Group){
      for(var i = 0; i < target.nodes.length; i++){
        var connection = new Connection(this, target.nodes[i]);
        target.nodes[i].connections.in.push(connection);
        this.connections.out.push(connection);
        target.connections.in.push(connection);

        connections.push(connection);
      }
    } else if(target instanceof Node){
      if(target == this){
        // Turn on the self connection by setting the weight !0
        this.connections.self.weight = Math.random() * .2 - .1;
        connections.push(this.connections.self);
      } else {
        var connection = new Connection(this, target);
        target.connections.in.push(connection);
        this.connections.out.push(connection);

        connections.push(connection);
      }
    }

    return connections;
  },

  /**
   * Disconnects this node from the other node
   */
   disconnect: function(node, twosided){
     twosided = twosided || false;

     for(var i in this.connections.out){
       var conn = this.connections.out[i];
       if(conn.to == node){
         this.connections.out.splice(i, 1);
         var j = conn.to.connections.in.indexOf(conn);
         conn.to.connections.in.splice(j, 1);
         break;
       }
     }

     if(twosided){
       node.disconnect(this);
     }
   },

   /**
    * Make this neuron gate a connection (rewritten from https://github.com/cazala/synaptic)
    */
   /*gate: function(connections){
     if(connections instanceof Connection){
       connections = [connections];
     }

     for(var i = 0; i < connections.length; i++){
       var connection = connections[i];
       this.connections.gate.push(connection);

       var node = connection.to;
       if(!(node in this.trace.extended)){
         var xtrace = { node: node, connections : [] }

         for(var index in this.connections.in){
           xtrace.connections.push(0);
         }

         this.trace.extended.push(xtrace);
       }

       found = false;
       for(influence in this.trace.influences){
         influence = this.trace.influences[influence];
         if(influence.node == node){
           influence.connections.push(connection);
           found = true;
           break;
         }
       }

       if(!found) this.trace.influences.push({node : node, connections:[connection]});

       connection.gater = this;
     }
   },*/

  /**
   * Mutates the node with the given method
   */
  mutate: function(method){
    if(typeof method == 'undefined'){
      throw new Error('No mutate method given!');
    } else if(!method.name in Methods.Mutation){
      throw new Error('This method does not exist!');
    }

    switch(method){
      case Mutation.MOD_ACTIVATION:
        var squash = Math.floor(Math.random()*Mutation.MOD_ACTIVATION.config.allowed.length);

        // Should really be a NEW squash
        while(Mutation.MOD_ACTIVATION.config.allowed[squash] == this.squash){
          squash = Math.floor(Math.random()*Mutation.MOD_ACTIVATION.config.allowed.length);
        }

        this.squash = Mutation.MOD_ACTIVATION.config.allowed[squash];
        break;
      case Mutation.MOD_BIAS:
        var modification = Math.random() * (Mutation.MOD_BIAS.config.max - Mutation.MOD_BIAS.config.min) + Mutation.MOD_BIAS.config.min;
        this.bias += modification;
        break;
    }
  },

  /**
   * Checks if this node is projecting to the given node
   */
   isProjectingTo: function(node){
     for(conn in this.connections.out){
       conn = this.connections.out[conn];
       if(conn.to == node){
         return true;
       }
     }
     return false;
   },

   /**
    * Checks if the given node is projecting to this node
    */
    isProjectedBy: function(node){
      for(conn in this.connections.in){
        conn = this.connections.in[conn];
        if(conn.from == node){
          return true;
        }
      }
      return false;
    },

    /**
     * Converts the node to a json
     */
    toJSON: function(){
      var json = {
        ID       : this.ID,
        bias     : this.bias,
        type     : this.type,
        squash   : this.squash.name,
        selfconn : this.connections.self.weight
      };

      return json;
    }
};

/**
 * Convert a json to a node
 */
Node.fromJSON = function(json){
  var node = new Node();
  node.ID   = json.ID;
  node.bias = json.bias;
  node.type = json.type;
  node.connections.self.weight = json.selfconn;

  for(squash in Activation){
    if(Activation[squash].name == json.squash){
      node.squash = Activation[squash];
      break;
    }
  }

  return node;
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* Export */
if (module) module.exports = Group;

/* Import */
var Methods    = __webpack_require__(1);
var Connection = __webpack_require__(5);
var Node       = __webpack_require__(2);

/* Easier variable naming */
var Activation = Methods.Activation;
var Mutation   = Methods.Mutation;

/******************************************************************************************
                                         Group
*******************************************************************************************/

function Group(size){
  this.nodes = [];
  this.connections = { in : [], out: [] };

  for(var i = 0; i < size; i++){
    this.nodes.push(new Node());
  }
}

Group.prototype = {
  /**
   * Activates all the nodes in the group
   */
  activate: function(value){
    var values = [];

    if(typeof value != 'undefined' && value.length != this.nodes.length){
      throw new Error('Array with values should be same as the amount of nodes!');
    }

    for(var i = 0; i < this.nodes.length; i++){
      if(typeof value == 'undefined'){
        var activation = this.nodes[i].activate();
      } else {
        var activation = this.nodes[i].activate(value[i]);
      }

      values.push(activation);
    }

    return values;
  },

  /**
   * Propagates all the node in the group
   */
  propagate: function(rate, target){
    if(typeof target != 'undefined' && target.length != this.nodes.length){
      throw new Error('Array with values should be same as the amount of nodes!');
    }

    for(var i = this.nodes.length - 1; i >= 0; i--){
      if(typeof target == 'undefined'){
        this.nodes[i].propagate(rate);
      } else {
        this.nodes[i].propagate(rate, target[i]);
      }
    }
  },

  /**
   * Connects the nodes in this group to nodes in another group or just a node
   */
  connect: function(target){
    var connections = [];
    if(target instanceof Group){
      for(var i = 0; i < this.nodes.length; i++){
        for(var j = 0; j < target.nodes.length; j++){
          var connections = this.nodes[i].connect(target.nodes[j]);
          this.connections.out.push(connections[0]);
          target.connections.in.push(connections[0]);
          connections.push(connections[0]);
        }
      }
    } else if(target instanceof Node){
      for(var i = 0; i < this.nodes.length; i++){
        var connections = this.nodes[i].connect(target);
        this.connections.out.push(connections[0]);
        connections.push(connections[0]);
      }
    }

    return connections;
  },

  /**
   * Disconnects all nodes from this group from another given instance
   */
  disconnect: function(target, twosided){
    twosided = twosided || false;

    // In the future, disconnect will return a connection so indexOf can be used
    if(target instanceof Group){
      for(var i = 0; i < this.nodes.length; i++){
        for(var j = 0; j < target.nodes.length; j++){
          this.nodes[i].disconnect(target.nodes[j], twosided);

          for(index in this.connections.out){
            var conn = this.connections.out[index];

            if(conn.from == this.nodes[i] && conn.to == target.nodes[j]){
              this.connections.out.splice(index, 1);
              break;
            }
          }

          if(twosided){
            for(index in this.connections.in){
              var conn = this.connections.in[index];

              if(conn.from == target.nodes[j] && conn.to == this.nodes[i]){
                this.connections.in.splice(index, 1);
                break;
              }
            }
          }
        }
      }
    } else if(target instanceof Node){
      for(var i = 0; i < this.nodes.length; i++){
        var connection = this.nodes[i].disconnect(target, twosided);

        for(index in this.connections.out){
          var conn = this.connections.out[index];

          if(conn.from == this.nodes[i] && conn.to == target){
            this.connections.out.splice(index, 1);
            break;
          }
        }

        if(twosided){
          for(index in this.connections.in){
            var conn = this.connections.in[index];

            if(conn.from == target && conn.to == this.nodes[i]){
              this.connections.in.splice(index, 1);
              break;
            }
          }
        }
      }
    }
  },

  /**
   * All nodes in this group gate a given list of connections
   */
  gate: function(connections){
    for(var i = 0; i < this.nodes.length; i++){
      for(var j = 0; j < connections.length; j++)
      this.nodes[i].gate(connections[j]);
    }
  }
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* Export */
if (module) module.exports = Network;

/* Import */
var Node       = __webpack_require__(2);
var Connection = __webpack_require__(5);
var Methods    = __webpack_require__(1);

/* Easier variable naming */
var Activation = Methods.Activation;
var Mutation   = Methods.Mutation;

/*******************************************************************************************
                                         NETWORK
*******************************************************************************************/

function Network(input, output){
  if(typeof input == 'undefined' || typeof output == 'undefined'){
    throw new Error('No input or output size given');
  }

  this.input = input;
  this.output = output;

  // Store all the node and connection genes
  this.nodes = []; // STORED IN ACTIVATION ORDER! (except for output)
  this.connections = [];
  this.gates = [];

  // Create input and output nodes
  for(var i = 0; i < this.input + this.output; i++){
    var type = (i < this.input) ? 'input' : 'output';
    this.nodes.push(new Node(type, this.nodes.length));
  }

  // Connect input nodes with output nodes directly
  for(var i = 0; i < this.input; i++){
    for(var j = this.input; j < this.output + this.input; j++){
      this.connect(
        this.nodes[i], // input neuron
        this.nodes[j]  // output neuron
      );
    }
  }
}

Network.prototype = {
  /**
   * Activates the network
   */
  activate: function(input){
    var output = [];
    // Activate nodes chronologically
    for(node in this.nodes){
      switch(this.nodes[node].type){
        case('input'):
          this.nodes[node].activate(input[node]);
          break;
        case('hidden'):
          this.nodes[node].activate();
          break;
        case('output'):
          var activation = this.nodes[node].activate();
          output.push(activation);
          break;
      }
    }
    return output;
  },

  /**
   * Propagate the error through the network
   */
  propagate: function(rate, target){
    this.nodes.reverse();

    // Propagate nodes from end to start
    for(node in this.nodes){
      switch(this.nodes[node].type){
        case('hidden'):
          this.nodes[node].propagate(rate);
          break;
        case('output'):
          this.nodes[node].propagate(rate, target[node]);
          break;
      }
    }

    this.nodes.reverse();
  },

  /**
   * Connects the from node to the to node
   */
  connect: function(from, to){
    var connections = from.connect(to);

    for(var connection in connections){
      connection = connections[connection];
      this.connections.push(connection);
    }

    return connections;
  },

  /**
   * Disconnects the from node from the to node
   */
  disconnect: function(from, to){
    // Delete the connection in the network's connection array
    for(conn in this.connections){
      if(this.connections[conn].from == from && this.connections[conn].to == to){
        this.connections.splice(conn, 1);
        break;
      }
    }

    // Delete the connection at the sending and receiving neuron
    from.disconnect(to);
  },

  /**
   * Mutates the network with the given method
   */
  mutate: function(method){
    if(typeof method == 'undefined'){
      throw new Error('No mutate method given!');
    } else if(!method.name in Methods.Mutation){
      throw new Error('This method does not exist!');
    }

    switch(method){
      case Mutation.ADD_NODE:
        // Look for an existing connection and place a node in between
        var connection = this.connections[Math.floor(Math.random() * this.connections.length)];
        this.disconnect(connection.from, connection.to);

        // Insert the new node right before the old connection.to
        var toIndex = this.nodes.indexOf(connection.to);
        var node = new Node('hidden', this.nodes.length);

        // Random squash function
        node.mutate(Mutation.MOD_ACTIVATION);

        // Place it in this.nodes
        var minBound = Math.min(toIndex, this.nodes.length - this.output);
        this.nodes.splice(minBound, 0, node);

        // Now create two new connections
        this.connect(connection.from, node);
        this.connect(node, connection.to);
        break;
      case Mutation.SUB_NODE:
        // Check if there are nodes left to remove
        if(this.nodes.length == this.input + this.output){
          if(Mutation.config.warnings) console.warn('No more nodes left to remove!');
          break;
        }

        // Select a node which isn't an input or output node
        var index = Math.floor(Math.random() * (this.nodes.length - this.output - this.input) + this.input);
        var node = this.nodes[index];

        // Get all its inputting nodes
        var inputs = [];
        for(var conn = node.connections.in.length - 1; conn >= 0; conn--){
          var input = node.connections.in[conn].from;
          inputs.push(input);
          this.disconnect(input, node);
        }

        // Get all its outputingg nodes
        var outputs = [];
        for(var conn = node.connections.out.length - 1; conn >= 0; conn--){
          var output = node.connections.out[conn].to;
          outputs.push(output);
          this.disconnect(node, output);
        }

        // Connect the input nodes to the output nodes (if not already connected)
        for(var input in inputs){
          input = inputs[input];
          for(var output in outputs){
            output = outputs[output];
            if(!input.isProjectingTo(output)){
              this.connect(input, output);
            }
          }
        }

        // Remove the node from this.nodes
        this.nodes.splice(index, 1);
        break;
      case Mutation.ADD_CONN:
        // Calculate the maximum amount of connections
        var maxConn = 0;
        for(var i = 0; i < this.nodes.length; i++){
          if(this.nodes[i].type == 'input') {
            maxConn += this.nodes.length - this.input;
          } else if(this.nodes[i].type == 'hidden'){
            maxConn += this.nodes.length - (i + 1);
          }
        }

        if(maxConn <= this.connections.length){
          if(Mutation.config.warnings) console.warn('Maximum amount of connections reached!');
          break;
        }

        var alreadyConnected = true;
        while(alreadyConnected){
          alreadyConnected = false;
          // Look for a non-output node and connect it with a node after its index
          var index1 = Math.floor(Math.random() * (this.nodes.length - this.output));
          var node1 = this.nodes[index1];
          var minBound = Math.max(index1+1, this.input); // must always be greater than input
          var node2 = this.nodes[Math.floor(Math.random() * (this.nodes.length - minBound) + minBound)];

          // Check if they aren't connected already
          for(conn in this.connections){
            if(this.connections[conn].from == node1 && this.connections[conn].to == node2){
              alreadyConnected = true;
              break;
            }
          }
        }

        this.connect(node1, node2);
        break;
      case Mutation.SUB_CONN:
        // List of possible connections that can be removed
        var possible = [];

        for(conn in this.connections){
          conn = this.connections[conn];
          // Check if it is not disabling a node
          if(conn.from.connections.out.length > 1 && conn.to.connections.in.length > 1){
            possible.push(conn);
          }
        }

        if(possible.length == 0){
          if(Mutation.config.warnings) console.warn('No connections to remove!');
          break;
        }

        var randomConn = possible[Math.floor(Math.random() * possible.length)];
        this.disconnect(randomConn.from, randomConn.to);
        break;
      case Mutation.MOD_WEIGHT:
        var connection = this.connections[Math.floor(Math.random() * this.connections.length)];
        var modification = Math.random() * (Mutation.MOD_WEIGHT.config.max - Mutation.MOD_WEIGHT.config.min) + Mutation.MOD_WEIGHT.config.min;
        connection.weight += modification;
        break;
      case Mutation.MOD_BIAS:
        // Has no effect on input node, so they are excluded
        var index = Math.floor(Math.random() * (this.nodes.length - this.input) + this.input);
        var node = this.nodes[index];

        node.mutate(Mutation.MOD_BIAS);
        break;
      case Mutation.MOD_ACTIVATION:
        // Has no effect on input node, so they are excluded
        var index = Math.floor(Math.random() * (this.nodes.length - this.input) + this.input);
        var node = this.nodes[index];

        node.mutate(Mutation.MOD_ACTIVATION);
        break;
    }
  },

  /**
   * Train a trainingset to a network
   */
  train: function(set, options) {
    options = options || {};

    // Warning messages
    if(typeof options.rate == 'undefined'){
      console.warn('Using default learning rate, please define a rate!')
    }

    if(typeof options.iterations == "undefined"){
      console.warn('No target iterations given, running until error is reached!')
    }

    var start = Date.now();

    // Configure given options
    var log           = options.log           || false;
    var targetError   = options.error         || 0.005;
    var cost          = options.cost          || Methods.Cost.MSE;
    var rate          = options.rate          || 0.3;
    var shuffle       = options.shuffle       || false;
    var iterations    = options.iterations    || 0;
    var crossValidate = options.crossValidate || false;

    if(crossValidate){
      var testSize = options.crossValidate.testSize;
      var testError = options.crossValidate.testError;
      var numTrain = Math.ceil((1 - testSize) * set.length);
      var trainSet = set.slice(0, numTrain);
      var testSet = set.slice(numTrain);
    }

    var currentRate = rate;

    // Splits the given rates, assigns it to chunks of iteration
    var bucketSize = 0;
    if(Array.isArray(rate)){
      bucketSize = Math.floor(iterations / rate.length);
    }

    // Loops the training process
    var iteration = 0;
    var error = 1;

    while (error > targetError && ( iterations == 0 || iteration < iterations)) {
      if (crossValidate && error <= testError) break;

      iteration++;

      // If the rate is a function, calculate the new rate
      if(typeof rate === 'function'){
        currentRate = rate(iterations, error);
      }

      error = 0;

      // Changes the rate depending on the iteration (if enabled)
      if(bucketSize > 0) {
        var currentBucket = Math.floor(iterations / bucketSize);
        currentRate = rate[currentBucket] || currentRate;
      }

      // Checks if cross validation is enabled
      if (crossValidate) {
        this._trainSet(trainSet, currentRate, cost);
        error += this.test(testSet, cost).error;
      } else {
        error += this._trainSet(set, currentRate, cost);
        error /= set.length;
      }


      // Checks for options such as scheduled logs and shuffling
      if(shuffle){
        for (var j, x, i = set.length; i; j = Math.floor(Math.random() * i), x = set[--i], set[i] = set[j], set[j] = x);
      }

      if(log && iteration % log == 0){
        console.log('iterations', iteration, 'error', error, 'rate', currentRate);
      }
    }

    // Creates an object of the results
    var results = {
      error: error,
      iterations: iteration,
      time: Date.now() - start
    };

    return results;
  },

  /**
   * Performs one training epoch and returns the error
   * private function used in this.train
   */
  _trainSet: function(set, currentRate, costFunction) {
    var errorSum = 0;
    for (var train in set) {
      var input = set[train].input;
      var target = set[train].output;

      var output = this.activate(input);
      this.propagate(currentRate, target);

      errorSum += costFunction(target, output);
    }
    return errorSum;
  },

  /**
   * Tests a set and returns the error and elapsed time
   */
  test: function(set, cost) {
    var error = 0;
    var input, output, target;

    var start = Date.now();

    for (var test in set) {
      input = set[test].input;
      target = set[test].output;
      output = this.activate(input);
      error += cost(target, output);
    }

    error /= set.length;

    var results = {
      error: error,
      time: Date.now() - start
    };

    return results;
  },

  /**
   * Creates a json that can be used to create a graph with d3 and webcola
   */
   graph: function(width, height, margin){
     var margin = margin || 100;
     var input = 1;
     var output = 1;

     var json = {
       nodes : [],
       links : [],
       constraints : [
         { type:"alignment", axis:"x", offsets:[] },
         { type:"alignment", axis:"y", offsets:[] }
       ],
       main : {
         maxActivation : 0,
         maxWeight: 0
       }
     };

     for(index in this.nodes){
       var node = this.nodes[index];
       var type = node.type == 'input'      ? 0 :
         node.type   == 'output'            ? 1 :
         node.squash == Activation.LOGISTIC ? 2 :
         node.squash == Activation.TANH     ? 3 :
         node.squash == Activation.IDENTITY ? 4 :
         node.squash == Activation.HLIM     ? 5 :
         node.squash == Activation.RELU     ? 6 :
         node.squash == Activation.SOFTSIGN ? 7 :
         node.squash == Activation.SINUSOID ? 8 :
         node.squash == Activation.GAUSSIAN ? 9 :
         node.squash == Activation.SOFTPLUS ? 10 :
         node.squash == Activation.BENT_IDENTITY ? 11 :
         null;

       if(type == 0){
         json.constraints[0].offsets.push({node:index, offset : (width-margin) / (this.input) * input});
         json.constraints[1].offsets.push({node:index, offset : 0});
         input++;
       } else if (type == 1){
         json.constraints[0].offsets.push({node:index, offset : (width-margin) / (this.output+1) * output});
         json.constraints[1].offsets.push({node:index, offset : -(height-margin)/2});
         output++;
       }

       if(node.activation > json.main.maxActivation){
         json.main.maxActivation = node.activation;
       }

       json.nodes.push({
         id: index,
         type : type,
         activation : node.activation
       });
     }

     for(connection in this.connections){
       connection = this.connections[connection];
       json.links.push({
         source : this.nodes.indexOf(connection.from),
         target : this.nodes.indexOf(connection.to),
         weight : connection.weight
       });

       if(connection.weight > json.main.maxWeight){
         json.main.maxWeight = connection.weight;
       }
     }

     return json;
   },

   /**
    * Convert the network to a json
    */
    toJSON: function(){
      var json = {
        nodes : [],
        connections : [],
        input : this.input,
        output : this.output
      };

      for(index in this.nodes){
        var node = this.nodes[index].toJSON();
        node.index = index;
        json.nodes.push(node);
      }

      for(conn in this.connections){
        var conn = this.connections[conn];
        var tojson = conn.toJSON();
        tojson.from = this.nodes.indexOf(conn.from);
        tojson.to = this.nodes.indexOf(conn.to);
        json.connections.push(tojson);
      }
      return json;
    }
};

/**
 * Convert a json to a network
 * See reference #4 for future changes
 */
 Network.fromJSON = function(json){
   var network = new Network(json.input, json.output);
   network.nodes = [];
   network.connections = [];

   for(node in json.nodes){
     network.nodes.push(Node.fromJSON(json.nodes[node]));
   }

   for(conn in json.connections){
     var conn = json.connections[conn];

     var connection = network.connect(network.nodes[conn.from], network.nodes[conn.to]);
     connection.weight = conn.weight;
     connection.ID = conn.id;
   }

   return network;
 }

 /**
  * Merge two networks into one
  */
 Network.merge = function(network1, network2){
   // Create a copy of the networks
   network1 = Network.fromJSON(network1.toJSON());
   network2 = Network.fromJSON(network2.toJSON());

   // Check if output and input size are the same
   if(network1.output != network2.input){
     throw new Error('Output size of network1 should be the same as the input size of network2!');
   }

   // Redirect all connections from network2 input to network1 output
   for(conn in network2.connections){
     conn = network2.connections[conn];
     if(conn.from.type == 'input'){
       var index = network2.nodes.indexOf(conn.from);
       var node = network2.nodes[index];

       // redirect
       conn.from = network1.nodes[network1.nodes.length - 1 - index];
     }
   }

   // Change the node type of network1's output nodes (now hidden)
   for(var i = network1.nodes.length - 1 - network1.output; i < network1.nodes.length; i++){
     network1.nodes[i].type = 'hidden';
   }

   // Create one network of both networks
   network1.connections = network1.connections.concat(network2.connections);
   network1.nodes = network1.nodes.concat(network2.nodes);

   return network1;
 }

/**
 * Create an offspring from two parent networks
 */
 Network.crossOver = function(network1, network2, method){
   /*if(typeof method == 'undefined'){
     throw new Error('No crossover method given!');
   } else if(!method.name in Methods.Crossover){
     throw new Error('This method does not exist!');
   } else */if(network1.input != network2.input || network1.output != network2.output){
     throw new Error("Networks don't have the same input/output size!");
   }

   // Initialise offspring
   var offspring = new Network(network1.input, network1.output);
   offspring.connections = [];
   offspring.nodes = [];

   // Save scores and create a copy
   var score1 = network1.score || 0;
   var score2 = network2.score || 0;
   network1 = Network.fromJSON(network1.toJSON());
   network2 = Network.fromJSON(network2.toJSON());

   // Determine offspring node size
   if(score1 == score2){
     var max = Math.max(network1.nodes.length, network2.nodes.length);
     var min = Math.min(network1.nodes.length, network2.nodes.length);
     var size = Math.floor(Math.random() * (max-min+1) + min);
   } else if(score1 > score2){
     var size = network1.nodes.length;
   } else {
     var size = network2.nodes.length;
   }


   // Assign nodes from parents to offspring
   for(var i = 0; i < size; i++){
     if(i < network1.nodes.length && i < network2.nodes.length){
       var node = null;
       if(i >= size-network1.output){
         while(node == null || node.type != 'output'){
           if(Math.random() >= 0.5){
             node = network1.nodes[i];
           } else {
             node = network2.nodes[i];
           }
         }
       } else {
         while(node == null || (i < size-network1.output && node.type == 'output')){
           if(Math.random() >= 0.5){
             node = network1.nodes[i];
           } else {
             node = network2.nodes[i];
           }
         }
       }

       offspring.nodes.push(node);
     } else if(i < network1.nodes.length){
       if(i >= size-network1.output){
         offspring.nodes.push(network1.nodes[network1.nodes.length - (i - (size-network1.output - 1))]);
       } else {
         offspring.nodes.push(network1.nodes[i]);
       }
     } else if(i < network2.nodes.length){
       if(i >= size-network1.output){
         offspring.nodes.push(network2.nodes[network2.nodes.length - (i - (size-network1.output - 1))]);
       } else {
         offspring.nodes.push(network2.nodes[i]);
       }
     }
   }

   // Clear the node connections
   for(node in offspring.nodes){
     offspring.nodes[node].connections.in = [];
     offspring.nodes[node].connections.out = [];
   }

   // Create arrays of connection genes
   var n1conns = {};
   var n2conns = {};

   for(conn in network1.connections){
     var conn = network1.connections[conn];
     var data = {
       weight: conn.weight,
       from  : network1.nodes.indexOf(conn.from),
       to    : network1.nodes.indexOf(conn.to)
     };
     if(data.to == network1.nodes.length - 1){
       if(data.from < size - 1){
         data.to = size - 1;
       } else {
         continue;
       }
     }
     var id = Connection.innovationID(data.from, data.to);
     n1conns[id] = data;
   }

   for(conn in network2.connections){
     var conn = network2.connections[conn];
     var data = {
       weight: conn.weight,
       from  : network2.nodes.indexOf(conn.from),
       to    : network2.nodes.indexOf(conn.to)
     };
     if(data.to == network2.nodes.length - 1){
       if(data.from < size - 1){
         data.to = size - 1;
       } else {
         continue;
       }
     }
     var id = Connection.innovationID(data.from, data.to);
     n2conns[id] = data;
   }


   // Split common conn genes from disjoint or excess conn genes
   var commongenes = {};
   for(var id in n1conns) {
     if(id in n2conns) {
       commongenes[id] = [n1conns[id], n2conns[id]];
       delete n1conns[id];
       delete n2conns[id];
     }
   }

   // Create a list of conn genes for the offspring
   var connections = [];
   for(conn in commongenes){
     var conn = Math.random() >= 0.5 ? commongenes[conn][0] : commongenes[conn][1];
     connections.push(conn);
   }

   // Now add conn genes from the fittest parent (or both)
   if(score1 == score2){
     for(conn in n1conns) connections.push(n1conns[conn]);
     for(conn in n2conns) connections.push(n2conns[conn]);
   } else if(score1 > score2){
     for(conn in n1conns) connections.push(n1conns[conn]);
   } else {
     for(conn in n2conns) connections.push(n2conns[conn]);
   }

   // Add common conn genes uniformly
   for(conn in connections){
     var connData = connections[conn];
     if(connData.to < size){
       var from = offspring.nodes[connData.from];
       if(from.type != 'output'){
         var to   = offspring.nodes[connData.to];
         var conn = offspring.connect(from, to);

         conn.weight = connData.weight;
       }
     }
   }

   return offspring;
 }

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* Export */
if (module) module.exports = Connection;

/******************************************************************************************
                                      CONNECTION
*******************************************************************************************/

function Connection(from, to, weight) {
  this.weight = weight || Math.random() * .2 - .1;
  this.from = from;
  this.to = to;
  this.gater = null;

  this.gain = 1; // used for gating
}

Connection.prototype = {
  /**
   * Converts the node to a json
   */
  toJSON : function(){
    var json = {
      weight : this.weight,
      id : this.ID
    };

    return json;
  }
};


/**
 * Returns an innovation ID
 * https://en.wikipedia.org/wiki/Pairing_function (Cantor pairing function)
 */
Connection.innovationID = function(a, b) {
  return 1/2 * (a + b) * (a + b + 1) + b;
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/*******************************************************************************************
                                  ACTIVATION FUNCTIONS
*******************************************************************************************/

// https://en.wikipedia.org/wiki/Activation_function
var Activation = {
  LOGISTIC : function(x, derivate) {
    if (!derivate)
      return 1 / (1 + Math.exp(-x));
    var fx = Activation.LOGISTIC(x);
    return fx * (1 - fx);
  },
  TANH : function(x, derivate) {
    if (derivate)
      return 1 - Math.pow(Activation.TANH(x), 2);
    return Math.tanh(x);
  },
  IDENTITY : function(x, derivate) { // not normalized
    return derivate ? 1 : x;
  },
  HLIM : function(x, derivate) {
    return derivate ? 1 : x > 0 ? 1 : 0;
  },
  RELU : function(x, derivate) { // not normalized
    if (derivate)
      return x > 0 ? 1 : 0;
    return x > 0 ? x : 0;
  },
  SOFTSIGN : function(x, derivate){
    var d = 1 + Math.abs(x);
    if(derivate)
      return x / Math.pow(d, 2);
    return x / d;
  },
  SINUSOID : function(x, derivate){
    if(derivate)
      return Math.cos(x);
    return Math.sin(x);
  },
  GAUSSIAN : function(x, derivate){
    var d = Math.exp(-Math.pow(x, 2));
    if(derivate)
      return -2 * x * d;
    return d;
  },
  SOFTPLUS : function(x, derivate){
    if(derivate)
      return Activation.LOGISTIC(x);
    return Math.log(1 + Math.exp(x));
  },
  BENT_IDENTITY: function(x, derivate){
    var d = Math.sqrt(Math.pow(x, 2) + 1);
    if(derivate)
      return x / (2 * d) + 1;
    return (d - 1) / 2 + x;
  }
};

/* Export */
if (module) module.exports = Activation;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* Import */
var Network = __webpack_require__(4);
var Methods = __webpack_require__(1);
var Node    = __webpack_require__(2);
var Group   = __webpack_require__(3);

/*******************************************************************************************
                                        ARCHITECT
*******************************************************************************************/

/**
 * Collection of built-in architectures
 */
var Architect = {
  /**
   * Construct a network from a given array of connected nodes
   */
  Construct: function(list){
    // Create a network
    var network = new Network(0, 0);

    // Transform all groups into nodes
    var nodes = [];

    for(item in list){
      if(list[item] instanceof Group){
        for(var node in list[item].nodes){
          nodes.push(list[item].nodes[node]);
        }
      } else if(list[item] instanceof Node){
        nodes.push(list[item]);
      }
    }

    // Calculate input and output size
    for(var node in nodes){
      if(nodes[node].connections.out.length + nodes[node].connections.gate.length == 0){
        nodes[node].type = 'output';
        network.output++;
      } else if(!nodes[node].connections.in.length){
        nodes[node].type = 'input';
        network.input++;
      }
    }

    if(network.input == 0 || network.output == 0){
      throw new Error('Given nodes have no clear input/output node!');
    }

    for(var node in nodes){
      for(var conn in nodes[node].connections.out){
        network.connections.push(nodes[node].connections.out[conn]);
      }
      for(var conn in nodes[node].connections.gate){
        network.gates.push({ node: nodes[node], connection: nodes[node].connections.gate[conn]});
      }
    }

    network.nodes = nodes;

    return network;
  },

  /**
   * Returns a multilayer perceptron (MLP)
   */
  Perceptron: function() {
    // Convert arguments to Array
    var layers = Array.prototype.slice.call(arguments);
    if (layers.length < 3){
      throw new Error("not enough layers (minimum 3) !!");
    }

    // Create a list of nodes/groups
    var nodes = [];

    nodes.push(new Group(layers[0]));

    for(var i = 1; i < layers.length; i++){
      var layer = layers[i];
      var layer = new Group(layer);

      nodes.push(layer);
      nodes[i-1].connect(nodes[i]);
    }

    // Return the network
    return Architect.Construct(nodes);
  },

  /**
   * Constructs a LSTM - EXPERIMENTAL
   */
  LSTM: function(){
    var args = Array.prototype.slice.call(arguments);
    if (args.length < 3){
      throw new Error("not enough layers (minimum 3) !!");
    }

    var inputLayer  = new Group(args.shift()); // first argument
    var outputLayer = new Group(args.pop()); // last argument
    //debug
    var inputLayer = new Node();
    var outputLayer = new Node();

    var blocks = args; // all the arguments in the middle

    var nodes = [];
    nodes.push(inputLayer);

    for(var block in blocks){
      block = blocks[block];

      // Init required nodes (in activation order)
      var inputGate  = new Node();
      var forgetGate = new Node();
      var memoryCell = new Node();
      var outputGate = new Node();

      // Connect the input with all the nodes
      var input = inputLayer.connect(memoryCell);
      inputLayer.connect(inputGate);
      inputLayer.connect(outputGate);
      inputLayer.connect(forgetGate);

      // Set up internal connections
      memoryCell.connect(inputGate);
      memoryCell.connect(forgetGate);
      memoryCell.connect(outputGate);
      var forget = memoryCell.connect(memoryCell);
      var output = memoryCell.connect(outputLayer);

      // Set up gates
      inputGate.gate(input);
      forgetGate.gate(forget);
      outputGate.gate(output);

      // At to array
      nodes.push(inputGate);
      nodes.push(forgetGate);
      nodes.push(memoryCell);
      nodes.push(outputGate);
    }

    nodes.push(outputLayer);

    return Architect.Construct(nodes);
  },


  /**
   * Returns a randomly connected network
   */
  Random: function(input, hidden, output, ratio){
    ratio = ratio || 2;
    var network = new Network(input, output);

    for(var i = 0; i < hidden; i++){
      network.mutate(Methods.Mutation.ADD_NODE);
    }

    for(var i = 0; i < hidden * ratio; i++){
      network.mutate(Methods.Mutation.ADD_CONN);
    }

    return network;
  },

  /**
   * Returns a hopfield network of the given size
   */
  Hopfield: function(size){
    var network = new Network(size, size);

    network.learn = function(patterns){
      var set = [];
      for (var p in patterns)
        set.push({
          input: patterns[p],
          output: patterns[p]
        });

      return network.train(set, {
        iterations: 500000,
        error: .00005,
        rate: 1
      });
    }

    network.feed = function(pattern){
      var output = this.activate(pattern);

      var pattern = [];
      for (var i in output){
        pattern[i] = output[i] >= .5 ? 1 : 0;
      }

      return pattern;
    }

    return network;
  }
}

/* Export */
if (module) module.exports = Architect;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* Export */
if (module) module.exports = Neat;

/* Import */
var Node = __webpack_require__(2);
var Network = __webpack_require__(4);
var Methods = __webpack_require__(1);

/* Easier variable naming */
var Activation = Methods.Activation;
var Mutation   = Methods.Mutation;
var Selection  = Methods.Selection;
var Crossover  = Methods.Crossover;

/*******************************************************************************************
                                         NEAT
*******************************************************************************************/

function Neat(input, output, fitness, options){
  this.input   = input;   // The input size of the networks
  this.output  = output;  // The output size of the networks
  this.fitness = fitness; // The fitness function to evaluate the networks

  // Configure options
  options = options || {};
  this.equal          = options.equal          || false;
  this.popsize        = options.popsize        || 50;
  this.elitism        = options.elitism        || 0;
  this.mutation       = options.mutation       || Object.keys(Methods.Mutation).map(function(val) { return Methods.Mutation[val] });
  this.selection      = options.selection      || Object.keys(Methods.Selection).map(function(val) { return Methods.Selection[val] });
  this.crossover      = options.crossover      || Object.keys(Methods.Crossover).map(function(val) { return Methods.Crossover[val] });
  this.mutationRate   = options.mutationRate   || 0.3;
  this.mutationAmount = options.mutationAmount || 1;

  // Generation counter
  this.generation = 0;

  // Initialise the genomes
  this.createPool(options.network || new Network(this.input, this.output));
}

Neat.prototype = {
  /**
   * Create the initial pool of genomes
   */
  createPool: function(network){
    this.population = [];

    for(var i = 0; i < this.popsize; i++){
      var copy = Network.fromJSON(network.toJSON());
      this.population.push(copy);
    }
  },

  /**
   * Evaluates, selects, breeds and mutates population
   */
  evolve: function(){
    // Evaluate and sort the population
    this.evaluate();
    this.sort();

    var newPopulation = [];

    // Elitism
    for(var i = 0; i < this.elitism; i++){
      newPopulation.push(this.population[i]);
    }

    // Breed the next individuals
    for(var i = 0; i < this.popsize - this.elitism; i++){
      newPopulation.push(this.getOffspring());
    }

    // Replace the old population with the new population
    this.population = newPopulation;
    this.mutate();

    this.generation++;
  },

  /**
   * Breeds two parents into an offspring, population MUST be surted
   */
   getOffspring: function(){
     parent1 = this.getParent();
     parent2 = this.getParent();

     if(this.equal == true){
       parent1.score = 0;
       parent2.score = 0;
     }

     var crossoverMethod = this.crossover[Math.floor(Math.random()*this.crossover.length)];
     return Network.crossOver(parent1, parent2, crossoverMethod);
   },

  /**
   * Mutates the given (or current) population
   */
  mutate: function(){
    for(genome in this.population){
      if(Math.random() <= this.mutationRate){
        for(var i = 0; i < this.mutationAmount; i++){
          var mutationMethod = this.mutation[Math.floor(Math.random() * this.mutation.length)];
          this.population[genome].mutate(mutationMethod);
        }
      }
    }
  },

  /**
   * Evaluates the current population
   */
  evaluate: function(){
    for(genome in this.population){
      var score = this.fitness(this.population[genome]);
      this.population[genome].score = score;
    }
  },

  /**
   * Sorts the population by score
   */
  sort: function(){
    this.population.sort(function(a,b){
      return b.score - a.score;
    });
  },

  /**
   * Returns the fittest genome of the current population
   */
  getFittest: function(){
    // Check if evaluated
    if(typeof this.population[this.population.length-1].score == 'undefined'){
      this.evaluate();
    }

    this.sort();
    return this.population[0];
  },

  /**
   * Returns the average fitness of the current population
   */
   getAverage: function(){
     if(typeof this.population[this.population.length-1].score == 'undefined'){
       this.evaluate();
     }

     var score = 0;
     for(genome in this.population){
       score += this.population[genome].score;
     }

     return score / this.popsize;
   },

  /**
   * Gets a genome based on the selection function
   * @return {Network} genome
   */
  getParent: function(){
    var selectionMethod = this.selection[Math.floor(Math.random() * this.selection.length)];
    switch(selectionMethod){
      case Selection.FITNESS_PROPORTIONATE:
        var r = Math.floor(Selection.FITNESS_PROPORTIONATE.config(Math.random()) * this.popsize);
        return this.population[r];
        break;
    }
  },
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/*******************************************************************************************
                                    COST FUNCTIONS
*******************************************************************************************/

// https://en.wikipedia.org/wiki/Loss_function
var Cost = {
  CROSS_ENTROPY: function(target, output)
  {
    var crossentropy = 0;
    for (var i in output)
      crossentropy -= target[i] * Math.log(output[i]+1e-15) + (1-target[i]) * Math.log((1+1e-15) - output[i]); // +1e-15 is a tiny push away to avoid Math.log(0)
    return crossentropy;
  },
  MSE: function(target, output)
  {
    var mse = 0;
    for (var i in output)
      mse += Math.pow(target[i] - output[i], 2);
    return mse / output.length;
  },
  BINARY: function(target, output){
    var misses = 0;
    for (var i in output)
      misses += Math.round(target[i] * 2) != Math.round(output[i] * 2);
    return misses;
  }
};

/* Export */
if (module) module.exports = Cost;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/*******************************************************************************************
                                      CROSSOVER
*******************************************************************************************/

// https://en.wikipedia.org/wiki/Crossover_(genetic_algorithm)
var Crossover =  {
  SINGLE_POINT: {
    name: "SINGLE_POINT",
    config: [0.4]
  },
  TWO_POINT: {
    name: "TWO_POINT",
    config: [0.4, 0.9]
  },
  UNIFORM: {
    name: "UNIFORM"
  },
  AVERAGE: {
    name: "AVERAGE"
  }
};

/* Export */
if (module) module.exports = Crossover;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* Import */
var Activation = __webpack_require__(6);

/*******************************************************************************************
                                      MUTATION
*******************************************************************************************/

//https://en.wikipedia.org/wiki/Mutation_(genetic_algorithm)
var Mutation = {
  ADD_NODE : {
    name : "ADD_NODE"
  },
  SUB_NODE : {
    name : "SUB_NODE"
  },
  ADD_CONN : {
    name : "ADD_CONN"
  },
  SUB_CONN : {
    name : "REMOVE_CONN"
  },
  MOD_WEIGHT : {
    name: "MOD_WEIGHT",
    config: {
      min: -1,
      max: 1
    }
  },
  MOD_BIAS : {
    name: "MOD_BIAS",
    config: {
      min: -1,
      max: 1
    }
  },
  MOD_ACTIVATION : {
    name : "MOD_ACTIVATION",
    config : {
      allowed : [
        Activation.LOGISTIC,
        Activation.TANH,
        Activation.RELU,
        Activation.IDENTITY,
        Activation.HLIM,
        Activation.SOFTSIGN,
        Activation.SINUSOID,
        Activation.GAUSSIAN,
        Activation.SOFTPLUS,
        Activation.BENT_IDENTITY
      ]
    }
  },
  config : {
    warnings: false,
  }
};

/* Export */
if (module) module.exports = Mutation;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/*******************************************************************************************
                                      SELECTION
*******************************************************************************************/

// https://en.wikipedia.org/wiki/Selection_(genetic_algorithm)

var Selection = {
  FITNESS_PROPORTIONATE: {
    name: "FITNESS_PROPORTIONATE",
    config: function(r){ return Math.pow(r,2); }
  }
};

/* Export */
if (module) module.exports = Selection;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var Neataptic = {
  Node      : __webpack_require__(2),
  Neat      : __webpack_require__(8),
  Network   : __webpack_require__(4),
  Methods   : __webpack_require__(1),
  Architect : __webpack_require__(7),
  Group     : __webpack_require__(3)
};

// CommonJS & AMD
if (true)
{
  !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function(){ return Neataptic }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}

// Node.js
if (typeof module !== 'undefined' && module.exports)
{
  module.exports = Neataptic;
}

// Browser
if (typeof window == 'object')
{
  (function(){
    var old = window['neataptic'];
    Neataptic.ninja = function(){
      window['neataptic'] = old;
      return Neataptic;
    };
  })();

  window['neataptic'] = Neataptic;
}


/***/ })
/******/ ]);