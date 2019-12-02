<template>
  <!-- 主站搜索页 -->
  <div class="search">
    <SearchHeader />
    <SearchToolBar :showFilter.sync="showFilter" />

    <div :class="['layer_bg', {show: showFilter}]" @click="hideFilter"></div>
    <SearchFilter :showFilter.sync="showFilter" :class="{show: showFilter}" />
  </div>
</template>

<script>
// 搜索页头部
import SearchHeader from "./components/SearchHeader";
// 搜索页排序&筛选
import SearchToolBar from "./components/SearchToolBar";
// 筛选面板
import SearchFilter from "./components/SearchFilter";
export default {
  components: {
    SearchHeader,
    SearchToolBar,
    SearchFilter
  },
  data() {
    return {
      keyword: "",
      showFilter: false
    };
  },
  created() {
    // 获取关键字
    let reg = /\?keyword=([^&]+)/;
    this.keyword = location.href.match(reg)
      ? location.href.match(reg)[1]
      : "关键词";
    document.title = this.keyword + " - 商品搜索 - 猪先生";
  },
  methods: {
    hideFilter() {
      this.showFilter = false;
    }
  }
};
</script>

<style lang="scss">
body {
  background: #f5f5f5;
}
</style>
<style lang="scss" scoped>
.layer_bg {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.5s ease, visibility 0.5s ease;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 301;
  &.show {
    opacity: 1;
    visibility: visible;
  }
}
</style>