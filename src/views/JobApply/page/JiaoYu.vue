<template>
  <!-- 新增教育经历路由页面 -->
  <div class="add-experience jiaoyu">
    <div class="page-head">
      <div class="ph-btn btn-back fl">
        <a href="javascript:;" @click="backAction">
          <i class="iconfont">&#xe6f4;</i>
        </a>
      </div>
      <h5 class="ph-tit">教育经历</h5>
      <div class="ph-btn btn-save fr">
        <a href="javascript:;" @click="saveAction">
          <i class="iconfont">&#xe609;</i>
        </a>
      </div>
    </div>
    <div class="page-body">
      <div class="form-body">
        <van-cell-group>
          <van-field v-model="jyks" placeholder="开始时间" />
          <van-field v-model="jyjs" placeholder="结束时间" />
          <van-field v-model="jyxxmc" placeholder="学校名称" />
          <van-field v-model="jyzymc" placeholder="专业名称" />
          <van-field v-model="jyxl" placeholder="学历" />
        </van-cell-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        jyks: "",
        jyjs: "",
        jyxxmc: "",
        jyzymc: "",
        jyxl: ""
      }
    };
  },
  methods: {
    backAction() {
      this.$router.back();
    },
    saveAction() {}
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (!from.name) {
        vm.$router.push("/");
      }
    });
  }
};
</script>

<style lang="scss" scoped>
</style>