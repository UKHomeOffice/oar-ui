
const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');
const sourcePath = path.join(__dirname, './src');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

module.exports = {

    entry: './src/index.jsx',

    output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'index.js',
    },

    resolve: {
        extensions: ['.json', '.js', '.jsx'],
        modules: [path.resolve(__dirname), 'node_modules', sourcePath],
    },
    devServer: {
        contentBase: 'public/',
        historyApiFallback: true,
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
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
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "less-loader" 
                }]
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }]
            }
        ]
    },

    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin('styles.css'),
    ]
};
