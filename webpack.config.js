const path = require('path')
module.exports = {
  devtool: 'eval-source-map',
  entry: `${__dirname}/views/main.js`,
  output: {
    filename: '[name].js',
    path: `${__dirname}/build`,
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
  }
}