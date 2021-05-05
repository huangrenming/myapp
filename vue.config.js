const HardSourceWebpackPlugin = require('hard-source-webpack-plugin')
const path = require('path')
const resolve = (dir) => {
  path.resolve(__dirname, dir)
}
console.log(resolve('src'))
module.exports = {
  pages: {
    index: {
      // page 的入口
      entry: 'src/main.js',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
      cdn: {
        css: [
          'https://cdn.jsdelivr.net/npm/element-ui@2.13.2/lib/theme-chalk/index.css'
        ],
        js: [
          "https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.min.js",
          "https://cdn.jsdelivr.net/npm/vue-router@3.4.5/dist/vue-router.min.js",
          "https://cdn.jsdelivr.net/npm/vuex@3.0.1/dist/vuex.min.js",
          "https://cdn.jsdelivr.net/npm/element-ui@2.13.2/lib/index.js",
          "https://cdn.jsdelivr.net/npm/axios@0.19.0/dist/axios.min.js",
          "https://cdn.jsdelivr.net/npm/moment@2.24.0/moment.min.js",
          "https://cdn.jsdelivr.net/npm/xlsx@0.16.7/dist/xlsx.full.min.js",
        ]
      },
    }
  },
  configureWebpack: {
    externals: {
      vue: 'Vue'
    },
    resolve: {
      //配置别名，在项目中可缩减引用路径
      alias: {
        '@': resolve('src'),
      }
    },
    plugins: [
      new HardSourceWebpackPlugin()
    ]
  }
}
