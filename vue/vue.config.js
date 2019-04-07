module.exports = {
  assetsDir: 'static',

  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          'primary-color': '#2f54eb',
          'link-color': '#2f54eb',
          'border-radius-base': '2px',
        },
        javascriptEnabled: true
      }
    }
  },

  publicPath: undefined,
  outputDir: 'build',
  runtimeCompiler: undefined,
  productionSourceMap: undefined,
  parallel: undefined
}