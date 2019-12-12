<template>
  <div class="video_hot page_wrap" v-show="showr">
    <VideoBanner v-if="bannerData" :data="bannerData" />
    <div class="video-box-wrap">
      <div class="vb-head">
        <div class="left-tit">
          <h3 class="tit-txt">热门视频</h3>
        </div>
      </div>
      <div class="vb-body vb-list" v-if="hotData">
        <VideoItem v-for="(item,index) in hotData" :key="index" :data="item" />
      </div>
    </div>
  </div>
</template>

<script>
import VideoBanner from "./components/VideoBanner";
import VideoItem from "./components/VideoItem";
export default {
  components: {
    VideoBanner,
    VideoItem
  },
  data() {
    return {
      showr: false,

      page: 1,
      limit: 8,

      bannerData: null,
      hotData: null
    };
  },
  beforeCreate() {
    this.$instance
      .post("api/api/videoTwo", {
        type: 0,
        page: this.page,
        limit: this.limit
      })
      .then(res => {
        let data = res.data.data;
        this.hotData = data.son;
        this.bannerData = data.adv;
        this.showr = true;
      });
  }
};
</script>

<style lang="scss">
.page_wrap {
  padding-bottom: 10px;
}
.video-box-wrap {
  margin-top: 10px;
  .vb-head {
    position: relative;
    padding: 0 10px;
    height: 40px;
    line-height: 40px;
    display: flex;
    justify-content: space-between;
    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 1px;
      background: #eee;
      transform: scaleY(0.5);
    }
    .tit-txt {
      padding-left: 24px;
      font-size: 16px;
      color: #333;
      background: url("~@/assets/img/page/video/title_icon.png") no-repeat left
        center;
      background-size: 18px auto;
    }
    .right-actions {
      overflow: hidden;
      font-size: 12px;
      color: #808080;
      .action {
        float: left;
        margin-left: 10px;
      }
      .btn-change {
        position: relative;
        display: inline-block;
        padding-right: 17px;
        .iconfont {
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%) rotate(0deg);
          width: 12px;
          height: 12px;
          line-height: 12px;
        }
      }
      .btn-change.loading {
        .iconfont {
          animation: loading 1s linear infinite;
        }
      }
      .btn-more {
        span {
          font-family: serif;
        }
      }
    }
  }
  .vb-list {
    padding: 0 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .video-item {
      margin-top: 10px;
    }
  }
}
@keyframes loading {
  100% {
    transform: translateY(-50%) rotate(360deg);
  }
}
</style>