<template>
  <div id="p-home" class="home">
    <HomeBanner />
    <div class="home-main">
      <div class="hm-about-us">
        <h6>源自香港 服务全国客服</h6>
        <p>猪先生是有家控股旗下自营到社区拼团式生鲜零售平台，主要提供的产品有蔬菜、豆制品、水果、肉禽蛋、水产海鲜、米面粮油等。</p>
      </div>
      <HomeRecommendCate />
      <HomeFlash />
      <HomeBooking />
      <HomeNewtaset />
      <HomeSellWell />
      <HomeMember />
      <HomeOneYuan />
      <HomeHelpFree />
      <HomeMore />
    </div>
  </div>
</template>

<script>
// 轮播图
import HomeBanner from "./components/HomeBanner.vue";
// 推荐分类
import HomeRecommendCate from "./components/HomeRecommendCate";
// 限时抢购
import HomeFlash from "./components/HomeFlash/HomeFlash";
// 预定商品
import HomeBooking from "./components/HomeBooking/HomeBooking";
// 新品尝鲜
import HomeNewtaset from "./components/HomeNewtaset/HomeNewtaset";
// 畅销商品
import HomeSellWell from "./components/HomeSellWell/HomeSellWell";
// 会员专享
import HomeMember from "./components/HomeMember/HomeMember";
// 一元购
import HomeOneYuan from "./components/HomeOneYuan/HomeOneYuan";
// 助力免费拿
import HomeHelpFree from "./components/HomeHelpFree/HomeHelpFree";
// 其他更多，精品栏目
import HomeMore from "./components/HomeMore";
export default {
  components: {
    HomeBanner,
    HomeRecommendCate,
    HomeFlash,
    HomeBooking,
    HomeNewtaset,
    HomeSellWell,
    HomeMember,
    HomeOneYuan,
    HomeHelpFree,
    HomeMore
  },
  created() {
    // this.$instance
    //   .post("/api/api/modular", {
    //     type: 1
    //   })
    //   .then(res => {
    //     console.log(res);
    //   });
  }
};
</script>

<style lang="scss">
body {
  background: #f5f5f5;
}
.home {
  padding-bottom: 10px;
}
.home-main {
  margin: 0 10px;
  .hm-about-us {
    padding: 20px 0;
  }
}
.hm-about-us {
  h6 {
    margin-bottom: 10px;
    font-size: 16px;
    text-align: center;
    color: #333;
  }
  p {
    font-size: 12px;
    text-align: center;
    color: #666;
  }
}
</style>