/*******************************************************************************************
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
