<template>
  <div class="news">
    <div class="news-main">
      <div class="banner-wrap news-banner swiper-container" ref="swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide ss-banner" v-for="(item, index) in advList" :key="index">
            <a href="javascript:;" title>
              <img :src="baseUrl + item.picture" alt />
            </a>
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
      <NewsTabs @updateList="updateList" />
      <div class="news-list">
        <NewsItem
          v-for="(item, index) in newsList"
          :key="Date.now() + index"
          :data="item"
          :index="index"
        />
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
      swiper: null,
      advList: [],
      newsList: []
    };
  },
  methods: {
    updateList(advList, newsList) {
      this.advList = advList;
      this.newsList = newsList;
      this.$forceUpdate();
      this.$nextTick(() => {
        if (this.swiper) {
          this.swiper.destroy(false);
        }
        this.swiper = new Swiper(".news-banner", {
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
      });
    }
  },
  mounted() {}
};
</script>

<style lang="scss">
body {
  background: #f5f5f5;
}
.ss-banner {
  height: 168px;
  overflow: hidden;
  img {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 100%;
    min-height: 100%;
  }
}
.swiper-pagination {
  padding-right: 10px;
  text-align: right;
  box-sizing: border-box;
  .swiper-pagination-bullet {
    width: 10px;
    height: 10px;
    margin-left: 10px;
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
    margin: 0 0 0 10px;
  }
}
</style>