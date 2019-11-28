<template>
  <div class="pro-item card-booking-row on-sale">
    <div class="pro-feature">
      <a href="javascript:;">
        <img
          :src="baseUrl + '/uploads/admin/images/20191030/9e439d9d2cec951ecbd156e354e2616b.jpg'"
          alt
        />
      </a>
    </div>
    <div class="pro-info-wrap">
      <p class="pro-name">
        <a href="javascript:;" title>【买5斤送5斤】攀枝花凯特新鲜大芒果</a>
      </p>
      <div>
        <div class="pro-countdown">
          <div class="countdown">
            <span style="color: #666;margin-right: 5px;">剩余</span>
            <span class="countdown-item hours">{{22}}</span>
            <span class="sep">:</span>
            <span class="countdown-item minutes">{{20}}</span>
            <span class="sep">:</span>
            <span class="countdown-item seconds">{{44}}</span>
          </div>
          <span class="had-booked">已有{{38}}人预定</span>
        </div>
        <p class="today-price">
          <del>今日价：¥{{38.5}}</del>
        </p>
        <div class="pro-price">
          <em>¥{{33.5}}</em>
          <a href="javascript:;" class="btn-buy">
            马上定
            <span>&gt;</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.card-booking-row {
  padding: 10px;
  display: flex;
  background: #fff;
  overflow: hidden;
  .pro-feature {
    flex-shrink: 0;
    position: relative;
    float: left;
    margin-right: 10px;
    width: 140px;
    height: 140px;
    background: #ccc;
    img {
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      width: 100%;
      min-height: 100%;
    }
  }
  .pro-info-wrap {
    flex: 1;
    padding: 10px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
    .pro-name {
      font-size: 14px;
      word-break: break-all;
      text-align: justify;
      color: #000;
      @include text_ellipsis(2);
      a:hover {
        color: $primarycolor;
      }
    }
  }
  .pro-countdown {
    margin-bottom: 10px;
    height: 16px;
    line-height: 16px;
    font-size: 11px;
    overflow: hidden;
    .had-booked {
      float: right;
      color: #999;
    }
    .countdown {
      float: left;
      span {
        float: left;
      }
      .sep {
        margin: 0 2px;
      }
      .countdown-item {
        width: 16px;
        height: 16px;
        font-size: 11px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        background: #999;
      }
    }
  }
  .today-price {
    margin-bottom: 10px;
    height: 16px;
    line-height: 16px;
    font-size: 11px;
    color: #999;
    overflow: hidden;
  }
  .pro-price {
    height: 20px;
    line-height: 20px;
    overflow: hidden;
    em {
      float: left;
      font-style: normal;
      font-size: 16px;
      font-weight: bold;
      color: #f26161;
    }
  }
  .btn-buy {
    position: relative;
    float: right;
    width: 65px;
    height: 20px;
    line-height: 20px;
    font-size: 14px;
    text-align: center;
    border-radius: 11px;
    color: #999;
    span {
      font-family: serif;
    }
    &::after {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      border: 1px solid #999;
      box-sizing: border-box;
      border-radius: 11px;
    }
  }
}
.card-booking-row.on-sale {
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
      &::after {
        border-color: #f26161;
      }
    }
  }
}
</style>