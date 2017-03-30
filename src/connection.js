/* Export */
if (module) module.exports = Connection;

/******************************************************************************************
                                      CONNECTION
*******************************************************************************************/

function Connection(from, to) {
  this.weight = Math.random() * .2 - .1;
  this.from = from;
  this.to = to;
  this.ID = Connection.innovationUID();
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
 * Returns a unique innovation ID
 */
(function() {
  var counter = 0;
  Connection.innovationUID = function() {
    return counter++;
  }
})();
