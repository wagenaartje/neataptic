/* Export */
if (module) module.exports = Node;

/* Import */
var Connection = require('./connection');
var Methods    = require('./methods/methods');
var Group      = require('./group');
var Config     = require('./config');

/* Easier variable naming */
var Activation = Methods.Activation;
var Mutation   = Methods.Mutation;

/******************************************************************************************
                                         NODE
*******************************************************************************************/

function Node(type) {
  this.bias = (type == 'input') ? 0 : Math.random() * .2 - .1;
  this.squash = Activation.LOGISTIC;
  this.type = type || 'hidden';

  this.activation = 0;
  this.state = 0;
  this.old = 0;

  this.mask = 1;

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

    // All activation sources coming from the node itself
    this.state = this.connections.self.gain * this.connections.self.weight * this.state + this.bias;

    // Activation sources coming from connections
    for(var connection in this.connections.in){
      connection = this.connections.in[connection];
      this.state += connection.from.activation * connection.weight * connection.gain;
    }

    // Squash the values received
    this.activation = this.squash(this.state) * this.mask;
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
   * Back-propagate the error, aka learn
   */
  propagate: function(rate, momentum, target) {
    // Error accumulator
    var error = 0;

    momentum = momentum || 0;

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

    if(this.type == 'constant') return;

    // Learning rate
    rate = rate || .3;

    // Adjust all the node's incoming connections
    for (var connection in this.connections.in) {
      var connection = this.connections.in[connection];

      var gradient = this.error.projected * connection.elegibility;

      for(var i = 0; i < connection.xtrace.nodes.length; i++){
        var node = connection.xtrace.nodes[i];
        var value = connection.xtrace.values[i];
        gradient += node.error.responsibility * value;
      }

      var deltaWeight = rate * gradient * this.mask + momentum * connection.previousDeltaWeight;

      connection.weight += deltaWeight;

      connection.previousDeltaWeight = deltaWeight;
    }

    // Adjust bias
    this.bias += rate * this.error.responsibility;
  },

  /**
   * Creates a connection from this node to the given node
   */
   connect: function(target, weight){
     var connections = [];
     if(target instanceof Group){
       for(var i = 0; i < target.nodes.length; i++){
         var connection = new Connection(this, target.nodes[i], weight);
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
           this.connections.self.weight = weight || 1;
         }
         connections.push(this.connections.self);
       } else if (this.isProjectingTo(target)){
         throw new Error('Already projecting a connection to this node!');
       } else {
         var connection = new Connection(this, target, weight);
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
    * Make this node gate a connection
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
  * Removes the gates from this node from the given connection(s)
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
        // Can't be the same squash
        var squash = method.allowed[(method.allowed.indexOf(this.squash) + Math.floor(Math.random() * (method.allowed.length - 1)) + 1) % method.allowed.length];
        this.squash = squash;
        break;
      case Mutation.MOD_BIAS:
        var modification = Math.random() * (method.max - method.min) + method.min;
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
     * Converts the node to a json object
     */
    toJSON: function(){
      var json = {
        bias   : this.bias,
        type   : this.type,
        squash : this.squash.name,
        mask   : this.mask
      };

      return json;
    }
};

/**
 * Convert a json object to a node
 */
Node.fromJSON = function(json){
  var node = new Node();
  node.bias = json.bias;
  node.type = json.type;
  node.mask = json.mask;

  for(squash in Activation){
    if(Activation[squash].name == json.squash){
      node.squash = Activation[squash];
      break;
    }
  }

  return node;
}
