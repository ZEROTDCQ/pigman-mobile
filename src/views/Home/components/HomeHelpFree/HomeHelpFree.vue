<template>
  <!-- 助力免费拿 -->
  <div class="area-box">
    <div class="area-head clearfix">
      <h3 class="ah-title">助力免费拿</h3>
      <div class="ah-sub-title">邀好友助力，拿免费商品~</div>
      <p class="btn-enter-area">
        <a href="/sc/flash">
          进入专区
          <span>&gt;</span>
        </a>
      </p>
    </div>
    <div class="area-body pro-list">
      <HelpFreeItem v-for="i in 4" :key="i" />
    </div>
  </div>
</template>

<script>
import HelpFreeItem from "@/components/ProCard/Small/HelpFree/HelpFreeItem";
export default {
  components: {
    HelpFreeItem
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