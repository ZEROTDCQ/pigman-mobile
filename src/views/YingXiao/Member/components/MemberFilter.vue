<template>
  <!-- 预定商品筛选 -->
  <div class="booking_filter">
    <ul class="filter-row">
      <li v-for="i in filter" :key="i">{{i}}</li>
    </ul>
    <div class="arrow-down">
      <i class="iconfont">&#xe69a;</i>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filter: ["所有商品", "乳品雪糕", "海鲜水产", "新鲜蔬菜", "卤味熟食"]
    };
  }
};
</script>

<style lang="scss">
.booking_filter {
  padding-left: 10px;
  height: 32px;
  background: #fafafa;
  display: flex;
  .filter-row {
    flex: 1;
    display: flex;
    li {
      flex: 1;
      height: 100%;
      line-height: 32px;
      font-size: 14px;
      text-align: center;
      color: #333;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      &.curr {
        color: $primarycolor;
      }
    }
  }
  .arrow-down {
    flex-shrink: 0;
    width: 32px;
    height: 32px;
    text-align: center;
    line-height: 32px;
  }
}
</style>