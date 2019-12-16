<template>
  <!-- 积分换购 -->
  <div class="activity-recommend">
    <div class="ar-list activity-list" v-if="memData">
      <MemberScoreChangeItem v-for="(item,index) in memData.son" :key="index" :data="item" :index="index"/>
    </div>
  </div>
</template>

<script>
import MemberScoreChangeItem from "@/components/ProCard/Big/Member/MemberScoreChangeItem";
export default {
  components: {
    MemberScoreChangeItem
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
        this.memData = data.top[0];
        console.log(this.memData);
      });
    }
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