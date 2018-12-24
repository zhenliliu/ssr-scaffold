const path                    = require('path')
const merge                   = require('webpack-merge')
const webpack                 = require('webpack')
const UglifyJsPlugin          = require('uglifyjs-webpack-plugin')
const ExtractTextPlugin       = require('extract-text-webpack-plugin')
const MiniCssExtractPlugin    = require("mini-css-extract-plugin");
const CleanWebpackPlugin      = require('clean-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const base                    = require('./webpack.base.js')
const pathsToClean            = [path.resolve(__dirname, './dist/*')];
const cleanOptions            = {root: path.resolve(__dirname, './')}
module.exports = merge(base, {
  mode: 'production',
  entry: {
    index: path.resolve(__dirname, './client/index.js'),
  },
  output: {
      filename: 'js/[name].[hash].js',
      chunkFilename: 'js/[name].[hash].js',
      path: path.resolve(__dirname, './dist'),
      publicPath: './'
  },
  module: {
    rules: [
      {
        test: /.css$/, 
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader?minimize",
          'postcss-loader'
        ]
      },
      {
        test: /.less$/, 
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader?minimize",
          'postcss-loader',
          {loader: "less-loader", options: { javascriptEnabled: true } }
        ]
      },
      {
        test: /.scss$/, 
        use: [
          {loader: 'sass-loader', options: { sourceMap: true}}
        ]
      },
    ]
  },
  optimization: {
    minimizer: [
        new UglifyJsPlugin({
            cache: true,
            extractComments: false,//是否保留代码中的注释， 默认保留， 为了达到压缩更好的压缩效果，可以设置为false。
            parallel: true,
            sourceMap: false, //是否为压缩后的代码生成对用的SourceMap， 默认不生成，开启后耗时会大大增加。一般不会把压缩后的代码SouceMap发送给网站用户的浏览器，而是用于内部开发人员调试线上代码时使用。
            uglifyOptions: {
              compress: {
                warnings: false,
                drop_debugger: true,
                drop_console: true, //是否剔除代码中所有的console语句，默认不剔除，开启后不仅可以提升代压缩效果，也可以兼容不支持console语句IE浏览器。
              },
              output: {
                comments: false
              }
            }
        }),
        new OptimizeCSSAssetsPlugin({})
    ]
  },
  plugins: [
    new CleanWebpackPlugin(pathsToClean, cleanOptions),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new MiniCssExtractPlugin({
      filename: "css/[name].[hash].css",
      chunkFilename: "css/[id].[hash].css"
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
})