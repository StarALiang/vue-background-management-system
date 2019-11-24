import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  /* {
    path: '/',
    redirect: '/home'
  }, */
  {
    path: '/',
    name: 'login',
    component: () => import('../views/login/login.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/home/Home.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
