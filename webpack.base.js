const path              = require('path')
const ReactLoadable     = require('react-loadable/webpack')
module.exports = {
  output: {
    chunkFilename: 'js/[name].js',
  },
  resolve: {
    extensions: ['.js', '.json', '.css', '.less', '.scss', '.sass', '.jsx'],
    alias: {
      "@c": path.resolve(__dirname, './client/components'),
      "@p": path.resolve(__dirname, './client/pages'),
      "@a": path.resolve(__dirname, './client/actions'),
      "@s": path.resolve(__dirname, './client/style')
    }
  },
  module: {
    rules: [
      {
        test: /.js|jsx/, 
        use: [
          'babel-loader'
        ], 
        exclude: /node_modules/
      },
      {
        test: /\.(svg|ttf|eot|woff|woff2)$/, 
        use: [
          { 
            loader: 'file-loader',
            options: {
              name:'fonts/[name].[ext]'
            } 
          },
          
        ] 
      },
      {
        test: /\.(jpg|png|gif|bmp|jpeg)$/,
        use: [
          { loader: 'url-loader',
            options: {
              limit:1024,
              name:'images/[name]_[hash:8].[ext]'
            } 
          }
        ]
      }
    ]
  },
  plugins: [
    new ReactLoadable.ReactLoadablePlugin({
      filename: path.resolve(__dirname,'./server/json/react-loadable.json')
    })
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          name: "common",
          chunks: "initial",
          minChunks: 2,
          maxInitialRequests: 5, // The default limit is too small to showcase the effect
          minSize: 0 // This is example is too small to create commons chunks
        },
        moment: {
          test: /moment/,
          name: "moment",
          chunks: "initial",
        }
      }
    }
  }
}