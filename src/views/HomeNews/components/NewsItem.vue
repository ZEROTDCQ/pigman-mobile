<template>
  <div class="news-item">
    <div class="ni-feature"></div>
    <div class="ni-text">
      <h3 class="nt-title">
        <a href="javascript:;">电商卖房，全速竞逐“双十一”</a>
      </h3>
      <div class="nt-info">
        <span>猪先生</span>
        <span>2019-11-05</span>
      </div>
      <p class="nt-abstract">记者从兰州海关获悉，日前，900公斤秦安蜜桃经兰州海关“秒放行”空运出口新加口新加口新加口新加</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.news-item {
  padding: 10px;
  margin-top: 6px;
  background: #fff;
  overflow: hidden;
  .ni-feature {
    float: left;
    width: 110px;
    height: 100px;
    background: #ccc;
    margin-right: 10px;
  }
  .ni-text {
    overflow: hidden;
    color: #4d4d4d;
    .nt-title {
      font-size: 14px;
      line-height: 20px;
      margin-bottom: 10px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .nt-info {
      font-size: 10px;
      line-height: 13px;
      margin-bottom: 10px;
      span {
        margin-left: 25px;
        &:first-child {
          margin-left: 0;
        }
      }
    }
    .nt-abstract {
      font-size: 12px;
      line-height: 1.5;
      @include text_ellipsis(2);
    }
  }
}
</style>