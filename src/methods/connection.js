/*******************************************************************************
                                    CONNECTION
*******************************************************************************/

// Specifies in what manner two groups are connected
var connection = {
  ALL_TO_ALL: {
    name: 'OUTPUT'
  },
  ALL_TO_ELSE: {
    name: 'INPUT'
  },
  ONE_TO_ONE: {
    name: 'SELF'
  }
};

/* Export */
module.exports = connection;
