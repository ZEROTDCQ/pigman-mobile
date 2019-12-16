<template>
  <!-- 产品分类顶部筛选 -->
  <div class="category-filter">
    <div class="cf-swiper swiper-container" ref="swiper" v-if="topData">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          v-for="(item, index) in topData"
          :key="index"
          @click="category(item.id,$event)"
        >
          <div :class="['ss-icon',item.class]"></div>
          <p class="ss-name">{{item.title}}</p>
        </div>
      </div>
      <!-- Add Pagination -->
      <!-- <div class="swiper-pagination"></div> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      topData: null,

      swiper: null
    };
  },
  beforeMount() {
    this.getTopData();
  },
  mounted() {},
  updated() {
    console.log("更新");
    $(".swiper-slide")
      .first()
      .addClass("active");
    this.swiper = new Swiper(this.$refs.swiper, {
      slidesPerView: "auto",
      spaceBetween: 10
      // pagination: {
      //   el: ".swiper-pagination",
      //   clickable: true
      // }
    });
  },
  methods: {
    getTopData() {
      this.$instance.post("api/Mobileapi/goodsTop").then(res => {
        let data = res.data.data;
        this.topData = data;
        this.$emit("category", data[0].id);
      });
    },
    category(twoid, event) {
      $(".swiper-slide").removeClass("active");
      $(event.path[1]).addClass("active");
      this.$emit("category", twoid);
    }
  }
};
</script>

<style lang="scss" scoped>
.category-filter {
  height: 88px;
  background: #fff;
  .cf-swiper {
    position: relative;
    padding: 10px;
    height: 100%;
    box-sizing: border-box;
    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      transform: scaleY(0.5);
      width: 100%;
      height: 1px;
      background: #f5f5f5;
    }
  }
  .swiper-slide {
    width: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    transition: all 0.3s;
    .ss-icon {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-bottom: 10px;
      background-color: #fff;
      box-shadow: 0px 0px 6px 0px rgba(36, 36, 36, 0.2);
      background-size: 70%;
      background-repeat: no-repeat;
      background-position: center;
    }
    .ss-name {
      font-size: 12px;
      line-height: 1;
      color: #333;
    }
  }

  .swiper-slide.active {
    transform: scale(1.1);
    .ss-name {
      color: $primarycolor;
    }
  }
}

// 头部图标样式
.swiper-slide {
  .Dairy {
    background-image: url("~@/assets/img/page/category/icon_xg.png");
  }
  .Seafood {
    background-image: url("~@/assets/img/page/category/icon_hx.png");
  }
  .Vegetables {
    background-image: url("~@/assets/img/page/category/icon_sc.png");
  }
  .CookedFood {
    background-image: url("~@/assets/img/page/category/icon_lw.png");
  }
  .BakePastry {
    background-image: url("~@/assets/img/page/category/icon_gd.png");
  }
  .Flowers {
    background-image: url("~@/assets/img/page/category/icon_lz.png");
  }
  .Convenient {
    background-image: url("~@/assets/img/page/category/icon_ss.png");
  }
  .Fruits {
    background-image: url("~@/assets/img/page/category/icon_sg.png");
  }
  .flavor {
    background-image: url("~@/assets/img/page/category/icon_ly.png");
  }
  .Snacks {
    background-image: url("~@/assets/img/page/category/icon_ls.png");
  }
  .Beverage {
    background-image: url("~@/assets/img/page/category/icon_yl.png");
  }
  .Eggs {
    background-image: url("~@/assets/img/page/category/icon_lw.png");
  }
  .Clean {
    background-image: url("~@/assets/img/page/category/icon_jj.png");
  }
}
</style>