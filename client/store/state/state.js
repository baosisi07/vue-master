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
  cities: [],
  brandList: [],
  modelList: [],
  modelDetailList: [],
  dealerList: [],
  taskTypeList: [
    {
      value: 1,
      label: '量化任务-数据录入'
    },
    {
      value: 2,
      label: '量化任务-数据验证'
    }
  ],
  conditionList: [
    {
      value: 1,
      label: '车况一般'
    },
    {
      value: 2,
      label: '车况较好'
    },
    {
      value: 3,
      label: '车况优秀'
    }
  ],
  usersList: [],
  dealTypeList: [
    {
      value: 4,
      label: '批发'
    },
    {
      value: 3,
      label: '车商零售'
    },
    {
      value: 2,
      label: '车商收购'
    },
    {
      value: 1,
      label: '个人交易'
    }
  ],
  platForm: [],
  tasksData: {},
  dataDetail: {},
  colors: [
    {
      value: '红',
      label: '红色'
    },
    {
      value: '白',
      label: '白色'
    },
    {
      value: '黑',
      label: '黑色'
    },
    {
      value: '灰',
      label: '灰色'
    },
    {
      value: '金',
      label: '金色'
    },
    {
      value: '银',
      label: '银色'
    },
    {
      value: '棕',
      label: '棕色'
    },
    {
      value: '粉',
      label: '粉色'
    },
    {
      value: '橙',
      label: '橙色'
    },
    {
      value: '黄',
      label: '黄色'
    },
    {
      value: '绿',
      label: '绿色'
    },
    {
      value: '青',
      label: '青色'
    },
    {
      value: '蓝',
      label: '蓝色'
    },
    {
      value: '紫',
      label: '紫色'
    },
    {
      value: '其他',
      label: '其他'
    }
  ],
  useProperty: [
    {
      value: 1,
      label: '营运车辆'
    },
    {
      value: 3,
      label: '非营运车辆'
    },
    {
      value: 2,
      label: '营转非'
    }
  ],
  taskHistoryTable: [
  ],
  taskSearchRuleForm: {
    people: '',
    taskType: '',
    startEndDate: ''
  },
  pagination: {
    pageSizes: [10, 20, 30, 40],
    pageSize: 10,
    total: 0,
    currentPage: 1,
    jumpPage: 1
  }
}
