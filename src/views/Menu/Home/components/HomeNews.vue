<template>
  <!-- 首页饮食资讯 -->
  <div class="area-box menu-news">
    <div class="area-head clearfix">
      <h3 class="ah-title">饮食资讯</h3>
      <p class="btn-enter-area">
        <a href="javascript:;">进入专区</a>
      </p>
    </div>
    <div class="area-body recommend-cate">
      <div class="rc-row">
        <div class="rc-col">
          <div class="rc-item row-2">
            <a href="javascript:;">
              <img
                :src="baseUrl + '/uploads/admin/images/20191031/cb1662b52eac8c6707ea742e2ae31ad5.jpg'"
                alt
              />
              <div class="hi-text">
                <p class="ht-name">吃喝攻略</p>
                <p class="ht-desc">Get吃货圈潮流最前线~</p>
              </div>
            </a>
          </div>
        </div>
        <div class="rc-col">
          <div class="rc-row">
            <div class="rc-item">
              <a href="javascript:;">
                <img
                  :src="baseUrl + '/uploads/admin/images/20191107/6142f198ea658934e0b987b45a0dad72.jpg'"
                  alt
                />
                <div class="hi-text">
                  <p class="ht-name">食品安全</p>
                  <p class="ht-desc">民以食为天，食以安至上</p>
                </div>
              </a>
            </div>
          </div>
          <div class="rc-row">
            <div class="rc-item">
              <a href="javascript:;">
                <img
                  :src="baseUrl + '/uploads/admin/images/20191030/4a91cf69a864f0d3fd289b8d36ef6147.jpg'"
                  alt
                />
                <div class="hi-text">
                  <p class="ht-name">文化典故</p>
                  <p class="ht-desc">最近大家在吃什么</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="rc-row">
        <div class="rc-col">
          <div class="rc-item">
            <a href="javascript:;">
              <img
                :src="baseUrl + '/uploads/admin/images/20191107/6142f198ea658934e0b987b45a0dad72.jpg'"
                alt
              />
              <div class="hi-text">
                <p class="ht-name">健康指南</p>
                <p class="ht-desc">饮食相关野史趣闻</p>
              </div>
            </a>
          </div>
        </div>
        <div class="rc-col">
          <div class="rc-item">
            <a href="javascript:;">
              <img
                :src="baseUrl + '/uploads/admin/images/20191031/bcf2667850dc7ab0ffe5cb48d2e15464.jpg'"
                alt
              />
              <div class="hi-text">
                <p class="ht-name">新鲜资讯</p>
                <p class="ht-desc">最最权威、最热、最新饮食次讯</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MenuItem from "./MenuItem";
export default {
  components: {
    MenuItem
  }
};
</script>

<style lang="scss" scoped>
.rc-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0;
  }
  .rc-col {
    margin-right: 10px;
    flex: 1;
    &:last-child {
      margin-right: 0;
    }
  }
}
.rc-item {
  position: relative;
  width: 100%;
  height: 168px;
  border-radius: 5px;
  box-shadow: 0 0 10px #ccc;
  overflow: hidden;
  img {
    display: block;
    width: 100%;
    min-height: 100%;
  }
  &.row-2 {
    height: 346px;
  }
  .hi-text {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 40px;
    line-height: 1;
    text-align: center;
    color: #fff;
    background: rgba($color: #000000, $alpha: 0.5);
    .ht-name {
      font-size: 14px;
      margin: 5px 0;
    }
    .ht-desc {
      font-size: 10px;
    }
  }
}
</style>