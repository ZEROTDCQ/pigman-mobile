<template>
  <!-- 推荐、会员活动项组件 -->
  <div class="activity-item style1">
    <div class="ai-feature"></div>
    <div class="ai-text">
      <h3 class="at-title">古德菲力健身×锐步莱美“动·无边界∞”运动古德菲力健身×锐步莱美“动·无边界∞”运动</h3>
      <p
        class="at-abstract"
      >来这里看达利最新画作，给您最新来这里看达利最新画作，给您最新来这里看达利最新画作，给您最新来这里看达利最新画作，给您最新来这里看达利最新画作，给您最新</p>
      <div class="at-ticket-info">
        <em class="ticket-price">¥100.00</em>
        <span class="have-booked">60人已报名</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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