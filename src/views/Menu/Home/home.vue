<template>
  <div id="menuHome" class="home">
    <HomeBanner />
    <HomeCategorySlide @category="categoryr" />
    <div id="mainContent" class="main-content" v-if="getdata" v-show="showr">
      <HomeVideo :data="getdata.top" />
      <HomeNewestMenu :data="getdata.new" />
      <HomeFourMeals :data="getdata.bottom"/>
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
import HomeVideo from "./components/HomeVideoitem";
// 最新菜谱
import HomeNewestMenu from "./components/HomeNewestMenu";
// 一日四餐
import HomeFourMeals from "./components/HomeFourMeals";
// 饮食资讯
import HomeNews from "./components/HomeNews";
export default {
  components: {
    HomeBanner,
    HomeCategorySlide,
    HomeVideo,
    HomeNewestMenu,
    HomeFourMeals,
    HomeNews
  },
  data() {
    return {
      showr: false,
      twoid: null,

      getdata: null
    };
  },
  watch: {
    twoid() {
      this.getData();
    }
  },
  methods: {
    categoryr(son) {
      this.twoid = son;
      console.log("一级", this.twoid);
    },

    getData() {
      this.$instance
        .post("api/Mobileapi/menuIndex", { id: this.twoid })
        .then(res => {
          let data = res.data.data;
          this.getdata = data;
          this.showr = true;
        });
    }
  }
};
</script>

<style lang="scss">
// body {
//   // background: #f5f5f5;
// }
.home {
  padding-bottom: 10px;
  // .main-content {
  //   // margin: 0 10px;
  // }
}
</style>