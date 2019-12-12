<template>
  <!-- 视频分类 视频组件 -->
  <div class="video-item">
    <div class="vi-feature">
      <a :href="'menu_detail.html?id='+data.id">
        <img :src="baseUrl + data.picture" alt />
      </a>
    </div>
    <div class="vi-text">
      <div>
        <a :href="'menu_detail.html?id='+data.id">
          <p class="vt-tit">{{data.title}}</p>
        </a>
        <div class="vt-info">
          <span>{{data.source}}</span>
          <span>{{timeCo(data.create_time)}}</span>
        </div>
      </div>
      <div class="vt-desc">{{data.describel}}</div>
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

<style lang="scss" scoped>
.video-item {
  position: relative;
  padding: 10px 0;
  display: flex;
  background: #fff;
  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 0px;
    border-bottom: 1px solid #ccc;
    transform: scaleY(0.5);
  }
  &:last-of-type {
    &::after {
      content: none;
    }
  }
  .vi-feature {
    position: relative;
    margin-right: 10px;
    flex-shrink: 0;
    width: 115px;
    height: 85px;
    border-radius: 3px;
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
  .vi-text {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    line-height: 1.5;
    overflow: hidden;
    .vt-tit {
      margin-bottom: 5px;
      font-size: 14px;
      color: #333;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .vt-info {
      font-size: 10px;
      height: 14px;
      color: #666;
      overflow: hidden;
      display: flex;
      justify-content: space-between;
    }
    .vt-desc {
      font-size: 12px;
      color: #808080;
      @include text_ellipsis(2);
    }
  }

  .btn-buy {
    position: relative;
    float: right;
    width: 50px;
    height: 100%;
    text-align: center;
    font-size: 10px;
    border-radius: 8px;
    transition: all 0.2s ease-in-out;
    span {
      font-family: serif;
    }
    &:hover {
      color: #fff;
      background: #f26161;
    }
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 1px solid #f26161;
      border-radius: 8px;
      box-sizing: border-box;
    }
  }
}
</style>