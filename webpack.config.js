var webpack = require('webpack')
var license = require('./prebuild.js')
var version = require('./package.json').version

var data = {
  context: __dirname,
  entry: {
    'dist/neataptic': './src/neataptic.js',
    'dist/neataptic.min': './src/neataptic.js',
  },
  output: {
    path: './',
    filename: '[name].js',
    library: 'neataptic',
    libraryTarget: 'umd'
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.BannerPlugin(license()),
    new webpack.optimize.UglifyJsPlugin({
      include: /\.min\.js$/,
      minimize: true
    })
  ]
}

data.entry[`mkdocs/theme/cdn/${version}/neataptic`] = './src/neataptic.js'
data.entry[`mkdocs/theme/cdn/${version}/neataptic.min`] = './src/neataptic.js'

module.exports = data;
