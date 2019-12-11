<template>
  <!-- 职位组件 -->
  <transition
    appear
    appear-class="appear"
    appear-to-class="appear-to"
    appear-active-class="appear-active"
  >
    <div class="job_item">
      <div class="flex-row">
        <h3 class="job-title">{{data.title}}</h3>
        <span class="wages">{{data.salary}}</span>
      </div>
      <p class="job_desc">{{data.introduction}}</p>
      <div class="job_feature">
        <span>{{data.address}}</span>
        <span>{{data.experience}}</span>
        <span>{{data.certificate}}</span>
      </div>
      <p class="job_part">{{data.team}}</p>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    data: {
      type: Object
    }
  }
};
</script>

<style lang="scss">
.appear {
  opacity: 0;
  transform: scale(0.8);
}
.appear-active {
  transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
}
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
      color: #333;
    }
    .wages {
      color: $primarycolor;
    }
  }
  .job_desc {
    color: #333;
    @include text_ellipsis(2);
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
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #666;
  }
}
</style>