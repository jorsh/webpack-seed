
/**
 * HtmlWebpackPlugin
 *
 * This plugin creates HTML files to serve the webpack bundles
 * In the example below it takes a template and inserts a <script> tag
 * in the body pointing to the bundle.js
*/
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/app/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    entry: [
        './app/main.js'
    ],

    output: {
        path: __dirname + '/dist',
        filename: "bundle.js"
    },

    module:{
        preLoaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'jshint-loader'
            }
        ],

        loaders:[{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['es2015']
            }
        },
        {
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: 'style!css!sass'
            },
        {
            test: /\.(jpg|png|gif)$/,
            include: /images/,
            loader: 'url'
        }
        ]
    },

    jshint: {
        esversion: 6
    },

    plugins: [HtmlWebpackPluginConfig]
};

