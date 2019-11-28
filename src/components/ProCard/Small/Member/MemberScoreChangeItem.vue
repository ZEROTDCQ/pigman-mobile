<template>
  <!-- 会员专享商品 -->
  <div class="pro-item card-score">
    <div class="pro-img">
      <a href="javascript:;">
        <img
          :src="baseUrl + '/uploads/admin/images/20191031/82351f96a23b68aee0a223826bffd1fe.jpg'"
          alt
        />
      </a>
    </div>
    <div class="pro-info">
      <p class="pro-name">
        <a href="javascript:;" title>【买5斤送5斤】攀枝花凯特新鲜大芒果</a>
      </p>
      <div class="pro-price">
        <p class="have-exchange">已兑258件</p>
        <div class="score-price">
          <em>{{25.5}}积分</em>
          <a href="javascript:;" class="btn-buy">立即兑换</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // props: {
  //   data: {
  //     type: Object
  //   }
  // },
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
.card-score {
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
  .pro-price {
    margin-top: 5px;
    line-height: 24px;
    overflow: hidden;
    .have-exchange {
      height: 12px;
      line-height: 12px;
      font-size: 10px;
      color: #999;
    }
    .score-price {
      margin-top: 5px;
      height: 16px;
      line-height: 16px;
      overflow: hidden;
      em {
        float: left;
        margin-right: 4px;
        font-style: normal;
        font-size: 14px;
        font-weight: bold;
        color: #f26161;
      }
    }
    .btn-buy {
      position: relative;
      float: right;
      width: 50px;
      height: 16px;
      line-height: 16px;
      font-size: 10px;
      text-align: center;
      color: #f26161;
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
        border: 1px solid #f26161;
        border-radius: 8px;
        box-sizing: border-box;
      }
      span {
        font-family: serif;
        font-weight: bold;
      }
      &:hover {
        background: #f26161;
        color: #fff;
      }
    }
  }
}
</style>