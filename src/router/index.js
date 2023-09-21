import Vue from 'vue'
import VueRouter from 'vue-router'
import LogIn from '../views/LogIn.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: {
      name: 'LogIn'
    },
    component: LogIn
  },
  {
    path: '/LogIn',
    name: 'LogIn',
    component: () => import('../views/LogIn.vue')
  },
  {
    path: '/HomeScaffold',
    component: () => import('../views/pages/HomeScaffold.vue'),
    redirect: '/WelcomePage',
    children: [
      {
        path: '/WelcomePage',
        component: () => import('../views/pages/WelcomePage.vue')
      },
      {
        path: '/AnnouncementPage',
        component: () => import('../views/pages/AnnouncementPage.vue')
      },
      {
        path: '/AccountManagement',
        component: () => import('../views/pages/AccountManagement.vue')
      },
      {
        path: '/ResourceManagement',
        component: () => import('../views/pages/resourceManagement/ResourceManagement.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

// 挂载路由导航守卫
// router.beforeEach((to, from, next) => {
//   // to 将要访问的路径
//   // from代表从哪个路径跳转过来
//   // next是一个函数 ，表示放行
//   // next()放行 next('/login')强制跳转
//   if (to.path === '/LogIn') return next()
//   const tokenStr = window.messionStorage.getItem('token')
//   if (!tokenStr) return next('/LogIn')
//   next()
// })

export default router
