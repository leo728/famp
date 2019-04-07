module.exports = {
  assetsDir: 'assets',
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
  }
}