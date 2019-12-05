<template>
  <div class="category-main">
    <ul class="category-side">
      <li v-for="(item, index) in sideListData" :key="index">
        <a
          :class="['cate-item', {active: activeIndex == index}]"
          href="javascript:;"
          @click="changeCategory(index)"
        >{{item.label}}</a>
      </li>
    </ul>
    <div class="pro-main-side">
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
      <div class="pro-list">
        <ProItem v-for="i in 10" :key="i" />
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
  data() {
    return {
      sideListData: [
        { label: "今日秒杀" },
        { label: "时令水果" },
        { label: "新鲜蔬菜" },
        { label: "肉禽蛋类" },
        { label: "乳品雪糕" },
        { label: "海鲜水产" },
        { label: "休闲零食" },
        { label: "速食热销榜" },
        { label: "饮料酒水" },
        { label: "粮油调味" },
        { label: "轻食烘焙" },
        { label: "鲜花绿植" }
      ],
      activeIndex: 0
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
    changeCategory(index) {
      this.activeIndex = index;
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
}
</style>