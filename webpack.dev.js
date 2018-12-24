const path      = require('path')
const merge     = require('webpack-merge')
const webpack   = require('webpack')
const base      = require('./webpack.base.js')
module.exports = merge(base, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  entry: {
    index: [
      'webpack-hot-middleware/client?noInfo=true&reload=true',
      path.resolve(__dirname, './client/index.js')
    ],
  },
  module: {
    rules: [
      {
        test: /.css$/, 
        use:[
          "style-loader",
          "css-loader", 
          "postcss-loader",
        ],
      },
      {
        test: /.less$/, 
        use:[
          "style-loader",
          "css-loader", 
          "postcss-loader",
          {loader: "less-loader", options: { javascriptEnabled: true } }
        ]
      },
      {
        test: /.scss$/, 
        use: [
          "postcss-loader",
          {loader: 'sass-loader', options: { sourceMap: true}}
        ]
      },
    ]
  },
  output: {
    filename: 'js/[name].js',
    path: path.join(__dirname, './dist'),
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  stats: { //object
    assets: true,
    colors: true,
    errors: true,
    errorDetails: true,
    hash: true,
  },
})