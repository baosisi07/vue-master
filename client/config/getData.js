import Request from './baseRequest'
// import { getStore, setStore } from './util'
/**
 * 用户登录
 */

export default {
  Login (data, config) {
    Request('/api/v1/auth/', {
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
  },
  getTaskHistory (data, config) {
    Request('/api/taskHistory', {
      type: 'post',
      data,
      success: (res) => {
        config.success(res)
      }
    })
  }
}
