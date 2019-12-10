<template>
  <!-- 新增实习经历路由页面 -->
  <div class="add-experience shixi">
    <div class="page-head">
      <div class="ph-btn btn-back fl">
        <a href="javascript:;" @click="backAction">
          <i class="iconfont">&#xe6f4;</i>
        </a>
      </div>
      <h5 class="ph-tit">实习经历</h5>
      <div class="ph-btn btn-save fr">
        <a href="javascript:;" @click="saveAction">
          <i class="iconfont">&#xe609;</i>
        </a>
      </div>
    </div>
    <div class="page-body">
      <div class="form-body">
        <van-cell-group>
          <van-field v-model="sxks" placeholder="开始时间" />
          <van-field v-model="sxjs" placeholder="结束时间" />
          <van-field v-model="sxgs" placeholder="公司名称" />
          <van-field v-model="sxzw" placeholder="职位名称" />
          <van-field v-model="sxzz" placeholder="工作职责" />
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
        sxks: "",
        sxjs: "",
        sxgs: "",
        sxzw: "",
        sxzz: ""
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