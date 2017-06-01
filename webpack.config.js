var webpack = require('webpack')
var license = require('./prebuild.js')
module.exports = {
  context: __dirname,
  entry: {
    'dist/neataptic': './src/neataptic.js',
    'mkdocs/theme/cdn/neataptic': './src/neataptic.js',
    'dist/neataptic.min': './src/neataptic.js',
    'mkdocs/theme/cdn/neataptic.min': './src/neataptic.js'
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
