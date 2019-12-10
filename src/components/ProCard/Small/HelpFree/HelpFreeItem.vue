<template>
  <!-- 会员专享商品 -->
  <div class="pro-item card-helpfree">
    <div class="pro-img">
      <a href="javascript:;">
        <img :src="baseUrl +data.picture" :alt="data.name" />
      </a>
    </div>
    <div class="pro-info">
      <p class="pro-name">
        <a :href="'details?id='+data.id" title>{{data.name}}</a>
      </p>
      <div class="pro-tag">
        <span class="tag-item" v-for="(item,index) in data.overview" :key="index">{{item}}</span>
      </div>
      <div class="pro-price">
        <p class="normal-price">
          原价：¥{{data.original_price}}
          <span class="had-buy">已领{{keqian}}件</span>
        </p>
        <p class="activity-price">
          <em>¥{{data.activity_price}}</em>
          <a :href="'details?id='+data.id" :class="{'btn-buy':true,[statusClass]:true} ">
            {{status ? "免费领" : "已领完"}}
            <span>&gt;</span>
          </a>
        </p>
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
    keqian() {
      if (this.data.purchased <= 10000) {
        return this.data.purchased;
      } else {
        return Math.floor(this.data.purchased / 10000) + "万+";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.card-helpfree {
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
  .pro-tag {
    height: 12px;
    overflow: hidden;
    .tag-item {
      float: left;
      margin-right: 5px;
      padding: 0 2px;
      height: 12px;
      line-height: 12px;
      font-size: 8px;
      color: #fff;
      background: $primarycolor;
      border: 1px solid $primarycolor;
      box-sizing: border-box;
      vertical-align: middle;
    }
  }
  .pro-price {
    margin-top: 5px;
    line-height: 24px;
    overflow: hidden;
    .normal-price {
      line-height: 12px;
      font-size: 10px;
      color: #999;
      .had-buy {
        float: right;
      }
    }
    .activity-price {
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