<template>
  <!-- 专属权益 -->
  <div class="member-benefits">
    <section class="image">
      <transition-group appear appear-class="appear" appear-active-class="appear-active">
          <div v-for="(item,inx) in image" :key="inx" class="img" :style="{transitionDelay: inx * 100 + 'ms'}">
            <img :src="item" alt />
          </div> 
      </transition-group>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      image: [
        require("@/assets/img/page/member/zs.png"),
        require("@/assets/img/page/member/hb.png"),
        require("@/assets/img/page/member/jf.png"),
        require("@/assets/img/page/member/zc.png")
      ]
    };
  }
};
</script>

<style lang="scss">
.member-benefits {
  .image {
    width: 100%;
    margin-top: 5px;
    .img {
      box-sizing: border-box;
      width: 100%;
      height: 140px;
      margin-bottom: 6px;
      padding: 0 10px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>