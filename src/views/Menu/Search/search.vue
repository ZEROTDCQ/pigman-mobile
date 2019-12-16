<template>
  <!-- 主站搜索页 -->
  <div class="search">
    <SearchHeader @toggleSearchToolBar="toggleSearchToolBar" :showResult.sync="showResult" />
    <SearchToolBar
      v-show="showResult"
      :class="{floatTop: isFloatTop}"
      :tabs-list="tabsList"
      :tabs-index.sync="tabsIndex"
      @changeTab="changeTab"
    />
    <div class="tabs-content" v-show="showResult">
      <div class="tabs_track" :style="{transform: 'translateX(' + -tabsIndex * 100 + '%)'}">
        <div :class="['tab__pane-wrapper', {'tab__pane-wrapper--inactive': tabsIndex != 0}]">
          <div class="tab__pane menu__pane">
            <MenuItem v-for="(item, index) in paneData1" :data="item" :key="index" />
          </div>
        </div>
        <div :class="['tab__pane-wrapper', {'tab__pane-wrapper--inactive': tabsIndex != 1}]">
          <div class="tab__pane video__pane">
            <VideoItem v-for="(item, index) in paneData2" :data="item" :key="index" />
          </div>
        </div>
        <div :class="['tab__pane-wrapper', {'tab__pane-wrapper--inactive': tabsIndex != 2}]">
          <div class="tab__pane news__pane">
            <!-- 资讯pane -->
            <NewsItem v-for="(item, index) in paneData3" :data="item" :key="index" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
// 搜索页头部
import SearchHeader from "./components/SearchHeader";
// 搜索页排序&筛选
import SearchToolBar from "./components/SearchToolBar";
// 菜谱组件
import MenuItem from "./components/MenuItem";
// 视频组件
import VideoItem from "./components/VideoItem";
// 资讯组件
import NewsItem from "./components/NewsItem";
export default {
  components: {
    SearchHeader,
    SearchToolBar,
    MenuItem,
    VideoItem,
    NewsItem
  },
  data() {
    return {
      isFloatTop: false,
      floatTop: 0,
      keyword: "",
      tabsList: [
        { label: "菜谱", id: 0 },
        { label: "视频", id: 1 },
        { label: "资讯", id: 2 }
      ],
      tabsIndex: 0,
      loading: false,
      currentPage: 1,
      limit: 7,
      total: 0,
      paneData1: [],
      paneData2: [],
      paneData3: [],
      showSearchToolBar: true,
      showFilter: false,
      showResult: true
    };
  },
  created() {
    // 获取关键字
    let reg = /\?keyword=([^&]+)/;
    this.keyword = decodeURIComponent(
      location.href.match(reg) ? location.href.match(reg)[1] : "关键词"
    );
    document.title = this.keyword + " - 饮食指南搜索 - 猪先生";

    this.getData();
  },
  mounted() {
    // 触发tab吸顶悬浮的高度
    this.floatTop = $(".tabs-wrap").offset().top;
    $(document).on("scroll", () => {
      if ($(document).scrollTop() >= this.floatTop) {
        this.isFloatTop = true;
      } else {
        this.isFloatTop = false;
      }
    });
  },
  methods: {
    changeTab(index) {
      console.log(index);
      this.tabsIndex = index;
      this.$nextTick(() => {
        $(document).scrollTop(this.floatTop);
      });

      // 请求新数据
      this.page = 1;
      this.getData();
    },
    toggleSearchToolBar(toogle) {
      this.showSearchToolBar = toogle;
    },
    hideFilter() {
      this.showFilter = false;
    },
    getData() {
      this.loading = true;
      this.$instance
        .post("/api/api/informationSearch", {
          keyword: this.keyword,
          type: this.tabsList[this.tabsIndex].id,
          page: this.currentPage,
          limit: this.pageSize
        })
        .then(res => {
          console.log(res);
          let data = res.data.data;
          switch (this.tabsList[this.tabsIndex].id) {
            case 0:
              this.paneData1 = data.son;
              break;
            case 1:
              this.paneData2 = data.son;
              break;
            case 2:
              this.paneData3 = data.son;
              break;
          }
          this.total = data.total;
        })
        .finally(() => {
          this.loading = false;
        });
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

<style lang="scss">
.tabs-content {
  width: 100%;
  overflow: hidden;
}
.tabs_track {
  display: flex;
  transition: transform 0.3s ease-in-out;
}
.tab__pane,
.tab__pane-wrapper {
  flex-shrink: 0;
  box-sizing: border-box;
  width: 100%;
}
.tab__pane-wrapper--inactive {
  height: 0;
  overflow: visible;
}
.tab__pane {
  padding: 10px;
}
.menu__pane,
.video__pane,
.news__pane {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .menu-item,
  .video-item,
  .news-item {
    margin-bottom: 10px;
  }
  .news-item {
    margin-top: 0;
    margin-bottom: 5px;
  }
}
</style>