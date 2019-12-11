<template>
  <!-- 首页最新菜谱 -->
  <div class="area-box area-newest-menu">
    <div class="area-head clearfix">
      <h3 class="ah-title">最新菜谱</h3>
      <p class="btn-enter-area enter-1">
        <template v-for="(item,inx) in dataR">
          <a :key="inx" :href="'xxxx.html?id='+item.id">{{item.title}}</a>
        </template>
      </p>
    </div>
    <div class="area-body">
      <div class="cs-swiper swiper-container" ref="swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide menu-list" v-for="(item,index) in dataR" :key="index">
            <MenuItem v-for="(i,j) in item.son" :key="j" :data="i" />
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
  </div>
</template>

<script>
import MenuItem from "./MenuItem";
export default {
  components: {
    MenuItem
  },
  props: {
    data: Array
  },
  data() {
    return {
      swiper: null
    };
  },
  computed: {
    dataR(){
      return this.data.slice(0,6);
    }
  },
  mounted() {
    this.initSwiper();
    $(".enter-1 a")
      .eq(0)
      .addClass("active");
  },
  methods: {
    initSwiper() {
      this.swiper = new Swiper(this.$refs.swiper, {
        on: {
          slideChangeTransitionEnd: function() {
            console.log(this.activeIndex);
            let as = $(".enter-1 a");
            as.removeClass("active");
            as.eq(this.activeIndex).addClass("active");
          }
        },
        loop: false
      });
    }
  }
};
</script>

<style lang="scss" scoped>
/deep/.menu-list {
  padding: 0 10px;
  box-sizing: border-box;
  margin-top: -10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .menu-item {
    margin-top: 10px;
    box-shadow: 0 0 5px #ccc;
  }
}
.area-newest-menu {
  .btn-enter-area {
    a {
      float: left;
      margin-left: 5px;
    }
    .active {
      color: $primarycolor;
    }
  }
}
.swiper-wrapper{
  margin: 5px 0;
}
</style>