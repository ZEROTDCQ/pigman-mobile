<template>
  <div class="flash-tabs-wrap">
    <ul class="tabs-list">
      <template v-for="(item, index) in tabList">
        <li
          :class="['tl-item', {active: activeIndex == index}]"
          :key="index"
          @click="changeTab(index)"
        >
          <router-link :to="{name: item.routerName}">{{item.label}}</router-link>
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      tabList: [
        {
          id: 0,
          label: "正在疯抢",
          routerName: "flashIng"
        },
        {
          id: 1,
          label: "即将开抢",
          routerName: "flashSoon"
        },
        {
          id: 2,
          label: "明日预告",
          routerName: "flashNextDay"
        }
      ],
      activeIndex: 0
    };
  },
  methods: {
    changeTab(index) {
      this.activeIndex = index;
      this.$emit("stater", index);
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
      height: 40px;
      line-height: 40px;
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
        // content: "";
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