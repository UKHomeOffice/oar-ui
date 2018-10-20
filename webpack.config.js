const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
//const MiniExtractTextPlugin = require('mini-css-extract-plugin');
const sourcePath = path.join(__dirname, './src');

const port = process.env.PORT || 4001;

module.exports = {
  entry: {
    app: [
        'react-hot-loader/patch',
        `webpack-dev-server/client?http://localhost:${port}`,
        'webpack/hot/only-dev-server',
        './src/index'
    ],
},
resolve: {
    extensions: ['.json', '.js', '.jsx'],
    modules: [path.resolve(__dirname), 'node_modules', sourcePath],
},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
],
devServer: {
  contentBase: 'public/',
  hot: true,
  open: true,
  port: `${port}`,
  historyApiFallback: true,
},
plugins: [
  new webpack.NamedModulesPlugin(),
  new HtmlWebpackPlugin({
      template: './src/index.html',
  }),
  new ExtractTextPlugin('styles.css'),
  new webpack.HotModuleReplacementPlugin(),

  //new MiniExtractTextPlugin('styles.css'),
//   new MiniExtractTextPlugin({
//     // Options similar to the same options in webpackOptions.output
//     // both options are optional
//     filename: "[name].css",
//     chunkFilename: "[id].css"
//   }),
  // new webpack.ProvidePlugin({
  //     $: "jquery",
  //     jQuery: "jquery",
  //     "window.jQuery": "jquery",
  //     Tooltip: "exports-loader?Tooltip!bootstrap/js/dist/tooltip",
  //     Tether: "tether",
  //     "window.Tether": "tether"
  // }),
],
module: {
  rules: [
      {
          test: /\.(js|jsx)$/,
          loaders: ['babel-loader'],
          exclude: /node_modules/,
          include: path.join(__dirname, 'src'),
      },
    //   {
    //     test: /\.(js|jsx)$/,
    //     use: [{ 
    //     loaders: 'babel-loader',
    //     exclude: /node_modules/,
    //     include: path.join(__dirname, 'src'),
    //     }]
    // },
      

      {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader'}),
      },
    //   {
    //     test: /\.scss$/,
    //     use: [{
    //         loader: MiniExtractTextPlugin.loader,
    //     }, {
    //         loader: 'css-loader',
    //         options: {
    //             minimize: true
    //         }
    //     }, {
    //         loader: 'sass-loader'
    //     }]
    // },
    //   {
    //     test: /\.css$/,
    //     use: [
    //       {
    //         loader: MiniExtractTextPlugin.loader,
    //         options: {
    //           // you can specify a publicPath here
    //           // by default it use publicPath in webpackOptions.output
    //           publicPath: '../'
    //         }
    //       },
    //       "css-loader"
    //     ]
    //   },
      {
          test: /\.bpmn$/,
          loader: 'file-loader?name=diagrams/[name].[ext]'
      },
      {
          test: /\.(png|jpg|gif)(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'url-loader?name=img/[name].[ext]',
      },
      {
          test: /\.(eot|com|json|ttf|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'url-loader?mimetype=application/octet-stream&name=fonts/[name].[ext]',
      },
      {
          test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'url-loader?mimetype=image/svg+xml&name=img/[name].[ext]',
      },
      {
          test: /\.json$/,
          loader: 'json-loader'
      },
      {
          test: /\.less$/,
          use: [{
              loader: "style-loader" // creates style nodes from JS strings
          }, {
              loader: "css-loader" // translates CSS into CommonJS
          }, {
              loader: "less-loader" // compiles Less to CSS
          }]
      },
      {
          test: /\.scss$/,
          use: [{
              loader: "style-loader"
          }, {
              loader: "css-loader"
          }, {
              loader: "sass-loader",
              options: {
                  //includePaths: ["node_modules/**/*.scss"]
              }
          }]
      }
  ]
}

};