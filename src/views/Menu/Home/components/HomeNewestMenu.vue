<template>
  <!-- 首页最新菜谱 -->
  <div class="area-box area-newest-menu">
    <div class="area-head clearfix">
      <h3 class="ah-title">最新菜谱</h3>
      <p class="btn-enter-area">
        <a href="javascript:;">精选</a>
        <a href="javascript:;">菜系</a>
        <a href="javascript:;">家常</a>
        <a href="javascript:;">肉菜</a>
      </p>
    </div>
    <div class="area-body menu-list">
      <MenuItem v-for="i in 4" :key="i" />
    </div>
  </div>
</template>

<script>
import MenuItem from './MenuItem'
export default {
  components: {
    MenuItem
  }
};
</script>

<style lang="scss" scoped>
/deep/.menu-list {
  margin-top: -10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .menu-item {
    margin-top: 10px;
    box-shadow: 0 0 10px #ccc;
  }
}
.area-newest-menu {
  .btn-enter-area {
    a {
      float: left;
      margin-left: 5px;
    }
  }
}
</style>