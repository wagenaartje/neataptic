/* Export */
if (module) module.exports = Group;

/* Import */
var Methods    = require('./methods/methods');
var Connection = require('./connection');
var Node       = require('./node');

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
