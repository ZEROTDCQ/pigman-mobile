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
        <h5 class="vt-tit">{{data.title}}</h5>
        <p class="vt-shic">食材：{{data.use_name}}</p>
        <p class="vt-info">功效：{{data.sketch}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Object
  },
  data(){
    return {
      
    }
  },
  methods: {
    
  }
};
</script>

<style lang="scss" scoped>
.video-item {
  position: relative;
  padding: 7px 0;
  display: flex;
  height: 112px;
  box-sizing: border-box;
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
    width: 125px;
    height: 100%;
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
      font-weight: bold;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .vt-shic {
      font-size: 11px;
      margin-bottom: 2px;
      @include text_ellipsis(2);
      color: #666;
      overflow: hidden;
      display: flex;
      justify-content: space-between;
    }
    .vt-info {
      // margin-bottom: 5px;
      font-size: 11px;
      color: #808080;
      @include text_ellipsis(2);
    }
  }
}
</style>