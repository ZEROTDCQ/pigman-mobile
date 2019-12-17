<template>
  <div class="news-tabs-wrap">
    <ul class="tabs-list">
      <li
        :class="['tl-item', {active: activeIndex == index}]"
        v-for="(item, index) in tabList"
        :key="index"
        @click="changeTab(index)"
      >
        <a href="javascript:;">{{item.title}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabList: [],
      activeIndex: 0
    };
  },
  methods: {
    changeTab(index) {
      this.activeIndex = index;
      this.$emit("upData", this.tabList[index].id);
    }
  },
  beforeCreate() {
    this.$instance
      .post("/api/mobileapi/newTop", {
        type: 0
      })
      .then(res => {
        let data = res.data.data;
        this.tabList = data;
        this.$nextTick(() => {
          this.changeTab(0);
        });
      });
  }
};
</script>

<style lang="scss">
.tabs-list {
  height: 49px;
  display: flex;
  background: #fff;
  .tl-item {
    position: relative;
    flex: 1;
    text-align: center;
    a {
      display: block;
      height: 49px;
      line-height: 49px;
      font-size: 14px;
      color: #4d4d4d;
    }
    &::after {
      content: "";
      display: block;
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 1px;
      height: 80%;
      background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 1) 0%,
        rgba(179, 179, 179, 1) 50%,
        rgba(255, 255, 255, 1) 100%
      );
    }
    &:last-child {
      &::after {
        content: none;
      }
    }
  }
  .tl-item.active {
    a {
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
}
</style>