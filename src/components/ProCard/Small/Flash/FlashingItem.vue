<template>
  <!-- 限时秒杀 - 正在疯抢小卡片 -->
  <div class="pro-item card-flashing on-sale">
    <div class="pro-img">
      <a href="javascript:;">
        <img :src="baseUrl +data.picture" :alt="data.name" />
      </a>
    </div>
    <div class="pro-info">
      <p class="pro-name">
        <a :href="'details?id='+data.id" title>{{data.name}}</a>
      </p>
      <div class="pro-progress">
        <div class="precent-back">
          <div class="precent-front" :style="{width: ratio + '%'}"></div>
          <div class="precent-value">{{ratio}}%</div>
        </div>
        <span class="had-saled">已抢{{keqian}}件</span>
      </div>
      <div class="pro-price">
        <em>¥{{data.activity_price}}</em>
        <del>¥{{data.original_price}}</del>
        <a :href="'details?id='+data.id" class="btn-buy">
          马上抢
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
  computed: {
    ratio() {
      return Math.floor((this.data.purchased / this.data.limited) * 100);
    },
    keqian() {
      return this.data.purchased;
    }
  }
};
</script>

<style lang="scss">
.card-flashing {
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
    color: #333;
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
    margin-bottom: 10px;
    height: 14px;
    line-height: 14px;
    overflow: hidden;
    .precent-back {
      float: left;
      position: relative;
      width: 100px;
      height: 14px;
      text-align: center;
      border-radius: 7px;
      color: #fff;
      background: #aef3ab;
      overflow: hidden;
      .precent-front {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        border-radius: 7px;
        background: #54b64f;
      }
      .precent-value {
        position: absolute;
        z-index: 2;
        left: 50%;
        top: 0;
        height: 100%;
        font-size: 12px;
        transform: translateX(-50%);
      }
    }
    .had-saled {
      float: right;
      height: 100%;
      font-size: 10px;
      color: #999;
    }
  }
  .pro-price {
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
.card-flashing.on-sale {
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