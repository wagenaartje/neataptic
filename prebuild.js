var fs = require('fs')
module.exports = function(){
  // LICENSE
  return fs.readFileSync('LICENSE', 'utf-8');
}
