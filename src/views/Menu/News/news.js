import Vue from 'vue'
import App from './news.vue'

import '@/assets/css/common/reset.scss'

import { instance } from '@/http.js'
Vue.prototype.$instance = instance;

Vue.prototype.baseUrl = 'http://192.168.0.106/'

Vue.filter('formatDate', (value, tag = '-', isFullDate = false, isSeconds = true) => {
  var value = value + '';
  if (value.length == 10) {
    // php unix时间戳(s)转js时间戳(ms)
    value = value + '000'
  }
  var d = new Date(Number(value));
  var year = d.getFullYear();
  var month = d.getMonth() + 1 < 10 ? '0' + (d.getMonth() + 1) : d.getMonth() + 1;
  var date = d.getDate() < 10 ? '0' + d.getDate() : d.getDate();

  var hours = d.getHours() < 10 ? '0' + d.getHours() : d.getHours();
  var minutes = d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes();
  var seconds = d.getSeconds() < 10 ? '0' + d.getSeconds() : d.getSeconds();
  return year + tag + month + tag + date + (isFullDate ? ' ' + hours + ':' + minutes + (isSeconds ? ':' + seconds : '') : '');
})

new Vue({
  render: h => h(App)
}).$mount('#app');