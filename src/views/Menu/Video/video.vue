<template>
  <div class="video page_wrap" v-show="showr">
    <VideoBanner v-if="bannerData" :data="bannerData"/>

    <div class="video-box-wrap">
      <div class="vb-head">
        <div class="left-tit">
          <h3 class="tit-txt">最新视频</h3>
        </div>
        <div class="right-actions">
          <div class="action">
            <a
              href="javascript:;"
              :class="['btn-change', {loading: loading}]"
              @click="changeOthers"
            >
              换一换
              <i class="iconfont">&#xe635;</i>
            </a>
          </div>
        </div>
      </div>
      <div class="vb-body vb-list" v-if="newData">
        <VideoItem v-for="(item,index) in newData" :key="index" :data="item" />
      </div>
    </div>

    <div class="video-box-wrap">
      <div class="vb-head">
        <div class="left-tit">
          <h3 class="tit-txt">视频分类</h3>
        </div>
        <div class="right-actions" v-if="cateData">
          <div class="action" v-for="(item,index) in cateData" :key="index">
            <a
              href="javascript:;"
              :class="{'btn-category':true,'active':index==0}"
              @click="cateAction(index,$event)"
            >{{item.title}}</a>
          </div>
        </div>
      </div>
      <div class="vb-body vb-list" v-if="cateData">
        <VideoItem v-for="(item,index) in catedata" :key="index" :data="item" />
      </div>
    </div>

    <div class="video-box-wrap">
      <div class="vb-head">
        <div class="left-tit">
          <h3 class="tit-txt">热门视频</h3>
        </div>
        <div class="right-actions">
          <div class="action">
            <a href="videohot.html" class="btn-more">
              查看更多
              <span>&gt;</span>
            </a>
          </div>
        </div>
      </div>
      <div class="vb-body vb-list" v-if="hotData">
        <VideoItem v-for="(item,index) in hotdata" :key="index" :data="item" />
      </div>
    </div>
  </div>
</template>

<script>
import VideoBanner from "./components/VideoBanner";
import VideoItem from "./components/VideoItem";
export default {
  components: {
    VideoBanner,
    VideoItem
  },
  data() {
    return {
      showr: false,
      loading: false,

      //---轮播图
      bannerData: null,
      //---最新视频
      newData: null, //数据
      //---视频分类
      cateData: null,
      cateDataSon: null,
      //---热门视频
      hotData: null
    };
  },
  computed: {
    catedata() {
      return this.getNewData(this.cateDataSon);
    },
    hotdata() {
      return this.getNewData(this.hotData);
    }
  },
  beforeMount() {
    this.getData();
    this.getAnotherChange();
  },
  methods: {
    changeOthers() {
      this.loading = true;
      this.getAnotherChange();
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    },

    //分类点击事件
    cateAction(index, event) {
      $(".btn-category").removeClass("active");
      $(event.path[0]).addClass("active");
      this.cateDataSon = this.cateData[index].son;
    },

    /**处理返回sum条视频数据 */
    getNewData(datas, start = 1, sum = 4) {
      let i = (start - 1) * sum;
      let j = start * sum;
      //获取数据中随机四条
      let data = datas.slice(i, j);

      return data;
    },

    /**获取数据 */
    getData() {
      this.$instance.post("api/api/RecipeVideo").then(res => {
        let data = res.data.data;

        this.bannerData = data.adv;
        this.cateData = data.cate;
        this.hotData = data.hot;
        this.showr = true;

        //初始化分类数据
        this.cateDataSon = this.cateData[0].son;
      });
    },

    // 换一换获取数据
    getAnotherChange() {
      this.$instance
        .post("api/Mobileapi/anotherChange", { type: 3 })
        .then(res => {
          let data = res.data.data;
          this.newData = data;
        });
    }
  }
};
</script>

<style lang="scss">
.page_wrap {
  padding-bottom: 10px;
}
.video-box-wrap {
  margin-top: 10px;
  .vb-head {
    position: relative;
    padding: 0 10px;
    height: 40px;
    line-height: 40px;
    display: flex;
    justify-content: space-between;
    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 1px;
      background: #eee;
      transform: scaleY(0.5);
    }
    .tit-txt {
      padding-left: 24px;
      font-size: 16px;
      color: #333;
      background: url("~@/assets/img/page/video/title_icon.png") no-repeat left
        center;
      background-size: 18px auto;
    }
    .right-actions {
      overflow: hidden;
      font-size: 12px;
      color: #808080;
      .action {
        float: left;
        margin-left: 10px;
      }

      .btn-change {
        position: relative;
        display: inline-block;
        padding-right: 17px;
        .iconfont {
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%) rotate(0deg);
          width: 12px;
          height: 12px;
          line-height: 12px;
        }
      }
      .btn-change.loading {
        .iconfont {
          animation: loading 1s linear infinite;
        }
      }
      .btn-more {
        span {
          font-family: serif;
        }
      }
      .btn-category.active {
        color: $primarycolor;
      }
    }
  }
  .vb-list {
    padding: 0 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .video-item {
      margin-top: 10px;
    }
  }
}
@keyframes loading {
  100% {
    transform: translateY(-50%) rotate(360deg);
  }
}
</style>