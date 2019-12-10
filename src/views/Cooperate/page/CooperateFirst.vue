<template>
  <!-- 一级类目 -->
  <div class="cooperate_router first">
    <div class="page-head">
      <div class="ph-btn btn-back fl">
        <a href="javascript:;" @click="backAction">
          <i class="iconfont">&#xe6f4;</i>
        </a>
      </div>
      <h5 class="ph-tit">类目需求</h5>
    </div>
    <div class="page-body">
      <transition-group
        appear
        appear-class="appear-enter"
        appear-active-class="appear-enter-active"
        tag="div"
      >
        <pig-cell
          v-for="(item, index) in firstCategory"
          :key="item.label + index"
          :style="{transitionDelay: index * 50 + 'ms'}"
          is-link
          :title="item.label"
          :value="item.son.length > 1 ? '查看详情': ''"
          :to="item.son.length > 1 ? {name: 'secondCategory', params: {id: item.id}} : {}"
        />
      </transition-group>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    firstCategory() {
      return this.cate;
    }
  },
  methods: {
    backAction() {
      this.$store.commit("setAnimationName", "first-in");
      this.$router.back();
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      console.log(from);
    });
  }
};
</script>

<style lang="scss">
.first {
  background: #f5f5f5;
}
.page-head {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 44px;
  font-size: 16px;
  line-height: 44px;
  color: #333;
  background: #fff;
  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background: #eee;
    transform: scaleY(0.5);
  }
  .ph-btn {
    position: absolute;
    top: 0;
    a {
      display: block;
      padding: 0 10px;
    }
  }
  .fl {
    left: 0;
  }
  .fr {
    right: 0;
  }
  .ph-tit {
    margin: 0 44px;
    font-size: 16px;
    font-weight: normal;
    text-align: center;
  }
}
.page-body {
  position: absolute;
  top: 44px;
  bottom: 0;
  width: 100%;
  overflow: hidden;
  overflow-y: auto;
}
</style>