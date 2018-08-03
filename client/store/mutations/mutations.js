import { RECORD_USERINFO, LOGOUT_USER, GET_MENUS, CURRENT_ROUTER, OBTAIN_TASK_HISTORY, GET_CURRENT_TASK, GET_CITIES, GET_BRAND, GET_MODEL, GET_USER, TASK_SEARCH, GET_MODEL_DETAIL, GET_DATA_DETAIL, GET_PLATFORM, DEAL_DEALER } from './mutation-type'
import { setSessionStore, removeSessionStore } from '../../config/util'
import vue from 'vue'
export default {
  // 记录用户信息
  [RECORD_USERINFO] (state, info) {
    setSessionStore('login', true)
    setSessionStore('username', info.username)
    setSessionStore('auth', info.auth)
    // setSessionStore('isAdmin', 9)
    // const isAdmin = 9
    // if (isAdmin === 9) {
    setSessionStore('isAdmin', info.isAdmin)
    if (info.isAdmin === 9) {
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
    removeSessionStore('auth')
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
  [GET_USER] (state, info) {
    let users = []
    info.forEach(function (val) {
      let user = {}
      user.value = val.id
      user.label = val.profile.alias
      users.push(user)
    })
    state.usersList = users
    return state.usersList
  },
  [TASK_SEARCH] (state, info) {
    if (info.limit) {
      state.pagination.pageSize = info.limit
    } else if (info.currentPage) {
      state.pagination.currentPage = info.currentPage
    } else {
      state.taskSearchRuleForm = Object.assign({}, info)
    }
  },
  [OBTAIN_TASK_HISTORY] (state, info) {
    const data = []
    state.pagination.total = info.count
    info.results.forEach(function (val) {
      const item = {}
      item.name = val.user.profile.alias
      item.taskDate = val.starting_date
      item.taskType = val.task_type
      item.taskName = val.task_name
      item.totalTask = val.task_amount
      item.finished = val.finished_amount
      item.planFinish = val.finishing_date
      data.push(item)
    })
    state.taskHistoryTable = data
    return state.taskHistoryTable
  },
  [GET_CITIES] (state, info) {
    let newCities = []
    info.forEach(function (val) {
      let city = []
      city.label = val.name
      city.value = val.name
      city.children = []
      if (val.cities.length > 0) {
        val.cities.forEach(function (v) {
          const cityChild = {}
          cityChild.label = v.name
          cityChild.value = v.name
          city.children.push(cityChild)
        })
      }
      newCities.push(city)
    })
    state.cities = newCities
    return state.cities
  },
  [GET_BRAND] (state, info) {
    let newBrand = []
    info.forEach(function (val) {
      let brand = []
      brand.label = val.name
      brand.value = val.slug
      brand.children = []
      newBrand.push(brand)
    })
    state.brandList = newBrand
    return state.brandList
  },
  [GET_MODEL] (state, info) {
    let newModel = []
    info.model.forEach(function (val) {
      let model = []
      model.label = val.name
      model.value = val.slug
      model.children = []
      newModel.push(model)
    })
    state.modelList = newModel
    state.brandList.forEach(function (val, i) {
      if (val.value === info.brand) {
        let obj = {}
        obj.value = val.value
        obj.label = val.label
        obj.children = newModel
        vue.set(state.brandList, i, obj)
      }
    })
    return state.brandList
  },
  [GET_MODEL_DETAIL] (state, info) {
    let newModelDetail = []
    info.modelDetail.forEach(function (val) {
      let modelDetail = []
      modelDetail.label = val.detail_model
      modelDetail.value = val.detail_model_slug
      newModelDetail.push(modelDetail)
    })
    state.modelDetailList = newModelDetail
    state.brandList.forEach(function (val, index) {
      if (val.value === info.brand) {
        state.modelList.forEach(function (val1, i) {
          if (val1.value === info.global_slug) {
            let objDetail = {}
            objDetail.value = val1.value
            objDetail.label = val1.label
            objDetail.children = newModelDetail
            vue.set(state.brandList[index].children, i, objDetail)
          }
        })
      }
    })
    return state.brandList
  },
  [GET_CURRENT_TASK] (state, info) {
    let currentData = {}
    currentData.title = info.task_name
    currentData.total = info.task_amount
    currentData.finished = info.finished_amount
    currentData.startDate = info.starting_date
    currentData.finishDate = info.finishing_date
    state.tasksData = Object.assign({}, currentData)
  },
  [GET_DATA_DETAIL] (state, info) {
    state.dataDetail = Object.assign({}, info)
  },
  [GET_PLATFORM] (state, info) {
    let newPlatform = []
    info.forEach(function (val) {
      let platform = []
      platform.label = val.name
      platform.value = val.domain
      newPlatform.push(platform)
    })
    state.platForm = Object.assign({}, newPlatform)
  },
  [DEAL_DEALER] (state, info) {
    if (!info.list) {
      state.dealerList = []
    } else {
      let newList = []
      info.list.forEach(function (val) {
        let dealer = []
        dealer.label = val.company_name
        dealer.value = val.id
        newList.push(dealer)
      })
      state.dealerList = newList.filter(item => {
        return item.label.toLowerCase()
          .indexOf(info.company_name.toLowerCase()) > -1
      })
    }
  }
}
