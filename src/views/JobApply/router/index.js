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
    { path: '/', name: 'JobApply' },
    { path: '/person', name: 'person', component: () => import(/* webpackChunkName: 'person' */ '../page/Person.vue'), meta: { title: '个人信息 - 职位申请' } },
    { path: '/jiaoyu', name: 'jiaoyu', component: () => import(/* webpackChunkName: 'jiaoyu' */ '../page/JiaoYu.vue'), meta: { title: '新增教育经历 - 职位申请' } },
    { path: '/shixi', name: 'shixi', component: () => import(/* webpackChunkName: 'shixi' */ '../page/ShiXi.vue'), meta: { title: '新增实习经历 - 职位申请' } },
    { path: '/gongzuo', name: 'gongzuo', component: () => import(/* webpackChunkName: 'gongzuo' */ '../page/GongZuo.vue'), meta: { title: '新增工作经历 - 职位申请' } },
    { path: '/xiangmu', name: 'xiangmu', component: () => import(/* webpackChunkName: 'xiangmu' */ '../page/XiangMu.vue'), meta: { title: '新增项目经历 - 职位申请' } }
  ]
})