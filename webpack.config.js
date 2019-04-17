const path = require('path');
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
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
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  useBuiltIns: "usage",
                  targets: { esmodules: false }
                }
              ]
            ],
            plugins: [
              "@babel/plugin-syntax-dynamic-import",
              "@babel/plugin-transform-runtime"
            ]
          }
        }
      },
    ],
  },
  // optimization: {
  //   minimizer: [new OptimizeCSSAssetsPlugin({}), new TerserJSPlugin({})],
  // },
})

const modernConfig = merge(common, {
  output: {
    filename: '[name].mjs.js',
    path: path.resolve('./dist')
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: [/node_modules/],
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  useBuiltIns: "usage",
                  targets: { esmodules: true }
                }
              ]
            ],
            plugins: [
              "@babel/plugin-syntax-dynamic-import",
              "@babel/plugin-transform-runtime"
            ]
          }
        }
      },
    ],
  },
  // optimization: {
  //   minimizer: [
  //     new OptimizeCSSAssetsPlugin({}),
  //     new TerserJSPlugin({
  //       test: /\.m?js(\?.*)?$/i,
  //       terserOptions: {
  //         ecma: 6 // This can be set to 7 or 8, too.
  //       }
  //     }),
  //   ],
  // },
})

module.exports = [ legacyConfig, modernConfig ]
