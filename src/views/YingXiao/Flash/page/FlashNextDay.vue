<template>
  <!-- 明日预告 -->
  <div class="flash-nextday">
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
  },
  mounted() {},
  computed: {}
};
</script>

<style lang="scss">
.flash-nextday {
  .pro-item {
    margin-top: 6px;
  }
}
</style>