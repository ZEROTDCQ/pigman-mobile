<template>
  <!-- 即将开抢 -->
  <div class="flash-soon">
    <FlashNextItem
      v-for="(item,index) in datar.son"
      :key="index"
      :data="item"
      :time="datar.time"
      :start_time="datar.start_time"
    />
  </div>
</template>

<script>
import FlashNextItem from "@/components/ProCard/Big/Flash/FlashNextItem.vue";
export default {
  components: {
    FlashNextItem
  },
  props: {
    datar: Object
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