<template>
  <!-- 正在疯抢 -->
  <div class="flash-ing">
    <FlashingItem v-for="i in 4" :key="i" />
  </div>
</template>

<script>
//
import FlashingItem from "@/components/ProCard/Big/Flash/FlashingItem.vue";
export default {
  components: {
    FlashingItem
  }
};
</script>

<style lang="scss">
.flash-ing {
  .pro-item {
    margin-top: 6px;
  }
}
</style>