<template>
  <!-- 精品栏目 -->
  <div class="area-box">
    <div class="area-head clearfix">
      <h3 class="ah-title">精品栏目</h3>
    </div>
    <div class="area-body">
      <div class="hrc-row">
        <div class="hrc-col">
          <div class="hrc-item row-2">
            <a href="javascript:;">
              <img
                :src="baseUrl + '/uploads/admin/images/20191031/cb1662b52eac8c6707ea742e2ae31ad5.jpg'"
                alt
              />
              <div class="hi-text">
                <p class="ht-name">饮食指南</p>
                <p class="ht-desc">超过上千各式菜谱</p>
              </div>
            </a>
          </div>
        </div>
        <div class="hrc-col">
          <div class="hrc-row">
            <div class="hrc-item">
              <a href="javascript:;">
                <img
                  :src="baseUrl + '/uploads/admin/images/20191107/6142f198ea658934e0b987b45a0dad72.jpg'"
                  alt
                />
                <div class="hi-text">
                  <p class="ht-name">会员专区</p>
                  <p class="ht-desc">会员等级制度及权益制度</p>
                </div>
              </a>
            </div>
          </div>
          <div class="hrc-row">
            <div class="hrc-item">
              <a href="javascript:;">
                <img
                  :src="baseUrl + '/uploads/admin/images/20191030/4a91cf69a864f0d3fd289b8d36ef6147.jpg'"
                  alt
                />
                <div class="hi-text">
                  <p class="ht-name">热门资讯</p>
                  <p class="ht-desc">今日时事尽现</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="hrc-row">
        <div class="hrc-col">
          <div class="hrc-item">
            <a href="javascript:;">
              <img
                :src="baseUrl + '/uploads/admin/images/20191107/6142f198ea658934e0b987b45a0dad72.jpg'"
                alt
              />
              <div class="hi-text">
                <p class="ht-name">活动资讯</p>
                <p class="ht-desc">了解感兴趣的活动</p>
              </div>
            </a>
          </div>
        </div>
        <div class="hrc-col">
          <div class="hrc-item">
            <a href="javascript:;">
              <img
                :src="baseUrl + '/uploads/admin/images/20191031/bcf2667850dc7ab0ffe5cb48d2e15464.jpg'"
                alt
              />
              <div class="hi-text">
                <p class="ht-name">联系我们</p>
                <p class="ht-desc">供货合作请点此处</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.hrc-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0;
  }
  .hrc-col {
    margin-right: 10px;
    flex: 1;
    &:last-child {
      margin-right: 0;
    }
  }
}
.hrc-item {
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