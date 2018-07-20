import { RECORD_USERINFO, LOGOUT_USER, GET_MENUS, CURRENT_ROUTER, OBTAIN_TASK_HISTORY } from './mutation-type'
import { setSessionStore, removeSessionStore } from '../../config/util'
export default {
  // 记录用户信息
  [RECORD_USERINFO] (state, info) {
    setSessionStore('login', true)
    setSessionStore('username', info.username)
    setSessionStore('auth', info.auth)
    setSessionStore('isAdmin', info.isAdmin)
    if (info.isAdmin === 9) {
    // setSessionStore('isAdmin', true)
    // const isAdmin = true
    // if (isAdmin) {
      setSessionStore('defaultNav', state.adminMenus[0].index)
    } else {
      setSessionStore('defaultNav', state.normalMenus[0].index)
    }
    state.userinfo = Object.assign({}, info)
    state.login = true
  },
  [LOGOUT_USER] (state, info) {
    removeSessionStore('username')
    removeSessionStore('login')
    removeSessionStore('defaultNav')
    removeSessionStore('isAdmin')
    state.userinfo = Object.assign({}, info)
    state.login = false
  },
  [GET_MENUS] (state, info) {
    const isAdmin = info.isAdmin
    if (isAdmin === '9') {
      state.menus = Object.assign({}, state.adminMenus)
    } else {
      state.menus = Object.assign({}, state.normalMenus)
    }
    return state.menus
  },
  [CURRENT_ROUTER] (state, info) {
    state.defaultNav = info.defaultNav
    setSessionStore('defaultNav', state.defaultNav)
  },
  [OBTAIN_TASK_HISTORY] (state, info) {
    return state.taskHistory
  }
}
