import Vue from 'vue'
import './assets/app.scss'
import vueRouter from 'vue-router'
import createRouter from './router'
Vue.use(vueRouter)
const router = createRouter()
new Vue({
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
