<template>
  <div class="news">
    <div class="news-main">
      <div class="banner-wrap news-banner news-swiper swiper-container" ref="swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="i in 3" :key="i">
            <a href="javascript:;" title>
              <img src="https://img.zcool.cn/community/0118cf5837d75ea801219c77f35e67.jpg" alt />
            </a>
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
      <NewsTabs />
      <div class="news-list">
        <NewsItem v-for="i in 5" :key="i" />
      </div>
    </div>
  </div>
</template>

<script>
// 顶部tab切换组件
import NewsTabs from "./components/NewsTabs";
// 新闻项组件
import NewsItem from "./components/NewsItem";
export default {
  components: {
    NewsTabs,
    NewsItem
  },
  data() {
    return {
      swiper: null
    };
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
  }
};
</script>

<style lang="scss">
body {
  background: #f5f5f5;
}
.banner-wrap {
  height: 168px;
  overflow: hidden;
  img {
    width: 100%;
    min-height: 100%;
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