import '@/assets/css/common/reset.scss'

import Vue from 'vue'
import App from './MenuDetail.vue'

import {instance} from '@/http.js'
Vue.prototype.$instance = instance;

Vue.prototype.baseUrl = 'http://192.168.0.100/'

new Vue({
  render: h => h(App)
}).$mount('#app');