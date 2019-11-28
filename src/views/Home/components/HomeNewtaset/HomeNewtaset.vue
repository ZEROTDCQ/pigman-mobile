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
      <NewtasteItem v-for="i in 4" :key="i" />
    </div>
  </div>
</template>

<script>
import NewtasteItem from "@/components/ProCard/Small/Newtaste/NewtasteItem";
export default {
  components: {
    NewtasteItem
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