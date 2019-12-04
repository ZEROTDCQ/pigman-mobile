<template>
  <!-- 即将开抢 -->
  <div class="flash-soon">
    <FlashNextItem v-for="i in 4" :key="i" />
  </div>
</template>

<script>
import FlashNextItem from "@/components/ProCard/Big/Flash/FlashNextItem.vue";
export default {
  components: {
    FlashNextItem
  }
};
</script>

<style lang="scss">
.flash-soon {
  .pro-item {
    margin-top: 6px;
  }
}
</style>