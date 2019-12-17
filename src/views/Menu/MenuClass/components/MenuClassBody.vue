<template>
  <div class="category-main">
    <div class="container">
      <div class="category-main-side">
        <div class="side-box" v-if="sidedata">
          <div class="side-title" >{{sidedata.title}}</div>

          <ul class="category-side">
            <li v-for="(item,inx) in sidedata.son" :key="inx">
              <a class="side-tit" href="javascript:;" @click.stop="clickShoqi(inx)">{{item.title}}</a>
              <ul class="ul-active">
                <li v-for="(attr,j) in item.son" :key="j">
                  <a class="cate-item" @click.stop="changeCategory(attr.id,$event)">{{attr.title}}</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <div class="pro-main-side">
        <div class="pro-box">
          <div class="pro-biaos">
            <span @click.stop="classification(0)" class="active">最新</span>
            <span @click.stop="classification(1)">最热</span>
          </div>

          <div class="pro-list-box">
            <div class="pro-list">
              <ProItem v-for="(item,inx) in rightdata" :key="inx" :data="item" />
              <div class="pro-tips" v-show="tips">我也是有底线的~~</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 产品组件
import ProItem from "./MenuClassItem";
export default {
  components: {
    ProItem
  },
  // props: {
  //   twoidr: Number
  // },
  data() {
    return {
      /*****标识数据 */
      init: false,
      indexactive: 1,
      activeinx: 0,
      activeIndex: 0,

      /*****模拟数据 */
      // getdata: require("../data.json"),

      //左侧菜单
      id: 19,
      sidedata: null,
      //右侧菜谱
      rightid: null,
      rightdata: null,
      askingFor: false,
      isScroll: 1, //到达底部的次数
      tips: false //提示信息
    };
  },
  created() {},
  beforeMount() {},
  mounted() {
    //获取左侧菜单数据
    this.getSideData();
    //内容向下滚动事件
    this.scrollFn();
  },
  updated() {
    if (this.init) {
      this.initLeft();
      this.init = false;
    }
  },
  computed: {},
  watch: {
    rightid() {
      //清除底部滚动标识
      this.isScroll = 1;
      this.tips = false;
      this.rightdata = [];
      this.getRightData();
    }
  },
  methods: {
    changeCategory(id, event) {
      $(".cate-item").removeClass("active");
      $(event.path[0]).addClass("active");

      this.rightid = id;
      // console.log(id);
    },
    clickShoqi(inx) {
      // console.log("解开了", inx);
      let ul = $(".side-tit + ul");
      let ulix = ul.eq(inx);

      ul.not(ulix).slideUp(500);
      ulix.slideToggle(500);
    },
    /**点击“最新&最热”按钮 */
    classification(inx) {
      let $span = $(".pro-biaos span");
      $span.removeClass("active");
      $span.eq(inx).addClass("active");
    },

    /**获取左侧菜单数据 */
    getSideData() {
      this.$instance
        .post("api/Mobileapi/foodMenu", { id: this.id })
        .then(res => {
          let data = res.data.data;
          this.sidedata = data;
          this.rightid = data.son[0].son[0].id;
          this.activeIndex = 0;
          this.init = true;
          // console.log(this.sidedata);
        });
    },

    /**获取右侧菜谱数据 */
    getRightData(page = 1, limit = 6) {
      this.askingFor = true;

      this.$instance
        .post("api/Mobileapi/foodMenu", {
          two_id: this.rightid,
          page: page,
          limit: limit
        })
        .then(res => {
          let data = res.data.data.son;
          if (data.length != 0) {
            this.rightdata = this.rightdata
              ? this.rightdata.concat(data)
              : data;
            this.askingFor = false;
          } else {
            this.tips = true;
          }
          // console.log(this.rightdata);
        });
    },

    /**计算与底部的距离 */
    scrollFn() {
      let _this = this;

      let father = $(".pro-list"); //数据显示区的父亲

      //内容区jq滚动事件
      $(".pro-list-box").bind("touchmove scroll", behavior);

      function behavior() {
        //计算底部距离
        let scrollTop = $(this).scrollTop();
        let scrollHeight = father.height();
        let windowHeight = $(this).height();

        let is =
          scrollHeight - 7 < scrollTop + windowHeight &&
          scrollHeight > scrollTop + windowHeight - 7;
        // // 是否已到底部
        if (is) {
          // console.log(scrollTop,windowHeight,scrollHeight)
          /* 加载数据并合并到内容区中 */
          if (!_this.askingFor) {
            _this.isScroll += 1;
            console.log("到底了", _this.isScroll);
            _this.getRightData(_this.isScroll, 6);
          }
        }
      }
    },

    initLeft() {
      /**初始化侧边栏 */
      let ul = $(".side-tit + ul");
      ul.hide();
      ul.first().show();
    }
  }
};
</script>

<style lang="scss" scoped>
.category-main {
  position: absolute;
  top: 184px;
  bottom: 0;
  width: 100%;
  .container {
    position: relative;
    width: 100%;
    height: 100%;
  }
}

.container {
  .category-main-side {
    position: absolute;
    width: 83px;
    top: 0px;
    height: 100%;
    left: 0;
    box-sizing: border-box;

    .side-box {
      width: 100%;
      height: 100%;
      position: relative;
    }
  }

  .pro-main-side {
    position: absolute;
    width: 292px;
    top: 0px;
    height: 100%;
    right: 0;
    box-sizing: border-box;

    .pro-box {
      position: relative;
      width: 100%;
      height: 100%;
    }
  }
}

.side-box {
  .side-title {
    width: 100%;
    height: 30px;
    background-color: $primarycolor;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    line-height: 30px;
  }

  .category-side {
    box-sizing: border-box;
    position: absolute;
    top: 32px;
    right: 0px;
    bottom: 0;
    overflow-y: auto;
    width: 100%;
    overflow-y: auto;
    background: #f5f5f5;

    & > li {
      overflow: hidden;
    }

    .ul-active {
      width: 100%;
      display: none;
      overflow: hidden;
    }

    .side-tit {
      padding-left: 10px;
      color: $primarycolor;
      font-size: 15px;
      font-weight: bold;
      line-height: 45px;
      height: 45px;
      display: block;
    }
    .cate-item {
      position: relative;
      display: block;
      padding-left: 10px;
      height: 45px;
      @include text_ellipsis(1);
      line-height: 45px;
      font-size: 14px;
      color: #666;

      &.active {
        background: #fff;
        color: #000;
      }
      &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 1px;
        transform: scaleY(0.5);
        background: rgba($color: #fff, $alpha: 1);
      }
    }
  }
}

.pro-box {
  .pro-biaos {
    height: 30px;
    font-size: 14px;
    text-align: right;
    line-height: 30px;
    border-bottom: 1px solid #eee;
    padding: 0 5px;
    box-sizing: border-box;
    span{
      margin-left: 7px;
    }
    span.active {
      color: $primarycolor;
    }
  }

  .pro-list-box {
    padding: 5px 10px 0;
    box-sizing: border-box;
    position: absolute;
    top: 32px;
    right: 0px;
    bottom: 0;
    overflow-y: auto;
    width: 100%;
    .pro-list {
      // height: 100%;
    }
  }
}

// 到达底部数据加载提示
.pro-tips {
  text-align: center;
  font-size: 12px;
  line-height: 25px;
  color: #999;
}
</style>