import axios from 'axios'

const baseUrl = 'http://mock.eolinker.com/raqyxQE1a9f91674ea5376ddcb4ab8408458d3e36228994?uri='
const Request = (url, config) => {
  axios({
    method: config.type || 'get',
    url: baseUrl + url,
    // baseURL: baseUrl,
    data: config.data,
    timeout: 10000
  })
    .then(res => config.success(res))
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
