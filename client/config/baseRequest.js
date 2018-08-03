import axios from 'axios'
import { Loading, Message } from 'element-ui'
import { getSessionStore } from './util'
const baseUrl = 'http://112.126.81.28:48888'

const Request = (url, config) => {
  const authToken = 'JWT ' + getSessionStore('auth')
  let loadingInstance
  if (!config.hideLoading) {
    loadingInstance = Loading.service({
      lock: true,
      text: 'Loading',
      spinner: 'el-icon-loading',
      background: 'rgba(0, 0, 0, 0.7)'
    })
  }
  let headers = {}
  if (url.indexOf('auth') < 0) {
    headers = {
      'Authorization': authToken || '',
      'content-type': 'application/json'
    }
  } else {
    headers = {
      'content-type': 'application/json'
    }
  }
  axios({
    method: config.type || 'get',
    url: baseUrl + url,
    // baseURL: baseUrl,
    headers,
    data: config.data || '',
    timeout: 10000
  })
    .then(res => {
      if (!config.hideLoading) {
        loadingInstance.close()
      }
      return config.success(res)
    })
    .catch(function (error) {
      if (!config.hideLoading) {
        loadingInstance.close()
        Message({
          type: 'error',
          message: '网络错误，请重试！'
        })
      }
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
