import Vue from 'vue'
import App from './app.vue'
import './assets/app.scss'
import vueRouter from 'vue-router'
import createRouter from './router'
import Vuex from 'vuex'
import createStore from './store/store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import { getSessionStore } from './config/util'
Vue.use(ElementUI, { size: 'small', zIndex: 3000 })

Vue.use(vueRouter)
Vue.use(Vuex)
const router = createRouter()
const store = createStore()

router.beforeEach((to, from, next) => {
  const isLogined = getSessionStore('login')
  const defaultNav = getSessionStore('defaultNav')
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isLogined) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      if (from.fullPath !== '/') {
        store.commit('CURRENT_ROUTER', {
          defaultNav
        })
        next(false)
      } else {
        next()
      }
    }
    next()
  } else {
    next()
  }
})
new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#App')
