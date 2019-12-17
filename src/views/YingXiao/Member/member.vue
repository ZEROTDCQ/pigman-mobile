<template>
  <div class="booking">
    <MemberBanner/>
    <!-- <div class="rules banner"></div> -->
    <div class="booking-info">
      <h3>专属商品</h3>
      <p>只有会员才能享受到的专属商品</p>
    </div>
    <CommodityFilter @sortFather="receive" data-id="56" />
    <div class="pro-list" v-if="goodsData">
      <MemberItem v-for="(item,index) in goodsData.son" :key="index" :data="item" />
    </div>
  </div>
</template>

<script>
import MemberBanner from "./components/MemberBanner.vue";
import MemberItem from "@/components/ProCard/Big/Member/MemberItem.vue";
import CommodityFilter from "@/components/ComPublic/YinXiao/CommodityFilter.vue";
export default {
  components: {
    MemberBanner,
    MemberItem,
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
          yd_id: 39, //活动id
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

.booking-info{
  height: 40px;
  width: 100%;
  background-color: #fff;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding: 0 10px;

  h3{
    color: #4d4d4d;
    font-size: 16px;
    font-weight: bold;
    position: relative;
    padding-left: 23px;
    &:after{
      content: '';
      display: block;
      width: 19px;
      height: 19px;
      background-image: url('~@/assets/img/page/member/icon_hy.png');
      background-size: 100%;
      background-repeat: no-repeat;
      border-radius: 50%;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  p{
    color: #999;
    font-size: 12px;
    margin-left: 9px;
    margin-top: 3px;
  }
}

.pro-list {
  .pro-item {
    margin-bottom: 6px;

    &:last-child{
      margin-bottom: 0;
    }
  }
}
</style>