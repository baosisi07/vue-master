import Vue from 'vue'
import './assets/app.scss'
import vueRouter from 'vue-router'
import createRouter from './router'
import Vuex from 'vuex'
import createStore from './store/store'
Vue.use(vueRouter)
Vue.use(Vuex)
const router = createRouter()
const store = createStore()
new Vue({
  store,
  router,
  el: '#App',
  template: `
    <div>
    <router-link to='/app'>app</router-link>
    <router-link to='/login'>login</router-link>
    <router-view />
    </div>
  `
})
