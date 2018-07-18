import { RECORD_USERINFO, LOGOUT_USER, CURRENT_ROUTER } from './mutation-type'
import { setSessionStore, removeSessionStore } from '../../config/util'
export default {
  // 记录用户信息
  [RECORD_USERINFO] (state, info) {
    setSessionStore('login', true)
    setSessionStore('username', info.username)
    state.userinfo = Object.assign({}, info)
    state.login = true
  },
  [LOGOUT_USER] (state, info) {
    removeSessionStore('username')
    removeSessionStore('login')
    removeSessionStore('defaultNav')
    state.userinfo = Object.assign({}, info)
    state.login = false
  },
  [CURRENT_ROUTER] (state, info) {
    const defaultNav = info.defaultNav
    setSessionStore('defaultNav', defaultNav)
    if (state.userinfo.isAdmin) {
      if (defaultNav === 'null') {
        state.defaultNav = state.adminMenus[0].index
      } else {
        state.defaultNav = defaultNav
      }
    } else {
      if (defaultNav === 'null') {
        state.defaultNav = state.menus[0].index
      } else {
        state.defaultNav = defaultNav
      }
    }
  }
}
