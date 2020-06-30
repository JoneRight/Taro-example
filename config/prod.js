/*
 * @Author: 张平
 * @Date: 2019-05-30 11:15:02
 * @Last Modified by:   张平
 * @Last Modified time: 2019-05-30 11:15:02
 */

module.exports = {
  env: {
    NODE_ENV: '"production"'
  },
  defineConstants: {},
  weapp: {},
  h5: {
    /**
     * 如果h5端编译后体积过大，可以使用webpack-bundle-analyzer插件对打包体积进行分析。
     * 参考代码如下：
     * webpackChain (chain) {
     *   chain.plugin('analyzer')
     *     .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin, [])
     * }
     */
  }
}
