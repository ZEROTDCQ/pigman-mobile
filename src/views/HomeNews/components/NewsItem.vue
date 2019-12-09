<template>
  <div class="news-item" v-if="data">
    <div class="ni-feature">
      <img :src="baseUrl+data.picture" :alt="data.title" width="100%" height="100%" />
    </div>
    <div class="ni-text">
      <h3 class="nt-title">
        <a :href="'/news_detail.html?id='+data.id">{{data.title}}</a>
      </h3>
      <div class="nt-info">
        <span>{{data.from_where}}</span>
        <span>{{timeCo(data.publish_time)}}</span>
      </div>
      <p class="nt-abstract">{{data.simple_desc}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Object
  },
  computed: {},
  mounted() {
    console.log(this.data);
  },
  methods: {
    //时间搓转时间格式
    timeCo(dater) {
      var date = new Date(dater * 1000); //如果date为13位不需要乘1000
      var Y = date.getFullYear() + "-";
      var M =
        (date.getMonth() + 1 < 10
          ? "0" + (date.getMonth() + 1)
          : date.getMonth() + 1) + "-";
      var D = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
      return Y + M + D;
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
    float: left;
    width: 110px;
    height: 100px;
    background: #ccc;
    margin-right: 10px;
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
          min-width: 50px;
          display: inline-block;
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