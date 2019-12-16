<template>
  <!-- 推荐、会员活动项组件 -->
  <transition appear appear-class="appear" appear-active-class="appear-active">
    <div class="activity-item style1"  :style="{transitionDelay: index * 100 + 'ms'}">
      <div class="ai-feature">
        <img :src="baseUrl + data.picture" alt />
      </div>
      <div class="ai-text">
        <h3 class="at-title">{{data.title}}</h3>
        <p class="at-abstract">{{data.sketch}}</p>
        <div class="at-ticket-info">
          <em class="ticket-price">¥{{data.price}}</em>
          <span class="have-booked">{{data.number}}人已报名</span>
        </div>
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
.activity-item.style1 {
  padding: 10px;
  background: #fff;
  margin-top: 6px;
  overflow: hidden;
  .ai-feature {
    margin-right: 10px;
    float: left;
    width: 140px;
    height: 140px;
    background: #ccc;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .ai-text {
    overflow: hidden;
  }
  .at-title {
    margin-bottom: 10px;
    font-size: 14px;
    line-height: 20px;
    color: #4d4d4d;
    @include text_ellipsis(2);
  }
  .at-abstract {
    margin-bottom: 10px;
    font-size: 10px;
    color: $primarycolor;
    @include text_ellipsis(3);
  }
  .at-ticket-info {
    text-align: right;
    color: #f66;
    overflow: hidden;
    .ticket-price {
      float: left;
      font-size: 18px;
      font-weight: bold;
      font-style: normal;
    }
    .have-booked {
      flex-shrink: 0;
      font-size: 12px;
    }
  }
}
</style>