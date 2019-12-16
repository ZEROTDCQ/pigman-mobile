<template>
  <!-- 专属商品 -->
  <div class="member-exclusive">
    <div class="me-list activity-list" v-if="memData">
      <MemberExclusiveItem v-for="(item,index) in memData.son" :key="index" :data="item" :index="index"/>
    </div>
  </div>
</template>

<script>
import MemberExclusiveItem from "@/components/ProCard/Big/Member/MemberExclusiveItem";
export default {
  components: {
    MemberExclusiveItem
  },
  data(){
    return {
      memData: null,
    }
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      this.$instance.post("api/api/activityArea").then(res => {
        let data = res.data.data;
        this.memData = data.top[1];
        console.log(this.memData);
      });
    }
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