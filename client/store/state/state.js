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
  taskTypeList: [
    {
      value: 1,
      label: '量化任务-数据录入'
    },
    {
      value: 2,
      label: '量化任务-数据验证'
    },
    {
      value: 0,
      label: '全部'
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
      value: 1,
      label: '车商零售'
    },
    {
      value: 2,
      label: '车商收购'
    },
    {
      value: 3,
      label: '个人交易'
    }
  ],
  useProperty: [
    {
      value: 1,
      label: '营运车辆'
    },
    {
      value: 2,
      label: '非营运车辆'
    },
    {
      value: 3,
      label: '营转非'
    },
    {
      value: 0,
      label: '全部'
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
