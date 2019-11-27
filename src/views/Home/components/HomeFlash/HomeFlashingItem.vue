<template>
  <!-- 限时秒杀-正在疯抢组件 -->
  <div class="pro-item on-sale">
    <div class="pro-img">
      <a href="javascript:;">
        <img
          :src="baseUrl + '/uploads/admin/images/20191107/6142f198ea658934e0b987b45a0dad72.jpg'"
          alt
        />
      </a>
    </div>
    <div class="pro-info">
      <p class="pro-name">
        <a href="javascript:;" title>【买5斤送5斤】攀枝花凯特新鲜大芒果</a>
      </p>
      <div class="pro-progress">
        <div class="precent-back">
          <div class="precent-front" :style="{width: 60 + '%'}"></div>
          <div class="precent-value">阿萨德</div>
        </div>
        <span class="had-saled">已抢{{126}}件</span>
      </div>
      <div class="pro-price">
        <em>¥{{35.5}}</em>
        <del>¥{{35.6}}</del>
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

<style lang="scss" scoped>
.pro-item {
  margin-top: 10px;
  width: 172px;
  border-radius: 5px;
  background: #fff;
  overflow: hidden;
  .pro-img {
    height: 120px;
    overflow: hidden;
    img {
      display: block;
      width: 100%;
      height: 100%;
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
  .pro-progress {
    margin-bottom: 10px;
    height: 10px;
    line-height: 10px;
    overflow: hidden;
    .precent-back {
      float: left;
      position: relative;
      width: 90px;
      height: 10px;
      text-align: center;
      border-radius: 8px;
      color: #fff;
      background: #aef3ab;
      overflow: hidden;
      .precent-front {
        position: absolute;
        height: 10px;
        border-radius: 8px;
        background: #54b64f;
      }
      .precent-value {
        position: absolute;
        z-index: 2;
        left: 50%;
        top: 0;
        height: 100%;
        font-size: 8px;
        transform: translateX(-50%);
        display: flex;
        align-items: flex-start;
      }
    }
    .had-saled {
      float: right;
      font-size: 9px;
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
      font-size: 8px;
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
      // border: 1px solid #999;
      background: #fff;
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
        border-radius: 12px;
        box-sizing: border-box;
      }
      span {
        font-family: serif;
        font-weight: bold;
      }
    }
  }
}
.pro-item.on-sale {
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