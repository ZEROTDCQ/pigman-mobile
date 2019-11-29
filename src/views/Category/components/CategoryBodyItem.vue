<template>
  <!-- 产品分类 产品组件 -->
  <div class="pro-item">
    <div class="pi-feature">
      <img
        :src="baseUrl + '/uploads/admin/images/20191129/a6bde821c173e197ee5a52c993ffbd7b.jpg'"
        alt
      />
    </div>
    <div class="pi-text">
      <p class="pt-tit">【买5斤送5斤】攀枝花凯特 新鲜大芒果新鲜大芒果新鲜大芒果新鲜大芒果</p>
      <div>
        <div class="tags">
          <span>满30返2</span>
        </div>
        <div class="price">
          <em>¥35.5</em>
          <a href="javascript:;" class="btn-buy">
            马上抢
            <span>></span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.pro-item {
  position: relative;
  padding: 15px 0;
  display: flex;
  background: #fff;
  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 0px;
    border-bottom: 1px solid #ccc;
    transform: scaleY(0.5);
  }
  &:last-of-type{
    &::after{
      content: none;
    }
  }
  .pi-feature {
    position: relative;
    margin-right: 10px;
    flex-shrink: 0;
    width: 84px;
    height: 84px;
    border-radius: 5px;
    overflow: hidden;
    img {
      position: absolute;
      width: 100%;
      min-height: 100%;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
    }
  }
  .pi-text {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .pt-tit {
      font-size: 14px;
      color: #000;
      @include text_ellipsis(2);
    }
    .tags {
      margin-bottom: 5px;
      height: 14px;
      overflow: hidden;
      span {
        float: left;
        margin-right: 5px;
        padding: 0 2px;
        height: 14px;
        line-height: 14px;
        font-size: 8px;
        color: #fff;
        background: $primarycolor;
      }
    }
    .price {
      height: 16px;
      line-height: 16px;
      color: #f26161;
      em {
        float: left;
        font-style: normal;
        font-weight: bold;
        font-size: 12px;
      }
    }
  }

  .btn-buy {
    position: relative;
    float: right;
    width: 50px;
    height: 100%;
    text-align: center;
    font-size: 10px;
    border-radius: 8px;
    transition: all 0.2s ease-in-out;
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
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 1px solid #f26161;
      border-radius: 8px;
      box-sizing: border-box;
    }
  }
}
</style>