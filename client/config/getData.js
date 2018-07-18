import Request from './baseRequest'
// import { getStore, setStore } from './util'
/**
 * 用户登录
 */

export default {
  Login (data, config) {
    Request('/api/login', {
      type: 'post',
      data,
      success: (res) => {
        config.success(res)
      }
    })
  },
  Logout (data, config) {
    Request('/api/logout', {
      type: 'get',
      data,
      success: (res) => {
        config.success(res)
      }
    })
  }
}
