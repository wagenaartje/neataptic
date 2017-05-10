/* Export */
if (module) module.exports = Group;

/* Import */
var Methods    = require('./methods/methods');
var Connection = require('./connection');
var Node       = require('./node');
var Config     = require('./config');

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
  connect: function(target, method, weight){
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
            var connection = this.nodes[i].connect(target.nodes[j], weight);
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
          var connection = this.nodes[i].connect(target.nodes[i], weight);
          this.connections.self.push(connection[0]);
          connections.push(connection[0]);
        }
      }

    } else if(target instanceof Node){
      for(var i = 0; i < this.nodes.length; i++){
        var connection = this.nodes[i].connect(target, weight);
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
      if(typeof values.bias != 'undefined'){
        this.nodes[node].bias = values.bias;
      }

      this.nodes[node].squash = values.squash || this.nodes[node].squash;
      this.nodes[node].type = values.type || this.nodes[node].type;
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
