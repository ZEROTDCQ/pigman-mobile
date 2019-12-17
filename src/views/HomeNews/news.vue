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
        <NewsItem v-for="(item,index) in bottomData" :key="index" :data="item" />
        <van-pagination
          v-show="total > limit"
          v-model="currentPage"
          :total-items="total"
          :items-per-page="limit"
          @change="currentChange"
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
      id: -1,
      swiper: null,
      bottomData: null,
      brannerData: null,
      currentPage: 1,
      total: 0,
      limit: 6,
      lastTime: 0, //最后一次请求数据的时间戳
      mode: "type" //数据变更模式，page：分页(不重置轮播图)，type：类型
    };
  },
  methods: {
    currentChange() {
      this.mode = "page";
      // 返回顶部
      $(document).scrollTop($(".news-tabs-wrap").offset().top);
      this.getSectData();
    },
    getSectData() {
      var time = Date.now();
      this.$instance
        .post("/api/mobileapi/news", {
          id: this.id,
          lang: "sc",
          page: this.currentPage,
          limit: this.limit,
          type: 0 //主站新闻
        })
        .then(res => {
          if (time < this.lastTime) {
            return;
          }
          this.lastTime = time;
          var data = res.data.data;
          this.total = data.total;
          this.brannerData = data.adv;
          this.$nextTick(() => {
            this.initSwiper();
          });
          this.bottomData = data.news;
        });
    },
    eventData(son) {
      this.id = son;
      this.mode = "type";
      this.currentPage = 1;
      this.total = 0;
      this.getSectData();
    },
    initSwiper() {
      if (this.mode == "page") {
        return;
      }
      if (this.swiper) {
        this.swiper.destroy();
      }
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