<template>
  <!-- 职位详情 -->
  <div class="job_detail page_wrap">
    <div class="jd-head">
      <div class="jd-btn btn-back fl">
        <a href="javascript:;">
          <i class="iconfont">&#xe6f4;</i>
        </a>
      </div>
      <h5 class="jd-tit">猪先生招聘</h5>
      <div class="jd-btn btn-share fr" @click="shareAction">
        <a href="javascript:;">
          <i class="iconfont">&#xe62f;</i>
        </a>
      </div>
    </div>
    <div class="jd-body">
      <div class="briefinfo bg_white">
        <div class="bf-top-title">
          <h3 class="split-title line big">测试商品</h3>
          <span class="salary">6-11K</span>
        </div>
        <div class="demand">
          <span class="demand-icon">
            <i class="iconfont icon-weizhi">&#xe673;</i>
            广东深圳
          </span>
          <span class="demand-icon">
            <i class="iconfont icon-xueli">&#xe62a;</i>
            应届生
          </span>
          <span class="demand-icon">
            <i class="iconfont icon-jingyan">&#xe618;</i>
            3年
          </span>
          <span class="demand-icon">
            <i class="iconfont icon-renshu">&#xe647;</i>
            1人
          </span>
        </div>
        <div class="treatment">
          <span class="treatment-text">五险一金</span>
          <span class="treatment-text">五险一金</span>
          <span class="treatment-text">五险一金</span>
        </div>
      </div>
      <div class="job_desc bg_white gap">
        <div class="bf-top-title">
          <h3 class="split-title line">职位描述</h3>
        </div>
        <div class="bf-bottom-con">
          <p>1.主要负责软件整体形象规范，软件界面的视觉和视觉美化软件界面的视觉和视觉美化</p>
          <p>1.主要负责软件整体形象规范，软件界面的视觉和视觉美化软件界面的视觉和视觉美化</p>
        </div>
      </div>
      <div class="groups_desc bg_white gap">
        <div class="bf-top-title">
          <h3 class="split-title line">团队介绍</h3>
        </div>
        <div class="bf-bottom-con">
          <p>1.科技团队平均年龄不超过26岁，比一般的传统企业更具有活力，团队间协作更加高效、和谐。在注重员工业务能力提升的同时，也会结合员工的兴趣爱好及个人特长，让其可以向多种方向发展。</p>
          <p>2.科技是一个态度务实、乐于分享、积极向上的团队，一点点的积累让我们不断壮大，期待有更好的你加入我们。</p>
        </div>
      </div>
      <div class="company_desc bg_white gap">
        <div class="bf-top-title">
          <h3 class="split-title line">公司介绍</h3>
        </div>
        <div class="bf-bottom-con">
          <p>1.科技团队平均年龄不超过26岁，比一般的传统企业更具有活力，团队间协作更加高效、和谐。在注重员工业务能力提升的同时，也会结合员工的兴趣爱好及个人特长，让其可以向多种方向发展。</p>
          <p>2.科技是一个态度务实、乐于分享、积极向上的团队，一点点的积累让我们不断壮大，期待有更好的你加入我们。</p>
        </div>
      </div>
      <div class="job_recommend bg_white gap">
        <div class="bf-top-title recommend-head">
          <h3 class="split-title line">推荐职位</h3>
          <a href="javascript:;" class="more">
            查看更多
            <span>&gt;</span>
          </a>
        </div>
        <div class="bf-bottom-con">
          <JobItem v-for="i in 4" :key="i" />
        </div>
      </div>
    </div>
    <div class="jd-actions">
      <a class="action-btn" href="javascript:;">
        <i class="iconfont">&#xe6bc;</i>
        <span class="action-txt">立即沟通</span>
      </a>
      <a class="action-btn apply" href="javascript:;">
        <i class="iconfont">&#xe639;</i>
        <span class="action-txt">在线申请</span>
      </a>
    </div>

    <ShareTool title="分享职位" ref="shareTool" />
  </div>
</template>

<script>
import ShareTool from "@/components/ShareTool/ShareTool";
import JobItem from "./components/JobItem";
export default {
  components: {
    ShareTool,
    JobItem
  },
  methods: {
    shareAction() {
      this.$refs.shareTool.sharePopup();
    }
  }
};
</script>

<style lang="scss">
html,
body,
.page_wrap {
  position: relative;
  width: 100%;
  height: 100%;
  background: #f5f5f5;
}
.jd-head {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 510;
  height: 44px;
  color: #fff;
  font-size: 16px;
  line-height: 44px;
  background-color: $primarycolor;
  user-select: none;
  .jd-btn {
    position: absolute;
    top: 0;
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
  .jd-tit {
    margin: 0 44px;
    font-size: 16px;
    font-weight: normal;
    text-align: center;
  }
}
.jd-body {
  position: absolute;
  top: 44px;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  overflow-y: auto;
  .briefinfo {
    padding: 10px;
    .bf-top-title {
      display: flex;
      justify-content: space-between;
    }
    .salary {
      color: $primarycolor;
    }
  }
  .job_recommend:last-child {
    margin-bottom: 50px;
  }
}
.recommend-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .more {
    font-size: 12px;
    color: #333;
    span {
      font-family: serif;
    }
  }
}
.bf-top-title {
  margin-bottom: 10px;
}
.split-title {
  height: 16px;
  line-height: 16px;
  font-size: 16px;
  color: #333;
  &.line {
    padding-left: 4px;
    border-left: 2px solid $primarycolor;
  }
  &.big {
    height: 18px;
    line-height: 18px;
    font-size: 18px;
  }
}
.bf-bottom-con {
  font-size: 14px;
  line-height: 1.5;
  text-align: justify;
  color: #333;
}
.demand {
  overflow: hidden;
  .demand-icon {
    float: left;
    margin: 0px 20px 5px 0;
    font-size: 12px;
  }
}
.treatment {
  margin-top: 5px;
  overflow: hidden;
  .treatment-text {
    float: left;
    padding: 0 5px;
    margin-right: 5px;
    height: 16px;
    line-height: 16px;
    font-size: 12px;
    border-radius: 2px;
    color: #fff;
    background: $primarycolor;
  }
}

.bg_white {
  background: #fff;
  padding: 10px;
}
.gap {
  margin-top: 6px;
}

.jd-actions {
  position: absolute;
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