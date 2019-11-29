<template>
  <div>
    <!-- 商品卡片测试组件 -->
    <div class="pro-card-list small">
      <Flashing />
      <FlashNext />
      <Booking />
      <Newtaste />
      <SellWell />
      <MemberExclusive />
      <OneYuan />
      <HelpFree />
      <ScoreChange />
    </div>

    <div class="pro-card-list big">
      <FlashingBig />
      <FlashNextBig />
      <BookingBig />
      <NewtasteBig />
      <SellWellBig />
      <MemberExclusiveBig />
      <OneYuanBig />
      <HelpFreeBig />
      <ScoreChangeBig />
    </div>

    <a href="javascript:;" id="test">
      <div></div>
      <div></div>
    </a>
  </div>
</template>

<script>
// 限时抢购 - 正在疯抢
import Flashing from "@/components/ProCard/Small/Flash/FlashingItem.vue";
// 限时抢购 - 即将开抢、明日预告
import FlashNext from "@/components/ProCard/Small/Flash/FlashNextItem.vue";
// 预定商品
import Booking from "@/components/ProCard/Small/Booking/BookingItem.vue";
// 新品尝鲜
import Newtaste from "@/components/ProCard/Small/Newtaste/NewtasteItem.vue";
// 畅销商品
import SellWell from "@/components/ProCard/Small/SellWell/SellWellItem.vue";
// 会员专享商品
import MemberExclusive from "@/components/ProCard/Small/Member/MemberExclusiveItem.vue";
// 一元购
import OneYuan from "@/components/ProCard/Small/Oneyuan/OneyuanItem.vue";
// 助力免费拿
import HelpFree from "@/components/ProCard/Small/HelpFree/HelpFreeItem.vue";
// 积分兑换
import ScoreChange from "@/components/ProCard/Small/Member/MemberScoreChangeItem.vue";


// 限时抢购 - 正在疯抢
import FlashingBig from "@/components/ProCard/Big/Flash/FlashingItem.vue";
// 限时抢购 - 即将开抢、明日预告
import FlashNextBig from "@/components/ProCard/Big/Flash/FlashNextItem.vue";
// 预定商品
import BookingBig from "@/components/ProCard/Big/Booking/BookingItem.vue";
// 新品尝鲜
import NewtasteBig from "@/components/ProCard/Big/Newtaste/NewtasteItem.vue";
// 畅销商品
import SellWellBig from "@/components/ProCard/Big/SellWell/SellWellItem.vue";
// 会员专享商品
import MemberExclusiveBig from "@/components/ProCard/Big/Member/MemberExclusiveItem.vue";
// 一元购
import OneYuanBig from "@/components/ProCard/Big/Oneyuan/OneyuanItem.vue";
// 助力免费拿
import HelpFreeBig from "@/components/ProCard/Big/HelpFree/HelpFreeItem.vue";
// 积分兑换
import ScoreChangeBig from "@/components/ProCard/Big/Member/MemberScoreChangeItem.vue";

export default {
  components: {
    Flashing,
    FlashNext,
    Booking,
    Newtaste,
    SellWell,
    MemberExclusive,
    OneYuan,
    HelpFree,
    ScoreChange,

    FlashingBig,
    FlashNextBig,
    BookingBig,
    NewtasteBig,
    SellWellBig,
    MemberExclusiveBig,
    OneYuanBig,
    HelpFreeBig,
    ScoreChangeBig
  }
};
</script>

<style lang="scss">
body {
  background: #f5f5f5;
}
.pro-card-list.small {
  margin: 0 10px;
  overflow: hidden;
  .pro-item {
    float: left;
    margin-top: 6px;
    margin-right: 6px;
    &:nth-child(2n) {
      margin-right: 0;
    }
  }
}
.pro-card-list.big {
  .pro-item {
    margin-top: 6px;
  }
}
</style>