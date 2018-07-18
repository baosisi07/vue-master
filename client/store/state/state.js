export default {
  login: false,
  userinfo: {
    'username': '',
    'password': '',
    'isAdmin': false,
    'userId': 0
  },
  defaultNav: '',
  menus: [
    {
      name: '数据录入',
      index: '/home/dataInput',
      icon: 'el-icon-edit'
    },
    {
      name: '数据验证',
      index: '/home/validateData',
      icon: 'el-icon-circle-check-outline'
    }
  ],
  adminMenus: [
    {
      name: '任务中心',
      index: '/home/taskCenter',
      icon: 'el-icon-edit'
    }
  ]
}
