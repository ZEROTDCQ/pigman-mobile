<template>
  <div class="tabs-wrap">
    <div
      v-for="(item, index) in tabsList"
      :class="['tabs-item', {'tab-active': tabsIndex == index}]"
      :key="index"
      ref="tabsItem"
      @click="changeTab(index)"
    >
      <span>{{item.label}}</span>
    </div>
    <div class="tabs-line" ref="line"></div>
  </div>
</template>

<script>
export default {
  props: {
    tabsList: {
      type: Array
    },
    tabsIndex: {
      type: Number
    }
  },
  data() {
    return {
      tabWidth: 0,
      lineWidth: 0
    };
  },
  mounted() {
    // 设置line的宽度为tabs-item的50%
    this.tabWidth = this.$refs.tabsItem[0].offsetWidth;
    this.lineWidth = this.tabWidth * 0.5;
    this.$refs.line.style.width = this.lineWidth + "px";
    this.transformLine();
  },
  methods: {
    changeTab(index) {
      this.activeIndex = index;
      this.$emit('changeTab', index);
      this.$emit("update:tabsIndex", index);
      this.$nextTick(() => {
        this.transformLine();
      });
    },
    transformLine() {
      var offsetLeft = this.tabsIndex * this.tabWidth + this.lineWidth;
      this.$refs.line.style.transform = `translateX(${offsetLeft}px) translateX(-50%)`;
    }
  }
};
</script>

<style lang="scss">
.tabs-wrap {
  position: relative;
  z-index: 10;
  width: 100%;
  display: flex;
  background: #fff;
  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 0;
    border-bottom: 1px solid #eee;
    transform-origin: center bottom;
    transform: scaleY(0.5);
  }
  &.floatTop {
    position: fixed;
    top: 0;
    left: 0;
  }
  .tabs-item {
    flex: 1;
    padding: 0 5px;
    height: 44px;
    line-height: 44px;
    font-size: 14px;
    text-align: center;
    color: #333;
    overflow: hidden;
    span {
      display: block;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    &.tab-active {
      color: $primarycolor;
    }
  }
  .tabs-line {
    position: absolute;
    bottom: 0px;
    left: 0;
    z-index: 1;
    height: 3px;
    background-color: $primarycolor;
    border-radius: 3px;
    transition-duration: 0.3s;
  }
}
</style>