<template>
  <div class="activity-subject">
    <div class="as-list activity-list">
      <ActivityItemSubject v-for="(item, index) in activityData" :key="index" :data="item" :index="index" />
    </div>
  </div>
</template>

<script>
import ActivityItemSubject from "../components/ActivityItemSubject";
export default {
  components: {
    ActivityItemSubject
  },
  computed: {
    activityData() {
      return this.$store.state.activities;
    }
  }
};
</script>

<style lang="scss">
.as-list {
  margin: 0 10px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>