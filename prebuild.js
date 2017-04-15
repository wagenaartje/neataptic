var fs = require('fs')
module.exports = function(){
  // LICENSE
  var license = fs.readFileSync('LICENSE', 'utf-8')

  // Update the README to include the (one to latest) dist version
  var commithash = fs.readFileSync('.git/refs/heads/master', 'utf-8')
  commithash = commithash.substring(0, 8)

  var readme = fs.readFileSync('README.md', 'utf-8')
  .replace(/cdn.rawgit.com\/wagenaartje\/neataptic\/(.*)\/dist/, `cdn.rawgit.com/wagenaartje/neataptic/${commithash}/dist`)
  fs.writeFileSync('README.md', readme);

  // Return license for dist banner
  return license;
}
