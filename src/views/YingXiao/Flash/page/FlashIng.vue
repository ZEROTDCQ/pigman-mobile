<template>
  <!-- 正在疯抢 -->
  <div class="flash-ing">
    <FlashingItem v-for="(item,index) in datar.son" :key="index" :data="item"/>
  </div>
</template>

<script>
//
import FlashingItem from "@/components/ProCard/Big/Flash/FlashingItem.vue";
export default {
  components: {
    FlashingItem
  },
  props: {
    datar: Object
  },
  mounted() {}
};
</script>

<style lang="scss">
.flash-ing {
  .pro-item {
    margin-top: 6px;
  }
}
</style>