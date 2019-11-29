import Vue from 'vue'
import App from './home.vue'

import '@/assets/css/common/reset.scss'

import {instance} from '@/http.js'
Vue.prototype.$instance = instance;

Vue.prototype.baseUrl = 'http://192.168.0.104/'

new Vue({
  render: h => h(App)
}).$mount('#app');