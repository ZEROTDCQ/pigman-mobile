<template>
  <div class="news-tabs-wrap">
    <ul class="tabs-list">
      <li
        :class="['tl-item', {active: activeIndex == index}]"
        v-for="(item, index) in tabList"
        :key="index"
        @click="changeTab(index)"
      >{{item.label}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabList: [
        {
          id: 0,
          label: "综合新闻"
        },
        {
          id: 1,
          label: "饮食资讯"
        },
        {
          id: 2,
          label: "行业资讯"
        },
        {
          id: 3,
          label: "公司新闻"
        },
        {
          id: 4,
          label: "活动新闻"
        }
      ],
      activeIndex: 0
    };
  },
  methods: {
    changeTab(index) {
      this.activeIndex = index;
    }
  }
};
</script>

<style lang="scss">
.tabs-list {
  display: flex;
  background: #fff;
  .tl-item {
    position: relative;
    flex: 1;
    font-size: 14px;
    height: 49px;
    line-height: 49px;
    text-align: center;
    color: #4d4d4d;
  }
  .tl-item.active {
    font-size: 16px;
    color: $primarycolor;
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 10px;
      right: 10px;
      height: 2px;
      background: $primarycolor;
    }
    &::before {
      content: "";
      position: absolute;
      left: 50%;
      bottom: -4px;
      transform: translateX(-50%);
      width: 0;
      height: 0;
      border-width: 5px 4px 0;
      border-style: solid;
      border-color: $primarycolor transparent transparent;
    }
  }
}
</style>