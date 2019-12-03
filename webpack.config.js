const path = require('path');
const merge = require('webpack-merge')
const common = require('./webpack.common.js')

const rest = {
    output: {
    filename: '[name].[hash].js',
    path: path.resolve('./dist')
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: [/node_modules/],
        use: ['babel-loader']
      },
    ]
  }
}

module.exports = merge(common, rest)
