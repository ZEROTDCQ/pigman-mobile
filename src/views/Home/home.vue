<template>
  <div id="p-home" class="home">
    <HomeBanner />
    <div class="home-main">
      <div class="hm-about-us">
        <h6>源自香港 服务全国客服</h6>
        <p>猪先生是有家控股旗下自营到社区拼团式生鲜零售平台，主要提供的产品有蔬菜、豆制品、水果、肉禽蛋、水产海鲜、米面粮油等。</p>
      </div>
      <HomeRecommendCate />
      <div
        data-lazy="2"
        class="flash-pro floor floor-1"
        v-if="flashData && flashData.son.length > 0"
      >
        <HomeFlash :data="flashData" />
      </div>

      <div class="booking-pro floor floor-2" data-lazy="5">
        <div class="area-box" v-if="bookingData == null">
          <div class="area-head clearfix">
            <h3 class="ah-title">预定商品</h3>
          </div>
          <HomeAreaSkeleton />
        </div>
        <HomeBooking v-else :data="bookingData" />
      </div>

      <div class="member-pro area-box floor floor-3" data-lazy="6">
        <div class="area-box" v-if="memberData == null">
          <div class="area-head clearfix">
            <h3 class="ah-title">会员专享</h3>
          </div>
          <HomeAreaSkeleton />
        </div>
        <HomeMember v-else :data="memberData" />
      </div>

      <div class="newtaste-pro area-box floor floor-4" data-lazy="3">
        <div class="area-box" v-if="newData == null">
          <div class="area-head clearfix">
            <h3 class="ah-title">新品尝鲜</h3>
          </div>
          <HomeAreaSkeleton />
        </div>
        <HomeNewtaste v-else :data="newData" />
      </div>

      <div class="hot-pro area-box floor floor-5" data-lazy="7">
        <div class="area-box" v-if="popularData == null">
          <div class="area-head clearfix">
            <h3 class="ah-title">畅销商品</h3>
          </div>
          <HomeAreaSkeleton />
        </div>
        <HomeSellWell v-else :data="popularData" />
      </div>

      <div class="oneyuan-pro area-box floor floor-6" data-lazy="1">
        <div class="area-box" v-if="oneyuanData == null">
          <div class="area-head clearfix">
            <h3 class="ah-title">1元购</h3>
          </div>
          <HomeAreaSkeleton />
        </div>
        <HomeOneYuan v-else :data="oneyuanData" />
      </div>

      <div class="helpfree-pro area-box floor floor-7" data-lazy="4">
        <div class="area-box" v-if="helpData == null">
          <div class="area-head clearfix">
            <h3 class="ah-title">助力免费拿</h3>
          </div>
          <HomeAreaSkeleton />
        </div>
        <HomeHelpFree v-else :data="helpData" />
      </div>

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
const HomeBooking = () =>
  import(/*webpackChunkName: 'HomeBooking'*/ "./components/HomeBooking/HomeBooking");
// 新品尝鲜
const HomeNewtaste = () =>
  import(/*webpackChunkName: 'HomeNewtaste'*/ "./components/HomeNewtaste/HomeNewtaste");
// 畅销商品
const HomeSellWell = () =>
  import(/*webpackChunkName: 'HomeSellWell'*/ "./components/HomeSellWell/HomeSellWell");
// 会员专享
const HomeMember = () =>
  import(/*webpackChunkName: 'HomeMember'*/ "./components/HomeMember/HomeMember");
// 一元购
const HomeOneYuan = () =>
  import(/*webpackChunkName: 'HomeOneYuan'*/ "./components/HomeOneYuan/HomeOneYuan");
// 助力免费拿
const HomeHelpFree = () =>
  import(/*webpackChunkName: 'HomeHelpFree'*/ "./components/HomeHelpFree/HomeHelpFree");
// 其他更多，精品栏目
import HomeMore from "./components/HomeMore";
// 专区骨架屏
import HomeAreaSkeleton from "./components/HomeAreaSkeleton";
export default {
  components: {
    HomeBanner,
    HomeRecommendCate,
    HomeFlash,
    HomeBooking,
    HomeNewtaste,
    HomeSellWell,
    HomeMember,
    HomeOneYuan,
    HomeHelpFree,
    HomeMore,
    HomeAreaSkeleton
  },
  data() {
    return {
      nextFloor: 2, // 准备加载的楼层
      flashData: null, // 限时抢购
      bookingData: null, // 预定商品
      memberData: null, // 会员专享
      newData: null, // 新品尝鲜
      popularData: null, // 畅销商品
      oneyuanData: null, // 一元购
      helpData: null // 助力免费拿
    };
  },
  created() {
    this.getData(2);
    this.scrollHandleAction = () => this.scrollHandle();
  },
  mounted() {
    document.addEventListener("scroll", this.scrollHandleAction);
  },
  methods: {
    scrollHandle() {
      let scrollTop = $(document).scrollTop();
      let clientHeight = document.documentElement.clientHeight;
      // 准备加载的楼层的offset().top
      let floor = $(`.floor-${this.nextFloor}`);
      if (floor.length > 0) {
        let floorTop = floor.offset().top;
        if (scrollTop + clientHeight >= floorTop - 50) {
          let type = Number(floor.data("lazy"));
          this.getData(type);
          this.nextFloor += 1;
        }
      }
    },
    getData(type) {
      /* 接口分离 */
      this.$instance
        .post("/api/api/modular", {
          type: type
        })
        .then(res => {
          let data = res.data.data;
          switch (type) {
            case 1:
              this.oneyuanData = data;
              break;
            case 2:
              this.flashData = {
                flag: data.flag,
                title: data.title,
                sketch: data.sketch,
                son: data.son.map(item => {
                  return {
                    time: data.time,
                    start_time: data.start_time,
                    end_time: data.end_time,
                    ...item
                  };
                })
              };
              break;
            case 3:
              this.newData = data;
              break;
            case 4:
              this.helpData = data;
              break;
            case 5:
              this.bookingData = data;
              break;
            case 6:
              this.memberData = data;
              break;
            case 7:
              this.popularData = data;
              break;
          }
        });
    }
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
.area-box {
  .area-head {
    margin: 0 0 6px;
    display: flex;
    .ah-sub-title {
      flex: 1;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .btn-enter-area {
      margin-left: 5px;
    }
  }
}
</style>