/* Export */
if (module) module.exports = Network;

/* Import */
var Node       = require('./node');
var Connection = require('./connection');
var Methods    = require('./methods/methods');

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

  // Create input and output nodes
  for(var i = 0; i < this.input + this.output; i++){
    var type = (i < this.input) ? 'input' : 'output';
    this.nodes.push(new Node(type));
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
    var connection = new Connection(from, to);

    this.connections.push(connection);
    connection.to.connections.in.push(connection);
    connection.from.connections.out.push(connection);

    return connection;
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

    // Delete the connection at the input neuron
    for(conn in to.connections.in){
      if(to.connections.in[conn].from == from){
        to.connections.in.splice(conn, 1);
        break;
      }
    }

    // Delete the connection at output neuron
    for(conn in from.connections.out){
      if(from.connections.out[conn].to == to){
        from.connections.out.splice(conn, 1);
        break;
      }
    }
  },

  /**
   * Creates a json that can be used to create a graph with d3 and webcola
   * assuming graph size 600x600
   */
   graph: function(){
     var input = 0;
     var output = 0;
     var json = {
       nodes : [],
       links : [],
       constraints : [
         { type:"alignment", axis:"x", offsets:[] },
         { type:"alignment", axis:"y", offsets:[] }
       ]
     };

     for(index in this.nodes){
       var node = this.nodes[index];
       var type = node.type == 'input' ? 0 :
         node.type == 'output' ? 1 :
         node.squash == Activation.LOGISTIC ? 2 :
         node.squash == Activation.TANH ? 3 :
         node.squash == Activation.IDENTITY ? 4 :
         node.squash == Activation.HLIM ? 5 :
         node.squash == Activation.RELU ? 6 :
         node.squash == Activation.SOFTSIGN ? 7 :
         node.squash == Activation.SINUSOID ? 8 :
         node.squash == Activation.GAUSSIAN ? 9 :
         null;

       if(type == 0){
         json.constraints[0].offsets.push({node:index, offset : 600 / this.input * input});
         json.constraints[1].offsets.push({node:index, offset : 0});
         input++;
       } else if (type == 1){
         json.constraints[0].offsets.push({node:index, offset : 600 / this.output * output});
         json.constraints[1].offsets.push({node:index, offset : -200});
         output++;
       }

       json.nodes.push({
         id: index,
         type : type
       });
     }

     for(connection in this.connections){
       connection = this.connections[connection];
       json.links.push({
         source : this.nodes.indexOf(connection.from),
         target : this.nodes.indexOf(connection.to),
         weight  : connection.weight
       });
     }

     return json;
   },

  /**
   * Mutates the network with the given method
   */
  mutate: function(method){
    if(typeof method == 'undefined'){
      throw new Error('No mutate method given');
    }

    switch(method){
      case Mutation.ADD_NODE:
        // Look for an existing connection and place a node in between
        var connection = this.connections[Math.floor(Math.random() * this.connections.length)];
        this.disconnect(connection.from, connection.to);

        // Insert the new node right before the old connection.to
        var toIndex = this.nodes.indexOf(connection.to);
        var node = new Node();

        // Random squash function
        node.mutate(Mutation.MOD_ACTIVATION);

        // Place it in this.nodes
        var minBound = Math.min(toIndex, this.nodes.length - this.output);
        this.nodes.splice(minBound, 0, node);

        // Now create two new connections
        this.connect(connection.from, node);
        this.connect(node, connection.to);
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

        if(maxConn == this.connections.length) throw new Error('Maximum amount of connections reached!');

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
      case Mutation.MOD_WEIGHT:
        var connection = this.connections[Math.floor(Math.random() * this.connections.length)];
        var modification = Math.random() * (Mutation.MOD_WEIGHT.config.max - Mutation.MOD_WEIGHT.config.min) + Mutation.MOD_WEIGHT.config.min;
        connection.weight += modification;
        break;
      case Mutation.MOD_BIAS:
        // Has no effect on input node, so they are excluded
        var index = Math.floor(Math.random() * (this.nodes.length - this.input) + this.input);
        var node = this.nodes[index];

        var modification = Math.random() * (Mutation.MOD_BIAS.config.max - Mutation.MOD_BIAS.config.min) + Mutation.MOD_BIAS.config.min;
        node.bias += modification;
        break;
    }
  }
};
