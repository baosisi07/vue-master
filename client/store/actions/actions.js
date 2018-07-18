import getData from '../../config/getData'
import { getSessionStore } from '../../config/util'
export default {
  userLogin (store, data) {
    const postData = { 'username': data.username, 'password': data.password }
    getData.Login(postData, {
      success (res) {
        postData.userId = res.data.user_id
        postData.isAdmin = res.data.isAdmin
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
  }
}
