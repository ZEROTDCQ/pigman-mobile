<template>
  <!-- 活动详情 -->
  <div class="activity_detail page_wrap">
    <div :class="['ad-head', {bg_white: bgWhite}]">
      <div class="ad-btn btn-back fl">
        <a href="javascript:;">
          <i class="iconfont">&#xe6f4;</i>
        </a>
      </div>
      <h5 class="ad-tit">猪先生活动</h5>
      <div class="ad-btn btn-share fr" @click="shareAction">
        <a href="javascript:;">
          <i class="iconfont">&#xe62f;</i>
        </a>
      </div>
    </div>
    <div class="poster_img_outside">
      <img
        src="https://img-qn.hudongba.com/upload/_oss/userposterimageimg/201911/23/81574490954489_posterimage8_6056.jpg@!wap-detail-post-image"
        alt="海报"
      />
    </div>
    <div class="dit-wrap">
      <div class="detail_info_top">
        <div class="detail_title">
          <div id="dt_title" class="detail_title_h1">
            <span class="detail_title_h1_bar">2019AI刷脸支付万亿财富大会</span>
          </div>
        </div>
        <div class="mb_share_wrap">
          <div class="where">
            <span>猪先生</span>
          </div>
          <div class="icon-num ll">
            <i class="iconfont">&#xe629;</i>
            <span>2120</span>
          </div>
          <div class="refund">
            <i class="iconfont">&#xe659;</i>
            不支持退款
          </div>
        </div>
      </div>
      <div class="detail_time_attr_join">
        <div class="field_row time">
          <div class="fr-icon">
            <i class="iconfont">&#xe675;</i>
          </div>
          <div class="fr-con">12-08 14:00 至 19:00</div>
        </div>
        <div class="field_row address">
          <div class="fr-icon">
            <i class="iconfont">&#xe734;</i>
          </div>
          <div class="fr-con">北京朝阳区瑰丽酒店</div>
          <div class="fr-icon right">
            <i class="iconfont">&#xe735;</i>
          </div>
        </div>
        <div class="field_row time">
          <div class="fr-icon">
            <i class="iconfont">&#xe663;</i>
          </div>
          <div class="fr-con">已报名117人</div>
        </div>
        <div class="field_row time">
          <div class="fr-icon">
            <i class="iconfont">&#xe666;</i>
          </div>
          <div class="fr-con">
            <span class="money">¥0.00</span>
          </div>
        </div>
      </div>
    </div>
    <div class="ad-content">
      <p>活动详情</p>
      <img
        src="https://img-user-qn.hudongba.com/upload/_oss/userarticleimg/201911/23/91574491178080_article9_6102.jpg"
        alt
      />
    </div>
    <div class="ad-actions">
      <a class="action-btn" href="javascript:;">
        <i class="iconfont">&#xe6bc;</i>
        <span class="action-txt">在线咨询</span>
      </a>
      <a class="action-btn apply" href="javascript:;">
        <i class="iconfont">&#xe639;</i>
        <span class="action-txt">我要报名</span>
      </a>
    </div>

    <ShareTool title="分享活动" ref="shareTool" />
  </div>
</template>

<script>
import ShareTool from "@/components/ShareTool/ShareTool";
export default {
  components: { ShareTool },
  data() {
    return {
      bgWhite: false
    };
  },
  methods: {
    shareAction() {
      this.$refs.shareTool.sharePopup();
    }
  },
  mounted() {
    let flag = (document.documentElement.clientWidth / 375) * 44;
    $(document).on("scroll", () => {
      console.log($(document).scrollTop());
      if ($(document).scrollTop() >= flag) {
        this.bgWhite = true;
      } else {
        this.bgWhite = false;
      }
    });
  }
};
</script>

<style lang="scss">
.activity_detail {
  background: #f5f5f5;
}
.ad-head {
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  height: 44px;
  font-size: 16px;
  line-height: 44px;
  .ad-btn {
    position: absolute;
    top: 0;
    color: #fff;
    a {
      display: block;
      padding: 0 10px;
    }
  }
  .fl {
    left: 0;
  }
  .fr {
    right: 0;
  }
  .ad-tit {
    display: none;
    margin: 0 44px;
    font-size: 16px;
    font-weight: normal;
    text-align: center;
  }
}
.ad-head.bg_white {
  background: #fff;
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
  .ad-btn {
    color: #000;
  }
  .ad-tit {
    display: block;
  }
}
.poster_img_outside {
  width: 100%;
  text-align: center;
  position: relative;
  min-height: 35px;
  img {
    display: block;
    width: 100%;
  }
}
.dit-wrap {
  padding: 0 5px;
  background: #fff;
  .detail_info_top {
    position: relative;
    padding: 7px 20px 0;
    margin-top: -20px;
    background: url("~@/assets/img/page/activitydetail/DetailTitBg.png")
      no-repeat center bottom/100% 100%;
  }
  .detail_title {
    padding-top: 10px;
    span {
      display: inline-block;
      font-size: 18px;
      line-height: 25px;
    }
  }
  .mb_share_wrap {
    height: 30px;
    line-height: 30px;
    font-size: 12px;
    color: #98a4b4;
    width: 100%;
    box-sizing: border-box;
    white-space: nowrap;
    overflow: hidden;
    .where,
    .icon-num {
      float: left;
      margin-right: 10px;
      margin-left: 0;
    }
    .refund {
      float: right;
      color: #f60;
    }
  }
  .field_row {
    margin: 0 20px;
    height: 32px;
    line-height: 32px;
    display: flex;
    font-size: 14px;
    .fr-icon {
      flex-shrink: 0;
      width: 25px;
      text-align: left;
      color: #999;
      &.right {
        color: #666;
        text-align: right;
      }
    }
    .fr-con {
      flex: 1;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      color: #333;
      .money {
        color: #f66;
      }
    }
  }
}
.ad-content {
  margin-top: 6px;
  margin-bottom: 50px;
  padding: 8px 10px;
  background: #fff;
  img {
    max-width: 100%;
  }
}
.ad-actions {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 49px;
  line-height: 49px;
  font-size: 16px;
  text-align: center;
  display: flex;
  color: $primarycolor;
  background: #fff;
  border-top: 1px solid #f1f1f1;
  .action-btn {
    flex: 1;
  }
  .apply {
    margin-top: -1px;
    color: #fff;
    background: $primarycolor;
  }
}
</style>