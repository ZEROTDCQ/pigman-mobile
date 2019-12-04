import Vue from 'vue'
import App from './flash.vue'
import router from './router'

import '@/assets/css/common/reset.scss'

import { instance } from '@/http.js'
Vue.prototype.$instance = instance;

Vue.prototype.baseUrl = 'http://192.168.0.105/'

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');