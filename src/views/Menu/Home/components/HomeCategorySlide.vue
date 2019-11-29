<template>
  <div class="category-slide">
    <div class="cs-swiper swiper-container" ref="swiper" v-if="formatData.length > 0">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in formatData" :key="index">
          <ul class="ss-ul">
            <li class="su-li" v-for="i in item" :key="i.label">
              <a href="javascript:;">
                <div class="cate-icon"></div>
                <p class="cate-name">{{i.label}}</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiper: null,
      categoryList: [
        { label: "菜谱大全" },
        { label: "主食煲汤" },
        { label: "西餐烘焙" },
        { label: "人群场合" },
        { label: "口味做法" },
        { label: "菜谱视频" },
        { label: "饮食资讯" }
      ],
      formatData: []
    };
  },
  created() {
    while (this.categoryList.length > 0) {
      this.formatData.push(this.categoryList.splice(0, 5));
    }
  },
  mounted() {
    this.swiper = new Swiper(this.$refs.swiper, {
      loop: false,
      // autoplay: {
      //   delay: 2500,
      //   disableOnInteraction: false
      // },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
    });
  }
};
</script>

<style lang="scss">
.category-slide {
  background: #fff;
  .cs-swiper {
    position: relative;
    padding: 12px 0;
    .ss-ul {
      display: flex;
    }
    &::after{
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 1px;
      background: rgba($color: #000000, $alpha: 0.1);
      transform: scaleY(0.5);
    }
  }
  .ss-ul {
    .su-li {
      flex-basis: 20%;
      display: flex;
      justify-content: center;
      a {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
      }
      .cate-icon {
        margin-bottom: 5px;
        width: 48px;
        height: 48px;
        border-radius: 50%;
        background: #ccc;
      }
      .cate-name {
        font-size: 14px;
        line-height: 14px;
        color: #333;
      }
    }
  }
  .swiper-pagination {
    position: static;
    margin-top: 15px;
    font-size: 0;
  }
  .swiper-pagination-bullet-active {
    background: $primarycolor;
  }
  .swiper-pagination-bullet {
    outline: none;
  }
}
</style>