<template>
  <!-- 为你推荐菜谱项组件 -->
  <div class="menu-item">
    <div class="mi-feature">
      <img
        :src="baseUrl + '/uploads/admin/images/20191129/0fed92b191015abcc40a1981657da4bd.jpg'"
        alt
      />
    </div>
    <div class="mi-txt">
      <h4 class="mt-tit">清蒸花蛤西葫芦</h4>
      <div>
        <p class="mt-desc">清蒸花蛤西葫芦是我最喜欢的一 道海鲜菜，其味道清蒸花蛤西葫芦是我最喜欢的一 道海鲜菜，其味道</p>
        <p class="mt-info">
          <span>猪先生美食</span>
          <span>2019-11-12</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.menu-item {
  display: flex;
  justify-content: space-between;
  background: #fff;
  .mi-feature {
    flex-shrink: 0;
    position: relative;
    width: 155px;
    height: 100px;
    overflow: hidden;
    img {
      position: absolute;
      width: 100%;
      min-height: 100%;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
    }
  }
  .mi-txt {
    padding: 6px 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .mt-tit {
      font-size: 16px;
      line-height: 20px;
      color: #333;
    }
    .mt-desc {
      margin-bottom: 10px;
      font-size: 12px;
      line-height: 18px;
      color: #666;
      @include text_ellipsis(2);
    }
    .mt-info {
      display: flex;
      justify-content: space-between;
      font-size: 12px;
      line-height: 15px;
      color: #999;
    }
  }
}
</style>