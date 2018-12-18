const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const sourcePath = path.join(__dirname, './src');

const port = process.env.PORT || 4001;
const btoa = require('btoa');

const basicAuthentication = () => {
    const username= process.env.USERNAME || "test"; //TODO:- remove hardcoding
    const password = process.env.PASSWORD || "test";
    return "Basic " + btoa(username + ":" + password); //TODO:- remove hardcoding
};
//const translationserviceurl = process.env.TRANSLATION_SERVICE_URL;
const translationserviceurl = process.env.TRANSLATION_SERVICE_URL || "http://localhost:2001"; //TODO:- remove hardcoding

module.exports = {
  entry: {
    app: [
        'react-hot-loader/patch',
        `webpack-dev-server/client?http://localhost:${port}`,
        'webpack/hot/only-dev-server',
        './node_modules/govuk_frontend_toolkit/javascripts/govuk/show-hide-content.js',
       './node_modules/govuk-frontend/all.js',
       './src/index'
    ],
},
resolve: {
    extensions: ['.json', '.js', '.jsx'],
    modules: [path.resolve(__dirname), 'node_modules', sourcePath],
},
  output: {
    path: path.resolve(__dirname, 'dist'),
    //publicPath: path.resolve(__dirname, 'dist'),
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
    stats: {colors: true},
    proxy: {
        "/api/translation": {
            target: translationserviceurl,
            pathRewrite: {
                '^/api/workflow': '/rest/engine/borders'
            },
            "changeOrigin": true,
            "secure": false,
            onProxyReq: function onProxyReq(proxyReq, req, res) {
                const authHeader = basicAuthentication();
                proxyReq.setHeader('Authorization',  authHeader);
                proxyReq.setHeader('origin', 'http://localhost:8080 ');
                console.log('Translation Service -->  ', req.method, req.path, '-->', `${translationserviceurl}${proxyReq.path}`);
                console.log("==Response=="+ res)
            },
        },

    }
},

plugins: [
  new webpack.NamedModulesPlugin(),
  new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: true
  }),
  new ExtractTextPlugin('styles.css'),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.ProvidePlugin({
    $: "jquery",
    jQuery: "jquery",
    "window.jQuery": "jquery",
    Tooltip: "exports-loader?Tooltip!bootstrap/js/dist/tooltip",
    Tether: "tether",
    "window.Tether": "tether"
}),
],
module: {
    loaders: [
        {
            test: /[\/\\]node_modules[\/\\]some-module[\/\\]index\.js$/,
            loader: "imports-loader?this=>window"
        }
    ],
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
          test: /\.html$/,
          use: [
              {
                  loader: "html-loader"
              }
          ]
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

}

};