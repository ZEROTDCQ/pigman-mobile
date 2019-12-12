// 当使用cnd在html中script引入vue-router.js时(在vue.js之下)，会自动注册VueRouter全局变量，因此这里无需import，直接new VueRouter
// import VueRouter from 'vue-router'

export default new VueRouter({
  mode: 'hash',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    { path: '/', name: 'cooperate' },
    { path: '/first', name: 'firstCategory', component: () => import(/* webpackChunkName: 'first_ategory' */ '../page/CooperateFirst.vue'), meta: { title: '一级类目 - 供货合作' } },
    { path: '/second/:id', name: 'secondCategory', component: () => import(/* webpackChunkName: 'second_category' */ '../page/CooperateSecond.vue'), meta: { title: '二级类目 - 供货合作' } }
  ]
})