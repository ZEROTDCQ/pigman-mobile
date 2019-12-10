<template>
  <div id="app">
    <MemberBanner />
    <MemberTabs @tabsChange="tabsFn" />
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
// 轮播图
import MemberBanner from "./components/MemberBanner";
// tab切换组件
import MemberTabs from "./components/MemberTabs";
export default {
  components: {
    MemberBanner,
    MemberTabs
  },
  data() {
    return {};
  },
  methods: {
    tabsFn(son) {
      console.log(son);
    }
  }
};
</script>

<style lang="scss">
body {
  background: #f5f5f5;
}
</style>