// 当使用cnd在html中script引入vue-router.js时(在vue.js之下)，会自动注册VueRouter全局变量，因此这里无需import，直接new VueRouter
// import VueRouter from 'vue-router'

export default new VueRouter({
  mode: 'hash',
  routes: [
    { path: '/', name: 'flash', redirect: { name: 'flashIng' } },
    { path: '/ing', name: 'flashIng', component: () => import(/* webpackChunkName: 'flash_ing' */ '../page/FlashIng.vue'), meta: { title: '正在疯抢 - 限时抢购' } },
    { path: '/soon', name: 'flashSoon', component: () => import(/* webpackChunkName: 'flash_soon' */ '../page/FlashSoon.vue'), meta: { title: '即将开抢 - 限时抢购' } },
    { path: '/nextday', name: 'flashNextDay', component: () => import(/* webpackChunkName: 'flash_nextday' */ '../page/FlashNextDay.vue'), meta: { title: '明日预告 - 限时抢购' } },
  ]
})