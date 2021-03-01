
// 配置当前的 IP 与端口
const os = require('os')
const getIP = () => {
  const interfaces = os.networkInterfaces();
  // console.log('interfaces:', interfaces)
  for (let devName in interfaces) {
    const iface = interfaces[devName];
    // console.log('iface:', iface)
    for (let i = 0; i < iface.length; i++) {
      const alias = iface[i];
      // console.log('alias:', alias)
      // 筛选所有的网络接口对象
      /**
       * 满足条件: (IPv4 , 非 127.0.0.1 , netmask 不为255.255.255.255 , internal 为false)
       *  */   
      if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal && alias.netmask === '255.255.255.0') {
        process.env.HOST = "localhost" ||alias.address // 配置 IP
        process.env.POST = "11111" // 配置默认端口
        return "localhost" || alias.address;
      } 
    }
  }
}
// if(getIP()){
//     process.currentIP = getIP()
// }

module.exports = getIP()