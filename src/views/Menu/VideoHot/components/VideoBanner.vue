<template>
  <!-- 视频一级轮播图 -->
  <div class="video_banner">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="i in loopWheel" :key="i.title">
          <img :src="i.img" :alt="i.title" />
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
  data() {
    return {
      swiper: null,
      moving: false,
      loopWheel: [
        {
          img:
            "https://jet.bdstatic.com/public/static/zhaopin/common/img/sdetail_117d13d.jpg",
          title: "东坡肉"
        },
        {
          img:
            "https://jet.bdstatic.com/public/static/zhaopin/common/img/sdetail_117d13d.jpg",
          title: "红烧肉"
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
          let tit = _this.loopWheel[activeIndex].title;
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
.video_banner {
  .swiper-slide {
    position: relative;
    height: 218px;
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
    width: 6px;
    height: 6px;
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