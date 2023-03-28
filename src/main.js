import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueCryptojs from 'vue-cryptojs'

const moment = require('moment')
require('moment/locale/tr')
require('./http/init');

import { storage } from './storage'
import { routeNames } from './router/routes_names'
import { snackbar } from './snackbar'

Vue.prototype.$storage = storage
Vue.prototype.$routes = routeNames
Vue.prototype.$axios = axios
Vue.prototype.$snackbar = snackbar

Vue.config.productionTip = false

Vue.use(require('vue-moment'), { moment })
new Vue({
  router,
  store,
  vuetify,
  VueCryptojs,
  VueAxios,
  axios,
  render: h => h(App)
}).$mount('#app')
