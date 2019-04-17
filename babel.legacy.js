module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        corejs: 3,
        modules: false,
        useBuiltIns: "usage",
        targets: "last 2 versions, > 0.2%, not dead"
      }
    ]
  ],
  plugins: [
    "@babel/plugin-syntax-dynamic-import",
    "@babel/plugin-transform-runtime"
  ]
}
