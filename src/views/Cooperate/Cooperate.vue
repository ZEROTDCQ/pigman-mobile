<template>
  <!-- 供货合作 -->
  <div class="cooperate">
    <div class="banner"></div>
    <div class="tuwen-row gap">
      <div class="wen-col">
        <h3 class="wc-title">猪先生与供应商合作原则</h3>
        <ul class="wc-desc">
          <li>1、追寻廉洁正直、公平合理、竞合共赢的合作关系</li>
          <li>2、致力于长期、战略性合作</li>
        </ul>
      </div>
      <div class="tu-col"></div>
    </div>
    <div class="tuwen-row gap">
      <div class="tu-col"></div>
      <div class="wen-col">
        <h3 class="wc-title">猪先生选择供应商标准</h3>
        <ul class="wc-desc">
          <li>1、供应商内部组织完善、管理体系健全</li>
          <li>2、供应商财务情况良好、能按时供货和履约</li>
          <li>3、商品质量好、价格水平低、整体服务水平好</li>
          <li>4、具有长期合作的意向</li>
        </ul>
      </div>
    </div>
    <div class="gap">
      <pig-cell title="类目需求" is-link value="查看详情" :to="{name: 'firstCategory'}" />
      <pig-cell title="联系人" is-link value="杨小姐" />
      <pig-cell title="电话" is-link value="18318672677" />
      <pig-cell title="邮箱" is-link value="980532249@qq.com" />
    </div>
    <div class="bottom-button">
      <a class="btn-primary" href="javascript:;">在线提交合作意向单</a>
    </div>

    <transition :name="animationName">
      <router-view :animationName.sync="animationName" />
    </transition>
  </div>
</template>

<script>
export default {
  computed: {
    animationName() {
      return this.$store.state.animationName;
    }
  },
  methods: {
    routerAnimation(name) {
      this.$store.commit("setAnimationName", name);
      console.log(name);
    }
  }
};
</script>

<style lang="scss">
.appear-enter {
  opacity: 0;
  transform: scale(0.8);
}
.appear-enter-active {
  transition: all 0.2s ease-in-out;
}
.gap {
  margin-top: 6px;
}
.cooperate {
  position: relative;
  background: #f5f5f5;
}
.banner {
  height: 168px;
  background: #eee;
}
.tuwen-row {
  display: flex;
  background: #fff;
  .tu-col {
    flex-shrink: 0;
    width: 190px;
    height: 160px;
    background: #eee;
  }
  .wen-col {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px;
    // line-height: 1.2;
    color: #333;
    .wc-title {
      font-size: 14px;
      margin-bottom: 10px;
    }
    .wc-desc {
      font-size: 12px;
      text-align: justify;
    }
  }
}

.bottom-button {
  padding: 6px 10px 10px;
  .btn-primary {
    display: block;
    height: 50px;
    line-height: 50px;
    font-size: 16px;
    border-radius: 2px;
    text-align: center;
    color: #fff;
    background: $primarycolor;
  }
}
</style>

<style lange="scss">
.first-in-enter,
.first-in-leave-to,
.first-out-second-in-enter,
.second-out-first-in-leave-to {
  transform: translateX(100%);
}
.first-out-second-in-leave-to,
.second-out-first-in-enter {
  transform: translateX(-100%);
}
.first-in-enter-active,
.first-in-leave-active,
.first-out-second-in-enter-active,
.first-out-second-in-leave-active,
.second-out-first-in-enter-active,
.second-out-first-in-leave-active {
  transition: all 0.25s ease-in-out;
}

.cooperate {
  overflow-x: hidden;
}
.cooperate_router {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
}
</style>