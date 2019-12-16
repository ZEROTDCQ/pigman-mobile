import Vue from 'vue'
import App from './Category.vue'

import '@/assets/css/common/reset.scss'

import {instance} from '@/http.js'
Vue.prototype.$instance = instance;

Vue.prototype.baseUrl = 'http://192.168.0.102/'

new Vue({
  render: h => h(App)
}).$mount('#app');