<template>
  <div class="oneyuan">
    <div class="banner_wrap"></div>
    <div class="notice">
      <i class="icon"></i>
      <div class="scroll_info">
        <ul ref="scrollUl">
          <li v-for="i in msg" :key="i">{{i}}</li>
        </ul>
      </div>
    </div>
    <div class="pro-list">
      <OneYuanItem v-for="i in 4" :key="i" />
    </div>
  </div>
</template>

<script>
import OneYuanItem from "@/components/ProCard/Big/Oneyuan/OneyuanItem.vue";
export default {
  components: {
    OneYuanItem
  },
  data() {
    return {
      msg: [
        "每天晚20:00，商品1元清仓~每天晚20:00，商品1元清仓~每天晚20:00，商品1元清仓~每天晚20:00，商品1元清仓~",
        "抢完即止，时不我待！"
      ],
      timer: null
    };
  },
  methods: {
    msgScroll() {
      clearInterval(this.timer);
      this.timer = null;

      let scrollUl = this.$refs.scrollUl;
      let lis = scrollUl.querySelectorAll("li");
      let liH = lis[0].offsetHeight;
      let firstLi = lis[0].cloneNode(true);
      scrollUl.appendChild(firstLi);
      let activeIndex = 0;
      let _this = this;
      this.timer = setInterval(() => {
        activeIndex++;
        $(scrollUl).animate(
          {
            top: -activeIndex * liH
          },
          500,
          function() {
            if (activeIndex == 0) {
              $(scrollUl).css("top", 0);
            }
          }
        );
        if (activeIndex == this.msg.length) {
          activeIndex = 0;
        }
      }, 2000);
    }
  },
  mounted() {
    this.msgScroll();
  }
};
</script>

<style lang="scss">
body {
  background: #f5f5f5;
}
.banner_wrap {
  height: 160px;
  background: #ccc;
}
.notice {
  padding: 0 10px;
  display: flex;
  .icon {
    flex-shrink: 0;
    align-self: center;
    width: 10px;
    height: 10px;
    margin-right: 5px;
    background: url("~@/assets/img/page/oneyuan/notice.png") no-repeat;
    background-size: cover;
  }
  .scroll_info {
    position: relative;
    flex: 1;
    height: 20px;
    line-height: 20px;
    font-size: 10px;
    color: #666;
    overflow: hidden;
    ul {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      li {
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
}
.pro-list {
  .pro-item {
    margin-top: 6px;
  }
}
</style>