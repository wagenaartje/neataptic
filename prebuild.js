var fs = require('fs')
module.exports = function(){
  var version = require('./package.json').version
  
  // Replace the CDN link in the readme
  var readme = fs.readFileSync('README.md', 'utf-8')
  .replace(/neataptic\/cdn\/(.*)\/neataptic.js/, `neataptic/cdn/${version}/neataptic.js`)
  fs.writeFileSync('README.md', readme)

  // Add the MIT license to the files
  return fs.readFileSync('LICENSE', 'utf-8')
}
