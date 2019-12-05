<template>
  <!-- 视频分类 视频组件 -->
  <div class="video-item">
    <div class="vi-feature">
      <img
        :src="baseUrl + '/uploads/admin/images/20191129/a6bde821c173e197ee5a52c993ffbd7b.jpg'"
        alt
      />
    </div>
    <div class="vi-text">
      <div>
        <p class="vt-tit">清蒸花蛤西葫芦清蒸花蛤西葫芦</p>
        <div class="vt-info">
          <span>猪先生美食</span>
          <span>2019-11-07</span>
        </div>
      </div>
      <div class="vt-desc">长这么大的我从来没去过新疆，但是大学时期多次吃时期多次吃时期多次吃</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.video-item {
  position: relative;
  padding: 10px 0;
  display: flex;
  background: #fff;
  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 0px;
    border-bottom: 1px solid #ccc;
    transform: scaleY(0.5);
  }
  &:last-of-type {
    &::after {
      content: none;
    }
  }
  .vi-feature {
    position: relative;
    margin-right: 10px;
    flex-shrink: 0;
    width: 115px;
    height: 85px;
    border-radius: 3px;
    overflow: hidden;
    img {
      position: absolute;
      width: 100%;
      min-height: 100%;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
    }
  }
  .vi-text {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    line-height: 1.5;
    overflow: hidden;
    .vt-tit {
      margin-bottom: 5px;
      font-size: 14px;
      color: #333;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .vt-info {
      font-size: 10px;
      height: 14px;
      color: #666;
      overflow: hidden;
      display: flex;
      justify-content: space-between;
    }
    .vt-desc {
      font-size: 12px;
      color: #808080;
      @include text_ellipsis(2);
    }
  }

  .btn-buy {
    position: relative;
    float: right;
    width: 50px;
    height: 100%;
    text-align: center;
    font-size: 10px;
    border-radius: 8px;
    transition: all 0.2s ease-in-out;
    span {
      font-family: serif;
    }
    &:hover {
      color: #fff;
      background: #f26161;
    }
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 1px solid #f26161;
      border-radius: 8px;
      box-sizing: border-box;
    }
  }
}
</style>