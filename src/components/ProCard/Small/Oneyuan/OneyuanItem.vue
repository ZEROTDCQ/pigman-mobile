<template>
  <!-- 元购小卡片 -->
  <div class="pro-item card-flashing">
    <div class="pro-img">
      <a href="javascript:;">
        <img :src="baseUrl +data.picture" :alt="data.name" />
      </a>
    </div>
    <div class="pro-info">
      <p class="pro-name">
        <a :href="'details?id='+data.id" title>{{data.name}}</a>
      </p>
      <div class="pro-progress">
        <div class="precent-back">
          <div class="precent-front" :style="{width: ratio + '%'}"></div>
          <div class="precent-value">{{ratio}}%</div>
        </div>
        <span class="had-saled">已抢{{keqian}}件</span>
      </div>
      <div class="pro-price">
        <em>¥{{data.activity_price}}</em>
        <del>¥{{data.original_price}}</del>
        <a :href="'details?id='+data.id" :class="{'btn-buy':true,[statusClass]:true} ">
          {{statusTile}}
          <span>&gt;</span>
        </a>
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
      status: 1, // 商品状态：0，已售罄，1：正在销售，2：未开始
      statusClass: "on-sale"
    };
  },
  created() {
    // 判断当前商品状态
    if (this.data.purchased < this.data.limited) {
      this.status = 1;
      this.statusClass = "on-sale";
    }
    else {
      this.status = 0;
      this.statusClass = "sale-out";
    }
  },
  computed: {
    ratio() {
      return Math.floor((this.data.purchased / this.data.limited) * 100);
    },
    keqian() {
      if (this.data.purchased <= 10000) {
        return this.data.purchased;
      } else {
        return Math.floor(this.data.purchased / 10000) + "万+";
      }
    },
    statusTile(){
      switch(this.status){
        case 0: return "已售完";
        case 1: return "马上抢";
        case 2: return "未开始";
      }
    }
  }
};
</script>

<style lang="scss">
.card-oneyuan {
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
    color: #333;
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
    height: 12px;
    line-height: 12px;
    overflow: hidden;
    .precent-back {
      float: left;
      position: relative;
      width: 100px;
      height: 12px;
      text-align: center;
      border-radius: 6px;
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
        font-size: 8px;
        transform: translateX(-50%);
      }
    }
    .had-saled {
      float: right;
      height: 100%;
      font-size: 10px;
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
      font-size: 10px;
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
        border: 1px solid #999;
        border-radius: 8px;
        box-sizing: border-box;
      }
      span {
        font-family: serif;
        font-weight: bold;
      }
    }
  }
}
.pro-item {
  .pro-price {
    .on-sale {
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