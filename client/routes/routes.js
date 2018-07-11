import Login from '../login.vue'
import App from '../app.vue'
export default [
  {
    path: '/',
    redirect: '/app'
  },
  {
    path: '/app',
    component: App,
    children: [
      {
        path: 'test',
        component: Login
      }
    ]
  },
  {
    path: '/login',
    component: Login
  }
]
