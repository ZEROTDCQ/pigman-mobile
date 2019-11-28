<template>
  <!-- 专题活动组件 -->
  <div class="subject-item">
    <img class="si-img" src alt />
    <div class="si-cover">
      <h6 class="si-title">交友</h6>
      <p class="si-sub-tit">派对 旅行</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.subject-item {
  position: relative;
  margin-top: 6px;
  width: 174px;
  height: 126px;
  border-radius: 5px;
  background: #ccc;
  overflow: hidden;
  .si-cover {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 36px;
    text-align: center;
    color: #fff;
    background: rgba($color: #000000, $alpha: 0.5);
    .si-title {
      font-size: 14px;
    }
    .si-sub-tit {
      font-size: 12px;
    }
  }
}
</style>