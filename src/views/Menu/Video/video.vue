<template>
  <div class="video page_wrap">
    <VideoBanner />
    <div class="video-box-wrap">
      <div class="vb-head">
        <div class="left-tit">
          <h3 class="tit-txt">最新视频</h3>
        </div>
        <div class="right-actions">
          <div class="action">
            <a
              href="javascript:;"
              :class="['btn-change', {loading: loading}]"
              @click="changeOthers"
            >
              换一换
              <i class="iconfont">&#xe635;</i>
            </a>
          </div>
        </div>
      </div>
      <div class="vb-body vb-list">
        <VideoItem v-for="i in 4" :key="i" />
      </div>
    </div>

    <div class="video-box-wrap">
      <div class="vb-head">
        <div class="left-tit">
          <h3 class="tit-txt">视频分类</h3>
        </div>
        <div class="right-actions">
          <div class="action">
            <a href="javascript:;" class="btn-category">家常菜</a>
          </div>
          <div class="action">
            <a href="javascript:;" class="btn-category">川菜</a>
          </div>
          <div class="action">
            <a href="javascript:;" class="btn-category">粤菜</a>
          </div>
          <div class="action">
            <a href="javascript:;" class="btn-category">点心</a>
          </div>
        </div>
      </div>
      <div class="vb-body vb-list">
        <VideoItem v-for="i in 4" :key="i" />
      </div>
    </div>

    <div class="video-box-wrap">
      <div class="vb-head">
        <div class="left-tit">
          <h3 class="tit-txt">热门视频</h3>
        </div>
        <div class="right-actions">
          <div class="action">
            <a href="javascript:;" class="btn-more">
              查看更多
              <span>&gt;</span>
            </a>
          </div>
        </div>
      </div>
      <div class="vb-body vb-list">
        <VideoItem v-for="i in 4" :key="i" />
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
      loading: false
    };
  },
  methods: {
    changeOthers() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 3000);
    }
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