<template>
  <!-- 会员积分兑换商品 -->
  <div class="score-item">
    <div class="ei-feature"></div>
    <div class="ei-info-wrap">
      <h3 class="pro-name">
        <a href="javascript:;">【买5斤送5斤】攀枝花凯特新 鲜大芒果</a>
      </h3>
      <div class="tags">
        <span>第二件五折</span>
        <span>满30返2</span>
      </div>
      <p class="price-count">
        <span>非会员价：¥40.5</span>
        <span>已有9人购买</span>
      </p>
      <div class="vip-price">
        <em>¥35.5</em>
        <a href="javascript:;" class="btn-buy">
          马上抢
          <span>&gt;</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.score-item {
  margin-top: 6px;
  width: 100%;
  border-radius: 10px;
  background: #fff;
  overflow: hidden;
  .ei-feature {
    float: left;
    width: 140px;
    height: 140px;
    background: #ccc;
  }
  .ei-info-wrap {
    padding: 10px;
    overflow: hidden;
    .pro-name {
      margin-bottom: 10px;
      font-size: 14px;
      color: #000;
    }
    .tags {
      margin-bottom: 10px;
      overflow: hidden;
      span {
        float: left;
        margin-left: 7px;
        padding: 0 5px;
        height: 16px;
        line-height: 16px;
        font-size: 11px;
        color: #fff;
        background: $primarycolor;
        &:first-child {
          margin-left: 0;
        }
      }
    }
    .price-count {
      margin-bottom: 10px;
      display: flex;
      justify-content: space-between;
      font-size: 9px;
      color: #999;
    }
    .vip-price {
      height: 22px;
      line-height: 22px;
      color: #f26161;
      em {
        font-style: normal;
        font-weight: bold;
      }
    }
  }
  .btn-buy {
    position: relative;
    float: right;
    width: 66px;
    height: 100%;
    font-size: 14px;
    text-align: center;
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
}
</style>