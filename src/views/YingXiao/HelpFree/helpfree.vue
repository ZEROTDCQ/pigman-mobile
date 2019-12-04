<template>
  <div class="booking">
    <div class="rules banner"></div>
    <div class="pro-list">
      <HelpFreeItem v-for="i in 4" :key="i" />
    </div>
  </div>
</template>

<script>
import HelpFreeItem from "@/components/ProCard/Big/HelpFree/HelpFreeItem.vue";
export default {
  components: {
    HelpFreeItem
  }
};
</script>

<style lang="scss">
body {
  background: #f5f5f5;
}
.banner {
  height: 168px;
  background: url("~@/assets/img/page/helpfree/rules_banner.png") no-repeat;
  background-size: cover;
}
.pro-list {
  .pro-item {
    margin-bottom: 6px;
  }
}
</style>