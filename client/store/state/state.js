export default {
  login: false,
  userinfo: {
    'username': '',
    'password': '',
    'isAdmin': false,
    'userId': 0
  },
  defaultNav: '',
  menus: [],
  normalMenus: [
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
      icon: 'el-icon-edit',
      submenu: [{
        name: '历史任务',
        index: '/home/taskCenter',
        icon: 'el-icon-search'
      },
      {
        name: '任务指派',
        index: '/home/assignTask',
        icon: 'el-icon-share'
      }]
    }
  ],
  taskHistory: [],
  taskTypeList: [
    {
      value: '1',
      label: '量化任务-数据录入'
    },
    {
      value: '2',
      label: '量化任务-数据验证'
    },
    {
      value: '3',
      label: '非量化任务'
    },
    {
      value: '0',
      label: '全部'
    }
  ]
}
