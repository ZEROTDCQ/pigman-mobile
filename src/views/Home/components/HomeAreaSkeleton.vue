<template>
  <!-- 首页各营销专区骨架屏 -->
  <div class="skeleton skeleton-animate">
    <div class="skeleton-item" v-for="i in col * row" :key="i">
      <div class="skeleton_img"></div>
      <div class="skeleton_info">
        <div class="skeleton_name" :style="{width: Math.floor(Math.random() * 50) + 50 + '%'}"></div>
        <div class="skeleton_name" :style="{width: Math.floor(Math.random() * 50) + 50 + '%'}"></div>
        <div class="skeleton_tag">
          <span
            class="tag-item"
            :style="{width: Math.floor(Math.random() * 20) + 10 + '%'}"
            v-for="i in 3"
            :key="i"
          ></span>
        </div>
        <div class="skeleton_price">
          <div class="skeleton_activity_price"></div>
          <span class="skeleton_num"></span>
          <div class="skeleton_btn"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    },
    col: {
      type: Number,
      default: 2
    },
    row: {
      type: Number,
      default: 2
    }
  }
};
</script>

<style lang="scss" scoped>
.skeleton-animate {
  animation: skeleton-blink 1.2s ease-in-out infinite;
}
@keyframes skeleton-blink {
  50% {
    opacity: 0.5;
  }
}
@keyframes skeleton-name {
  50% {
    width: 100%;
  }
}
.skeleton {
  margin-top: -10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  overflow: hidden;
}
.skeleton-item {
  position: relative;
  width: 172px;
  margin-top: 10px;
  background: #fff;
  .skeleton_img {
    height: 120px;
    background-color: #ddd;
  }
  .skeleton_info {
    padding: 10px 5px;
    .skeleton_name {
      width: 50%;
      height: 14px;
      margin-bottom: 10px;
      background-color: #f2f3f5;
      animation: skeleton-name 1.2s ease-in-out infinite;
      &:first-child {
        margin-bottom: 3px;
      }
    }
  }
  .skeleton_tag {
    height: 12px;
    overflow: hidden;
    .tag-item {
      float: left;
      width: 30%;
      height: 12px;
      margin-right: 5px;
      background: #ccc;
    }
  }
  .skeleton_price {
    margin-top: 10px;
    height: 16px;
    overflow: hidden;
    .skeleton_activity_price {
      float: left;
      height: 16px;
      width: 30px;
      background: #fbf2e7;
    }
  }
  .skeleton_btn {
    float: right;
    border-radius: 8px;
    width: 50px;
    height: 16px;
    background: #999;
  }
}
</style>