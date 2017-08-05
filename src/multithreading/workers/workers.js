/*******************************************************************************
                                  WORKERS
*******************************************************************************/

var workers = {
  node: {
    TestWorker: require('./node/testworker')
  },
  browser: {
    TestWorker: require('./browser/testworker')
  }
};

/** Export */
module.exports = workers;
