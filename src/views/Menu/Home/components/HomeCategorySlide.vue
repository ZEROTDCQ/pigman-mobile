<template>
  <div class="category-slide">
    <div class="cs-swiper swiper-container" ref="swiper" v-if="formatData">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in formatData" :key="index">
          <ul class="ss-ul">
            <li class="su-li" v-for="i in item" :key="i.label" @click="category(i.id,$event)">
              <a href="javascript:;">
                <div class="cate-icon"></div>
                <p class="cate-name">{{i.title}}</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      topData: null,
      swiper: null,
      formatData: []
    };
  },
  beforeMount() {
    this.getTopData();
  },
  created() {},
  updated() {
    this.swiper = new Swiper(this.$refs.swiper, {
      loop: false,
      // autoplay: {
      //   delay: 2500,
      //   disableOnInteraction: false
      // },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
    });
  },
  methods: {
    getTopData() {
      this.$instance.post("api/Mobileapi/videoTop").then(res => {
        let data = res.data.data;
        this.topData = data;
        this.$emit("category", data[0].id);
        while (this.topData.length > 0) {
          this.formatData.push(this.topData.splice(0, 5));
        }
      });
    },
    category(twoid, event) {
      $(".su-li").removeClass("active");
      $(event.path[2]).addClass("active");
      this.$emit("category",twoid);
    }
  }
};
</script>

<style lang="scss">
.category-slide {
  background: #fff;
  .cs-swiper {
    position: relative;
    padding: 12px 0;
    .ss-ul {
      display: flex;
    }
    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 1px;
      background: rgba($color: #000000, $alpha: 0.1);
      transform: scaleY(0.5);
    }
  }
  .ss-ul {
    .su-li {
      flex-basis: 20%;
      display: flex;
      justify-content: center;
      a {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
      }
      .cate-icon {
        margin-bottom: 5px;
        width: 48px;
        height: 48px;
        border-radius: 50%;
        background: #ccc;
      }
      .cate-name {
        font-size: 14px;
        line-height: 14px;
        color: #333;
      }
    }

    .su-li.active {
      a p{
        color: $primarycolor;
      }
    }
  }
  .swiper-pagination {
    position: static;
    margin-top: 15px;
    font-size: 0;
  }
  .swiper-pagination-bullet-active {
    background: $primarycolor;
  }
  .swiper-pagination-bullet {
    outline: none;
  }
}
</style>