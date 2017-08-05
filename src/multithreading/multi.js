/*******************************************************************************
                                MULTITHREADING
*******************************************************************************/

var multi = {
  /** Workers */
  workers: require('./workers/workers'),

  /** Snippets */
  snippets: require('./snippets'),

  /** Serializes a dataset */
  serializeDataSet: function (dataSet) {
    var serialized = [dataSet[0].input.length, dataSet[0].output.length];

    for (var i = 0; i < dataSet.length; i++) {
      var j;
      for (j = 0; j < serialized[0]; j++) {
        serialized.push(dataSet[i].input[j]);
      }
      for (j = 0; j < serialized[1]; j++) {
        serialized.push(dataSet[i].output[j]);
      }
    }

    return serialized;
  }
};

/* Export */
module.exports = multi;
