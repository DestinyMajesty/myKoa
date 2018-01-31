const path = require('path')
module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: `${__dirname}/views/main.js`,
  output: {
    filename: 'bundle.js',
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
            presets: ['env', 'react'],
            plugins: [
              "transform-class-properties",
              "transform-es2015-classes",
              "transform-runtime",
            ]
          }
        }
      }
    ]
  }
}