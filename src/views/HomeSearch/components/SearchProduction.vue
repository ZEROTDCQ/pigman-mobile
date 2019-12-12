<template>
  <!-- 新品尝鲜产品组件 -->
  <div class="pro-item">
    <div class="pro-feature">
      <a href="javascript:;">
        <img
          :src="baseUrl + data.picture"
          alt
        />
      </a>
    </div>
    <div class="pro-info-wrap">
      <p class="pro-name">
        <a href="javascript:;" title>{{data.name}}</a>
      </p>
      <div>
        <div class="tags">
          <span class="tag-item" v-for="(item, index) in data.overview" :key="item + index">{{item}}</span>
        </div>
        <p class="have-groups">已拼10万+件</p>
        <div class="pro-price">
          <em>¥{{data.activity_price}}</em>
          <!-- <a href="javascript:;" class="btn-buy">
            马上抢
            <span>&gt;</span>
          </a>-->
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
  // data() {
  //   return {
  //     status: 1, // 商品状态：0，已售罄，1：正在销售
  //     statusClass: "on-sale"
  //   };
  // },
  // created() {
  //   // 判断当前商品状态
  //   if (this.data.purchased < this.data.limited) {
  //     this.status = 1;
  //     this.statusClass = "on-sale";
  //   } else {
  //     this.status = 0;
  //     this.statusClass = "sale-out";
  //   }
  // }
};
</script>

<style lang="scss">
.pro-item {
  position: relative;
  padding: 10px;
  display: flex;
  background: #fff;
  overflow: hidden;
  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 0;
    border-top: 1px solid #eee;
    transform-origin: center bottom;
    transform: scaleY(0.5);
  }
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
    .tags {
      margin-bottom: 10px;
      height: 16px;
      line-height: 16px;
      overflow: hidden;
      span {
        float: left;
        margin-left: 7px;
        padding: 0 5px;
        font-size: 11px;
        color: #fff;
        background: $primarycolor;
        &:first-child {
          margin-left: 0;
        }
      }
    }
    .have-groups {
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
        margin-right: 4px;
        font-style: normal;
        font-size: 16px;
        font-weight: bold;
        color: #f26161;
      }
      .num {
        float: left;
        font-size: 10px;
        color: #999;
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
.card-sellwell-row.on-sale {
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