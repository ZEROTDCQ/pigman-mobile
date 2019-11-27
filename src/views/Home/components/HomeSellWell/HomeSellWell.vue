<template>
  <!-- 畅销商品 -->
  <div class="area-box">
    <div class="area-head clearfix">
      <h3 class="ah-title">畅销商品</h3>
      <div class="ah-sub-title">大家都在买什么</div>
      <p class="btn-enter-area">
        <a href="/sc/flash">
          进入专区
          <span>&gt;</span>
        </a>
      </p>
    </div>
    <div class="area-body pro-list">
      <SellWellItem v-for="i in 4" :key="i" />
    </div>
  </div>
</template>

<script>
import SellWellItem from "./HomeSellWellItem";
export default {
  components: {
    SellWellItem
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