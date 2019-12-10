<template>
  <!-- 二级类目 -->
  <div class="cooperate_router second">
    <div class="page-head">
      <div class="ph-btn btn-back fl">
        <a href="javascript:;" @click="backAction">
          <i class="iconfont">&#xe6f4;</i>
        </a>
      </div>
      <h5 class="ph-tit">{{cateTitle}}</h5>
    </div>
    <div class="page-body">
      <transition-group
        appear
        appear-class="appear-enter1"
        appear-active-class="appear-enter1-active"
        tag="div"
      >
        <pig-cell
          v-for="(item, index) in secondCate"
          :key="item + index"
          :style="{transitionDelay: index * 50 + 'ms'}"
          :title="item"
          is-link
        />
      </transition-group>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cateTitle: "二级类目",
      secondCate: []
    };
  },
  methods: {
    backAction(){
      this.$store.commit('setAnimationName', 'second-out-first-in');
      this.$router.back();
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      let tempVar = vm.cate.filter(item => {
        return item.id == to.params.id;
      })[0];
      vm.cateTitle = tempVar.label;
      vm.secondCate = tempVar.son;
    });
  },
  beforeRouteUpdate(to, from, next) {
    let tempVar = this.cate.filter(item => {
      return item.id == to.params.id;
    })[0];
    this.cateTitle = tempVar.label;
    this.secondCate = tempVar.son;
    next();
  }
};
</script>

<style lang="scss">
.appear-enter1 {
  opacity: 0;
  transform: scale(0.8);
}
.appear-enter-active1 {
  transition: all 0.2s ease-in-out;
}
.second {
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