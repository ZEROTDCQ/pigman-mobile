<template>
  <!-- 畅销商品 -->
  <div class="area-box">
    <div class="area-head clearfix">
      <h3 class="ah-title">{{data.title}}</h3>
      <div class="ah-sub-title">{{data.sketch}}</div>
      <p class="btn-enter-area">
        <a href="/sc/flash">
          进入专区
          <span>&gt;</span>
        </a>
      </p>
    </div>
    <div class="area-body pro-list">
      <SellWellItem v-for="(item,index) in data.son" :key="index" :data="item" />
    </div>
  </div>
</template>

<script>
import SellWellItem from "@/components/ProCard/Small/SellWell/SellWellItem";
export default {
  components: {
    SellWellItem
  },
  props: {
    data: Object
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