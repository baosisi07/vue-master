import { RECORD_USERINFO } from './mutation-type'
import { setStore } from '../../config/util'
export default {
  // 记录用户信息
  [RECORD_USERINFO] (state, info) {
    state.userinfo = info
    state.login = true
    setStore('user_name', info.name)
    setStore('user_identity', info.isAdmin)
  }
}
