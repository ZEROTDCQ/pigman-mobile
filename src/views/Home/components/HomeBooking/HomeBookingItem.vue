<template>
  <div class="pro-item on-sale">
    <div class="pro-img">
      <a href="javascript:;">
        <img
          :src="baseUrl + '/uploads/admin/images/20191030/9e439d9d2cec951ecbd156e354e2616b.jpg'"
          alt
        />
      </a>
    </div>
    <div class="pro-info">
      <p class="pro-name">
        <a href="javascript:;" title>【买5斤送5斤】攀枝花凯特新鲜大芒果</a>
      </p>
      <div class="pro-progress">
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
      <div class="pro-price">
        <em>¥{{33.5}}</em>
        <del class="today-price">今日价{{38.5}}</del>
        <a href="javascript:;" class="btn-buy">
          马上定
          <span>&gt;</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.pro-item {
  width: 172px;
  margin-top: 10px;
  background: #fff;
  overflow: hidden;
  .pro-img {
    height: 120px;
    overflow: hidden;
    img {
      display: block;
      width: 100%;
      height: 100%;
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
  .pro-progress {
    height: 12px;
    line-height: 12px;
    overflow: hidden;
    .had-booked {
      float: right;
      font-size: 9px;
      color: #999;
    }
    .countdown {
      float: left;
      line-height: 12px;
      font-size: 8px;
      span {
        float: left;
      }
      .sep{
        margin: 0 2px;
      }
      .countdown-item {
        width: 12px;
        height: 12px;
        text-align: center;
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
      font-size: 8px;
      color: #999;
    }
    .btn-buy {
      float: right;
      width: 50px;
      height: 16px;
      font-size: 10px;
      line-height: 16px;
      text-align: center;
      color: #999;
      border: 1px solid #999;
      background: #fff;
      border-radius: 12px;
      box-sizing: border-box;
      transition: all 0.2s ease;
      span {
        font-family: serif;
        font-weight: bold;
      }
    }
  }
}
.pro-item.on-sale {
  .pro-progress {
    .countdown {
      .countdown-item {
        background: $primarycolor;
      }
    }
  }
  .pro-price {
    .btn-buy {
      color: #f26161;
      border-color: #f26161;
      &:hover {
        background: #f26161;
        color: #fff;
      }
    }
  }
}
</style>