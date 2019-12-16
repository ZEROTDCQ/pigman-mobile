<template >
  <div id="menuDetail" class="menu-detail" v-if="detailData" v-show="showr">
    <div class="menu-feature">
      <div class="img-box" v-show="videoImg" @click="playVideo">
        <img :src="baseUrl + detailData.picture" alt />
        <i class="play-video" v-if="detailData.video"></i>
      </div>
      <div class="video-box" v-if="detailData.video">
        <video controls id="video" ref="video">
          <source :src="baseUrl + detailData.video" type="video/mp4" />
        </video>
      </div>
      <!-- if -->
      <!-- <img v-if="!ifvideo" :src="baseUrl + detailData.picture" alt /> -->
      <!-- else-if -->
      <!-- <div v-else-if="ifvideo" id="video-box">
        <video controls id="video">
          <source :src="baseUrl + detailData.video" type="video/mp4" />
        </video>
        <div class="img-box" v-show="videoImg">
          <img :src="baseUrl + detailData.picture" alt />
          <i class="play-video" @click="playVideo"></i>
        </div>
      </div>-->
    </div>
    <div class="intro">
      <h3 class="menu-tit">{{detailData.title}}</h3>
      <p class="from count">
        <span>{{detailData.source}}</span>
        <span>{{count}}人浏览</span>
      </p>
      <p class="menu-desc">{{detailData.describel}}</p>
    </div>

    <div class="menu-area">
      <div class="ma-head">
        <div class="mh-title">小技巧</div>
      </div>
      <div class="ma-body">
        <div class="miyu">{{detailData.antic}}</div>
      </div>
    </div>

    <div class="menu-area">
      <div class="ma-head">
        <div class="mh-title">食材清单</div>
      </div>
      <div class="ma-body">
        <ul class="food-list" v-if="materialsData">
          <li v-for="(item,index) in materialsData" :key="index">
            <span class="fl-name">{{item.name}}</span>
            <span class="fl-count">{{item.number}}</span>
            <span class="fl-right">{{item.material}}</span>
          </li>
        </ul>
        <!-- <div class="ingred-open" @click="open" v-show="openShow">
          展开全部
          <i>&gt;</i>
        </div>-->
      </div>
    </div>

    <div class="menu-area">
      <div class="ma-head">
        <div class="mh-title">做法步骤</div>
      </div>
      <div class="ma-body">
        <div class="buzhou">
          <div
            v-for="(item, index) in detailData.practice"
            :key="index"
            :class="['step','step' + (index + 1)]"
          >
            <!-- <div class="step-icon">{{index + 1}}</div> -->
            <p class="step-txt">
              <span>{{index + 1}}</span>
              {{item}}
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="menu-area">
      <div class="ma-head">
        <div class="mh-title">营养密语</div>
      </div>
      <div class="ma-body">
        <div class="miyu">{{detailData.honey}}</div>
      </div>
    </div>

    <div class="menu-area">
      <div class="ma-head">
        <div class="mh-title">为你推荐</div>
        <a href="javascript:;" :class="['mh-link', {loading: loading}]" @click="changeOthers">
          换一换
          <i class="iconfont icon-change">&#xe635;</i>
        </a>
      </div>
      <div class="ma-body">
        <div class="tuijian" v-if="recommendData">
          <MenuItem v-for="(item,index) in recommendData" :key="item.title + index" :data="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MenuItem from "./components/MenuItem";
export default {
  components: {
    MenuItem
  },
  data() {
    return {
      showr: false,
      loading: false,

      ifvideo: false,
      videoImg: true,
      openShow: false,

      detailData: null, //数据
      materialsData: null, //用料
      recommendData: [] //底部推荐
    };
  },
  computed: {
    count() {
      let sum = this.detailData.count;
      if (sum < 10000) {
        return sum;
      } else {
        return sum % 10000 == 0
          ? Math.floor(sum / 10000) + "万"
          : Math.floor(sum / 10000) + "万+";
      }
    }
  },
  beforeMount() {
    this.getData();
    this.changeOthers();
  },
  methods: {
    getData() {
      let id = this.getUrlParam("id");
      this.$instance.post("/api/Mobileapi/menuDetail", { id: id }).then(res => {
        let data = res.data.data;
        this.detailData = data.top;
        this.materialsData = this.getJson(data.top);

        let video = this.detailData.video;
        this.ifvideo = video == "" ? false : true;

        this.showr = true;
      });
    },

    // 推荐换一换获取数据
    getAnotherChange() {
      this.recommendData = [];
      this.loading = true;
      this.$instance
        .post("/api/Mobileapi/anotherChange")
        .then(res => {
          let data = res.data.data;
          this.recommendData = data;
        })
        .finally(() => {
          this.loading = false;
        });
    },

    playVideo() {
      if (this.detailData.video) {
        this.$refs.video.play();
        this.videoImg = false;
      }
    },
    changeOthers() {
      if (!this.loading) {
        this.getAnotherChange();
      }
    },

    /**返回地址栏指定参数 */
    getUrlParam(name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
      var r = window.location.search.substr(1).match(reg); //匹配目标参数
      if (r != null) return unescape(r[2]);
      return null; //返回参数值
    },

    /* 重写菜谱用料数据格式 */
    getJson(data) {
      let attr1 = [];
      let attr2 = [];
      console.log(data);

      if (data.used) {
        let used = data.used; //主料
        for (let i = 0; i < used.name.length; i++) {
          attr1.push({});
          attr1[i]["name"] = used.name[i];
          attr1[i]["number"] = used.number[i] ? used.number[i] : "无";
          attr1[i]["material"] = "主料";
        }
      }
      if (!data.peiliao) {
        null;
      } else {
        let peiliao = data.peiliao; //副料

        for (let i = 0; i < peiliao.name.length; i++) {
          attr2.push({});
          attr2[i]["name"] = peiliao.name[i];
          attr2[i]["number"] = peiliao.number[i] ? peiliao.number[i] : "无";
          attr2[i]["material"] = "副料";
        }
      }

      attr1 = attr1.concat(attr2);
      if (attr1.length > 5) {
        this.openShow = true;
      }
      return attr1;
    },

    /**点击展开全部 */
    open() {
      let li = $(".food-list").find("li");
      let ulh = li.height() * li.length;

      $(".food-list").height(ulh);
      this.openShow = false;
    }
  }
};
</script>

<style>
body {
  background: #f5f5f5;
}
</style>
<style lang="scss" scoped>
.menu-detail {
  color: #333;
}
.menu-feature {
  overflow: hidden;
  img {
    display: block;
    width: 100%;
    height: auto;
  }
}
.intro {
  padding: 10px;
  line-height: 20px;
  background: #fff;
  overflow: hidden;
  .menu-tit {
    margin-bottom: 10px;
    font-size: 16px;
  }
  .from.count {
    margin-bottom: 10px;
    font-size: 12px;
    color: #999;
    overflow: hidden;
    span {
      float: left;
      margin-right: 10px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
  .menu-desc {
    font-size: 14px;
    height: 100%;
    white-space: pre-wrap;
    word-break: break-all;
    text-align: justify;
  }
}
.menu-area {
  margin-top: 6px;
  background: #fff;
  .ma-head {
    position: relative;
    padding: 0 10px;
    height: 30px;
    line-height: 30px;
    overflow: hidden;
    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 1px;
      background: #ccc;
      transform: scaleY(0.5);
    }
    .mh-title {
      float: left;
      font-size: 16px;
    }
    .mh-link {
      float: right;
      font-size: 12px;
      color: #999;
      .icon-change {
        display: inline-block;
      }
    }
    .mh-link.loading {
      i {
        animation: changeRotate 1s infinite linear;
      }
    }
  }
}
.ingred-open {
  height: 30px;
  width: 100%;
  background-color: #fff;
  line-height: 30px;
  text-align: center;
  font-size: 14px;
  i {
    content: "";
    display: inline-block;
    font-style: inherit;
    margin-left: 1px;
    font-size: 14px;
    transform: rotate(90deg);
  }
}
@keyframes changeRotate {
  100% {
    transform: rotate(360deg);
  }
}
.food-list {
  li {
    position: relative;
    padding: 0 10px;
    height: 30px;
    line-height: 30px;
    display: flex;
    font-size: 14px;
    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 1px;
      background: #ccc;
      transform: scaleY(0.5);
    }
    span {
      text-align: left;
    }
    .fl-name {
      flex: 4;
      color: $primarycolor;
      letter-spacing: 0.1em;
    }
    .fl-count {
      flex: 3;
      color: #666;
    }
    .fl-right {
      flex: 1;
      color: #666;
    }
  }
}

.buzhou {
  padding-bottom: 10px;
  .step {
    margin-top: 10px;
    padding: 0 10px;
    .step-txt {
      font-size: 14px;
      height: 100%;
      line-height: 20px;
      text-align: justify;
      span {
        display: content;
        display: inline-block;
        margin-bottom: 4px;
        width: 18px;
        height: 18px;
        line-height: 18px;
        font-size: 14px;
        text-align: center;
        color: $primarycolor;
        position: relative;
        font-weight: bold;
        &::after {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          width: 200%;
          height: 200%;
          border: 2px solid $primarycolor;
          border-radius: 50%;
          box-sizing: border-box;
          transform-origin: left top;
          transform: scale(0.5);
        }
      }
    }
  }
}

.miyu {
  padding: 10px;
  font-size: 14px;
  height: 100%;
  line-height: 20px;
  text-align: justify;
  white-space: pre-wrap;
}

/deep/.tuijian {
  overflow: hidden;
  .menu-item {
    margin-bottom: 6px;
    &:last-child {
      margin-bottom: 0;
    }
  }
}

.menu-feature {
  position: relative;
  width: 100%;
  height: 260px;
  background-color: rgb(25, 29, 29);
  .img-box,
  .video-box {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .img-box {
    z-index: 4;
    img {
      position: absolute;
      left: 0;
      top: 50%;
      width: 100%;
      min-height: 100%;
      transform: translateY(-50%);
    }
    i {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 50px;
      height: 50px;
      background-color: rgba(0, 0, 0, 0.6);
      border-radius: 50%;
      background-image: url("~@/assets/img/page/video/bf_icon.png");
      background-size: 50%;
      background-position: 58% 50%;
      background-repeat: no-repeat;
    }
  }
  .video-box {
    position: absolute;
    z-index: 3;
    top: 0;
    left: 0;
    video {
      display: block;
      width: 50%;
      height: 50%;
      transform-origin: left top;
      transform: scale(2);
    }
  }
}
</style>