<template>
  <div class="area-box">
    <div class="area-head clearfix">
      <h3 class="ah-title">{{data.title}}</h3>
      <div class="ah-sub-title">{{data.sketch}}</div>
      <p class="btn-enter-area">
        <a href="/flash.html">
          进入专区
          <span>&gt;</span>
        </a>
      </p>
    </div>
    <div class="area-body pro-list">
      <FlashIng v-for="(item,index) in data.son" :key="index" :data="item" />
    </div>
  </div>
</template>

<script>
import FlashIng from "@/components/ProCard/Small/Flash/FlashingItem";
export default {
  components: {
    FlashIng
  },
  props: {
    data: Object
  }
};
</script>

<style lang="scss" scoped>
/deep/.pro-list{
  margin-top: -10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .pro-item{
    margin-top: 10px;
  }
}
</style>