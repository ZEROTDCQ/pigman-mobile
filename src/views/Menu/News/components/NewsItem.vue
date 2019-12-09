<template>
  <div class="news-item">
    <div class="ni-feature">
      <img :src="baseUrl + data.picture" :alt="data.title" />
    </div>
    <div class="ni-text">
      <h3 class="nt-title">
        <a href="javascript:;">{{data.title}}</a>
      </h3>
      <div class="nt-info">
        <span>{{data.from_where}}</span>
        <span>{{data.create_time | formatDate}}</span>
      </div>
      <p class="nt-abstract">{{data.simple_desc}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object
    },
    index: {
      type: Number
    }
  }
};
</script>

<style lang="scss">
.news-item {
  padding: 10px;
  margin-top: 6px;
  background: #fff;
  overflow: hidden;
  .ni-feature {
    position: relative;
    float: left;
    width: 110px;
    height: 100px;
    background: #ccc;
    margin-right: 10px;
    overflow: hidden;
    img {
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 100%;
      min-height: 100%;
    }
  }
  .ni-text {
    overflow: hidden;
    color: #4d4d4d;
    .nt-title {
      font-size: 14px;
      line-height: 20px;
      margin-bottom: 10px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .nt-info {
      font-size: 10px;
      line-height: 13px;
      margin-bottom: 10px;
      span {
        margin-left: 25px;
        &:first-child {
          margin-left: 0;
        }
      }
    }
    .nt-abstract {
      font-size: 12px;
      line-height: 1.5;
      @include text_ellipsis(2);
    }
  }
}
</style>