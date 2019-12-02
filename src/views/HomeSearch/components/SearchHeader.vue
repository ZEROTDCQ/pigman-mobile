<template>
  <!-- 公共头部 -->
  <div class="header-wrap extend">
    <div class="search-wrap">
      <div class="head-btn-left">
        <div class="btn-back" @click="searchBack">
          <i class="iconfont">&#xe6f4;</i>
        </div>
      </div>
      <div class="search-input" id="searchInput">
        <div class="search-inner">
          <input type="text" placeholder="炸榴莲" v-model="keyword" @focus="inputClick" ref="input" />
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
        <div class="btn-search">
          <a href="javascript:;">搜索</a>
        </div>
      </div>
    </div>
    <div class="content-wrap" v-show="extend">
      <div class="recent-search cw-box" v-show="!inputing && rencentSearch.length > 0">
        <div class="cb-head">
          <p class="ch-tit">最近搜索</p>
          <div class="ch-btn">
            <i class="iconfont" @click="clearHistory">&#xe62e;</i>
          </div>
        </div>
        <div class="cb-body">
          <span v-for="i in rencentSearch" :key="i">
            <a href="javascript:;">{{i}}</a>
          </span>
        </div>
      </div>
      <div class="hot-search cw-box" v-show="!inputing">
        <div class="cb-head">
          <p class="ch-tit">热门搜索</p>
        </div>
        <div class="cb-body">
          <span v-for="i in 10" :key="i">
            <a href="javascript:;">面包机</a>
          </span>
        </div>
      </div>
      <ul class="keys" v-show="inputing">
        <li>
          <a href="javascript:;">九阳豆浆机</a>
        </li>
      </ul>
      <div class="clear-toast clearToast" ref="toast">
        <div class="ground-toast">
          <div class="toast-content">确定要清空吗?</div>
          <div class="toast-btn">
            <a class="no" id="msClearCancel" @click="clearToastHandle(0)">取消</a>
            <a class="sure" id="msClearSure" @click="clearToastHandle(1)">确定</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      extend: false,
      keyword: "",
      tempKeyword: '',
      rencentSearch: ['鸡腿', '猪脚']
    };
  },
  computed: {
    inputing() {
      return this.keyword != "";
    }
  },
  methods: {
    inputClick() {
      this.extend = true;
    },
    searchBack() {
      this.keyword = this.tempKeyword;
      this.extend = false;
    },
    clearInput() {
      this.tempKeyword = this.keyword;
      this.keyword = "";
      this.$refs.input.focus();
    },
    clearHistory() {
      this.$refs.toast.style.display = "flex";
    },
    clearToastHandle(flag) {
      if (!flag) {
        this.$refs.toast.style.display = "none";
      }else{
        // 清空历史搜索记录
        this.rencentSearch = [];
        console.log(this.rencentSearch)
        this.$refs.toast.style.display = "none";
      }
    },
    moreHandler() {
      console.log(111);
    }
  },
  created(){
    // 获取关键字
    let reg = /\?keyword=([^&]+)/;
    this.keyword = location.href.match(reg) ? location.href.match(reg)[1] : '关键词';
    this.tempKeyword = this.keyword;
  }
};
</script>

<style lang="scss" scoped>
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
.clear-toast {
  display: none;
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba($color: #000000, $alpha: 0.75);
  justify-content: center;
  align-items: center;
  .ground-toast {
    background-color: #fff;
    width: 88%;
    height: auto;
    font-size: 16px;
    border-radius: 10px;
    text-align: center;
    overflow: hidden;
    position: relative;
    z-index: 10;
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