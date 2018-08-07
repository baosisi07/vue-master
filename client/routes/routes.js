
export default [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/home',
    component: () => import('../components/pages/home.vue'),
    meta: { requiresAuth: true },
    children: [
      {
        path: '',
        component: () => import(`../components/pages/dataInput.vue`),
        meta: { requiresAuth: true }
      },
      {
        path: 'dataInput',
        name: 'dataInput',
        component: () => import('../components/pages/dataInput.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: 'validateData',
        name: 'validateData',
        component: () => import('../components/pages/validateData.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: 'taskCenter',
        name: 'taskCenter',
        component: () => import('../components/pages/taskCenter.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: 'assignTask',
        name: 'assignTask',
        component: () => import('../components/pages/assignTask.vue'),
        meta: { requiresAuth: true }
      }
    ]
  },
  {
    path: '/login',
    component: resolve => require(['../components/common/login.vue'], resolve)
  },
  {
    path: '*',
    component: () => import('../components/common/notFound.vue')
  }
]
