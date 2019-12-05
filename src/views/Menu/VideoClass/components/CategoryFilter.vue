<template>
  <!-- 产品分类顶部筛选 -->
  <div class="category-filter">
    <div class="cf-swiper swiper-container" ref="swiper" v-if="filterData.length > 0">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in filterData" :key="index">
          <div class="ss-icon"></div>
          <p class="ss-name">{{item.label}}</p>
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
      swiper: null,
      filterData: [
        { label: "热销爆品" },
        { label: "会员特价" },
        { label: "时令水果" },
        { label: "肉禽蛋类" },
        { label: "海鲜水产" },
        { label: "热销爆品" },
        { label: "会员特价" },
        { label: "时令水果" },
        { label: "肉禽蛋类" }
      ]
    };
  },
  mounted() {
    this.swiper = new Swiper(this.$refs.swiper, {
      slidesPerView: "auto",
      spaceBetween: 10,
      // pagination: {
      //   el: ".swiper-pagination",
      //   clickable: true
      // }
    });
  }
};
</script>

<style lang="scss" scoped>
.category-filter {
  height: 88px;
  background: #fff;
  .cf-swiper{
    position: relative;
    padding: 10px;
    height: 100%;
    box-sizing: border-box;
    &::after{
      content: '';
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
}
</style>