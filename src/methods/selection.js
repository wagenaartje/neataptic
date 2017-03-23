/*******************************************************************************************
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
