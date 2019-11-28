<template>
  <!-- 会员专属商品 -->
  <div class="pro-item card-exclusive-row">
    <div class="pro-feature">
      <a href="javascript:;">
        <img
          :src="baseUrl + '/uploads/admin/images/20191107/6142f198ea658934e0b987b45a0dad72.jpg'"
          alt
        />
      </a>
    </div>
    <div class="pro-info-wrap">
      <p class="pro-name">
        <a href="javascript:;">【买5斤送5斤】攀枝花凯特新 鲜大芒果新 鲜大芒果新 鲜大芒果新 鲜大芒果新 鲜大芒果</a>
      </p>
      <div>
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
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.card-exclusive-row {
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
    .price-count {
      margin-bottom: 10px;
      display: flex;
      justify-content: space-between;
      font-size: 11px;
      height: 16px;
      line-height: 16px;
      color: #999;
    }
    .vip-price {
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