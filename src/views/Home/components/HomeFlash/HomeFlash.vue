<template>
  <div class="area-box">
    <div class="area-head clearfix">
      <h3 class="ah-title">限时抢购</h3>
      <div class="ah-sub-title">全场超低价，过时不候~</div>
      <p class="btn-enter-area">
        <a href="/sc/flash">
          进入专区
          <span>&gt;</span>
        </a>
      </p>
    </div>
    <div class="area-body pro-list">
      <FlashIng v-for="i in 4" :key="i" />
    </div>
  </div>
</template>

<script>
import FlashIng from "./HomeFlashingItem";
export default {
  components: {
    FlashIng
  }
};
</script>

<style lang="scss" scoped>
.pro-list{
  margin-top: -10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>