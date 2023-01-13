const { defineConfig } = require('@vue/cli-service')
module.exports = {
publicPath: '',
devServer: {
    proxy: {
      '^/users': {
        target: 'https://googlevideo.com',
        ws: true,
        changeOrigin: true
      },
    }
  }}
