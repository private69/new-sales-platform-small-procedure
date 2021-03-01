// webpack-dev-server 配置
/**
 * 详情可见 '../build/webpack-dev-config'
 */
require('./IPaddress') 
export default {
    contentBase: false,
    host: process.currentIP, // 当前 IP 地址
    port: '11111', // 默认端口
    inline: true, // 保持在线
    historyApiFallback:true, // 找不到页面默认跳index.html
    // hot:true,//启动热更新，必须搭配new webpack.HotModuleReplacementPlugin()插件
    open:true,
}