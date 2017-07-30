/* Import */
var fs = require('fs');
var webpack = require('webpack');
var version = require('./package.json').version;

/* Update readme and read license */
var readme = fs.readFileSync('README.md', 'utf-8').replace(
  /cdn\/(.*)\/neataptic.js/, `cdn/${version}/neataptic.js`
);
fs.writeFileSync('README.md', readme);

var license = fs.readFileSync('LICENSE', 'utf-8');

/* Export config */
module.exports = {
  context: __dirname,
  entry: {
    'dist/neataptic': './src/neataptic.js',
    [`mkdocs/theme/cdn/${version}/neataptic`]: './src/neataptic.js'
  },
  output: {
    path: './',
    filename: '[name].js',
    library: 'neataptic',
    libraryTarget: 'umd'
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.BannerPlugin(license)
  ]
};
