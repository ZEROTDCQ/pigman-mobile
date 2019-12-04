<template>
  <!-- 明日预告 -->
  <div class="flash-nextday">
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
.flash-nextday {
  .pro-item {
    margin-top: 6px;
  }
}
</style>