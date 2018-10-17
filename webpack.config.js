const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

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
module: {
  rules: [
      {
          test: /\.(js|jsx)$/,
          loaders: ['babel-loader'],
          exclude: /node_modules/,
          include: path.join(__dirname, 'src'),
      },
      {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader'}),
      },
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
},
  plugins: [
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
        template: './src/index.html',
    })
    // new ExtractTextPlugin('styles.css'),
    // new webpack.ProvidePlugin({
    //     $: "jquery",
    //     jQuery: "jquery",
    //     "window.jQuery": "jquery",
    //     Tooltip: "exports-loader?Tooltip!bootstrap/js/dist/tooltip",
    //     Tether: "tether",
    //     "window.Tether": "tether"
    // }),
]

};