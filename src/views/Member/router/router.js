// 当使用cnd在html中script引入vue-router.js时(在vue.js之下)，会自动注册VueRouter全局变量，因此这里无需import，直接new VueRouter
// import VueRouter from 'vue-router'

export default new VueRouter({
  mode: 'hash',
  routes: [
    { path: '/', name: 'member', redirect: { name: 'benefits' } },
    { path: '/benefits', name: 'benefits', component: () => import(/* webpackChunkName: 'benefits' */ '../page/MemberBenefits.vue'), meta: { title: '专属权益 - 会员中心' } },
    { path: '/exclusive', name: 'exclusive', component: () => import(/* webpackChunkName: 'exclusive' */ '../page/MemberExclusive.vue'), meta: { title: '专属商品 - 会员中心' } },
    { path: '/score', name: 'score', component: () => import(/* webpackChunkName: 'score' */ '../page/MemberScore.vue'), meta: { title: '积分换购 - 会员中心' } },
    { path: '/activity', name: 'activity', component: () => import(/* webpackChunkName: 'activity' */ '../page/MemberActivity.vue'), meta: { title: '会员活动 - 会员中心' } },
  ]
})