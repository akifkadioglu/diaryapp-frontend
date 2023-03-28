import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Diary from '../views/Diary.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

import DefaultLayout from '../layouts/default.vue'
import AuthLayout from '../layouts/auth.vue'
import { routeNames } from './routes_names'
import auth from './middleware/auth'
import notAuth from './middleware/not_auth'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    beforeEnter: auth,
    children: [
      {
        path: '',
        name: routeNames.HOME,
        component: Home
      },
      {
        path: 'diary',
        name: routeNames.DIARY,
        component: Diary
      }
    ]
  },
  {
    path: '/auth',
    component: AuthLayout,
    beforeEnter: notAuth,

    children: [
      {
        path: '',
        redirect: {
          name: routeNames.LOGIN
        }
      },
      {
        path: 'login',
        name: routeNames.LOGIN,
        component: Login
      },
      {
        path: 'register',
        name: routeNames.REGISTER,
        component: Register
      }
    ]
  },
  {
    path: '*',
    redirect: '/',
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
