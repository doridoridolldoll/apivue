const { defineConfig } = require('@vue/cli-service')
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  configureWebpack: {
    plugins: [
      AutoImport({ resolvers: [ElementPlusResolver()] }),
      Components({ resolvers: [ElementPlusResolver()] }),
    ],
  },
})

//vue.config.js 수정하면 반드시 node서버를 restart!
const target = 'http://localhost:9090'
module.exports = {
  devServer: {
    port: 8080,
    proxy: { '/apiserverex/api': { target, changeOrigin: true } },
  },
  publicPath: '/apiserverex',
  outputDir:
    'D:/classSpringBoot/workspace/apiserverex/src/main/resources/static',
}
