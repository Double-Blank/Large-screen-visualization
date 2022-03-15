module.exports = {
  publicPath: './',
  devServer: {
    open: false, // 编译完成是否打开网页
    host: '0.0.0.0', // 指定使用地址，默认localhost,0.0.0.0代表可以被外界访问
    port: 8080, // 访问端口
    https: false, // 编译失败时刷新页面
    hot: true, // 开启热加载
    hotOnly: false,
    proxy: {
      '/devApi': {
        target: 'http://aixshi.top:3000/api', // API服务器的地址
        changeOrigin: true,
        pathRewrite: {
          '^/devApi': '',
        },
      },
    },
  },
};
