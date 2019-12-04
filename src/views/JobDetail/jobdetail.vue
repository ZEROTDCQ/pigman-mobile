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
      <div class="jd-btn btn-share fr">
        <a href="javascript:;">
          <i class="iconfont">&#xe62f;</i>
        </a>
      </div>
    </div>
    <div class="jd-body">
      <div class="banner_bg immersion-wrap">
        <img src="~@/assets/img/page/jobdetail/detail_bg.jpg" alt />
        <div class="immersion">
          <div class="briefinfo">
            <h3 class="bi-title">测试商品</h3>
            <div class="line-clamp-wages">
              <span class="wages">10000-1500</span>
            </div>
            <div class="bf-tags">
              <div class="tag-icon">
                <i class="iconfont"></i>
                深圳-龙岗区
              </div>
              <div class="tag-icon">
                <i class="iconfont"></i>
                应届生
              </div>
              <div class="tag-icon">
                <i class="iconfont"></i>
                大专
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import JobItem from "./components/JobItem";
export default {
  components: {
    JobItem
  }
};
</script>

<style lang="scss">
.jd-head {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 510;
  height: 44px;
  color: #333;
  font-size: 16px;
  line-height: 44px;
  background-color: #fff;
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
.banner_bg {
  img {
    display: block;
    width: 100%;
  }
}
.immersion-wrap {
  position: relative;
  .immersion {
    position: absolute;
    width: 92%;
    left: 50%;
    top: 50%;
    margin-left: -46%;
    box-shadow: 0 0 20px 10px rgba(0, 0, 0, 0.1);
    background: #fff;
  }
}
.immersion {
  .briefinfo {
    padding: 0.25rem 0.32rem 0.15rem 0.32rem;
    line-height: 1.5;
    .bi-title {
      font-size: 18px;
      font-weight: normal;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  .line-clamp-wages {
    padding-bottom: 5px;
    border-bottom: 1px solid #eee;
    .wages {
      font-size: 18px;
      color: #f60;
    }
  }
  .bf-tags {
    margin-top: 5px;
  }
  .tag-icon {
    .iconfont {
      margin-right: 5px;
    }
    display: inline-block;
    margin-right: 10px;
    font-size: 14px;
    color: #555;
  }
}
</style>