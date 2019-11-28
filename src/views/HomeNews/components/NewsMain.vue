<template>
  <div class="news-main">
    <div class="banner-wrap news-banner news-swiper">
      <img
        src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573550734034&di=b4b6e63816c6f7f318dd5283d43c67f1&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0118cf5837d75ea801219c77f35e67.jpg"
        alt
      />
    </div>
    <div class="news-list">
      <NewsItem v-for="i in 5" :key="i" />
    </div>
  </div>
</template>

<script>
import NewsItem from "./NewsItem";
export default {
  components: {
    NewsItem
  }
};
</script>

<style lang="scss">
.banner-wrap {
  margin: 10px 0;
  height: 168px;
  overflow: hidden;
  img {
    width: 100%;
    min-height: 100%;
  }
}
</style>