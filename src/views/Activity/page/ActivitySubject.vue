<template>
  <div class="activity-subject">
    <div class="as-list activity-list">
      <ActivityItemSubject v-for="i in 4" :key="i" />
    </div>
  </div>
</template>

<script>
import ActivityItemSubject from "../components/ActivityItemSubject";
export default {
  components: {
    ActivityItemSubject
  }
};
</script>

<style lang="scss">
.as-list{
  margin: 0 10px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>