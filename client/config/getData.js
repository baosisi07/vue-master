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
    Request('/api/v1/models/?parent=' + data.parent + '&order=' + data.order, {
      type: 'get',
      hideLoading: true,
      success: (res) => {
        config.success(res)
      }
    })
  },
  getModelDetail (data, config) {
    Request('/api/v1/model-details/?global_slug=' + data.global_slug + '&order=' + data.order, {
      type: 'get',
      hideLoading: true,
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
  },
  postInfo (data, config) {
    Request('/api/deal-data/v1/deal-records/', {
      type: 'post',
      data,
      success: (res) => {
        config.success(res)
      }
    })
  },
  getCurrentTask (data, config) {
    Request('/api/v1/evaluation-tasks/current-task/', {
      type: 'get',
      data,
      success: (res) => {
        config.success(res)
      }
    })
  },
  getDataDetail (data, config) {
    Request('/api/v1/validations/getone/', {
      type: 'get',
      data,
      success: (res) => {
        config.success(res)
      }
    })
  },
  getPlatform (data, config) {
    Request('/api/v1/domains/', {
      type: 'get',
      data,
      success: (res) => {
        config.success(res)
      }
    })
  },
  dealData (id, data, config) {
    Request(`/api/v1/validations/${id}/`, {
      type: 'patch',
      data,
      success: (res) => {
        config.success(res)
      }
    })
  },
  searchDealer (data, config) {
    var isNeed = ''
    if (data.city) {
      isNeed = '&city=' + data.city
    }
    Request('/api/v1/dealers/?company_name=' + data.company_name + isNeed, {
      type: 'get',
      hideLoading: true,
      success: (res) => {
        config.success(res)
      }
    })
  }
}
