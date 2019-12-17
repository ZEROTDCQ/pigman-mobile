<template>
  <!-- 主站搜索页 -->
  <div class="search">
    <SearchHeader @toggleSearchToolBar="toggleSearchToolBar" :showResult.sync="showResult" />
    <SearchToolBar
      v-show="showSearchToolBar"
      :sort.sync="sort"
      :showFilter.sync="showFilter"
      :class="{floatTop: isFloatTop}"
    />
    <div class="search-result" v-show="showResult">
      <SearchProduction v-for="(item, index) in proList" :key="index" :data="item" />
      <van-pagination
        v-show="total > limit"
        v-model="currentPage"
        :total-items="total"
        :items-per-page="limit"
        @change="currentChange"
      />
    </div>
    <div :class="['layer_bg', {show: showFilter}]" @click="hideFilter"></div>
    <SearchFilter
      :showFilter.sync="showFilter"
      :class="{show: showFilter}"
      @searchAction="getData"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
// 搜索页头部
import SearchHeader from "./components/SearchHeader";
// 搜索页排序&筛选
import SearchToolBar from "./components/SearchToolBar";
// 筛选面板
import SearchFilter from "./components/SearchFilter";
// 搜索结果产品
import SearchProduction from "./components/SearchProduction";
export default {
  components: {
    SearchHeader,
    SearchToolBar,
    SearchFilter,
    SearchProduction
  },
  data() {
    return {
      keyword: "",
      showSearchToolBar: true,
      showFilter: false,
      showResult: true,
      proList: [],
      init: true,
      sort: 1,
      floatTop: 0,
      isFloatTop: false,
      currentPage: 1,
      total: 0,
      limit: 2,
      lastTime: 0 //最后一次请求数据的时间戳
    };
  },
  computed: {
    ...mapGetters({
      filterData: "getFilterData",
      selectorData: "getSelector",
      priceArea: "getPriceArea"
    })
  },
  watch: {
    sort() {
      this.proList = [];
      // 重置页码
      this.currentChange = 1;
      this.total = 0;
      this.getData();
    }
  },
  created() {
    // 获取关键字
    let reg = /\?keyword=([^&]+)/;
    this.keyword = decodeURIComponent(
      location.href.match(reg) ? location.href.match(reg)[1] : "关键词"
    );
    document.title = this.keyword + " - 商品搜索 - 猪先生";

    this.getData();
  },
  mounted() {
    // 触发tab吸顶悬浮的高度
    this.floatTop = $(".filter-wrap").offset().top;
    $(document).on("scroll", () => {
      if ($(document).scrollTop() >= this.floatTop) {
        this.isFloatTop = true;
      } else {
        this.isFloatTop = false;
      }
    });
  },
  methods: {
    toggleSearchToolBar(toogle) {
      this.showSearchToolBar = toogle;
    },
    hideFilter() {
      this.showFilter = false;
    },
    currentChange() {
      $(document).scrollTop(this.floatTop);
      this.getData();
    },
    getData() {
      var selectorData = this.$store.state.selectorData;
      // 解析筛选的条件
      var cate_id = [];
      var scr_id = [];
      var type = this.$store.state.type;
      for (var i in selectorData) {
        if (i == "classification") {
          cate_id = cate_id.concat(selectorData[i]);
        } else {
          scr_id = scr_id.concat(selectorData[i]);
        }
      }
      console.log(type);
      this.showFilter = false;
      var time = Date.now();
      this.$instance
        .post("/api/api/search", {
          keyword: this.keyword,
          cate_id: cate_id.join(","),
          scr_id: scr_id.join(","),
          type: type.join(","),
          sort: this.sort,
          price: this.priceArea,
          page: this.currentPage,
          limit: this.limit
        })
        .then(res => {
          if (time < this.lastTime) {
            return;
          }
          this.lastTime = time;
          var data = res.data.data;
          this.total = data.bottom.total;
          this.proList = data.bottom.son;
          if (this.init) {
            this.$store.commit("setFilterData", data.top);
            this.init = false;
          }
          // console.log(this.proList);
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
.van-pagination {
  font-size: 14px;
  line-height: 40px;
  padding: 10px;
}
.van-pagination__item {
  min-width: 36px;
  height: 40px;
  color: $primarycolor;
}
.van-pagination__item--active,
.van-pagination__item:active {
  color: #fff;
  background-color: $primarycolor;
}
.van-pagination__item--disabled,
.van-pagination__item--disabled:active {
  color: #7d7e80;
  background-color: #f8f8f8;
  opacity: 0.5;
}
.van-pagination__next,
.van-pagination__prev {
  padding: 0 4px;
}
</style>