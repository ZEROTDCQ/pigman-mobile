<template>
  <!-- 菜谱项组件 -->
  <div class="menu-item">
    <div class="mi-feature">
      <a :href="'menu_detail.html?id='+data.id">
        <img :src="baseUrl + data.picture" alt />
      </a>
    </div>
    <div class="mi-text">
      <a :href="'menu_detail.html?id='+data.id">
        <p class="mt-tit">{{data.title}}</p>
      </a>
      <p class="mt-desc">{{data.describel}}</p>
      <p class="mt-info">
        <span>{{data.source}}</span>
        <span>{{timeCo(data.create_time)}}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Object
  },
  methods: {
    /**时间搓转时间格式 */
    timeCo(dater) {
      var date = new Date(dater * 1000); //如果date为13位不需要乘1000
      var Y = date.getFullYear() + "-";
      var M =
        (date.getMonth() + 1 < 10
          ? "0" + (date.getMonth() + 1)
          : date.getMonth() + 1) + "-";
      var D = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
      return Y + M + D;
    }
  }
};
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
    overflow: hidden;
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