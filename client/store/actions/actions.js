import getData from '../../config/getData'
import { getSessionStore } from '../../config/util'
export default {
  userLogin (store, data) {
    const postData = { 'account': data.username, 'password': data.password, 'appid': 'aaaf6b8021b411e7863a305a3a7b52d5' }
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
  getTaskHistory (store, data) {
    const postData = { 'userId': store.userId }
    getData.Logout(postData, {
      success (res) {
        store.commit('OBTAIN_TASK_HISTORY', postData)
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
  }
}
