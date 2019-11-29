<template>
  <!-- 一元购 -->
  <div class="area-box">
    <div class="area-head clearfix">
      <h3 class="ah-title">一元购</h3>
      <div class="ah-sub-title">每天晚20:00，商品1元清仓~</div>
      <p class="btn-enter-area">
        <a href="/sc/flash">
          进入专区
          <span>&gt;</span>
        </a>
      </p>
    </div>
    <div class="area-body pro-list">
      <OneYuanItem v-for="i in 4" :key="i" />
    </div>
  </div>
</template>

<script>
import OneYuanItem from "@/components/ProCard/Small/Oneyuan/OneyuanItem";
export default {
  components: {
    OneYuanItem
  }
};
</script>

<style lang="scss" scoped>
/deep/.pro-list {
  margin-top: -10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .pro-item {
    margin-top: 10px;
  }
}
</style>