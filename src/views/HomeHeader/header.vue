<template>
  <!-- 公共头部 -->
  <div :class="['header-wrap', {extend: extend}]">
    <div class="search-wrap">
      <div class="head-logo" v-show="!extend">猪先生logog</div>
      <div class="head-btn-left" v-show="extend">
        <div class="btn-back" @click="searchBack">
          <i class="iconfont">&#xe6f4;</i>
        </div>
      </div>
      <div class="search-input" id="searchInput">
        <div class="search-inner">
          <input
            type="text"
            placeholder="炸榴莲"
            v-model="keyword"
            @focus="inputClick"
            @input="onInput"
            ref="input"
          />
        </div>
        <div class="search-icon">
          <i class="iconfont icon-search">&#xe630;</i>
        </div>
        <div class="clear-icon" v-show="inputing" @click="clearInput">
          <i class="iconfont icon-clear">&#xe612;</i>
        </div>
      </div>
      <div class="head-btn-right">
        <div class="btn-more" @click="moreHandler" v-show="!extend">
          <div class="bm-line" v-for="i in 3" :key="i"></div>
        </div>
        <div class="btn-search" v-show="extend">
          <a href="javascript:;">搜索</a>
        </div>
      </div>
    </div>
    <div class="content-wrap" v-show="extend">
      <div class="recent-search cw-box" v-show="!inputing && searchHistory.length > 0">
        <div class="cb-head">
          <p class="ch-tit">最近搜索</p>
          <div class="ch-btn">
            <i class="iconfont" @click="clearHistory">&#xe62e;</i>
          </div>
        </div>
        <div class="cb-body">
          <span v-for="i in searchHistory" :key="i">
            <a href="javascript:;">{{i}}</a>
          </span>
        </div>
      </div>
      <div class="hot-search cw-box" v-show="!inputing">
        <div class="cb-head">
          <p class="ch-tit">热门搜索</p>
        </div>
        <div class="cb-body">
          <span v-for="(item, index) in hotKeyword" :key="item + index">
            <a href="javascript:;">{{item.hot}}</a>
          </span>
        </div>
      </div>
      <ul class="keys" v-show="inputing">
        <li v-for="(item, index) in dropDownList" :key="item + index" @click="searchAction(index)">
          <a href="javascript:;">{{item.name}}</a>
        </li>
      </ul>
      <transition name="fade-in">
        <div class="overlay" v-if="clearToast"></div>
      </transition>
      <transition name="scale-in">
        <div class="ground-toast clear-toast" v-if="clearToast">
          <div class="toast-content">确定要清空吗?</div>
          <div class="toast-btn">
            <a class="no" id="msClearCancel" @click="clearToastHandle(0)">取消</a>
            <a class="sure" id="msClearSure" @click="clearToastHandle(1)">确定</a>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      extend: false,
      keyword: "",
      searchHistory: JSON.parse(
        localStorage.getItem("search_history")
          ? localStorage.getItem("search_history")
          : "[]"
      ),
      hotKeyword: [],
      clearToast: false,
      matchTimer: null,
      time: 0,
      // 相关关键词
      dropDownList: []
    };
  },
  computed: {
    inputing() {
      return this.keyword != "";
    }
  },
  created() {
    // 获取热门搜索关键词
    this.$instance
      .post("/api/api/hotWords", {
        type: 0
      })
      .then(res => {
        console.log(res);
        this.hotKeyword = res.data.data ? res.data.data : [];
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    inputClick() {
      this.extend = true;
    },
    onInput(e) {
      var value = e.target.value || e.srcElement.value;
      // 搜索框正在输入事件，延迟250ms后获取相关搜索词
      clearTimeout(this.matchTimer);
      this.matchTimer = setTimeout(() => {
        var time = Date.now();
        this.$instance
          .post("/api/mobileapi/relatedWords", {
            keyword: value
          })
          .then(res => {
            console.log(res);
            if (time >= this.time) {
              this.time = time;
              // 截取结果前10条
              this.dropDownList = res.data.data.slice(0, 10);
            } else {
              console.log("我不是最后的搜索结果");
            }
          })
          .catch(error => {
            console.log(error);
          });
      }, 250);
    },
    searchAction(index) {
      // 点击搜索事件，设置localStorage，记录历史搜索记录
      var kw = this.dropDownList[index].name;
      var old = JSON.parse(
        localStorage.getItem("search_history")
          ? localStorage.getItem("search_history")
          : "[]"
      );
      // 判断历史搜索里是否已存在，如果不存在向前插入最新的搜索关键词，如果存在改变原来的位置到第一位
      var isExist = old.indexOf(kw);
      if (isExist == -1) {
        //不存在
        old.unshift(kw);
      } else {
        if (isExist != 0) {
          // 置顶关键词
          old.splice(isExist, 1);
          old.unshift(kw);
        }
      }
      localStorage.setItem("search_history", JSON.stringify(old));
      location.href = `home_search.html?keyword=${kw}`;
    },
    clearHistory() {
      this.clearToast = true;
    },
    clearToastHandle(flag) {
      if (flag) {
        // 清空历史搜索记录
        this.searchHistory = [];
        localStorage.removeItem("search_history");
      }
      this.clearToast = false;
    },
    searchBack() {
      this.keyword = "";
      this.extend = false;
    },
    clearInput() {
      this.keyword = "";
      this.$refs.input.focus();
    },
    moreHandler() {
      console.log(111);
    }
  }
};
</script>



<style lang="scss">
.header-wrap {
  position: relative;
  height: 44px;
  background: $primarycolor;
  .search-wrap {
    height: 100%;
    overflow: hidden;
  }
  .head-logo {
    float: left;
  }
  .head-btn-left {
    position: absolute;
    top: 10px;
    left: 10px;
    width: 24px;
    height: 24px;
  }
  .head-btn-right {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 24px;
    height: 24px;
  }
  .search-input {
    margin: 7px 55px 0 95px;
    height: 30px;
    border-radius: 15px;
    background: #fff;
    overflow: hidden;
  }
  .btn-back {
    position: relative;
    left: -4px;
    height: 100%;
    text-align: center;
    line-height: 24px;
  }
  .btn-more {
    height: 100%;
    padding: 2px 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .bm-line {
      width: 100%;
      height: 3px;
      background: #fff;
      border-radius: 2px;
    }
  }
  .btn-search {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    a {
      display: block;
      width: 40px;
      height: 100%;
      font-size: 12px;
      text-align: center;
      line-height: 24px;
      color: #fff;
      background: $primarycolor;
      border-radius: 4px;
    }
  }
}
.search-input {
  position: relative;
  display: flex;
  .search-inner {
    flex: 1;
    input {
      display: block;
      padding-left: 15px;
      width: 100%;
      height: 100%;
      font-size: 12px;
      box-sizing: border-box;
      border: none;
      outline: none;
      background: transparent;
    }
  }
  .search-icon {
    flex-shrink: 0;
    width: 35px;
    height: 100%;
    line-height: 30px;
    text-align: center;
    color: #ccc;
  }
  .clear-icon {
    position: absolute;
    top: 0;
    right: 0;
    width: 35px;
    height: 100%;
    line-height: 30px;
    text-align: center;
    color: #ccc;
    font-size: 14px;
  }
}
.content-wrap {
  .cw-box {
    padding-left: 10px;
    margin-top: 10px;
    .cb-head {
      margin-bottom: 5px;
      padding-right: 10px;
      display: flex;
      justify-content: space-between;
      font-size: 14px;
      line-height: 30px;
      color: #333;
    }
    .cb-body {
      overflow: hidden;
      span {
        float: left;
        margin-right: 10px;
        margin-bottom: 10px;
        a {
          float: left;
          padding: 0 13px;
          height: 24px;
          line-height: 24px;
          font-size: 12px;
          background: #f0f2f5;
        }
      }
    }
  }
  .keys {
    padding-left: 10px;
    li {
      position: relative;
      padding-right: 10px;
      height: 42px;
      &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 1px;
        background: #e5e5e5;
        transform: scaleY(0.5);
      }
      a {
        display: block;
        height: 42px;
        line-height: 42px;
        font-size: 13px;
        color: #333;
      }
    }
  }
}
.overlay {
  position: fixed;
  z-index: 999;
  top: 0;
  bottom: 0;
  width: 100%;
  background: rgba($color: #000000, $alpha: 0.75);
}
.clear-toast {
  position: fixed;
  z-index: 1000;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1);
  width: 88%;
  font-size: 16px;
  border-radius: 10px;
  text-align: center;
  overflow: hidden;
  background-color: #fff;
  .toast-content {
    position: relative;
    height: 101px;
    line-height: 101px;
    text-align: center;
    color: #232326;
    font-size: 16px;
    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -1px;
      width: 100%;
      height: 1px;
      background: #e5e5e5;
      transform: scaleY(0.5);
    }
  }
  .toast-btn {
    height: 44px;
    display: flex;
    a {
      flex: 1;
      line-height: 44px;
    }
    .sure {
      color: #fff;
      background: $primarycolor;
    }
  }
}

.header-wrap.extend {
  background: #fff;
  .search-wrap {
    position: relative;
    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 1px;
      background: #e5e5e5;
      transform: scaleY(0.5);
    }
  }
  .search-input {
    margin: 7px 55px 0 40px;
    flex-direction: row-reverse;
    background: #f5f5f5;
    .search-inner {
      input {
        padding-right: 15px;
        padding-left: 0;
      }
    }
  }
}
</style>

<style lang="scss">
.fade-in-enter {
  opacity: 0;
}
.scale-in-enter {
  opacity: 0;
  transform: translate(-50%, -50%) scale(0.5);
}
.fade-in-enter-active,
.scale-in-enter-active {
  transition: all 0.24s ease-in-out;
}
</style>