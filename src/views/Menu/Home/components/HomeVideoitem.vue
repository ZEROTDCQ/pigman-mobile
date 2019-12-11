<template>
  <!-- 首页美食视频 -->
  <div class="area-box area-video">
    <div class="area-head clearfix">
      <h3 class="ah-title">美食视频</h3>
      <p class="btn-enter-area enter-0">
        <a v-for="(item,inx) in dataR" :key="inx" :href="'xxxx.html?id='+item.id">{{item.title}}</a>
      </p>
    </div>

    <div class="area-body">
      <div class="cs-swiper swiper-container" ref="swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide video-list" v-for="(item,index) in dataR" :key="index">
            <VideoItem v-for="(i,j) in item.son" :key="j" :data="i" />
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
  </div>
</template>

<script>
import VideoItem from "./VideoItem";
export default {
  components: {
    VideoItem
  },
  props: {
    data: Array
  },
  data() {
    return {
      swiper: null
    };
  },
  computed: {
    dataR() {
      return this.data.slice(0, 6);
    }
  },
  mounted() {
    this.initSwiper();
    $(".enter-0 a")
      .eq(0)
      .addClass("active");
  },
  methods: {
    initSwiper() {
      this.swiper = new Swiper(this.$refs.swiper, {
        on: {
          slideChangeTransitionEnd: function() {
            console.log(this.activeIndex);
            let as = $(".enter-0 a");
            as.removeClass("active");
            as.eq(this.activeIndex).addClass("active");
          }
        },
        // effect: "cube",
        loop: false
      });
    }
  }
};
</script>

<style lang="scss" scoped>
/deep/.video-list {
  // margin: 0 10px;
  padding: 0 10px;
  box-sizing: border-box;
  margin-top: -10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .video-item {
    margin-top: 10px;
  }
}
.area-video {
  .btn-enter-area {
    a {
      float: left;
      margin-left: 5px;
    }
    .active {
      color: $primarycolor;
    }
  }
}
</style>