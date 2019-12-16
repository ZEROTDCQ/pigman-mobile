<template>
  <!-- 会员专享商品 -->
  <transition appear appear-class="appear" appear-active-class="appear-active">
    <div class="pro-item card-score-row"  :style="{transitionDelay: index * 100 + 'ms'}">
      <div class="pro-feature">
        <a :href="'details?id='+data.id">
          <img :src="baseUrl + data.picture" alt />
        </a>
      </div>
      <div class="pro-info-wrap">
        <p class="pro-name">
          <a :href="'details?id='+data.id" title>{{data.cate_name}}</a>
        </p>
        <div>
          <p class="have-exchange">已兑{{data.purchased}}件</p>
          <div class="pro-price">
            <em>{{data.integral}}积分</em>
            <a :href="'details?id='+data.id" :class="['btn-buy',statusClass] ">{{btnName}}</a>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    index: {
      type: Number
    },
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
  },
  computed: {
    btnName() {
      switch (this.status) {
        case 0:
          return "已无商品";
        case 1:
          return "立即兑换";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.card-score-row {
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
    .have-exchange {
      margin-bottom: 10px;
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
        font-size: 16px;
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
    padding: 0 5px;
    border-radius: 11px;
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
  .sale-out {
    color: #666;

    &:hover {
      background: #666;
    }

    &::after {
      border-color: #666;
    }
  }
}
</style>