<template>
  <!-- 产品分类 产品组件 -->
  <div class="pro-item">
    <div class="pi-feature">
      <img
        :src="baseUrl + data.picture"
        alt
      />
    </div>
    <div class="pi-text">
      <p class="pt-tit">{{data.name}}</p>
      <div>
        <div class="tags">
          <span v-for="(item,i) in data.overview" :key="i">{{item}}</span>
        </div>
        <div class="price">
          <em>¥{{data.activity_price}}</em>
          <span class="rs">有{{data.purchased}}人买过</span>
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
export default {
  props: {
    data: Object
  }
};
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
  &:last-of-type {
    &::after {
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
    flex: 1;
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
      width: 100%;
      height: 16px;
      line-height: 16px;
      color: #f26161;
      em {
        float: left;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
      }
      .rs{
        float: left;
        margin-left: 10px;
        color: #999;
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