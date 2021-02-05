
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'detail/:itemId', component: () => import('pages/Detail.vue') },
      { path: 'buy/:itemId', component: () => import('pages/Buy.vue') },
      { path: '/test', component: () => import('pages/Test.vue')},
      { path: '/stuff', component: () => import('pages/Stuff_upload.vue')},
      { path: '/profile', component: () => import('pages/Profile.vue')},
      // { path: '/new_main',component: () => import('pages/asdfasdf.vue')}
    ]
  },
  { 
    path: '/login', 
    component: () => import('pages/Login.vue')
  },
  { 
    path: '/register', 
    component: () => import('pages/Register.vue')
  },
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
] 

export default routes
