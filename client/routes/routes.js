
export default [
  {
    path: '/',
    redirect: '/app'
  },
  {
    path: '/app',
    component: () => import('../app.vue'),
    children: [
      {
        path: 'test',
        component: () => import('../login.vue')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('../login.vue')
  }
]
