<template>
  <!-- 视频组件 -->
  <div class="video-item">
    <a href="javascript:;">
      <img
        class="poster"
        :src="baseUrl + '/uploads/admin/images/20191129/5f033941feeb2e33d98a598b576265a6.jpg'"
        alt
      />
      <img class="icon-play" src="~@/assets/img/common/icon-videoPlay.png" alt />
      <p class="vi-tit">海参料理</p>
    </a>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.video-item {
  position: relative;
  width: 172px;
  height: 142px;
  border-radius: 5px;
  overflow: hidden;
  .poster {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    min-height: 100%;
  }
  .icon-play{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 47px;
    height: 47px;

  }
  .vi-tit {
    position: absolute;
    left: 0;
    bottom: 4px;
    height: 20px;
    line-height: 20px;
    padding: 0 10px;
    font-size: 16px;
    border-radius: 0 10px 10px 0;
    color: #fff;
    background: rgba($color: #000000, $alpha: 0.5);
  }
}
</style>