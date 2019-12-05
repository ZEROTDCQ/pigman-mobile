<template>
  <!-- 手机端分享弹窗组件 -->
  <div class="popup-wrapper">
    <input class="input-link" type="text" readonly :value="currentLink" ref="linkInput" />
    <div class="alert-msg">
      <div class="msg-content">
        <transition name="scale-toast">
          <div v-if="toastSuccess" class="toast toast-success">复制成功，粘贴链接给好友吧！</div>
          <div v-if="toastFail" class="toast toast-fail">复制失败，请重试！</div>
        </transition>
      </div>
    </div>
    <transition name="popup-show">
      <div v-if="showSharePop" class="popup-panel">
        <div class="popup-header">
          <div class="h-left popup-title">{{title}}</div>
          <div class="h-right popup-btn" @click="showSharePop = false">
            <i class="iconfont">&#xe62d;</i>
          </div>
        </div>
        <div class="popup-body share-panel">
          <ul class="share-list">
            <li @click="shareAction(0)">
              <div class="share-img wechat"></div>
              <span>微信好友</span>
            </li>
            <li @click="shareAction(0)">
              <div class="share-img moments"></div>
              <span>朋友圈</span>
            </li>
            <li @click="shareAction(0)">
              <div class="share-img qq"></div>
              <span>QQ好友</span>
            </li>
            <li @click="shareAction(1, 'qzone')">
              <div class="share-img qzone"></div>
              <span>QQ空间</span>
            </li>
            <li @click="shareAction(1, 'weibo')">
              <div class="share-img weibo"></div>
              <span>新浪微博</span>
            </li>
            <li @click="shareAction(0)">
              <div class="share-icon copy-link iconfont">&#xe608;</div>
              <span>复制链接</span>
            </li>
          </ul>
        </div>
      </div>
    </transition>
    <transition name="popup">
      <div v-if="showSharePop" class="popup-mask" @click="showSharePop = false"></div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "分享"
    }
  },
  computed: {
    currentLink() {
      return location.href;
    }
  },
  data() {
    return {
      showSharePop: false,
      toastTimer: null,
      toastSuccess: false,
      toastFail: false
    };
  },
  methods: {
    sharePopup() {
      this.showSharePop = true;
    },
    copyLinkAction() {
      this.toastSuccess = true;
      this.toastFail = false;
      clearTimeout(this.toastTimer);
      this.toastTimer = setTimeout(() => {
        this.toastSuccess = false;
      }, 1500);
    },
    copyLinkFailAction() {
      this.toastSuccess = false;
      this.toastFail = true;
      clearTimeout(this.toastTimer);
      this.toastTimer = setTimeout(() => {
        this.toastFail = false;
      }, 1500);
    },
    shareAction(type, flag) {
      // type  分享方式：0，复制链接   1，跳转接口分享
      // flag  分享到哪里：qzone，QQ空间   weibo，新浪微博
      if (!type) {
        // 复制链接
        let inp = this.$refs.linkInput;
        if (inp && inp.select) {
          // select text
          inp.select();
          try {
            // copy text
            document.execCommand("copy");
            inp.blur();
            this.copyLinkAction();
          } catch (err) {
            this.copyLinkFailAction();
          }
        } else {
          this.copyLinkFailAction();
        }
      }
    }
  }
};
</script>

<style lang="scss">
.alert-msg {
  .msg-content {
    position: fixed;
    z-index: 910;
    left: 0;
    top: 50%;
    width: 100%;
    transform: translateY(-50%);
    display: flex;
    justify-content: center;
  }
  .toast {
    padding: 0 17px;
    height: 44px;
    line-height: 44px;
    font-size: 16px;
    border-radius: 4px;
    color: #fff;
    background: rgba($color: #000000, $alpha: 0.8);
  }
}
.popup-mask {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.65);
  z-index: 511;
}

.input-link {
  position: fixed;
  top: 0;
  left: 0;
  transform: translate(-100%, -100%);
  opacity: 0;
}
.popup-panel {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  z-index: 512;
  margin: 0;
  min-height: 166px;
  overflow-y: auto;
  overflow-x: hidden;
  .popup-header {
    padding: 15px 17px;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .popup-body {
    padding: 0 17px;
  }
}
.popup-header {
  .popup-title {
    flex: 1;
    font-size: 16px;
    color: #333;
  }
}
.share-list {
  padding: 25px 0;
  display: flex;
  flex-wrap: wrap;
  li {
    flex-shrink: 0;
    width: 20%;
    text-align: center;
    span {
      margin-bottom: 10px;
      color: #333;
      display: block;
      font-size: 12px;
      line-height: 1;
    }
  }
  .share-img,
  .share-icon {
    width: 28px;
    height: 28px;
    margin: 14px auto;
    display: block;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    &.wechat {
      background-image: url("~@/assets/img/page/jobdetail/share-wechat.svg");
    }
    &.moments {
      background-image: url("~@/assets/img/page/jobdetail/share-moments.svg");
    }
    &.qq {
      background-image: url("~@/assets/img/page/jobdetail/share-qq.svg");
    }
    &.qzone {
      background-image: url("~@/assets/img/page/jobdetail/share-qzone.svg");
    }
    &.weibo {
      background-image: url("~@/assets/img/page/jobdetail/share-weibo.svg");
    }
  }
  .copy-link {
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.popup-enter-active,
.popup-leave-active {
  transition: opacity 0.24s;
}
.popup-enter, .popup-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.popup-show-enter-active,
.popup-show-leave-active {
  transition: transform 0.24s;
}
.popup-show-enter, .popup-show-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateY(100%);
}
.scale-toast-enter-active {
  transition: transform 0.24s;
}
.scale-toast-enter {
  transform: scale(1.2);
}
.scale-toast-leave-to {
  display: none;
}
</style>