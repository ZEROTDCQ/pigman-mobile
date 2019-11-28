<template>
  <!-- 会员专享 -->
  <div class="member-exclusive">
    <div class="me-list activity-list">
      <MemberExclusiveItem v-for="i in 4" :key="i" />
    </div>
  </div>
</template>

<script>
import MemberExclusiveItem from "@/components/ProCard/Big/Member/MemberExclusiveItem";
export default {
  components: {
    MemberExclusiveItem
  }
};
</script>

<style lang="scss" scoped>
/deep/.me-list {
  .pro-item {
    margin-top: 6px;
  }
}
</style>