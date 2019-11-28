<template>
  <div class="activity-recommend">
    <div class="ar-list activity-list">
      <ActivityItem v-for="i in 4" :key="i" />
    </div>
  </div>
</template>

<script>
import ActivityItem from "../components/ActivityItem";
export default {
  components: {
    ActivityItem
  }
};
</script>

<style lang="scss">
</style>