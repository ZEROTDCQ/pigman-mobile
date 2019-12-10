<template>
  <!-- 专属权益 -->
  <div class="member-benefits">
    <section class="image">
      <div class="img">
        <img src="@/assets/img/page/member/zs.png" alt />
      </div>
      <div class="img">
        <img src="@/assets/img/page/member/hb.png" alt />
      </div>
      <div class="img">
        <img src="@/assets/img/page/member/jf.png" alt />
      </div>
      <div class="img">
        <img src="@/assets/img/page/member/zc.png" alt />
      </div>
    </section>
  </div>
</template>

<script>
export default {};
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
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>