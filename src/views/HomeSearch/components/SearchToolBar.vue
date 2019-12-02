<template>
  <div class="filter-wrap">
    <div class="filter-items">
      <a href="javascript:;">综合</a>
      <a href="javascript:;">销量</a>
      <a href="javascript:;">新品</a>
      <a href="javascript:;" class="btn-price curr">
        价格
        <em class="fs-down">
          <i class="iconfont arrow-top">&#xe60f;</i>
          <i class="iconfont arrow-bottom">&#xe6f5;</i>
        </em>
      </a>
      <a href="javascript:;" class="btn-filter" @click="showSide">
        筛选
        <i class="iconfont">&#xe69b;</i>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    showFilter: {
      type: Boolean
    }
  },
  methods: {
    showSide() {
      this.$emit("update:showFilter", true);
    }
  }
};
</script>

<style lang="scss">
.filter-wrap {
  position: relative;
  height: 40px;
  background: #fff;
  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background: #e5e5e5;
    transform: scaleY(0.5);
  }
  .filter-items {
    padding: 8px 0;
    height: 24px;
    line-height: 24px;
    font-size: 14px;
    display: flex;
    a {
      flex: 1;
      color: #333;
      text-align: center;
    }
    .curr {
      color: $primarycolor;
    }
    .btn-filter {
      .iconfont {
        font-size: 12px;
      }
    }
    .btn-price {
      .fs-down,
      .fs-up {
        display: inline-block;
        width: 7px;
        margin-left: 5px;
        vertical-align: top;
      }
      .iconfont {
        float: left;
        width: 7px;
        font-size: 7px;
        line-height: 4px;
        color: #999;
      }

      // .arrow-top,
      // .arrow-bottom {
      //   float: left;
      //   width: 7px;
      //   overflow: hidden;
      // }
      .arrow-top {
        height: 4px;
        margin-top: 7px;
      }
      .arrow-bottom {
        height: 4px;
        margin-top: 3px;
      }
    }
    .btn-price.curr {
      .fs-up .arrow-top,
      .fs-down .arrow-bottom {
        color: $primarycolor;
      }
    }
  }
}
</style>