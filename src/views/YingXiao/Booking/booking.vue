<template>
  <div class="booking">
    <BookingBanner />
    <div class="head">
      <h1>提前预定</h1>
      <div class="countdown">
        <span class="txt">今日截单倒计时</span>
      <span class="countdown-item">{{hours}}</span>
        <span class="sep">:</span>
        <span class="countdown-item">{{minutes}}</span>
        <span class="sep">:</span>
        <span class="countdown-item">{{seconds}}</span>
      </div>
    </div>
    <CommodityFilter @sortFather="receive" dataId="38"/>
    <div class="pro-list" v-if="goodsData">
      <BookingItem v-for="(item,index) in goodsData.son" :key="index" :data="item"/>
    </div>
  </div>
</template>

<script>
import BookingBanner from "./components/BookingBanner";
import CommodityFilter from "@/components/ComPublic/YinXiao/CommodityFilter.vue";
import BookingItem from "@/components/ProCard/Big/Booking/BookingItem.vue";
export default {
  components: {
    BookingBanner,
    CommodityFilter,
    BookingItem
  },
  data() {
    return {
      page: 1,
      limit: 8,
      //---商品数据
      goodsData: null,
      //---今日截单倒计时时间搓
      diffTime: 15556877,
      timer: null
    };
  },
  created() {},
  mounted() {
    this.getData(0);
    this.getTime();
  },
  computed: {
    hours() {
      // 小时倒计时
      return Math.floor(this.diffTime / 1000 / 60 / 60) < 0
        ? "00"
        : this.zeroPatch(Math.floor(this.diffTime / 1000 / 60 / 60));
    },
    minutes() {
      // 分钟倒计时
      return Math.floor((this.diffTime / 1000 / 60) % 60) < 0
        ? "00"
        : this.zeroPatch(Math.floor((this.diffTime / 1000 / 60) % 60));
    },
    seconds() {
      // 秒倒计时
      return Math.floor((this.diffTime / 1000) % 60) < 0
        ? "00"
        : this.zeroPatch(Math.floor((this.diffTime / 1000) % 60));
    }
  },
  methods: {
    zeroPatch(value) {
      if (Number(value) < 10) {
        return "0" + value;
      }
      return value;
    },
    getTime(current, date) {
      clearInterval(this.timer);
      // this.diffTime = date * 1000 - current * 1000;
      // 倒计时
      if (this.diffTime) {
        this.timer = setInterval(() => {
          this.diffTime -= 1000;
          if (this.diffTime <= 0) {
            this.diffTime = 0;
            clearInterval(this.timer);
            this.timer = null;
          }
        }, 1000);
      }
    },
    receive(son) {
      this.getData(son);
    },
    getData(cateId) {
      this.$instance
        .post("api/api/YdScreen", {
          page: this.page,
          limit: this.limit,
          yd_id: 38, //活动id
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
.booking {
  .head {
    height: 40px;
    line-height: 40px;
    background: #fff;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1 {
      font-size: 16px;
      color: #333;
    }
    .countdown {
      font-size: 12px;
      color: #999;
      display: flex;
      align-items: center;
      .txt {
        margin-right: 2px;
      }
      .sep {
        margin: 0 2px;
      }
      .countdown-item {
        width: 18px;
        height: 18px;
        text-align: center;
        line-height: 18px;
        color: #fff;
        background: $primarycolor;
      }
    }
  }
  .pro-list {
    .pro-item {
      margin-bottom: 6px;
    }
  }
}
</style>