<template>
  <div class="activity-recommend">
    <div class="ar-list activity-list">
      <MemberScoreChangeItem v-for="i in 4" :key="i" />
    </div>
  </div>
</template>

<script>
import MemberScoreChangeItem from "@/components/ProCard/Big/Member/MemberScoreChangeItem";
export default {
  components: {
    MemberScoreChangeItem
  }
};
</script>

<style lang="scss" scoped>
/deep/.ar-list {
  .pro-item {
    margin-top: 6px;
  }
}
</style>