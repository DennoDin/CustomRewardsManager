module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    proxy: {
      '^/api': {
        target: process.env.VUE_APP_SERVER || 'http://localhost:9999',
        changeOrigin: true
      },
    }
  }
}