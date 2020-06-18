import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

// const routes: Array<RouteConfig> = [
//   {
//     path: '/',
//     name: 'Home',
//     component: Home
//   },
//   {
//     path: '/about',
//     name: 'About',
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//   }
// ]

export const contantRouteMap = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
]

export const asyncRouteMap = []

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: contantRouteMap,
})
// router.beforeEach((to, from, next) => {
//   const token = window.sessionStorage.getItem('token')
//   const permission = store.state.permission || window.sessionStorage.getItem('permission')
//   console.log('=====', permission)
//   if(token) {
//     if (to.path === '/login') { // 如果是登录页面的话，直接next()
//       next();
//     } else { 
//       // next()
//       if(store.state.addRoutes.length === 0) {
//         store.dispatch('getUserInfo').then((res: any) => {
//           store.dispatch('GenerateRoutes', permission).then(() => {
//             const addRoutes = store.state.addRoutes;
//             router.addRoutes(addRoutes);
//             console.log(addRoutes)
//             next({
//               ...to as any,
//               replace: true,
//             })
//           })
//         }).catch(err => {
//           console.log(err)
//         })
//       } else {
//         next()
//       }
//     }
//   } else {
//     if (to.path === '/login') { // 如果是登录页面的话，直接next()
//       next();
//     } else { // 否则 跳转到登录页面
//       next({
//         path: '/login',
//       });
//     }
//   }
// })

router.beforeEach((to, from, next) => {
  const token = sessionStorage.getItem('token')
  if (token) {
    if (to.path === '/login') {
      next()
    }
  } else {
    if (to.path === '/login') {
      next()
    } else {
      next({
        path: '/login',
      })
    }
  }
})

export default router
