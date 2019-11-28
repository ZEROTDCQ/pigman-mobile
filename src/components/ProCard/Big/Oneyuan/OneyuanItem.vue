<template>
  <!-- 一元购大卡片 -->
  <div class="pro-item card-oneyuan-row on-sale">
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
        <a href="javascript:;" title>【买5斤送5斤】攀枝花凯特新鲜大芒果</a>
      </p>
      <div>
        <div class="pro-progress">
          <div class="precent-back">
            <div class="precent-front" :style="{width: 60 + '%'}"></div>
            <div class="precent-value">{{60}}%</div>
          </div>
        </div>
        <p class="price-count">
          <del>原价：¥{{35.6}}</del>
          <span>可抢{{126}}件</span>
        </p>
        <div class="pro-price">
          <em>¥{{1.00}}</em>
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
.card-oneyuan-row {
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
  }
  .pro-progress {
    margin-bottom: 10px;
    height: 16px;
    line-height: 16px;
    overflow: hidden;
    .precent-back {
      float: left;
      position: relative;
      width: 100%;
      height: 16px;
      text-align: center;
      border-radius: 8px;
      color: #fff;
      background: #aef3ab;
      overflow: hidden;
      .precent-front {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        border-radius: 8px;
        background: #54b64f;
      }
      .precent-value {
        position: absolute;
        z-index: 2;
        left: 50%;
        top: 0;
        height: 100%;
        font-size: 11px;
        transform: translateX(-50%);
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
  .pro-price {
    height: 20px;
    line-height: 20px;
    overflow: hidden;
    color: #f26161;
    em {
      font-size: 16px;
      font-style: normal;
      font-weight: bold;
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
.card-oneyuan-row.on-sale {
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