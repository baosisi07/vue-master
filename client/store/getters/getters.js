
export default {
  isLogin: (state) => {
    return state.login
  },
  getMenus: (state) => {
    if (state.userinfo.isAdmin) {
      return state.adminMenus
    } else {
      return state.menus
    }
  },
  getCurrent: (state) => {
    return state.defaultNav
  }
}
