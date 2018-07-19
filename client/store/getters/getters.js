
export default {
  isLogin: (state) => {
    return state.login
  },
  getMenus: (state) => {
    return state.menus
  },
  getCurrent: (state) => {
    return state.defaultNav
  }
}
