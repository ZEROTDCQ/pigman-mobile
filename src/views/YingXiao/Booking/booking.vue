<template>
  <div class="booking">
    <BookingBanner />
    <div class="head">
      <h1>提前预定</h1>
      <div class="countdown">
        <span class="txt">今日截单倒计时</span>
        <span class="countdown-item">08</span>
        <span class="sep">:</span>
        <span class="countdown-item">08</span>
        <span class="sep">:</span>
        <span class="countdown-item">08</span>
      </div>
    </div>
    <BookingFilter />
    <div class="pro-list">
      <BookingItem v-for="i in 4" :key="i" />
    </div>
  </div>
</template>

<script>
import BookingBanner from "./components/BookingBanner";
import BookingFilter from "./components/BookingFilter";
import BookingItem from "@/components/ProCard/Big/Booking/BookingItem.vue";
export default {
  components: {
    BookingBanner,
    BookingFilter,
    BookingItem
  }
};
</script>

<style lang="scss">
body {
  background: #f5f5f5;
}
.booking {
  .head {
    height: 40px;
    line-height: 40px;
    background: #fff;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1 {
      font-size: 16px;
      color: #333;
    }
    .countdown {
      font-size: 12px;
      color: #999;
      display: flex;
      align-items: center;
      .txt {
        margin-right: 2px;
      }
      .sep {
        margin: 0 2px;
      }
      .countdown-item {
        width: 18px;
        height: 18px;
        text-align: center;
        line-height: 18px;
        color: #fff;
        background: $primarycolor;
      }
    }
  }
  .pro-list {
    .pro-item {
      margin-bottom: 6px;
    }
  }
}
</style>