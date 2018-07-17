import Vue from 'vue'
import App from './app.vue'
import './assets/app.scss'
import vueRouter from 'vue-router'
import createRouter from './router'
import Vuex from 'vuex'
import createStore from './store/store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI, { size: 'small', zIndex: 3000 })

Vue.use(vueRouter)
Vue.use(Vuex)
const router = createRouter()
const store = createStore()

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    console.log(store)
    if (!store.state.login) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next()
  }
})
new Vue({
  store,
  router,
  el: '#App',
  template: '<App />',
  components: {App}
})
