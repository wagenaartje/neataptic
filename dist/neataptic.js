/*!
 * The MIT License (MIT)
 * 
 * Copyright 2017 Thomas Wagenaar <wagenaartje@protonmail.com>
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
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
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
  Activation : __webpack_require__(7),
  Mutation   : __webpack_require__(14),
  Selection  : __webpack_require__(15),
  Crossover  : __webpack_require__(12),
  Cost       : __webpack_require__(11),
  Gating     : __webpack_require__(13),
  Connection : __webpack_require__(10)
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
var Connection = __webpack_require__(4);
var Methods    = __webpack_require__(1);
var Group      = __webpack_require__(5);
var Config     = __webpack_require__(3);

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
  this.state = 0;
  this.old = 0;

  this.connections = {
    in   : [],
    out  : [],
    gated : [],
    self : new Connection(this, this, 0)
  };

  // Data for backpropagation
  this.error = {
    responsibility: 0,
    projected: 0,
    gated: 0
  };
}

Node.prototype = {
  /**
   * Activates the node
   */
  activate: function(input){
    // Check if an input is given
    if (typeof input != 'undefined') {
      this.activation = input;
      this.derivative = 0;
      this.bias = 0;
      return this.activation;
    }

    this.old = this.state;

    // All activation sources coming from the node itself (self-connections coming in the future)
    this.state = this.connections.self.gain * this.connections.self.weight * this.state + this.bias;

    // Activation sources coming from connections
    for(var connection in this.connections.in){
      connection = this.connections.in[connection];
      this.state += connection.from.activation * connection.weight * connection.gain;
    }

    // Squash the values received
    this.activation = this.squash(this.state);
    this.derivative = this.squash(this.state, true);

    // Update traces
    var nodes = [];
    var influences = [];

    for(var conn in this.connections.gated){
      conn = this.connections.gated[conn];
      var node = conn.to;

      var index = nodes.indexOf(node);
      if(index > -1){
        influences[index] += conn.weight * conn.from.activation;
      } else {
        nodes.push(node);
        influences.push(node.connections.self.gater == this ? node.old : 0);
        influences[influences.length - 1] += conn.weight * conn.from.activation;
      }
    }

    for (var connection in this.connections.in) {
      connection = this.connections.in[connection];

      // Elegibility trace
      connection.elegibility = this.connections.self.gain * this.connections.self.weight *
      connection.elegibility + connection.from.activation * connection.gain;

      // Extended trace
      for(var i = 0; i < nodes.length; i++){
        var node = nodes[i];
        var influence = influences[i];

        var index = connection.xtrace.nodes.indexOf(node);
        if(index >-1){
          connection.xtrace.values[index] = node.connections.self.gain * node.connections.self.weight *
          connection.xtrace.values[index] + this.derivative * connection.elegibility * influence;
        } else {
          // Does not exist there yet, might be through mutation
          connection.xtrace.nodes.push(node);
          connection.xtrace.values.push(this.derivative * connection.elegibility * influence);
        }
      }
    }


    // Update the gains of the gates
    for(var connection in this.connections.gated){
      this.connections.gated[connection].gain = this.activation;
    }

    return this.activation;
  },

  /**
   * Back-propagate the error
   */
  propagate: function(rate, target) {
    // Error accumulator
    var error = 0;

    // Output nodes get their error from the enviroment
    if (this.type == 'output'){
      this.error.responsibility = this.error.projected = target - this.activation;
    } else { // the rest of the nodes compute their error responsibilities by backpropagation
      // error responsibilities from all the connections projected from this node
      for (var connection in this.connections.out) {
        var connection = this.connections.out[connection];
        var node = connection.to;
        // Eq. 21
        error += node.error.responsibility * connection.weight * connection.gain;
      }

      // Projected error responsibility
      this.error.projected = this.derivative * error;

      // Error responsibilities from all connections gated by this neuron
      error = 0;

      for(var conn in this.connections.gated){
        conn = this.connections.gated[conn];
        var node = conn.to;
        var influence = node.connections.self.gater == this ? node.old : 0;

        influence += conn.weight * conn.from.activation;
        error += node.error.responsibility * influence;
      }

      // Gated error responsibility
      this.error.gated = this.derivative * error;

      // Error responsibility
      this.error.responsibility = this.error.projected + this.error.gated;
    }

    // Learning rate
    rate = rate || .1;

    // Adjust all the node's incoming connections
    for (var connection in this.connections.in) {
      var connection = this.connections.in[connection];

      var gradient = this.error.projected * connection.elegibility;

      for(var i = 0; i < connection.xtrace.nodes.length; i++){
        var node = connection.xtrace.nodes[i];
        var value = connection.xtrace.values[i];
        gradient += node.error.responsibility * value;
      }
      connection.weight += rate * gradient; // Adjust weights
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
         // Turn on the self connection by setting the weight
         if(this.connections.self.weight != 0){
           if(Config.warnings) console.warn('This connection already exists!');
         } else {
           this.connections.self.weight = 1;
         }
         connections.push(this.connections.self);
       } else if (this.isProjectingTo(target)){
         throw new Error('Already projecting a connection to this node!');
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
     if(this == node){
       this.connections.self.weight = 0;
       return;
     }

     for(var i in this.connections.out){
       var conn = this.connections.out[i];
       if(conn.to == node){
         this.connections.out.splice(i, 1);
         var j = conn.to.connections.in.indexOf(conn);
         conn.to.connections.in.splice(j, 1);
         if(conn.gater != null) this.ungate(conn);
         break;
       }
     }

     if(twosided){
       node.disconnect(this);
     }
   },

   /**
    * Make the node gate a connection
    */
   gate: function(connections){
     if(!Array.isArray(connections)){
       connections = [connections];
     }

     for(var connection in connections){
       connection = connections[connection];

       this.connections.gated.push(connection);
       connection.gater = this;
     }
   },

 /**
  * Ungates a connection
  */
  ungate: function(connections){
    if(!Array.isArray(connections)){
      connections = [connections];
    }


    for(var i = connections.length - 1; i >= 0; i--){
      var connection = connections[i];

      var index = this.connections.gated.indexOf(connection);
      this.connections.gated.splice(index, 1);
      connection.gater = null;
    }
  },

  /**
   * Clear the context of the node
   */
  clear: function(){
    for (var connection in this.connections.in) {
      connection = this.connections.in[connection];

      connection.elegibility = 0;
      connection.xtrace = {
        nodes: [],
        values : []
      };
    }

    this.error.responsibility = this.error.projected = this.error.gated = 0;
    this.old = this.state = this.activation = 0;
  },

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
        var squash = Math.floor(Math.random()*Mutation.MOD_ACTIVATION.allowed.length);

        // Should really be a NEW squash
        while(Mutation.MOD_ACTIVATION.allowed[squash] == this.squash){
          squash = Math.floor(Math.random()*Mutation.MOD_ACTIVATION.allowed.length);
        }

        this.squash = Mutation.MOD_ACTIVATION.allowed[squash];
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
        bias   : this.bias,
        type   : this.type,
        squash : this.squash.name
      };

      return json;
    }
};

/**
 * Convert a json to a node
 */
Node.fromJSON = function(json){
  var node = new Node();
  node.bias = json.bias;
  node.type = json.type;

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

/* WEBPACK VAR INJECTION */(function(module) {/*******************************************************************************************
                                      CONFIG
*******************************************************************************************/

// Config
var Config =  {
  warnings: true
};

/* Export */
if (module) module.exports = Config;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* Export */
if (module) module.exports = Connection;

/******************************************************************************************
                                      CONNECTION
*******************************************************************************************/

function Connection(from, to, weight) {
  this.from = from;
  this.to = to;
  this.gain = 1;

  this.weight = (typeof weight == 'undefined') ? Math.random() * .2 - .1 : weight;

  this.gater = null;
  this.elegibility = 0;

  this.xtrace = {
    nodes: [],
    values : []
  };
}

Connection.prototype = {
  /**
   * Converts the node to a json
   */
  toJSON : function(){
    var json = {
      weight : this.weight
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* Export */
if (module) module.exports = Group;

/* Import */
var Methods    = __webpack_require__(1);
var Connection = __webpack_require__(4);
var Node       = __webpack_require__(2);
var Config     = __webpack_require__(3);

/* Easier variable naming */
var Activation = Methods.Activation;
var Mutation   = Methods.Mutation;

/******************************************************************************************
                                         Group
*******************************************************************************************/

function Group(size){
  this.nodes = [];
  this.connections = { in : [], out: [] , self: [] };

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
  connect: function(target, method){
    var connections = [];
    if(target instanceof Group){
      if(typeof method == 'undefined'){
        if(this != target){
          if(Config.warnings) console.warn('No group connection specified, using ALL_TO_ALL');
          method = Methods.Connection.ALL_TO_ALL;
        } else {
          if(Config.warnings) console.warn('No group connection specified, using ONE_TO_ONE');
          method = Methods.Connection.ONE_TO_ONE;
        }
      }
      if(method == Methods.Connection.ALL_TO_ALL || method == Methods.Connection.ALL_TO_ELSE){
        for(var i = 0; i < this.nodes.length; i++){
          for(var j = 0; j < target.nodes.length; j++){
            if(method == Methods.Connection.ALL_TO_ELSE && this.nodes[i] == target.nodes[j]) continue;
            var connection = this.nodes[i].connect(target.nodes[j]);
            this.connections.out.push(connection[0]);
            target.connections.in.push(connection[0]);
            connections.push(connection[0]);
          }
        }
      } else if(method == Methods.Connection.ONE_TO_ONE){
        if(this.nodes.length != target.nodes.length){
          throw new Error('From and To group must be the same size!');
        }

        for(var i = 0; i < this.nodes.length; i++){
          var connection = this.nodes[i].connect(target.nodes[i]);
          this.connections.self.push(connection[0]);
          connections.push(connection[0]);
        }
      }

    } else if(target instanceof Node){
      for(var i = 0; i < this.nodes.length; i++){
        var connection = this.nodes[i].connect(target);
        this.connections.out.push(connection[0]);
        connections.push(connection[0]);
      }
    }

    return connections;
  },

  /**
   * Nodes in this group will gate connections
   */
  gate: function(connections, method){
    if(typeof method == 'undefined'){
      throw new Error('Please specify Gating.INPUT, Gating.OUTPUT');
    }

    if(!Array.isArray(connections)){
      connections = [connections];
    }

    var nodes1 = [];
    var nodes2 = [];

    for(var connection in connections){
      connection = connections[connection];
      if(!nodes1.includes(connection.from)) nodes1.push(connection.from);
      if(!nodes2.includes(connection.to)) nodes2.push(connection.to);
    }

    switch(method){
      case Methods.Gating.INPUT:
        for(var i = 0; i < nodes2.length; i++){
          var node = nodes2[i];
          var gater = this.nodes[i % this.nodes.length];

          for(var conn in node.connections.in){
            conn = node.connections.in[conn];
            if(connections.includes(conn)){
              gater.gate(conn);
            }
          }
        }
        break;
      case Methods.Gating.OUTPUT:
        for(var i = 0; i < nodes1.length; i++){
          var node = nodes1[i];
          var gater = this.nodes[i % this.nodes.length];

          for(var conn in node.connections.out){
            conn = node.connections.out[conn];
            if(connections.includes(conn)){
              gater.gate(conn);
            }
          }
        }
        break;
      case Methods.Gating.SELF:
        for(var i = 0; i < nodes1.length; i++){
          var node = nodes1[i];
          var gater = this.nodes[i % this.nodes.length];

          if(connections.includes(node.connections.self)){
            gater.gate(node.connections.self);
          }
        }
    }
  },

  /**
   * Sets the value of a property for every node
   */
  set: function(values){
    for(var node in this.nodes){
      this.nodes[node].bias = values.bias || this.nodes[node].bias;
      this.nodes[node].squash = values.squash || this.nodes[node].squash;
    }
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
   * Clear the context of the group
   */
  clear: function(){
    for(var node in this.nodes){
      this.nodes[node].clear();
    }
  }
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* Export */
if (module) module.exports = Network;

/* Import */
var Node       = __webpack_require__(2);
var Connection = __webpack_require__(4);
var Methods    = __webpack_require__(1);
var Config     = __webpack_require__(3);

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
  this.selfconns = [];

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
   * Clear the context of the network
   */
  clear: function(){
    for(var node in this.nodes){
      this.nodes[node].clear();
    }
  },

  /**
   * Connects the from node to the to node
   */
  connect: function(from, to){
    var connections = from.connect(to);

    for(var connection in connections){
      connection = connections[connection];
      if(from != to){
        this.connections.push(connection);
      } else {
        this.selfconns.push(connection);
      }

    }

    return connections;
  },

  /**
   * Disconnects the from node from the to node
   */
  disconnect: function(from, to){
    // Delete the connection in the network's connection array
    var connections = from == to ? this.selfconns : this.connections;

    for(conn in connections){
      var connection = connections[conn];
      if(connection.from == from && connection.to == to){
        if(connection.gater != null) this.ungate(connection);
        connections.splice(conn, 1);
        break;
      }
    }

    // Delete the connection at the sending and receiving neuron
    from.disconnect(to);
  },

  /**
   *  Gate a connection with a node
   */
  gate: function(node, connection){
    if(this.nodes.indexOf(node) == -1){
      throw new Error('This node is not part of the network!');
    } else if (connection.gater != null){
      if(Config.warnings) console.warn('This connection is already gated!');
      return;
    }
    node.gate(connection);
    this.gates.push(connection);
  },

 /**
  *  Remove the gate of a connection
  */
  ungate: function(connection){
    var index = this.gates.indexOf(connection);
    if(index == -1){
      throw new Error('This connection is not gated!');
    }

    this.gates.splice(index, 1);
    connection.gater.ungate(connection);
  },

  /**
   *  Removes a node from the network
   */
  remove: function(node){
    var index = this.nodes.indexOf(node);

    if(index == -1){
      throw new Error('This node does not exist!');
    }

    // Keep track of gaters
    var gaters = [];

    // Get all its inputting nodes
    var inputs = [];
    for(var i = node.connections.in.length - 1; i >= 0; i--){
      var connection = node.connections.in[i];
      if(Methods.Mutation.SUB_NODE.keep_gates && connection.gater != null && connection.gater != node){
        gaters.push(connection.gater);
      }
      inputs.push(connection.from);
      this.disconnect(connection.from, node);
    }

    // Get all its outputing nodes
    var outputs = [];
    for(var i = node.connections.out.length - 1; i >= 0; i--){
      var connection = node.connections.out[i];
      if(Methods.Mutation.SUB_NODE.keep_gates && connection.gater != null && connection.gater != node){
        gaters.push(connection.gater);
      }
      outputs.push(connection.to);
      this.disconnect(node, connection.to);
    }

    // Connect the input nodes to the output nodes (if not already connected)
    var connections = [];
    for(var input in inputs){
      input = inputs[input];
      for(var output in outputs){
        output = outputs[output];
        if(!input.isProjectingTo(output)){
          var conn = this.connect(input, output);
          connections.push(conn[0]);
        }
      }
    }

    // Gate random connections with gaters
    for(var gater in gaters){
      if(connections.length == 0) break;
      gater = gaters[gater];

      var connIndex = Math.floor(Math.random() * connections.length);
      var conn = connections[connIndex];

      this.gate(gater, connections[connIndex]);
      connections.splice(connIndex, 1);
    }

    // Remove gated connections gated by this node
    for(var i = node.connections.gated.length - 1; i >= 0 ; i--){
      var conn = node.connections.gated[i];
      this.ungate(conn);
    }

    // Remove selfconnection
    this.disconnect(node, node);

    // Remove the node from this.nodes
    this.nodes.splice(index, 1);
  },

  /**
   * Mutates the network with the given method
   */
  mutate: function(method){
    if(typeof method == 'undefined'){
      throw new Error('No (correct) mutate method given!');
    }

    switch(method){
      case Mutation.ADD_NODE:
        // Look for an existing connection and place a node in between
        var connection = this.connections[Math.floor(Math.random() * this.connections.length)];
        var gater = connection.gater;
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
        var newConn1 = this.connect(connection.from, node)[0];
        var newConn2 = this.connect(node, connection.to)[0];

        // Check if the original connection was gated
        if(gater != null){
          this.gate(gater, Math.random() >= 0.5 ? newConn1 : newConn2);
        }
        break;
      case Mutation.SUB_NODE:
        // Check if there are nodes left to remove
        if(this.nodes.length == this.input + this.output){
          if(Config.warnings) console.warn('No more nodes left to remove!');
          break;
        }

        // Select a node which isn't an input or output node
        var index = Math.floor(Math.random() * (this.nodes.length - this.output - this.input) + this.input);
        var node = this.nodes[index];
        this.remove(node);
        break;
      case Mutation.ADD_CONN:
        // Create an array of all uncreated (feedforward) connections
        var available = [];
        for(var i = 0; i < this.nodes.length; i++){
          var node1 = this.nodes[i];
          if(node1.type == 'output') continue;
          for(var j = i + 1; j < this.nodes.length; j++){
            var node2 = this.nodes[j];
            if(node2.type == 'input') continue;

            var found = false;
            for(var a = 0; a < this.connections.length; a++){
              if(this.connections[a].from == node1 && this.connections[a].to == node2){
                found = true;
                break;
              }
            }

            if(!found) available.push([node1, node2]);
          }
        }

        if(available.length == 0){
          if(Config.warnings) console.warn('No more connections to be made!');
          break;
        }

        var pair = available[Math.floor(Math.random() * available.length)];

        this.connect(pair[0], pair[1]);
        break;
      case Mutation.SUB_CONN:
        // List of possible connections that can be removed
        var possible = [];

        for(conn in this.connections){
          conn = this.connections[conn];
          // Check if it is not disabling a node
          if(conn.from.connections.out.length > 1 && conn.to.connections.in.length > 1 && this.nodes.indexOf(conn.to) > this.nodes.indexOf(conn.from)){
            possible.push(conn);
          }
        }

        if(possible.length == 0){
          if(Config.warnings) console.warn('No connections to remove!');
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
      case Mutation.ADD_SELF_CONN:
        // Check which nodes aren't selfconnected yet
        var possible = [];
        for(var i = this.input; i < this.nodes.length; i++){
          var node = this.nodes[i];
          if(node.connections.self.weight == 0){
            possible.push(node);
          }
        }

        if(possible.length == 0){
          if(Config.warnings) console.warn('No more self-connections to add!');
          break;
        }

        // Select a random node
        var node = possible[Math.floor(Math.random() * possible.length)];

        // Connect it to himself
        this.connect(node, node);
        break;
      case Mutation.SUB_SELF_CONN:
        if(this.selfconns.length == 0){
          if(Config.warnings) console.warn('No more self-connections to remove!');
          break;
        }
        var conn = this.selfconns[Math.floor(Math.random() * this.selfconns.length)];
        this.disconnect(conn.from, conn.to);
        break;
      case Mutation.ADD_GATE:
        var allconnections = this.connections.concat(this.selfconns);

        // Create a list of all non-gated connections
        var possible = [];
        for(var conn in allconnections){
          conn = allconnections[conn];
          if(conn.gater == null){
            possible.push(conn);
          }
        }

        if(possible.length == 0){
          if(Config.warnings) console.warn('No more connections to gate!');
          break;
        }

        // Select a random gater node and connection
        var node = this.nodes[Math.floor(Math.random() * this.nodes.length)];
        var conn = possible[Math.floor(Math.random() * possible.length)];

        // Gate the connection with the node
        this.gate(node, conn);
        break;
      case Mutation.SUB_GATE:
        // Select a random gated connection
        if(this.gates.length == 0){
          if(Config.warnings) console.warn('No more connections to ungate!');
          break;
        }

        var index = Math.floor(Math.random() * this.gates.length);
        var gatedconn = this.gates[index];

        this.ungate(gatedconn);
        break;
      case Mutation.ADD_BACK_CONN:
        // Create an array of all uncreated (backfed) connections
        var available = [];
        for(var i = 0; i < this.nodes.length; i++){
          var node1 = this.nodes[i];
          if(node1.type == 'input') continue;
          for(var j = 0; j < i; j++){
            var node2 = this.nodes[j];
            if(node2.type == 'input') continue;

            var found = false;
            for(var a = 0; a < this.connections.length; a++){
              if(this.connections[a].from == node1 && this.connections[a].to == node2){
                found = true;
                break;
              }
            }

            if(!found) available.push([node1, node2]);
          }
        }

        if(available.length == 0){
          if(Config.warnings) console.warn('No more connections to be made!');
          break;
        }

        var pair = available[Math.floor(Math.random() * available.length)];

        this.connect(pair[0], pair[1]);
        break;
      case Mutation.SUB_BACK_CONN:
        // List of possible connections that can be removed
        var possible = [];

        for(conn in this.connections){
          conn = this.connections[conn];
          // Check if it is not disabling a node
          if(conn.from.connections.out.length > 1 && conn.to.connections.in.length > 1 && this.nodes.indexOf(conn.from) > this.nodes.indexOf(conn.to)){
            possible.push(conn);
          }
        }

        if(possible.length == 0){
          if(Config.warnings) console.warn('No connections to remove!');
          break;
        }

        var randomConn = possible[Math.floor(Math.random() * possible.length)];
        this.disconnect(randomConn.from, randomConn.to);
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
      if(Config.warnings) console.warn('Using default learning rate, please define a rate!')
    }

    if(typeof options.iterations == "undefined"){
      if(Config.warnings) console.warn('No target iterations given, running until error is reached!')
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
    var clear         = options.clear         || false;

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
        if(clear) this.clear();
        error += this.test(testSet, cost).error;
        if(clear) this.clear();
      } else {
        error += this._trainSet(set, currentRate, cost);
        if(clear) this.clear();
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
    cost = cost || Methods.Cost.MSE;
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
       node.type   == 'input'                  ? (type = 0, name = 'input') :
       node.type   == 'output'                 ? (type = 1, name = 'output') :
       node.squash == Activation.LOGISTIC      ? (type = 2, name = 'sinusoid') :
       node.squash == Activation.TANH          ? (type = 3, name = 'tanh') :
       node.squash == Activation.IDENTITY      ? (type = 4, name = 'identity') :
       node.squash == Activation.HLIM          ? (type = 5, name = 'hlim') :
       node.squash == Activation.RELU          ? (type = 6, name = 'relu') :
       node.squash == Activation.SOFTSIGN      ? (type = 7, name = 'softsign') :
       node.squash == Activation.SINUSOID      ? (type = 8, name = 'sinusoid') :
       node.squash == Activation.GAUSSIAN      ? (type = 9, name = 'gaussian') :
       node.squash == Activation.SOFTPLUS      ? (type = 10, name = 'softplus') :
       node.squash == Activation.BENT_IDENTITY ? (type = 11, name = 'bent identity') :
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
         name: name,
         type : type,
         activation : node.activation
       });
     }

     var connections = this.connections.concat(this.selfconns);
     for(connection in connections){
       connection = connections[connection];
       if(connection.gater == null){
         json.links.push({
           source : this.nodes.indexOf(connection.from),
           target : this.nodes.indexOf(connection.to),
           weight : connection.weight
         });
       } else {
         // Add a gater 'node'
         var index = json.nodes.length;
         json.nodes.push({
           id: index,
           type: 12, // GATE,
           activation: connection.gater.activation,
           name: 'GATE'
         });
         json.links.push({
           source: this.nodes.indexOf(connection.from),
           target: index,
           weight: 1/2 * connection.weight
         });
         json.links.push({
           source: index,
           target: this.nodes.indexOf(connection.to),
           weight: 1/2 * connection.weight
         });
         json.links.push({
           source: this.nodes.indexOf(connection.gater),
           target: index,
           weight: connection.gater.activation,
           gate: true
         });
       }

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
        var node = this.nodes[index];
        var tojson = node.toJSON();
        tojson.index = index;
        json.nodes.push(tojson);

        if(node.connections.self.weight != 0){
          var tojson = node.connections.self.toJSON();
          tojson.from = index;
          tojson.to = index;

          tojson.gater = node.connections.self.gater != null ? this.nodes.indexOf(node.connections.self.gater) : null;
          json.connections.push(tojson);
        }
      }

      for(conn in this.connections){
        var conn = this.connections[conn];
        var tojson = conn.toJSON();
        tojson.from = this.nodes.indexOf(conn.from);
        tojson.to = this.nodes.indexOf(conn.to);

        tojson.gater = conn.gater != null ? this.nodes.indexOf(conn.gater) : null;

        json.connections.push(tojson);
      }


      return json;
    },

  /**
   * Sets the value of a property for every node
   */
    set: function(values){
      for(var node in this.nodes){
        this.nodes[node].bias = values.bias || this.nodes[node].bias;
        this.nodes[node].squash = values.squash || this.nodes[node].squash;
      }
    }
};

/**
 * Convert a json to a network
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

     var connection = network.connect(network.nodes[conn.from], network.nodes[conn.to])[0];
     connection.weight = conn.weight;

     if(conn.gater != null){
       network.gate(network.nodes[conn.gater], connection);
     }
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
     var size = Math.floor(Math.random() * (max - min + 1) + min);
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

   // Clear the node connections, make a copy
   for(node in offspring.nodes){
     offspring.nodes[node] = Node.fromJSON(offspring.nodes[node].toJSON());
   }

   // Create arrays of connection genes
   var n1conns = {};
   var n2conns = {};

   var n1connections = network1.connections.concat(network1.selfconns);
   for(conn in n1connections){
     var conn = n1connections[conn];
     var data = {
       weight: conn.weight,
       from  : network1.nodes.indexOf(conn.from),
       to    : network1.nodes.indexOf(conn.to),
       gater : network1.nodes.indexOf(conn.gater)
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

   var n2connections = network2.connections.concat(network2.selfconns);
   for(conn in n2connections){
     var conn = n2connections[conn];
     var data = {
       weight: conn.weight,
       from  : network2.nodes.indexOf(conn.from),
       to    : network2.nodes.indexOf(conn.to),
       gater : network2.nodes.indexOf(conn.gater)
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
     if(connData.to < size && connData.from < size){
       var from = offspring.nodes[connData.from];
       var to   = offspring.nodes[connData.to];
       var conn = offspring.connect(from, to)[0];

       conn.weight = connData.weight;

       if(connData.gater != -1 && connData.gater < size){
         offspring.gate(offspring.nodes[connData.gater], conn);
       }
     }
   }
   return offspring;
 }

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 7 */
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* Import */
var Network = __webpack_require__(6);
var Methods = __webpack_require__(1);
var Node    = __webpack_require__(2);
var Group   = __webpack_require__(5);

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
      if(nodes[node].connections.out.length + nodes[node].connections.gated.length == 0){
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
      for(var conn in nodes[node].connections.gated){
        network.gates.push(nodes[node].connections.gated[conn]);
      }
      if(nodes[node].connections.self.weight != 0){
        network.selfconns.push(nodes[node].connections.self);
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

  LSTM: function(){
    var args = Array.prototype.slice.call(arguments);
    if (args.length < 3){
      throw new Error("not enough layers (minimum 3) !!");
    }

    var last = args.pop();

    if(typeof last == 'number'){
      var outputLayer = new Group(last);
      last = {};
    } else {
      var outputLayer = new Group(args.pop()); // last argument
    }

    var options = {};
    options.memoryToMemory = last.memoryToMemory || false;
    options.outputToMemory = last.outputToMemory || false;
    options.outputToGates  = last.outputToGates  || false;
    options.inputToOutput  = last.inputToOutput  || true;

    var inputLayer  = new Group(args.shift()); // first argument
    var blocks = args; // all the arguments in the middle

    var nodes = [];
    nodes.push(inputLayer);

    var previous = null;
    for(var block in blocks){
      block = blocks[block];

      // Init required nodes (in activation order)
      var inputGate  = new Group(block);
      var forgetGate = new Group(block);
      var memoryCell = new Group(block);
      var outputGate = new Group(block);

      inputGate.set({ bias:1 });
      forgetGate.set({ bias:1 });
      outputGate.set({ bias:1 });

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
      inputGate.gate(input, Methods.Gating.INPUT);
      forgetGate.gate(forget, Methods.Gating.SELF);
      outputGate.gate(output, Methods.Gating.OUTPUT);

      // Connect previous memory block to this block
      if(previous != null){
        previous.connect(memoryCell);
        previous.connect(inputGate);
        previous.connect(forgetGate);
        previous.connect(outputGate);
      }

      // Optional connections
      if(options.memoryToMemory){
        memoryCell.connect(memoryCell, Methods.Connection.ALL_TO_ELSE);
      }

      if(options.outputToMemory){
        outputLayer.connect(memoryCell);
      }

      if(options.outputToGates){
        outputLayer.connect(inputGate);
        outputLayer.connect(forgetGate);
        outputLayer.connect(outputGate);
      }

      // At to array
      nodes.push(inputGate);
      nodes.push(forgetGate);
      nodes.push(memoryCell);
      nodes.push(outputGate);

      previous = memoryCell;
    }

    // input to output direct connection
    if(options.inputToOutput){
      inputLayer.connect(outputLayer);
    }

    nodes.push(outputLayer);
    return Architect.Construct(nodes);
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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* Export */
if (module) module.exports = Neat;

/* Import */
var Node = __webpack_require__(2);
var Network = __webpack_require__(6);
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
  this.mutationRate   = options.mutationRate   || 0.3;
  this.mutationAmount = options.mutationAmount || 1;

  this.selection      = options.selection || [Methods.Selection.FITNESS_PROPORTIONATE];
  this.crossover      = options.crossover || [Methods.Crossover.SINGLE_POINT,
                                              Methods.Crossover.TWO_POINT,
                                              Methods.Crossover.UNIFORM,
                                              Methods.Crossover.AVERAGE];
  this.mutation       = options.mutation  || [Methods.Mutation.ADD_CONN,
                                              Methods.Mutation.SUB_CONN,
                                              Methods.Mutation.ADD_NODE,
                                              Methods.Mutation.SUB_NODE,
                                              Methods.Mutation.MOD_BIAS,
                                              Methods.Mutation.MOD_WEIGHT,
                                              Methods.Mutation.MOD_ACTIVATION];

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

  /**
   * Export the current population
   */
  export: function(){
    var json = [];
    for(var genome in this.population){
      genome = this.population[genome];
      json.push(genome.toJSON());
    }

    return json;
  },

  /**
   * Import population from a json
   */
  import: function(json){
    var population = [];
    for(var genome in json){
      genome = json[genome];
      population.push(Network.fromJSON(genome));
    }
    this.population = population;
    this.popsize = population.length;
  }
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/*******************************************************************************************
                                    CONNECTION
*******************************************************************************************/

// Specifies in what manner two groups are connected
var Connection = {
  ALL_TO_ALL : {
    name : "OUTPUT"
  },
  ALL_TO_ELSE : {
    name : "INPUT"
  },
  ONE_TO_ONE : {
    name: "SELF"
  }
};

/* Export */
if (module) module.exports = Connection;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 11 */
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
/* 12 */
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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/*******************************************************************************************
                                    GATING
*******************************************************************************************/

// Specifies how to gate a connection between two groups of multiple neurons
var Gating = {
  OUTPUT : { // not yet implemented
    name : "OUTPUT"
  },
  INPUT : { // not yet implemented
    name : "INPUT"
  },
  SELF : {
    name: "SELF"
  }
};

/* Export */
if (module) module.exports = Gating;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* Import */
var Activation = __webpack_require__(7);

/*******************************************************************************************
                                      MUTATION
*******************************************************************************************/

//https://en.wikipedia.org/wiki/Mutation_(genetic_algorithm)
var Mutation = {
  ADD_NODE : {
    name : "ADD_NODE"
  },
  SUB_NODE : {
    name : "SUB_NODE",
    keep_gates: true
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
  },
  ADD_SELF_CONN : {
    name: "ADD_SELF_CONN"
  },
  SUB_SELF_CONN : {
    name: "SUB_SELF_CONN"
  },
  ADD_GATE : {
    name: "ADD_GATE"
  },
  SUB_GATE : {
    name: "SUB_GATE"
  },
  ADD_BACK_CONN : {
    name: "ADD_BACK_CONN"
  },
  SUB_BACK_CONN : {
    name: "SUB_BACK_CONN"
  }
};

/* Export */
if (module) module.exports = Mutation;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 15 */
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
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var Neataptic = {
  Node       : __webpack_require__(2),
  Neat       : __webpack_require__(9),
  Network    : __webpack_require__(6),
  Methods    : __webpack_require__(1),
  Architect  : __webpack_require__(8),
  Group      : __webpack_require__(5),
  Connection : __webpack_require__(4),
  Config     : __webpack_require__(3)
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