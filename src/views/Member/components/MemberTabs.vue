<template>
  <div class="member-tabs-wrap">
    <ul class="tabs-list">
      <li
        :class="['tl-item', {active: activeIndex == index}]"
        v-for="(item, index) in tabList"
        :key="index"
        @click="changeTab(index)"
      >
        <router-link :to="{name: item.routerName}">
          <p class="label">{{item.label}}</p>
          <p class="sub-tit">{{item.subTit}}</p>
        </router-link>
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
          label: "专属权益",
          subTit: "特权享不停",
          routerName: "benefits"
        },
        {
          id: 1,
          label: "专属商品",
          subTit: "省钱省心",
          routerName: "exclusive"
        },
        {
          id: 2,
          label: "积分换购",
          subTit: "轻松兑商品",
          routerName: "score"
        },
        {
          id: 3,
          label: "会员活动",
          subTit: "掌握活动信息",
          routerName: "activity"
        }
      ],
      activeIndex: 0
    };
  },
  methods: {
    changeTab(index) {
      this.activeIndex = index;
      this.$emit('tabsChange',this.activeIndex);
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
      height: 49px;
      line-height: 1;
      text-align: center;
      color: #4d4d4d;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .label {
        margin-bottom: 5px;
        font-size: 16px;
        font-weight: bold;
      }
      .sub-tit {
        font-size: 10px;
      }
    }
    .router-link-exact-active {
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