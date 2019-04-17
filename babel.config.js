module.exports = {
  env: {
    legacy: {
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
    },
    modern: {
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
}
