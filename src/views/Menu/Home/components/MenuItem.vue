<template>
  <!-- 菜谱项组件 -->
  <div class="menu-item">
    <div class="mi-feature">
      <img
        :src="baseUrl + '/uploads/admin/images/20191029/3a5c1eae192ccf1fee29c97e98218c0f.jpg'"
        alt
      />
    </div>
    <div class="mi-text">
      <p class="mt-tit">清蒸花蛤西葫芦</p>
      <p class="mt-desc">清蒸花蛤西葫芦是我最喜欢我最喜我最喜</p>
      <p class="mt-info">
        <span>猪先生美食</span>
        <span>2019-11-12</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.menu-item {
  width: 172px;
  border-radius: 5px;
  background: #fff;
  overflow: hidden;
  .mi-feature {
    position: relative;
    height: 150px;
    img {
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 100%;
      min-height: 100%;
    }
  }
  .mi-text {
    padding: 5px;
    .mt-tit {
      margin-bottom: 5px;
      font-size: 14px;
      color: #333;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .mt-desc {
      margin-bottom: 5px;
      font-size: 12px;
      color: #666;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .mt-info {
      font-size: 10px;
      color: #999;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>