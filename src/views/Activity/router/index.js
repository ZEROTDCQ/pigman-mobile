// 当使用cnd在html中script引入vue-router.js时(在vue.js之下)，会自动注册VueRouter全局变量，因此这里无需import，直接new VueRouter
// import VueRouter from 'vue-router'

export default new VueRouter({
  mode: 'hash',
  routes: [
    { path: '/', name: 'activity', redirect: { name: 'recommend' } },
    { path: '/recommend', name: 'recommend', component: () => import(/* webpackChunkName: 'recommend' */ '../page/ActivityRecommend.vue'), meta: { title: '推荐活动 - 活动中心' } },
    { path: '/member', name: 'member', component: () => import(/* webpackChunkName: 'member' */ '../page/ActivityMember.vue'), meta: { title: '会员活动 - 活动中心' } },
    { path: '/subject', name: 'subject', component: () => import(/* webpackChunkName: 'subject' */ '../page/ActivitySubject.vue'), meta: { title: '专题活动 - 活动中心' } },
  ]
})