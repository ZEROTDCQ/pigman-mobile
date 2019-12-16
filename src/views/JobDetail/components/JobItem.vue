<template>
  <!-- 职位组件 -->
  <div class="job_item">
    <div class="flex-row">
      <h3 class="job-title">web前端工程师</h3>
      <span class="wages">7-9k</span>
    </div>
    <p class="job_desc">职位描述asfasfasfasgasgasga</p>
    <div class="job_feature">
      <span>广东 深圳</span>
      <span>1-3年</span>
      <span>本科 应届生</span>
    </div>
    <p class="job_part">技术部</p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.job_item {
  position: relative;
  padding: 10px 0;
  font-size: 12px;
  line-height: 1.5;
  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 0;
    border-top: 1px solid #ccc;
    transform: scaleY(0.5);
  }
  &:last-child {
    &::after {
      content: none;
    }
  }
  .flex-row {
    font-size: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .job-title {
      font-size: 16px;
      height: 100%;
      color: #333;
    }
    .wages {
      color: $primarycolor;
    }
  }
  .job_desc {
    color: #333;
  }
  .job_feature {
    margin: 5px 0;
    overflow: hidden;
    span {
      float: left;
      margin-right: 5px;
      margin-top: 5px;
      padding: 0 3px;
      height: 14px;
      line-height: 14px;
      border-radius: 2px;
      color: #666;
      background: #f1f1f1;
    }
  }
  .job_part {
    color: #666;
  }
}
</style>