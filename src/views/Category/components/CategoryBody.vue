<template>
  <div class="category-main">
    <ul class="category-side" v-if="twoData">
      <li v-for="(item, index) in twoData" :key="index">
        <a
          :class="['cate-item', {active: activeIndex == index}]"
          href="javascript:;"
          @click="changeCategory(index,item.id)"
        >{{item.title}}</a>
      </li>
    </ul>
    <div class="pro-main-side">
      <div class="container">
        <div class="pms-swiper swiper-container" ref="swiper" v-if="wheel.length > 0">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item, index) in wheel" :key="index">
              <a href="javascript:;" :title="item.title">
                <img :src="baseUrl + item.picture" :alt="item.title" />
              </a>
            </div>
          </div>
          <!-- Add Pagination -->
          <div class="swiper-pagination"></div>
        </div>
        <div class="pro-list" v-if="threeData">
          <ProItem v-for="(item,inx) in threeData" :key="inx" :data="item" />
          <div class="pro-tips" v-show="tips">我也是有底线的~~</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 产品组件
import ProItem from "./CategoryBodyItem";
export default {
  components: {
    ProItem
  },
  props: {
    twoidr: Number
  },
  data() {
    return {
      activeIndex: 0,

      twoData: null,
      threeData: null,

      twoid: this.twoidr,
      threeid: null,

      askingFor: false,
      isScroll: 1, //到达底部的次数
      tips: false //提示信息
    };
  },
  computed: {
    wheel() {
      try {
        return window.index.wheel;
      } catch (error) {
        return [];
      }
    }
  },
  watch: {
    twoidr(son) {
      this.twoid = son;
      this.getTwoData();
    },
    threeid() {
      //清除底部滚动标识
      this.isScroll = 1;
      this.tips = false;
      this.threeData = [];
      this.getThreeData();
    }
  },
  created() {
    window.index = {};
    index.wheel = [
      {
        title: "首页",
        picture:
          "/uploads/admin/images/20191112/2992b6c4604cfbc277dd8cd9cebb6fd1.jpg",
        id: 5,
        is_on: 1
      },
      {
        title: "首页",
        picture:
          "/uploads/admin/images/20191111/f52d01c27680d01cb4e8ff3297d8acb2.jpg",
        id: 4,
        is_on: 1
      },
      {
        title: "首页",
        picture:
          "/uploads/admin/images/20191111/4d00ac7edb61dccf2303128d2f1ebfee.jpg",
        id: 3,
        is_on: 1
      }
    ];
  },
  mounted() {
    this.scrollFn();
    this.getTwoData();
    this.swiper = new Swiper(this.$refs.swiper, {
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
    });
  },
  methods: {
    changeCategory(index, id) {
      this.activeIndex = index;
      this.threeid = id;
    },
    scrollFn() {
      let _this = this;

      let father = $(".pro-list"); //数据显示区的父亲

      //内容区jq滚动事件
      $(".pro-main-side").bind("touchmove scroll", behavior);

      function behavior() {
        //计算底部距离
        let scrollTop = $(this).scrollTop();
        let scrollHeight = $(this)
          .find(".container")
          .height();
        let windowHeight = $(this).height();

        let is =
          scrollHeight - 7 < scrollTop + windowHeight &&
          scrollHeight > scrollTop + windowHeight - 7;
        // // 是否已到底部
        if (is) {
          /* 加载数据并合并到内容区中 */
          if (!_this.askingFor) {
            _this.isScroll += 1;
            console.log("到底了", _this.isScroll);
            _this.getThreeData(_this.isScroll, 6);
          }
        }
      }
    },

    getTwoData() {
      this.$instance
        .post("api/Mobileapi/goodsCateory", { two_id: this.twoid })
        .then(res => {
          let data = res.data.data;
          this.twoData = data;
          this.threeid = data[0].id;
          console.log("二级", this.threeid);
          this.activeIndex = 0;
        });
    },

    getThreeData(page = 1, limit = 6) {
      this.askingFor = true;

      this.$instance
        .post("api/Mobileapi/goodsCateory", {
          // two_id: this.twoid,
          three_id: this.threeid,
          page: page,
          limit: limit
        })
        .then(res => {
          let data = res.data.data;
          if (data.length != 0) {
            this.threeData = this.threeData
              ? this.threeData.concat(data)
              : data;
            console.log(this.threeData);
            this.askingFor = false;
          } else {
            this.tips = true;
          }
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.category-main {
  position: absolute;
  top: 88px;
  bottom: 0;
  width: 100%;
  .category-side {
    width: 83px;
    height: 100%;
    background: #f5f5f5;
  }
}
.category-side {
  .cate-item {
    position: relative;
    display: block;
    padding-left: 10px;
    height: 38px;
    line-height: 38px;
    font-size: 14px;
    @include text_ellipsis(1);
    color: #333;
    &.active {
      background: #fff;
      color: $primarycolor;
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

.pro-main-side {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 83px;
  right: 0;
  padding: 5px 10px 0;
  box-sizing: border-box;
  overflow-y: auto;
  .container {
    width: 100%;
  }
  .pms-swiper {
    width: 100%;
    height: 122px;
    overflow: hidden;
  }
  .pms-swiper {
    img {
      width: 100%;
      min-height: 100%;
      border: none;
    }
  }
  .swiper-pagination {
    .swiper-pagination-bullet {
      width: 10px;
      height: 10px;
      margin: 0 5px;
      opacity: 1;
      background: #fff;
    }
    .swiper-pagination-bullet-active {
      background: $primarycolor;
    }
  }
  .swiper-container-horizontal > .swiper-pagination-bullets {
    font-size: 0;
    bottom: 10px;
    .swiper-pagination-bullet {
      margin: 0 5px;
    }
  }

  // 到达底部数据加载提示
  .pro-tips {
    text-align: center;
    font-size: 12px;
    line-height: 25px;
    color: #999;
  }
}
</style>