<template>
  <!-- 为你推荐菜谱项组件 -->
  <div class="menu-item">
    <div class="mi-feature">
      <a :href="'menu_detail.html?id='+data.id">
        <img :src="baseUrl + data.picture" alt />
      </a>
    </div>
    <div class="mi-txt">
      <a :href="'menu_detail.html?id='+data.id">
        <h4 class="mt-tit">{{data.title}}</h4>
      </a>
      <div>
        <p class="mt-desc">{{data.describel}}</p>
        <p class="mt-info">
          <span>猪先生美食</span>
          <span>{{timeCo(data.create_time)}}</span>
        </p>
      </div>
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