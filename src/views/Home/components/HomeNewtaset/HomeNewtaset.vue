<template>
  <!-- 新品尝鲜 -->
  <div class="area-box">
    <div class="area-head clearfix">
      <h3 class="ah-title">新品尝鲜</h3>
      <div class="ah-sub-title">新品上市，限时低价抢~</div>
      <p class="btn-enter-area">
        <a href="/sc/flash">
          进入专区
          <span>&gt;</span>
        </a>
      </p>
    </div>
    <div class="area-body pro-list">
      <NewtasetItem v-for="i in 4" :key="i" />
    </div>
  </div>
</template>

<script>
import NewtasetItem from "./HomeNewtasetItem";
export default {
  components: {
    NewtasetItem
  }
};
</script>

<style lang="scss" scoped>
.pro-list {
  margin-top: -10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>