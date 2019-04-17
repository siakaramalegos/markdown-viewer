module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        // corejs: 3,
        modules: false,
        // useBuiltIns: "usage",
        targets: { esmodules: true }
      }
    ]
  ],
    plugins: [
      "@babel/plugin-syntax-dynamic-import",
      "@babel/plugin-transform-runtime"
    ]
}
