<template>
  <!-- 菜谱分类轮播图 -->
  <div class="menu_banner">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,i) in data" :key="i">
          <img :src="baseUrl + item.picture" :alt="item.title" />
        </div>
      </div>
      <div class="bottom_bar">
        <div class="flex_auto">
          <transition name="moving">
            <h4 v-show="!moving" class="video_tit" ref="videoTit"></h4>
          </transition>
        </div>
        <div ref="pagination" class="swiper-pagination"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // props: {
  //   data: Array,
  // },
  data() {
    return {
      swiper: null,
      moving: false,
      data: [
        {
          id: 10,
          is_on: 1,
          picture:
            "/uploads/admin/images/20191210/aee5990391e2f79a49e94d6c59db2fdb.jpg",
          title: "鸟蛋",
          type: 2
        },
        {
          id: 9,
          is_on: 1,
          picture:
            "/uploads/admin/images/20191210/1f070d65d1088e516cb1e90fe0a47617.jpg",
          title: "麂子肉",
          type: 2
        },
        {
          id: 8,
          is_on: 1,
          picture:
            "/uploads/admin/images/20191210/f644d235c42bf6ba7a551d54075ed073.jpg",
          title: "东坡肉",
          type: 2
        }
      ]
    };
  },
  mounted() {
    let _this = this;
    this.swiper = new Swiper(".swiper-container", {
      loop: true,
      pagination: {
        el: ".swiper-pagination"
      },
      on: {
        // init: function() {
        //   //Swiper初始化了
        //   this.emit("slideChangeTransitionEnd"); //在初始化时触发一次slideChangeTransitionEnd事件，需要先设置slideChangeTransitionEnd
        // },
        slideChangeTransitionEnd: function() {
          let activeIndex = this.realIndex; //loop模式下获取真实index
          let tit = _this.data[activeIndex].title;
          _this.$refs.videoTit.innerText = tit;
        },
        touchMove: function(event) {
          _this.moving = true;
        },
        transitionEnd() {
          _this.moving = false;
        }
      }
    });
  }
};
</script>

<style lang="scss">
.menu_banner {
  .swiper-slide {
    position: relative;
    height: 184px;
    img {
      position: absolute;
      width: 100%;
      min-height: 100%;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
    }
  }
  .bottom_bar {
    position: absolute;
    z-index: 1;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 40px;
    padding: 0 10px;
    box-sizing: border-box;
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .flex_auto {
    flex: 1;
    overflow: hidden;
    .video_tit {
      font-size: 18px;
      font-weight: bold;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      color: #fff;
    }
  }
  .swiper-pagination {
    flex-shrink: 0;
    position: static;
    white-space: nowrap;
    display: flex;
    align-items: center;
  }
  .swiper-pagination-bullet {
    margin-left: 7px;
    width: 8px;
    height: 8px;
    opacity: 1;
    outline: none;
    background: #fff;
  }
  .swiper-pagination-bullet-active {
    background: $primarycolor;
  }
}

.moving-enter-active {
  transition: transform 0.5s, opacity 0.5s;
}
.moving-enter,
.moving-leave-to {
  transform: translateY(100%);
  opacity: 0;
}
</style>