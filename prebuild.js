var fs = require('fs')
module.exports = function() {
  // LICENSE
  var license = fs.readFileSync('LICENSE', 'utf-8')
  fs.writeFileSync('LICENSE', license)
  // return license for dist banner
  return license
}
