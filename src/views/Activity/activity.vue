<template>
  <div id="app">
    <ActivityBanner />
    <ActivityTabs />
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
// 轮播图
import ActivityBanner from "./components/ActivityBanner";
// tab切换组件
import ActivityTabs from "./components/ActivityTabs";
export default {
  components: {
    ActivityBanner,
    ActivityTabs
  }
};
</script>

<style lang="scss">
body {
  background: #f5f5f5;
}
</style>