var webpack = require('webpack')
var license = require('./prebuild.js')
module.exports = {
  context: __dirname,
  entry: {
    gynaptic: './src/gynaptic.js',
    'gynaptic.min': './src/gynaptic.js'
  },
  output: {
    path: 'dist',
    filename: '[name].js',
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
