<template>
  <div class="hm-recommend-cate">
    <div class="hrc-row">
      <div class="hrc-col">
        <div class="hrc-item row-2">
          <a href="javascript:;">
            <img
              :src="baseUrl + '/uploads/admin/images/20191031/cb1662b52eac8c6707ea742e2ae31ad5.jpg'"
              alt
            />
            <p class="hi-name">新鲜水果</p>
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
              <p class="hi-name">海鲜水产</p>
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
              <p class="hi-name">精选肉类</p>
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
            <p class="hi-name">冷冻饮食</p>
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
            <p class="hi-name">蔬菜蛋类</p>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.hm-recommend-cate {
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
    .hi-name{
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 40px;
      font-size: 14px;
      line-height: 40px;
      text-align: center;
      color: #fff;
      background: rgba($color: #000000, $alpha: 0.5)
    }
  }
}
</style>