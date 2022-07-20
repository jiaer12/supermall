const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack:{
    resolve:{
      // extensions:[]  这是配置后缀名的，就是引用的时候可以不写.js .css等
      alias: {              // 配置别名
        // 默认有配置 @ 为 src 目录
        'assets': '@/assets',
        'components': '@/components',
        'common':'@/common',
        'network': '@/network',
        'views':'@/views'
      }
    }
  }
})
