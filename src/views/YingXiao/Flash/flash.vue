<template>
  <div id="app">
    <FlashBanner />
    <div class="sec-kill-status">
      <h1>限时抢购</h1>
      <div class="countdown">
        <span class="status">{{title}}</span>
        <span class="countdown-item">{{hours}}</span>
        <span class="sep">:</span>
        <span class="countdown-item">{{minutes}}</span>
        <span class="sep">:</span>
        <span class="countdown-item">{{seconds}}</span>
      </div>
      <p class="txt">全场超低价，过时不候~</p>
    </div>
    <FlashTabs @stater="staterFn" />
    <keep-alive>
      <router-view v-if="limiData" :datar="limiData" />
    </keep-alive>
  </div>
</template>

<script>
import FlashBanner from "./components/FlashBanner";
import FlashTabs from "./components/FlashTabs";
export default {
  components: {
    FlashBanner,
    FlashTabs
  },
  data() {
    return {
      msg: null,
      //-----子页面数据
      limiData: null,
      diffTime: null,
      timer: null,

      //-----路由状态
      rouState: null
    };
  },
  beforeCreate() {
    this.$instance.post("/api/api/LimitedTime").then(res => {
      let data = res.data.data;
      this.msg = data;
      this.mtchState();
    });
  },
  mounted() {},
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
    },
    title() {
      let title = "";
      switch (this.rouState) {
        case 0:
          title = "距结束";
          break;
        case -1:
          title = "已结束";
          break;
        case -2:
          title = "已开始";
          break;
        default:
          title = "距开始";
          break;
      }
      return title;
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
      this.diffTime = date * 1000 - current * 1000;
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
    // 通过状态管理数据
    stateTime(res) {
      switch (res) {
        case 0: {
          if (this.msg.now) {
            this.limiData = this.msg.now;
            let current = this.limiData.time;
            let date = this.limiData.end_time;
            this.getTime(current, date);
            break;
          } else {
            this.limiData = null;
            this.getTime(0, 0);
            this.rouState = -1;
            break;
          }
        }
        case 1: {
          if (this.msg.soon) {
            this.limiData = this.msg.soon;
            let current = this.limiData.time;
            let date = this.limiData.start_time;
            this.getTime(current, date);
            break;
          } else {
            this.limiData = null;
            this.getTime(0, 0);
            this.rouState = -2;
            break;
          }
        }
        case 2: {
          if (this.msg.tomorrow) {
            this.limiData = this.msg.tomorrow;
            let current = this.limiData.time;
            let date = this.limiData.start_time;
            this.getTime(current, date);
            break;
          } else {
            this.limiData = null;
            this.getTime(0, 0);
            this.rouState = -2;
            break;
          }
        }
      }
      console.log(this.limiData);
    },
    // 获取地址信息改变数据
    mtchState() {
      let histry = window.location.href;
      histry = histry.split("/")[4];
      switch (histry) {
        case "ing":
          this.rouState = 0;
          break;
        case "soon":
          this.rouState = 1;
          break;
        case "nextday":
          this.rouState = 2;
          break;
      }
    },
    // 接收子菜单组件的传参
    staterFn(even) {
      this.rouState = even;
    }
  },
  watch: {
    rouState(res) {
      this.stateTime(res);
    }
  }
};
</script>

<style lang="scss">
body {
  background: #f5f5f5;
}
.sec-kill-status {
  position: relative;
  padding: 0 10px;
  height: 40px;
  line-height: 40px;
  background: #fff;
  overflow: hidden;
  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 0;
    border-top: 1px solid #ccc;
    transform: scaleY(0.5);
  }
  h1 {
    float: left;
    font-size: 18px;
    color: #333;
  }
  .countdown {
    margin-left: 10px;
    float: left;
    font-size: 12px;
    color: #4d4d4d;
    display: flex;
    align-items: center;
    .status {
      margin-right: 2px;
    }
    .countdown-item {
      width: 16px;
      height: 16px;
      font-size: 12px;
      text-align: center;
      line-height: 16px;
      background: #f2544d;
      color: #fff;
    }
    .sep {
      margin: 0 2px;
    }
  }
  .txt {
    float: right;
    font-size: 12px;
    color: #4d4d4d;
  }
}
</style>