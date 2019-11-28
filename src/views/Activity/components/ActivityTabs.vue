<template>
  <div class="activity-tabs-wrap">
    <ul class="tabs-list">
      <li
        :class="['tl-item', {active: activeIndex == index}]"
        v-for="(item, index) in tabList"
        :key="index"
        @click="changeTab(index)"
      >
        <router-link :to="{name: item.routerName}">{{item.label}}</router-link>
      </li>
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
          label: "推荐活动",
          routerName: "recommend"
        },
        {
          id: 1,
          label: "会员活动",
          routerName: "member"
        },
        {
          id: 2,
          label: "专题活动",
          routerName: "subject"
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
    flex: 1;
    a {
      position: relative;
      display: block;
      font-size: 14px;
      height: 49px;
      line-height: 49px;
      text-align: center;
      color: #4d4d4d;
    }
    .router-link-exact-active {
      font-size: 16px;
      color: $primarycolor;
      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 20px;
        right: 20px;
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
}
</style>