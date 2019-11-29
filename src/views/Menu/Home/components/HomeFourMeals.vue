<template>
  <!-- 首页一日四餐 -->
  <div class="area-box four-meals">
    <div class="area-head clearfix">
      <h3 class="ah-title">一日三餐</h3>
      <p class="btn-enter-area">
        <a href="javascript:;">精选</a>
        <a href="javascript:;">早餐</a>
        <a href="javascript:;">午餐</a>
        <a href="javascript:;">晚餐</a>
        <a href="javascript:;">夜宵</a>
      </p>
    </div>
    <div class="area-body meals-list">
      <MenuItem v-for="i in 4" :key="i" />
    </div>
  </div>
</template>

<script>
import MenuItem from "./MenuItem";
export default {
  components: {
    MenuItem
  }
};
</script>

<style lang="scss" scoped>
/deep/.meals-list {
  margin-top: -10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .menu-item {
    margin-top: 10px;
    box-shadow: 0 0 10px #ccc;
  }
}
.four-meals {
  .btn-enter-area {
    a {
      float: left;
      margin-left: 5px;
    }
  }
}
</style>