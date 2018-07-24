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
  getCities (data, config) {
    Request('/api/v1/cities/', {
      type: 'get',
      success: (res) => {
        config.success(res)
      }
    })
  },
  getBrand (data, config) {
    Request('/api/v1/brands/', {
      type: 'get',
      success: (res) => {
        config.success(res)
      }
    })
  },
  getModel (data, config) {
    Request('/api/v1/models/', {
      type: 'get',
      data,
      success: (res) => {
        config.success(res)
      }
    })
  },
  getModelDetail (data, config) {
    Request('/api/v1/model-details/', {
      type: 'get',
      data,
      success: (res) => {
        config.success(res)
      }
    })
  },
  getTaskHistory (data, config) {
    Request('/api/v1/evlauation-tasks/', {
      type: 'get',
      data,
      success: (res) => {
        config.success(res)
      }
    })
  },
  getUserList (data, config) {
    Request('/api/v1/users/', {
      type: 'get',
      data,
      success: (res) => {
        config.success(res)
      }
    })
  },
  postTaskInfo (data, config) {
    Request('/api/v1/evaluation-tasks/', {
      type: 'post',
      data,
      success: (res) => {
        config.success(res)
      }
    })
  }
}
