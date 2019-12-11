<template>
  <!-- 产品分类顶部筛选 -->
  <div class="category-filter">
    <div class="cf-swiper swiper-container" ref="swiper" v-if="topData">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in topData" :key="index" @click="category(item.id,$event)">
          <div class="ss-icon"></div>
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
    $(".swiper-slide").first().addClass("active");
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
      this.$instance.post("api/Mobileapi/videoTop").then(res => {
        let data = res.data.data;
        this.topData = data;
        this.$emit("category",data[0].id);
      });
    },
    category(twoid,event){
      $(".swiper-slide").removeClass("active");
      $(event.path[1]).addClass("active");
      this.$emit("category",twoid);
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
    .ss-icon {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-bottom: 10px;
      background: #ccc;
    }
    .ss-name {
      font-size: 12px;
      line-height: 1;
      color: #333;
    }
  }

  .swiper-slide.active {
    .ss-name {
      color: $primarycolor;
    }
  }
}
</style>