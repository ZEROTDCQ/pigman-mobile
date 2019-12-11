<template>
  <div class="news-tabs-wrap">
    <div class="tabs-list swiper-container">
      <div class="swiper-wrapper">
        <div
          :class="['swiper-slide', {active: activeIndex == index}]"
          v-for="(item, index) in tabList"
          :key="index"
          @click="changeTab(index)"
        >{{item.title}}</div>
      </div>
    </div>
    <div class="sort-row">
      <div class="fl">
        <div :class="['sort-item', {active: sort == 1}]" @click="sortBy(1)">最新</div>
        <div :class="['sort-item', {active: sort == 2}]" @click="sortBy(2)">最热</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiper: null,
      tabList: [],
      activeIndex: -1,
      // 排序方式，1：最新 2：最热
      sort: 1,
      currentPage: 1,
      limit: 5
    };
  },
  methods: {
    changeTab(index) {
      if (this.activeIndex == index) {
        return;
      }
      this.activeIndex = index;
      this.getData();
      this.swiper.slideTo(this.activeIndex, 200, false);
    },
    sortBy(sort) {
      if (this.sort == sort) {
        return;
      }
      this.sort = sort;
      this.getData();
    },
    getData() {
      this.$emit("updateList", [], []);
      this.$instance
        .post("/api/Mobileapi/news", {
          type: 1,
          sort: this.sort,
          id: this.tabList[this.activeIndex].id,
          page: this.currentPage,
          limit: this.limit
        })
        .then(res => {
          let data = res.data.data;
          this.$emit("updateList", data.adv, data.news);
        });
    }
  },
  mounted() {
    this.$instance
      .post("/api/Mobileapi/newTop", {
        type: 1
      })
      .then(res => {
        let data = res.data.data;
        data.unshift({
          id: 0,
          title: "综合资讯"
        });
        this.tabList = data;
        this.$nextTick(() => {
          let spaceBetween = (document.documentElement.clientWidth / 375) * 20;
          this.swiper = new Swiper(".tabs-list", {
            slidesPerView: "auto",
            spaceBetween
          });
          this.changeTab(0);
        });
      });
  }
};
</script>

<style lang="scss">
.news-tabs-wrap {
  background: #fff;
}
.tabs-list {
  padding: 0 10px;
  height: 40px;
  line-height: 40px;
  display: flex;
  .swiper-slide {
    position: relative;
    width: auto;
    font-size: 16px;
    color: #4d4d4d;
  }
  .swiper-slide.active {
    color: $primarycolor;
    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 2px;
      background: $primarycolor;
    }
  }
}
.sort-row {
  position: relative;
  padding: 5px 10px;
  display: flex;
  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 0;
    border-top: 1px solid #eee;
    transform: scaleY(0.5);
  }
  .sort-item {
    float: left;
    position: relative;
    padding: 0 5px;
    height: 20px;
    line-height: 20px;
    font-size: 12px;
    margin-right: -1px;
    color: #ccc;
    &::after {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      border: 1px solid #eee;
      box-sizing: border-box;
    }
    &.active {
      color: #fff;
      background: $primarycolor;
      z-index: 2;
      &::after {
        border-color: $primarycolor;
      }
    }
  }
}
</style>