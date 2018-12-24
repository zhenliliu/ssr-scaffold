import Axios  from 'axios'
import config from 'config'
import os     from 'os'
import _      from 'lodash'
let getLocalIp = function() {
  const ifaces = os.networkInterfaces();
  const ips =  _.flatten(Object.keys(ifaces).map(function (ifname) {
    return ifaces[ifname].map(function (iface) {
      if ('IPv4' !== iface.family || iface.internal !== false) {
        // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
        return;
      }
      return iface.address;
    });
  })).filter(function(ip) {
    return typeof ip != 'undefined';
  });
  if (ips.length > 0) {
    return ips[0];
  }
  return 'http://localhost';
}

export default () => {
  let axios = Axios.create({
    timeout: 20 * 1000
  })
  axios.interceptors.request.use((options) => {
    let { url }     = options
    if(url.match(/(http:\/\/)|(https:\/\/)/)) return options   
    let targetHost 
    let ip = getLocalIp()
    let { hostMap } = config.default
    let urlPrefix   = url.includes("/") ? url.split("/")[1] : url
    if(hostMap[urlPrefix]) {
      targetHost = hostMap[urlPrefix]
    }
    options.baseURL = targetHost ? targetHost : `http://${ip}:${config.default.port}`
    return options
  })
  axios.interceptors.response.use((response) => {
    return response
  })
  return async (ctx, next) => {
    ctx.axios = axios
    await next()
  }
}