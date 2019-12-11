<template>
  <!-- 专题活动组件 -->
  <transition appear appear-class="appear-subject" appear-active-class="appear-subject-active">
    <div class="subject-item" :style="{transitionDelay: index * 100 + 'ms'}">
      <img class="si-img" :src="baseUrl + data.picture" :alt="data.title" />
      <div class="si-cover">
        <h6 class="si-title">{{data.title}}</h6>
        <p class="si-sub-tit">{{data.son.map(i => {return i.title}).join(' ')}}</p>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    index: {
      type: Number
    },
    data: {
      type: Object
    }
  }
};
</script>

<style lang="scss">
.subject-item {
  position: relative;
  margin-top: 6px;
  width: 174px;
  height: 126px;
  border-radius: 5px;
  background: #ccc;
  overflow: hidden;
  .si-img {
    position: absolute;
    left: 0;
    top: 50%;
    width: 100%;
    min-height: 100%;
    transform: translateY(-50%);
  }
  .si-cover {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 36px;
    text-align: center;
    color: #fff;
    background: rgba($color: #000000, $alpha: 0.5);
    .si-title {
      font-size: 14px;
    }
    .si-sub-tit {
      font-size: 12px;
    }
  }
}
</style>