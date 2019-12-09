<template>
  <div class="oneyuan">
    <div class="banner_wrap_r">
      <img width="100%" height="100%" :src="baseUrl+'/uploads/admin/images/20191112/2992b6c4604cfbc277dd8cd9cebb6fd1.jpg'" alt />
    </div>
    <div class="notice">
      <i class="icon"></i>
      <div class="scroll_info">
        <ul ref="scrollUl">
          <li v-for="i in msg" :key="i">{{i}}</li>
        </ul>
      </div>
    </div>
    <CommodityFilter @sortFather="receive" data-id="4" />
    <div class="pro-list" v-if="goodsData">
      <OneYuanItem v-for="(item,index) in goodsData.son" :key="index" :data="item" />
    </div>
  </div>
</template>

<script>
import OneYuanItem from "@/components/ProCard/Big/Oneyuan/OneyuanItem.vue";
import CommodityFilter from "@/components/ComPublic/YinXiao/CommodityFilter.vue";
export default {
  components: {
    OneYuanItem,
    CommodityFilter
  },
  data() {
    return {
      page: 1,
      limit: 8,
      //---商品数据
      goodsData: null,
      msg: [
        "每天晚20:00，商品1元清仓~每天晚20:00，商品1元清仓~每天晚20:00，商品1元清仓~每天晚20:00，商品1元清仓~",
        "抢完即止，时不我待！"
      ],
      timer: null
    };
  },
  methods: {
    msgScroll() {
      clearInterval(this.timer);
      this.timer = null;

      let scrollUl = this.$refs.scrollUl;
      let lis = scrollUl.querySelectorAll("li");
      console.log(lis);
      let liH = lis[0].offsetHeight;
      let firstLi = lis[0].cloneNode(true);
      scrollUl.appendChild(firstLi);
      let activeIndex = 0;
      let _this = this;
      this.timer = setInterval(() => {
        activeIndex++;
        $(scrollUl).animate(
          {
            top: -activeIndex * liH
          },
          500,
          function() {
            if (activeIndex == 0) {
              $(scrollUl).css("top", 0);
            }
          }
        );
        if (activeIndex == this.msg.length) {
          activeIndex = 0;
        }
      }, 2000);
    },
    receive(son) {
      this.getData(son);
    },
    getData(cateId) {
      this.$instance
        .post("api/api/YdScreen", {
          page: this.page,
          limit: this.limit,
          yd_id: 4, //活动id
          cate_id: cateId //分类id
        })
        .then(res => {
          let data = res.data.data;
          this.goodsData = data;
          console.log(this.goodsData);
        });
    }
  },
  mounted() {
    this.msgScroll();
    this.getData(0);
  }
};
</script>

<style lang="scss">
body {
  background: #f5f5f5;
}
.banner_wrap_r {
  height: 160px;
  background: #ccc;
}
.notice {
  padding: 0 10px;
  display: flex;
  background-color: #fff;
  .icon {
    flex-shrink: 0;
    align-self: center;
    width: 10px;
    height: 10px;
    margin-right: 5px;
    background: url("~@/assets/img/page/oneyuan/notice.png") no-repeat;
    background-size: cover;
  }
  .scroll_info {
    position: relative;
    flex: 1;
    height: 20px;
    line-height: 20px;
    font-size: 10px;
    color: #666;
    overflow: hidden;
    ul {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      li {
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
}
.pro-list {
  .pro-item {
    margin-top: 6px;
    &:first-child {
      margin-top: 0;
    }
  }
}
</style>