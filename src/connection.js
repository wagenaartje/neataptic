/* Export */
if (module) module.exports = Connection;

/******************************************************************************************
                                      CONNECTION
*******************************************************************************************/

function Connection(from, to, weight) {
  this.weight = weight || Math.random() * .2 - .1;
  this.from = from;
  this.to = to;
  this.gain = 1;

  this.elegibility = 0;
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
