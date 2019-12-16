import Vue from 'vue'
import App from './activity.vue'
import router from './router'
import store from './store'

import '@/assets/css/common/reset.scss'

import { instance } from '@/http.js'
Vue.prototype.$instance = instance;

Vue.prototype.baseUrl = 'http://192.168.0.102/'

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');