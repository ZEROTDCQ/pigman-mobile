<template>
  <!-- 会员专享商品 -->
  <div class="pro-item card-helpfree-row on-sale">
    <div class="pro-feature">
      <a href="javascript:;">
        <img :src="baseUrl + data.picture"  :alt="data.name"  />
      </a>
    </div>
    <div class="pro-info-wrap">
      <p class="pro-name">
        <a :href="'details?id='+data.id" title>{{data.name}}</a>
      </p>
      <div>
        <div class="tags">
          <span class="tag-item" v-for="(item,i) in data.overview" :key="i">{{item}}</span>
        </div>
        <p class="price-count">
          <span>非会员价：¥{{data.original_price}}</span>
          <span>已有{{data.purchased}}人购买</span>
        </p>
        <div class="pro-price">
          <em>¥{{data.activity_price}}</em>
          <a href="javascript:;" class="btn-buy">
            马上抢
            <span>&gt;</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object
    }
  },
  data() {
    return {
      status: 1, // 商品状态：0，已售罄，1：正在销售
      statusClass: "on-sale"
    };
  },
  created() {
    // 判断当前商品状态
    if (this.data.purchased < this.data.limited) {
      this.status = 1;
      this.statusClass = "on-sale";
    } else {
      this.status = 0;
      this.statusClass = "sale-out";
    }
  }
};
</script>

<style lang="scss" scoped>
.card-helpfree-row {
  padding: 7px 10px;
  display: flex;
  background: #fff;
  overflow: hidden;
  .pro-feature {
    flex-shrink: 0;
    position: relative;
    float: left;
    margin-right: 10px;
    width: 140px;
    height: 123px;
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
    padding: 6px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
    .pro-name {
      font-size: 15px;
      font-weight: bold;
      word-break: break-all;
      text-align: justify;
      color: #000;
      @include text_ellipsis(2);
      a:hover {
        color: $primarycolor;
      }
    }
    .tags {
      margin-bottom: 10px;
      // height: 16px;
      line-height: 16px;
      overflow: hidden;
      span {
        float: left;
        margin-left: 7px;
        padding: 2px 5px;
        font-size: 11px;
        color: #fff;
        background: $primarycolor;
        &:first-child {
          margin-left: 0;
        }
      }
    }
    .price-count {
      margin-bottom: 6px;
      display: flex;
      justify-content: space-between;
      font-size: 11px;
      height: 16px;
      line-height: 16px;
      color: #999;
    }
    .pro-price {
      height: 20px;
      line-height: 20px;
      color: #f26161;
      em {
        font-size: 18px;
        font-style: normal;
        font-weight: bold;
      }
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
    padding: 0 3px;
    span {
      font-family: serif;
    }
    &:hover {
      color: #fff;
      background: #f26161;
    }
    &::after {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      border: 1px solid #f26161;
      box-sizing: border-box;
      border-radius: 11px;
    }
  }
}
.card-helpfree.on-sale {
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