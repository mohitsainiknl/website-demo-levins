/* eslint-disable no-undef */
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    entry: './src/js/main.js',
    plugins: [new ESLintPlugin()],
    output: {
        path: __dirname + '/dist/js/',
        filename: 'main.js',
    },
    devServer: {
        stats: {
          chunks: false
        }
      },
    module: {
        rules: [{
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                    plugins: ['@babel/plugin-proposal-object-rest-spread']
                }
            }
        }]
    }
};