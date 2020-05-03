// 项目配置文件

module.exports = {
  devServer: {
    proxy: {
      '/showstart': {
        target: 'https://wap.showstart.com',
        changeOrigin: true,
        pathRewrite: {
          '^/showstart': ''
        }
      }
    }
  }
}
