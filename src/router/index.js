import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'

import DefaultLayout from '../layouts/default.vue'
import AuthLayout from '../layouts/auth.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: Home
      }
    ]
  },
  {
    path: '/auth',
    name: 'Auth',
    component: AuthLayout,
    children: [
      {
        path: '',
        redirect: {
          name: 'auth.login'
        }
      },
      {
        path: 'login',
        name: 'auth.login',
        component: Login
      },
      {
        path: 'register',
        name: 'auth.register',
        component: Home
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
