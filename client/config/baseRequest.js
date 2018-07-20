import axios from 'axios'
import { Loading } from 'element-ui'
import { getSessionStore } from './util'
const baseUrl = 'http://mock.eolinker.com/Cldhjhg37a85d28f61807a215b4765daec6d7dfc20132a7?uri='
const authToken = 'JWT ' + getSessionStore('auth')
const Request = (url, config) => {
  const loadingInstance = Loading.service({
    lock: true,
    text: 'Loading',
    spinner: 'el-icon-loading',
    background: 'rgba(0, 0, 0, 0.7)'
  })
  axios({
    method: config.type || 'get',
    url: baseUrl + url,
    // baseURL: baseUrl,
    headers: {
      'Authorization': authToken || '',
      'content-type': 'application/json'
    },
    data: config.data,
    timeout: 10000
  })
    .then(res => {
      loadingInstance.close()
      return config.success(res)
    })
    .catch(function (error) {
      if (error.response) {
        // 发送请求后，服务端返回的响应码不是 2xx
        console.log(error.response.data)
        console.log(error.response.status)
        console.log(error.response.headers)
      } else if (error.request) {
        // 发送请求但是没有响应返回
        console.log(error.request)
      } else {
        // 其他错误
        console.log('Error', error.message)
      }
      console.log(error.config)
    })
}
export default Request
