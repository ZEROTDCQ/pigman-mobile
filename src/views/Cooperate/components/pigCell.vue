<template>
  <div :class="['pig-cell', {'pig-cell--clickable': isLink}]" @click="skip">
    <div class="pig-cell__title">
      <span>{{title}}</span>
    </div>
    <div class="pig-cell__value">
      <span>{{value}}</span>
    </div>
    <i v-if="Object.keys(to).length > 0" class="iconfont pig-cell__right-icon">&#xe735;</i>
  </div>
</template>

<script>
export default {
  name: "pigCell",
  props: {
    title: {
      type: String
    },
    value: {
      type: String
    },
    isLink: {
      type: Boolean
    },
    to: {
      type: Object,
      default: () => {
        return {};
      }
    },
    animationName: {
      type: String,
      default: "first-in"
    }
  },
  methods: {
    skip() {
      if (Object.keys(this.to).length > 0) {
        // 判断下一跳路由，决定动画
        if (this.to.name == "firstCategory") {
          this.$store.commit("setAnimationName", "first-in");
        } else {
          this.$store.commit("setAnimationName", "first-out-second-in");
        }
        this.$router.push(this.to);
      }
    }
  }
};
</script>

<style lang="scss">
.pig-cell {
  position: relative;
  display: flex;
  box-sizing: border-box;
  width: 100%;
  padding: 10px 16px;
  overflow: hidden;
  color: #323233;
  font-size: 14px;
  line-height: 24px;
  background-color: #fff;
  &:active {
    background-color: #f2f3f5;
  }
  &:not(:last-child)::after {
    content: "";
    position: absolute;
    box-sizing: border-box;
    pointer-events: none;
    right: 0;
    bottom: 0;
    left: 16px;
    border-bottom: 1px solid #ebedf0;
    transform: scaleY(0.5);
  }
}
.pig-cell__title,
.pig-cell__value {
  flex: 1;
}
.pig-cell__value {
  position: relative;
  overflow: hidden;
  color: #969799;
  text-align: right;
  vertical-align: middle;
  word-wrap: break-word;
}
.pig-cell__right-icon {
  margin-left: 5px;
  min-width: 1em;
  height: 24px;
  font-size: 12px !important;
  font-weight: bold;
  line-height: 24px;
  color: #969799;
}
</style>