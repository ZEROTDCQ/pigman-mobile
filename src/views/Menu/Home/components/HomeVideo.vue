<template>
  <!-- 首页美食视频 -->
  <div class="area-box area-video">
    <div class="area-head clearfix">
      <h3 class="ah-title">美食视频</h3>
      <p class="btn-enter-area">
        <a href="javascript:;">精选</a>
        <a href="javascript:;">菜谱</a>
        <a href="javascript:;">中餐</a>
        <a href="javascript:;">西餐</a>
        <a href="javascript:;">人群</a>
      </p>
    </div>
    <div class="area-body video-list">
      <VideoItem v-for="i in 4" :key="i" />
    </div>
  </div>
</template>

<script>
import VideoItem from './VideoItem'
export default {
  components: {
    VideoItem
  }
};
</script>

<style lang="scss" scoped>
/deep/.video-list {
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
  }
}
</style>