<template>
  <div id="menuHome" class="home">
    <HomeBanner />
    <HomeCategorySlide />
    <div id="mainContent" class="main-content">
      <HomeVideo />
      <HomeNewestMenu />
      <HomeFourMeals />
      <HomeNews />
    </div>
  </div>
</template>

<script>
// banner轮播图
import HomeBanner from "./components/HomeBanner";
// 分类切换滑动
import HomeCategorySlide from "./components/HomeCategorySlide";
// 美食视频
import HomeVideo from "./components/HomeVideo";
// 最新菜谱
import HomeNewestMenu from './components/HomeNewestMenu'
// 一日四餐
import HomeFourMeals from './components/HomeFourMeals'
// 饮食资讯
import HomeNews from './components/HomeNews'
export default {
  components: {
    HomeBanner,
    HomeCategorySlide,
    HomeVideo,
    HomeNewestMenu,
    HomeFourMeals,
    HomeNews
  }
};
</script>

<style lang="scss">
body {
  // background: #f5f5f5;
}
.home {
  padding-bottom: 10px;
  .main-content {
    margin: 0 10px;
  }
}
</style>