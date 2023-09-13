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
    path: '/SignIn',
    name: 'SignIn',
    component: () => import('../views/SignIn.vue')
  },
  {
    path: '/HomePage',
    name: 'HomePage',
    component: () => import('../views/pages/HomePage.vue')
  },
  {
    path: '/WelcomePage',
    name: 'WelcomePage',
    component: () => import('../views/pages/WelcomePage.vue')
  },
  {
    path: '/InfoManagement',
    name: 'InfoManagement',
    component: () => import('../views/pages/InfoManagement.vue')
  },
  {
    path: '/AnnouncementPage',
    name: 'AnnouncementPage',
    component: () => import('../views/pages/AnnouncementPage.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
