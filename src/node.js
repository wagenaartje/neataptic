/* Export */
if (module) module.exports = Node;

/* Import */
var Methods    = require('./methods/methods');
var Connection = require('./connection');

/* Easier variable naming */
var Activation = Methods.Activation;
var Mutation   = Methods.Mutation;

/******************************************************************************************
                                         node
*******************************************************************************************/

function Node(type) {
  this.bias = (type == 'input') ? 0 : Math.random() * .2 - .1;
  this.squash = Activation.LOGISTIC;
  this.type = type || 'hidden'; // hidden if not specified

  this.activation = 0;
  this.connections = { in : [], gate: [], out : [] };

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
    this.state = this.bias;

    // Activation sources coming from connections
    for(connection in this.connections.in){
      var connection = this.connections.in[connection];
      this.state += connection.from.activation * connection.weight * connection.gain;
    }

    // Squash the values received
    this.activation = this.squash(this.state);
    this.derivative = this.squash(this.state, true);

    // Update traces
    var influences = {};
    for(var node in this.trace.extended){
      var influence = 0;
      for(var incoming in this.trace.influences[node].connections){
        incoming = this.trace.influences[node].connections[incoming];
        influence = incoming.weight * incoming.from.activation;
      }

      influences[node] = influence;
    }

    for (var index in this.connections.in) {
      var input = this.connections.in[index];

      // Elegibility trace
      this.trace.elegibility[index] = input.from.activation * input.gain;

      for(var node in this.trace.extended){

        var xtrace = this.trace.extended[node];
        var influence = influences[node];
        xtrace.connections[index] = this.derivative * this.trace.elegibility[index] * influence;
      }
    }


    for(var index in this.connections.gate){
      this.connections.gate[index].gain = this.activation;
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

      error = 0;

      // Error responsibilities from gated connections
      for(var node in this.trace.extended){
        var influence = 0;

        for(var input in this.trace.influences[node].connections){
          influence += this.trace.influences[node].connections[input].weight * this.trace.influences[
            node].connections[input].from.activation;
        }

        error += this.trace.influences[node].node.error.responsibility * influence;
      }

      // Gated error responsibility
      this.error.gated = this.derivative * error;

      // Error responsibility
      this.error.responsibility = this.error.projected + this.error.gated;
    }

    // Learning rate
    rate = rate || .1;

    // Adjust all the node's incoming connections
    for (var index in this.connections.in) {
      var input = this.connections.in[index];

      var gradient = this.error.projected * this.trace.elegibility[index];

      for(var node in this.trace.extended){
        gradient += this.trace.extended[node].node.error.responsibility * this.trace.extended[node].connections[index];
      }


      input.weight += rate * gradient; // Adjust weights
    }

    // Adjust bias
    this.bias += rate * this.error.responsibility;
  },

  /**
   * Creates a connection from this node to the given node
   */
  connect: function(node){
    var connection = new Connection(this, node);

    this.connections.out.push(connection);
    node.connections.in.push(connection);

    return connection;
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
   gate: function(connection){
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
        ID     : this.ID,
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
  node.ID   = json.ID;
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
