import '@/assets/css/common/reset.scss'

import Vue from 'vue'
import App from './JobApply.vue'
import router from './router'
import store from './store'

import { instance } from '@/http.js'
Vue.prototype.$instance = instance;

Vue.prototype.baseUrl = 'http://192.168.0.106/'

<<<<<<< HEAD
=======
Vue.prototype.formatDate = function (date, fmt = 'YYYY.mm.dd') {
  if (!date) {
    return '';
  }
  let d = new Date(date);
  let ret;
  let opt = {
    "Y+": d.getFullYear().toString(),        // 年
    "m+": (d.getMonth() + 1).toString(),     // 月
    "d+": d.getDate().toString(),            // 日
    "H+": d.getHours().toString(),           // 时
    "M+": d.getMinutes().toString(),         // 分
    "S+": d.getSeconds().toString()          // 秒
    // 有其他格式化字符需求可以继续添加，必须转化成字符串
  };
  for (let k in opt) {
    ret = new RegExp("(" + k + ")").exec(fmt);
    if (ret) {
      fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
    };
  };
  return fmt;
}

>>>>>>> e0cef4e243c2a78b5dad97f0ffc85e3a2e641656
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');