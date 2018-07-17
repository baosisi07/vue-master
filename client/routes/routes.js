
export default [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/home',
    component: () => import('../components/pages/home.vue'),
    children: [
      {
        path: '',
        component: () => import('../components/pages/dataInput.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: 'dataInput',
        component: () => import('../components/pages/dataInput.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: 'validateData',
        component: () => import('../components/pages/validateData.vue'),
        meta: { requiresAuth: true }
      }
    ]
  },
  {
    path: '/login',
    component: () => import('../components/common/login.vue')
  }
]
