import Vue from 'vue'
import App from './ActivityApply.vue'

import '@/assets/css/common/reset.scss'

import { instance } from '@/http.js'
Vue.prototype.$instance = instance;

import calc from '@/utils/Calculate.js'
Vue.prototype.$calc = calc;

Vue.prototype.baseUrl = 'http://192.168.0.106/'

new Vue({
  render: h => h(App)
}).$mount('#app');