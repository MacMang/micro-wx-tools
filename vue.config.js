const timestamp = new Date().getTime()
const version   = require('./package.json').version

module.exports = {
  lintOnSave: false,
  publicPath: './',
  productionSourceMap: false,
  devServer: {
    open: true,
    port: 6789
  },
  configureWebpack: {
    output: {
      filename: `[name].${version}-${timestamp}.js`,
      chunkFilename: `[name].${version}-${timestamp}.js`
    }
  }
}