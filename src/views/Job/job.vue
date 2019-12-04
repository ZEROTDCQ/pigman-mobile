<template>
  <!-- 人才招聘 -->
  <div class="job page_wrap">
    <div class="area-box rcln" style="margin-top: 0;">
      <div class="area-head clearfix">
        <h3 class="ah-title">人才理念</h3>
      </div>
      <div class="area-body">
        <div class="rcln_img">
          <img src="~@/assets/img/page/job/rcln.png" alt />
          <i class="icon"></i>
        </div>
        <h3 class="aim">我们目标明确</h3>
        <div class="content">
          <p>不忘初心，将最安全、最优质、价格最实惠的产品和服务送达至千家万户；不断进步，坚持家文化、坚持优胜劣汰，让公司始终保持于一种需要有目标、能前进的发展方向，让我们的员工在公司能有发展前途。所以我们会为所有员工规范其职业发展。</p>
          <p>
            我们希望所有员工不但要学会做事，更要学会做人——在公司，要做一个诚实守信、有责任、有目标并能迎难而上人；在家里，要做一个孝顺顾家、有责任意识的人。
            在猪先生，每个员工都不是一个普通的螺丝钉，而应该是主动创新、追求卓越的前进者。
            在猪先生，我们希望人人能融入公司，能热爱公司，能爱岗敬业。在这里，没有旁观者的角色，所有人都是参与者、创造者、奋斗者，大家也都是一家人！
          </p>
          <p>公司承诺，让所有的付出都有回报，并且一定会坚持落实。所有大家可放心将职业未来交给我们公司！</p>
        </div>
      </div>
    </div>
    <div class="area-box zpzw">
      <div class="area-head clearfix">
        <h3 class="ah-title">招聘职位</h3>
      </div>
      <div class="area-body">
        <JobItem v-for="i in 8" :key="i" />
      </div>
    </div>
    <div class="area-footer">下拉加载更多</div>
  </div>
</template>

<script>
import JobItem from "./components/JobItem";
export default {
  components: {
    JobItem
  }
};
</script>

<style lang="scss">
.page_wrap {
  padding: 10px 10px 0;
}
.rcln {
  .rcln_img {
    position: relative;
    margin-bottom: 30px;
    img {
      display: block;
      width: 100%;
      border-radius: 10px;
      box-shadow: 0 0 5px #ccc;
    }
    .icon {
      position: absolute;
      width: 47px;
      height: 47px;
      left: 50%;
      bottom: 0;
      transform: translate(-50%, 50%);
      background: url("~@/assets/img/page/job/rcln_icon.png") no-repeat;
      background-size: cover;
    }
  }
  .aim {
    margin-bottom: 10px;
    font-size: 16px;
    text-align: center;
    color: #333;
  }
  .content {
    font-size: 14px;
    text-align: justify;
    color: #666;
  }
}
.area-footer {
  margin: 0 -10px;
  height: 50px;
  line-height: 50px;
  font-size: 14px;
  text-align: center;
  color: #999;
  background: #f5f5f5;
}
</style>