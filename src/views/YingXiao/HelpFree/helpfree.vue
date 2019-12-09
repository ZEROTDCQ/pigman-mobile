<template>
  <div class="booking">
    <div class="rules banner"></div>
    <CommodityFilter @sortFather="receive" data-id="37" />
    <div class="pro-list" v-if="goodsData">
      <HelpFreeItem v-for="(item,index) in goodsData.son" :key="index" :data="item" />
    </div>
  </div>
</template>

<script>
import HelpFreeItem from "@/components/ProCard/Big/HelpFree/HelpFreeItem.vue";
import CommodityFilter from "@/components/ComPublic/YinXiao/CommodityFilter.vue";
export default {
  components: {
    HelpFreeItem,
    CommodityFilter
  },
  data() {
    return {
      page: 1,
      limit: 8,
      //---商品数据
      goodsData: null
    };
  },
  mounted() {
    this.getData(0);
  },
  methods: {
    receive(son) {
      this.getData(son);
    },
    getData(cateId) {
      this.$instance
        .post("api/api/YdScreen", {
          page: this.page,
          limit: this.limit,
          yd_id: 37, //活动id
          cate_id: cateId //分类id
        })
        .then(res => {
          let data = res.data.data;
          this.goodsData = data;
          console.log(this.goodsData);
        });
    }
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