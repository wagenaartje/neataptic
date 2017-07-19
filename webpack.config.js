var webpack = require('webpack')
var license = require('./prebuild.js')
var version = require('./package.json').version

var data = {
  context: __dirname,
  entry: {
    'dist/neataptic': './src/neataptic.js',
  },
  output: {
    path: './',
    filename: '[name].js',
    library: 'neataptic',
    libraryTarget: 'umd'
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.BannerPlugin(license())
  ]
}

data.entry[`mkdocs/theme/cdn/${version}/neataptic`] = './src/neataptic.js'
module.exports = data;
