const path = require('path');
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const babelLegacy = require('./babel.legacy.js')
const babelModern = require('./babel.modern.js')
const TerserJSPlugin = require('terser-webpack-plugin');

const legacyConfig = merge(common, {
  output: {
    filename: '[name].js',
    path: path.resolve('./dist')
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: [/node_modules/],
        use: {
          loader: 'babel-loader',
          options: babelLegacy,
        }
      },
    ],
  },
  optimization: {
    minimizer: [new TerserJSPlugin({})],
  },
})

const modernConfig = merge(common, {
  output: {
    filename: '[name].mjs',
    path: path.resolve('./dist')
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: [/node_modules/],
        use: {
          loader: 'babel-loader',
          options: babelModern,
        }
      },
    ],
  },
  optimization: {
    minimizer: [
      new TerserJSPlugin({
        test: /\.m?js(\?.*)?$/i,
        terserOptions: {
          ecma: 6 // This can be set to 7 or 8, too.
        }
      }),
    ],
  },
})

module.exports = [ legacyConfig, modernConfig ]
