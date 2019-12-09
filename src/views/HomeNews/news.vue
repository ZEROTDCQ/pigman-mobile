<template>
  <div class="news">
    <div class="news-main">
      <div class="banner-wrap news-banner news-swiper swiper-container" ref="swiper">
        <div class="swiper-wrapper" v-if="brannerData">
          <div class="swiper-slide" v-for="(item,index) in brannerData" :key="index">
            <a href="javascript:;" title>
              <img :src="baseUrl+item.picture" alt width="100%" height="100%" />
            </a>
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
      <NewsTabs @upData="eventData" />
      <div class="news-list">
        <template v-if="bottomData">
          <NewsItem v-for="(item,index) in bottomData" :key="index" :data="item" />
        </template>
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
      bottomData: null,
      brannerData: null,
      page: 1,
      limit: 6
    };
  },
  created() {
    //----初始化轮播图和新闻列表
    this.getSectData(5);
  },
  mounted() {},
  updated() {
    this.initSwiper();
  },
  methods: {
    getSectData(id) {
      this.$instance
        .post("api/mobileapi/news", {
          id: id,
          lang: "sc",
          page: this.page,
          limit: this.limit,
          type: 0 //主站新闻
        })
        .then(res => {
          let data = res.data.data;
          this.brannerData = data.adv;
          this.bottomData = data.news;
        });
    },
    eventData(son) {
      this.getSectData(son);
    },
    initSwiper() {
      console.log("初始化");
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