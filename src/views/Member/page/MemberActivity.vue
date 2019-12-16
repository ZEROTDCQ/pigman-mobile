<template>
  <!-- 会员活动 -->
  <div class="activity-recommend">
    <div class="ar-list activity-list" v-if="memData">
      <ActivityItem v-for="(item,index) in memData" :key="index" :data="item" :index="index"/>
    </div>
  </div>
</template>

<script>
import ActivityItem from "../components/ActivityItem";
export default {
  components: {
    ActivityItem
  },
  data() {
    return {
      memData: null
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      this.$instance.post("api/api/activityArea").then(res => {
        let data = res.data.data;
        this.memData = data.bottom.son;
        console.log(this.memData);
      });
    }
  }
};
</script>

<style lang="scss">
</style>