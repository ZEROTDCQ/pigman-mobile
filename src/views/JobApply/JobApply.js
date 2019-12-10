import '@/assets/css/common/reset.scss'

import Vue from 'vue'
import App from './JobApply.vue'
import router from './router'
import store from './store'

import { instance } from '@/http.js'
Vue.prototype.$instance = instance;

Vue.prototype.baseUrl = 'http://192.168.0.106/'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');