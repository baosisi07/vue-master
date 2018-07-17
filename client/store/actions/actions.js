import getData from '../../config/getData'
export default {
  userLogin (store, data) {
    let lData = data
    getData.Login(data, {
      success (res) {
        lData.userId = res.data.user_id
        lData.isAdmin = res.data.isAdmin
        store.commit('RECORD_USERINFO', lData)
      }
    })
  }
}
