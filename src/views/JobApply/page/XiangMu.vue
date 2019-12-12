<template>
  <!-- 新增项目经历路由页面 -->
  <div class="add-experience xiangmu">
    <div class="page-head">
      <div class="ph-btn btn-back fl">
        <a href="javascript:;" @click="backAction">
          <i class="iconfont">&#xe6f4;</i>
        </a>
      </div>
      <h5 class="ph-tit">项目经历</h5>
      <div class="ph-btn btn-save fr">
        <a href="javascript:;" @click="saveAction">
          <i class="iconfont">&#xe609;</i>
        </a>
      </div>
    </div>
    <div class="page-body">
      <div class="form-body">
        <van-cell-group>
          <van-field v-model="xmks" placeholder="开始时间" />
          <van-field v-model="xmjs" placeholder="结束时间" />
          <van-field v-model="xmmc" placeholder="项目名称" />
          <van-field v-model="xmzw" placeholder="项目职务" />
          <van-field v-model="xmms" type="textarea" rows="2" autosize placeholder="项目描述" />
          <van-field v-model="xmzz" type="textarea" rows="2" autosize placeholder="项目职责" />
        </van-cell-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formDate: {
        xmks: "",
        xmjs: "",
        xmmc: "",
        xmzw: "",
        xmms: "",
        xmzz: ""
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