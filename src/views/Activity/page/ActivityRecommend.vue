<template>
  <div class="activity-recommend">
    <div class="ar-list activity-list">
      <ActivityItem v-for="(item, index) in activityData" :key="index" :data="item" :index="index" />
    </div>
  </div>
</template>

<script>
import ActivityItem from "../components/ActivityItem";
export default {
  components: {
    ActivityItem
  },
  computed: {
    activityData() {
      return this.$store.state.tuijian;
    }
  }
};
</script>

<style lang="scss">
</style>