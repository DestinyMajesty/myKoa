var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        'main': `${__dirname}/views/main.js`
    },
    output: {
        path: `${__dirname}/build`,
        filename: '[name].js',
        chunkFilename: 'chunk.[id].[name]_[chunkhash:7].js',
    },
    module: {
        rules: [
            {
              test: /\.js$/,
              exclude: /(node_modules|bower_components)/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['env', 'react', "stage-1"],
                  plugins: [
                    "transform-decorators-legacy",
                    "transform-class-properties",
                    "transform-es2015-classes",
                    "transform-runtime",
                    ["import", { "libraryName": "antd", "libraryDirectory": "es", "style": "css" }] // `style: true` 会加载 less 文件
                  ]
                }
              }
            },
            {
              test: /\.(less|css)$/,
              use:[ 'style-loader','css-loader','less-loader'],
            },
          ]
    },
    devtool: '#source-map'
};
