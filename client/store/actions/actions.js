import getData from '../../config/getData'
import { getSessionStore } from '../../config/util'
export default {
  userLogin (store, data) {
    const postData = { 'account': data.username, 'password': data.password, 'appid': '68eac7a221b511e7863a305a3a7b52d5' }
    getData.Login(postData, {
      success (res) {
        postData.userId = res.data.id
        postData.isAdmin = res.data.profile.user_type
        postData.username = res.data.profile.alias
        postData.auth = res.data.token
        store.commit('RECORD_USERINFO', postData)
        const isLogined = getSessionStore('login')
        if (isLogined) {
          data.router.push({
            path: '/home'
          })
        }
      }
    })
  },
  userLogout (store, data) {
    const postData = { 'userId': store.userId }
    getData.Logout(postData, {
      success (res) {
        postData.userId = ''
        postData.isAdmin = ''
        store.commit('LOGOUT_USER', postData)
        data.router.push({
          path: '/login'
        })
      }
    })
  },
  getUserList (store) {
    const userType = getSessionStore('isAdmin')
    const data = {user_type: userType}
    getData.getUserList(data, {
      success (res) {
        store.commit('GET_USER', res.data)
      }
    })
  },
  getTaskHistory (store, data) {
    store.commit('TASK_SEARCH', data)
    const lastData = {
      'limit': store.state.pagination.pageSize,
      'offset': store.state.pagination.pageSize * (store.state.pagination.currentPage - 1),
      'user': store.state.taskSearchRuleForm.people,
      'task_type': store.state.taskSearchRuleForm.taskType,
      'starting_date_0': store.state.taskSearchRuleForm.startEndDate[0],
      'finishing_date_1': store.state.taskSearchRuleForm.startEndDate[1]
    }
    getData.getTaskHistory(lastData, {
      success (res) {
        store.commit('OBTAIN_TASK_HISTORY', res.data)
      }
    })
  },
  getCities (store) {
    getData.getCities('', {
      success (res) {
        store.commit('GET_CITIES', res.data)
      }
    })
  },
  getBrand (store) {
    getData.getBrand('', {
      success (res) {
        store.commit('GET_BRAND', res.data)
      }
    })
  },
  getModel (store, data) {
    const newData = {}
    newData.brand = data.parent
    getData.getModel(data, {
      success (res) {
        newData.model = res.data
        store.commit('GET_MODEL', newData)
      }
    })
  },
  getModelDetail (store, data) {
    const newMD = {}
    newMD.global_slug = data.global_slug
    newMD.order = data.order
    getData.getModelDetail(newMD, {
      success (res) {
        newMD.brand = data.brand
        newMD.modelDetail = res.data
        store.commit('GET_MODEL_DETAIL', newMD)
      }
    })
  },
  postTaskInfo (store, data) {
    const postData = Object.assign({}, data)
    delete postData.refs
    delete postData.showMsg
    getData.postTaskInfo(postData, {
      success (res) {
        data.refs()
        data.showMsg({msg: '任务分配成功！', type: 'success'})
      }
    })
  },
  postInfo (store, data) {
    const postData = Object.assign({}, data)
    delete postData.refs
    delete postData.showMsg
    console.log(postData)
    getData.postInfo(postData, {
      success (res) {
        data.refs()
        data.showMsg({msg: '数据录入成功！', type: 'success'})
      }
    })
  },
  getCurrentTask (store) {
    getData.getCurrentTask({}, {
      success (res) {
        store.commit('GET_CURRENT_TASK', res.data)
      }
    })
  },
  getDataDetail (store) {
    getData.getDataDetail({}, {
      success (res) {
        store.commit('GET_DATA_DETAIL', res.data)
      }
    })
  },
  getPlatform (store) {
    getData.getPlatform({}, {
      success (res) {
        store.commit('GET_PLATFORM', res.data)
      }
    })
  },
  dealData (store, data) {
    const postData = Object.assign({}, data)
    delete postData.id
    delete postData.message
    delete postData.refs
    getData.dealData(data.id, postData, {
      success (res) {
        if (res.status === 200) {
          data.message()
          if (data.refs) {
            data.refs()
          }
        }
      }
    })
  },
  searchDealer (store, data) {
    const postData = Object.assign({}, data)
    delete postData.callBack
    getData.searchDealer(postData, {
      success (res) {
        data.callBack()
        const commitData = Object.assign({}, postData)
        commitData.list = res.data
        store.commit('DEAL_DEALER', commitData)
      }
    })
  }
}
