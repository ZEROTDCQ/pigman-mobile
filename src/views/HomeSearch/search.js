import '@/assets/css/common/reset.scss'

import Vue from 'vue'
import App from './search.vue'
import store from './store'

import { instance } from '@/http.js'
Vue.prototype.$instance = instance;

// Vue.prototype.baseUrl = ''
Vue.prototype.baseUrl = 'http://192.168.0.101/'

Vue.prototype.$center = new Vue();

new Vue({
  store,
  render: h => h(App)
}).$mount('#app');