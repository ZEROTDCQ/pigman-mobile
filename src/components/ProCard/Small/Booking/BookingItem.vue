<template>
  <div class="pro-item card-booking on-sale">
    <div class="pro-img">
      <a href="javascript:;">
        <img :src="baseUrl +data.picture" :alt="data.name" />
      </a>
    </div>
    <div class="pro-info">
      <p class="pro-name">
        <a :href="'details?id='+data.id" title>{{data.name}}</a>
      </p>
      <div class="pro-countdown">
        <div class="countdown">
          <span style="color: #666;margin-right: 5px;">剩余</span>
          <span class="countdown-item hours">{{hours}}</span>
          <span class="sep">:</span>
          <span class="countdown-item minutes">{{minutes}}</span>
          <span class="sep">:</span>
          <span class="countdown-item seconds">{{seconds}}</span>
        </div>
        <span class="had-booked">已有{{data.purchased}}人预定</span>
      </div>
      <div class="pro-price">
        <em>¥{{data.activity_price}}</em>
        <del class="today-price">今日价{{data.original_price}}</del>
        <a :href="'details?id='+data.id" class="btn-buy">
          马上定
          <span>&gt;</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Object
  },
  data() {
    return {
      //---今日截单倒计时时间戳
      diffTime: null,
      timer: null
    };
  },
  computed: {
    ratio() {
      return Math.floor((this.data.purchased / this.data.limited) * 100);
    },
    keqian() {
      return this.data.purchased;
    }
  },
  mounted() {
    this.getTime(this.data.time, this.data.end_time);
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
    }
  }
};
</script>

<style lang="scss" scoped>
.card-booking {
  width: 172px;
  border-radius: 5px;
  background: #fff;
  overflow: hidden;
  .pro-img {
    position: relative;
    height: 120px;
    overflow: hidden;
    img {
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      width: 100%;
      min-height: 100%;
    }
  }
  .pro-info {
    padding: 10px 5px;
  }
  .pro-name {
    margin-bottom: 10px;
    line-height: 14px;
    height: 28px;
    max-height: 28px;
    font-size: 12px;
    text-align: justify;
    color: #000;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    word-break: break-all;
    overflow: hidden;
    text-overflow: ellipsis;
    a:hover {
      color: $primarycolor;
    }
  }
  .pro-countdown {
    height: 16px;
    line-height: 16px;
    overflow: hidden;
    .had-booked {
      float: right;
      font-size: 10px;
      color: #999;
    }
    .countdown {
      float: left;
      font-size: 12px;
      span {
        float: left;
      }
      .sep {
        margin: 0 2px;
      }
      .countdown-item {
        width: 16px;
        height: 16px;
        font-size: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        background: #999;
      }
    }
  }
  .pro-price {
    margin-top: 10px;
    height: 16px;
    line-height: 16px;
    overflow: hidden;
    em {
      float: left;
      margin-right: 4px;
      font-style: normal;
      font-size: 16px;
      font-weight: bold;
      color: #f26161;
    }
    del {
      float: left;
      font-size: 10px;
      color: #999;
    }
    .btn-buy {
      position: relative;
      float: right;
      width: 50px;
      height: 16px;
      line-height: 16px;
      font-size: 10px;
      text-align: center;
      color: #999;
      background: #fff;
      border-radius: 8px;
      box-sizing: border-box;
      transition: all 0.2s ease;
      outline: none;
      &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        border: 1px solid #999;
        border-radius: 8px;
        box-sizing: border-box;
      }
      span {
        font-family: serif;
        font-weight: bold;
      }
    }
  }
}
.card-booking.on-sale {
  .pro-countdown {
    .countdown {
      .countdown-item {
        background: $primarycolor;
      }
    }
  }
  .pro-price {
    .btn-buy {
      color: #f26161;
      &:hover {
        background: #f26161;
        color: #fff;
      }
      &::before {
        border-color: #f26161;
      }
    }
  }
}
</style>