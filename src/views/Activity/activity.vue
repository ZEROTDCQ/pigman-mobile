<template>
  <div id="app">
    <ActivityBanner />
    <ActivityTabs />
    <router-view />
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
  },
  created() {
    //获取活动页面接口数据
    this.$instance.post("/api/api/Activity").then(res => {
      let data = res.data.data;
      console.log(data);
      //推荐活动
      let tuiJian = data.top.recommend.map(item => {
        return {
          id: item.id,
          picture: item.picture,
          title: item.title,
          sketch: item.sketch,
          price: item.price,
          haveJoin: item.number
        };
      });
      this.$store.commit("setActivityData", { type: "tuijian", data: tuiJian });
      //会员活动
      let member = data.top.like.map(item => {
        return {
          id: item.id,
          picture: item.picture,
          title: item.title,
          sketch: item.sketch,
          price: item.price,
          haveJoin: item.number
        };
      });
      this.$store.commit("setActivityData", { type: "member", data: member });
      //专题活动
      let activities = data.bottom;
      console.log(activities)
      this.$store.commit("setActivityData", {
        type: "activities",
        data: activities
      });
    });
  }
};
</script>

<style lang="scss">
body {
  background: #f5f5f5;
}
.appear, .appear-subject {
  transform: scale(0.8);
  opacity: 0;
}
.appear-active, .appear-subject-active {
  transition: transform 0.25s ease-in-out, opacity 0.25s ease-in-out;
}
</style>