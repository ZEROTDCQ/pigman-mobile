<template>
  <!-- 会员专享 -->
  <div class="area-box">
    <div class="area-head clearfix">
      <h3 class="ah-title">会员专享</h3>
      <div class="ah-sub-title">只有会员才能享受到的特价商品~</div>
      <p class="btn-enter-area">
        <a href="/sc/flash">
          进入专区
          <span>&gt;</span>
        </a>
      </p>
    </div>
    <div class="area-body pro-list">
      <MemberExclusiveItem v-for="i in 4" :key="i" />
    </div>
  </div>
</template>

<script>
import MemberExclusiveItem from "@/components/ProCard/Small/Member/MemberExclusiveItem";
export default {
  components: {
    MemberExclusiveItem
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