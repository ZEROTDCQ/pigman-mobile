<template>
  <!-- 预定商品区域 -->
  <div class="area-box">
    <div class="area-head clearfix">
      <h3 class="ah-title">预定商品</h3>
      <div class="ah-sub-title">提前一天下单，商品价超低~</div>
      <p class="btn-enter-area">
        <a href="/sc/booking">
          进入专区
          <span>&gt;</span>
        </a>
      </p>
    </div>
    <div class="area-body pro-list">
      <BookingItem v-for="i in 4" :key="i" />
    </div>
  </div>
</template>

<script>
import BookingItem from "./HomeBookingItem";
export default {
  components: {
    BookingItem
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