<template>
  <!-- 搜索页筛选组件 -->
  <div class="search-filter-wrap">
    <div class="layer-sub-title hide" id="filterSelBlock" v-show="withSubTit">
      <strong>已选材质：</strong>
      <span id="filterSelTips" class="words_10">304不锈钢、316不锈钢、400系列不锈钢</span>
      <span>等3个</span>
    </div>
    <div class="layer-con" v-if="!withSubTit">
      <ul class="mod_list">
        <li>
          <div class="list_inner li_line">
            <div class="big">原产地</div>
            <div class="right">
              <span class="words_10" style="max-width: 203px;"></span>
            </div>
          </div>
        </li>
        <div class="tags_selection">
          <div class="J_ping option">
            <a href="javascript:void 0;">云南</a>
          </div>
          <div class="J_ping option">
            <a href="javascript:void 0;">湖南</a>
          </div>
          <div class="J_ping option arrow">
            <a href="javascript:void 0;" @click="allOptions">查看全部</a>
            <div class="big" style="display: none;">原产地</div>
          </div>
        </div>
      </ul>
      <ul class="mod_list">
        <li>
          <div class="list_inner li_line">
            <div class="big">国家进口</div>
            <div class="right">
              <span class="words_10" style="max-width: 203px;"></span>
            </div>
          </div>
        </li>
        <div class="tags_selection">
          <div class="J_ping option">
            <a href="javascript:void 0;">国产</a>
          </div>
          <div class="J_ping option">
            <a href="javascript:void 0;">进口</a>
          </div>
        </div>
      </ul>
      <ul class="mod_list">
        <li>
          <div class="list_inner li_line">
            <div class="big">价格</div>
            <div class="right">
              <span class="words_10" style="max-width: 203px;"></span>
            </div>
          </div>
        </li>
        <li class="filterlayer_price">
          <div class="filterlayer_price_area">
            <input
              type="tel"
              class="filterlayer_price_area_input J_ping"
              id="filterPriceMin"
              placeholder="最低价"
            />
            <div class="filterlayer_price_area_hyphen"></div>
            <input
              type="tel"
              class="filterlayer_price_area_input J_ping"
              id="filterPriceMax"
              placeholder="最高价"
            />
          </div>
        </li>
      </ul>
    </div>
    <div class="layer-con with_sub_title" v-else>
      <ul class="mod_list padding_left">
        <li class="J_ping check_li" v-for="i in arr" :key="i">
          <div class="list_inner li_line">
            <div class="big">{{i}}</div>
          </div>
        </li>
      </ul>
    </div>
    <div class="layer-buttons">
      <span class="bottom-button cancel" @click="cancelHandler">取消</span>
      <span class="bottom-button confirm">确定</span>
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
  data() {
    return {
      originHtml: "",
      withSubTit: false,
      arr: ["广东", "广西", "湖南", "湖北", "江苏", "江西"]
    };
  },
  methods: {
    allOptions() {
      this.withSubTit = true;
    },
    cancelHandler() {
      // 判断是否子标题模式
      if (this.withSubTit) {
        this.withSubTit = false;
        this.$refs.layerCon.innerHTML = this.originHtml;
      } else {
        this.$emit("update:showFilter", false);
      }
    }
  },
};
</script>

<style lang="scss">
.words_10 {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: inline-block;
  vertical-align: middle;
  text-align: right;
}
.search-filter-wrap {
  position: fixed;
  width: 85%;
  top: 0;
  bottom: 0;
  left: 100%;
  color: #333;
  background-color: #f5f5f5;
  transition: transform 0.25s ease;
  &.show {
    z-index: 301;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
  .layer-sub-title {
    z-index: 10;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    padding: 0 10px;
    height: 46px;
    line-height: 46px;
    font-size: 14px;
    color: #333;
    background-color: #fff;
    display: flex;
    & > strong {
      display: block;
      font-weight: 400;
      white-space: nowrap;
    }
    & > span {
      display: block;
      font-weight: 400;
      white-space: nowrap;
    }
    &::after {
      content: "";
      position: absolute;
      z-index: 1;
      pointer-events: none;
      background-color: #e5e5e5;
      height: 1px;
      left: 0;
      right: 0;
      bottom: 0;
    }
  }
  .layer-con {
    -webkit-overflow-scrolling: touch;
    overflow: hidden;
    overflow-y: auto;
    box-sizing: border-box;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    padding-bottom: 50px;
    &.with_sub_title {
      top: 46px;
    }
  }
  .layer-buttons {
    display: flex;
    z-index: 10;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    box-shadow: 0 -1px 2px 0 rgba(0, 0, 0, 0.07);
    .bottom-button {
      flex: 1;
      font-size: 16px;
      height: 49px;
      line-height: 49px;
      text-align: center;
      background: #fff;
    }
    .confirm {
      color: #fff;
      background: $primarycolor;
    }
  }
}
.mod_list {
  margin-bottom: 15px;
  background-color: #fff;
  &.padding_left {
    padding-left: 10px;
  }
  li {
    position: relative;
    line-height: 25px;
    padding: 10px;
    &:not(:first-child)::before {
      content: "";
      position: absolute;
      z-index: 1;
      pointer-events: none;
      background-color: #e5e5e5;
      height: 1px;
      left: 0;
      right: 0;
      top: 0;
    }
    &.check_li {
      padding: 10px 10px 10px 30px;
      &::after {
        position: absolute;
        top: 50%;
        left: 0;
        transform: translate(0, -50%);
        content: "";
        width: 20px;
        height: 20px;
        background: url(~@/assets/img/page/search/li-check.png) no-repeat;
        background-size: 100%;
      }
    }
    &.checked {
      &::after {
        background: url(~@/assets/img/page/search/li-checked.png) no-repeat;
      }
    }
  }
  .li_line {
    display: flex;
    .big {
      height: 25px;
      max-width: 250px;
      overflow: hidden;
      font-size: 16px;
      color: #333;
      text-overflow: ellipsis;
    }
    .right {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      flex: 1;
      margin-left: 5px;
      text-align: right;
      font-size: 12px;
      color: #999;
    }
  }
  .tags_selection {
    position: relative;
    margin: 0;
    padding: 10px 0 0 10px;
    a {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }

  .filterlayer_price {
    &::before {
      content: "";
      position: absolute;
      z-index: 1;
      pointer-events: none;
      background-color: #e5e5e5;
      height: 1px;
      right: 0;
      top: 0;
      left: 10px !important;
      transform: scaleY(0.5);
    }
    .filterlayer_price_area {
      display: flex;
      justify-content: space-between;
    }
    .filterlayer_price_area_input {
      width: 132.5px;
      border: 0;
      text-align: center;
      border-radius: 3px;
      font-size: 14px;
      color: #333;
      background-color: #f7f7f7;
      outline: none;
    }
    .filterlayer_price_area_hyphen {
      position: relative;
      width: 30px;
      height: 40px;
      flex-shrink: 0;
      &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left: -5px;
        width: 10px;
        height: 1px;
        background-color: #e5e5e5;
      }
    }
  }
}
.tags_selection {
  font-size: 14px;
  text-align: center;
  .option {
    box-sizing: border-box;
    float: left;
    width: 33.33%;
    padding-right: 10px;
    height: 30px;
    line-height: 30px;
    margin-bottom: 10px;
    overflow: hidden;
    a {
      position: relative;
      display: block;
      padding: 0 5px;
      color: #666;
      background-color: #f5f5f5;
      border-radius: 4px;
    }
  }
  .arrow {
    a {
      background-color: #fff;
      overflow: visible;
      &::before {
        content: "";
        position: absolute;
        z-index: 1;
        pointer-events: none;
        background-color: #ccc;
        border: 1px solid #ddd;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: none;
        border-color: #ccc;
        border-radius: 4px;
      }
    }
  }
  &::before {
    content: "";
    position: absolute;
    z-index: 1;
    pointer-events: none;
    background-color: #e5e5e5;
    height: 1px;
    left: 0;
    right: 0;
    top: 0;
    left: 10px;
    transform: scaleY(0.5);
  }
  &::after {
    content: "";
    display: block;
    clear: both;
  }
}
</style>