<template>
  <div class="wheel-wrap">
    <div class="lively-banner swiper-container" ref="banner" v-if="wheel.length > 0">
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiper: null
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
    this.swiper = new Swiper(".swiper-container", {
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
  }
};
</script>

<style lang="scss">
.wheel-wrap {
  position: relative;
  background: $primarycolor;
  .lively-banner {
    height: 168px;
    overflow: hidden;
  }
}
.lively-banner {
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
</style>