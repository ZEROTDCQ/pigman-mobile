<template>
  <div id="app">
    <FlashBanner />
    <div class="sec-kill-status">
      <h1>限时抢购</h1>
      <div class="countdown">
        <span class="status">距结束</span>
        <span class="countdown-item">10</span>
        <span class="sep">:</span>
        <span class="countdown-item">20</span>
        <span class="sep">:</span>
        <span class="countdown-item">33</span>
      </div>
      <p class="txt">全场超低价，过时不候~</p>
    </div>
    <FlashTabs />
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
import FlashBanner from "./components/FlashBanner";
import FlashTabs from "./components/FlashTabs";
export default {
  components: {
    FlashBanner,
    FlashTabs
  }
};
</script>

<style lang="scss">
body {
  background: #f5f5f5;
}
.sec-kill-status {
  position: relative;
  padding: 0 10px;
  height: 40px;
  line-height: 40px;
  background: #fff;
  overflow: hidden;
  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 0;
    border-top: 1px solid #ccc;
    transform: scaleY(0.5);
  }
  h1 {
    float: left;
    font-size: 18px;
    color: #333;
  }
  .countdown {
    margin-left: 10px;
    float: left;
    font-size: 12px;
    color: #4d4d4d;
    display: flex;
    align-items: center;
    .status {
      margin-right: 2px;
    }
    .countdown-item {
      width: 16px;
      height: 16px;
      font-size: 12px;
      text-align: center;
      line-height: 16px;
      background: #f2544d;
      color: #fff;
    }
    .sep {
      margin: 0 2px;
    }
  }
  .txt {
    float: right;
    font-size: 12px;
    color: #4d4d4d;
  }
}
</style>