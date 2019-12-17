<template>
  <div class="lively">
    <div class="rules banner"></div>
    <CommodityFilter @sortFather="receive" data-id="16" />
    <div class="pro-list" v-if="goodsData">
      <NewTasteItem v-for="(item,index) in goodsData.son" :key="index" :data="item" />
    </div>
  </div>
</template>

<script>
import NewTasteItem from "./components/NewTasteItem.vue";
import CommodityFilter from "@/components/ComPublic/YinXiao/CommodityFilter.vue";
export default {
  components: {
    NewTasteItem,
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
          yd_id: 16, //活动id
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