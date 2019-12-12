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
          <van-field
            v-model="formData.jyks"
            placeholder="开始时间（年-月）"
            :error-message="errors['jyks']?errors['jyks'][0].message:''"
          />
          <van-field
            v-model="formData.jyjs"
            placeholder="结束时间（年-月）"
            :error-message="errors['jyjs']?errors['jyjs'][0].message:''"
          />
          <van-field
            v-model="formData.jyxxmc"
            placeholder="学校名称"
            :error-message="errors['jyxxmc']?errors['jyxxmc'][0].message:''"
          />
          <van-field
            v-model="formData.jyzymc"
            placeholder="专业名称"
            :error-message="errors['jyzymc']?errors['jyzymc'][0].message:''"
          />
          <van-field
            v-model="formData.jyxl"
            placeholder="学历"
            :error-message="errors['jyxl']?errors['jyxl'][0].message:''"
          />
        </van-cell-group>
      </div>
    </div>
  </div>
</template>

<script>
import schema from "async-validator";
export default {
  data() {
    return {
      formData: {
        jyks: "",
        jyjs: "",
        jyxxmc: "",
        jyzymc: "",
        jyxl: ""
      },
      errors: []
    };
  },
  methods: {
    backAction() {
      this.$router.back();
    },
    handleErrors(errors, fields) {
      this.errors = fields;
    },
    validate() {
      var descriptor = {
        jyks: {
          validator: (rule, value, callback) => {
            var formData = this.formData;
            if (
              formData.jyxxmc != "" ||
              formData.jyzymc != "" ||
              formData.jyxl != "" ||
              formData.jyjs != ""
            ) {
              if (value == "" || new Date(value) == "Invalid Date") {
                callback("请输入有效时间");
              }
            }
            callback();
          }
        },
        jyjs: {
          validator: (rule, value, callback) => {
            var formData = this.formData;
            if (
              formData.jyxxmc != "" ||
              formData.jyzymc != "" ||
              formData.jyxl != "" ||
              formData.jyks != ""
            ) {
              if (value == "" || new Date(value) == "Invalid Date") {
                callback("请输入有效时间");
              }
            }
            callback();
          }
        },
        jyxxmc: {
          validator: (rule, value, callback) => {
            var formData = this.formData;
            if (
              formData.jyks != "" ||
              formData.jyjs != "" ||
              formData.jyzymc != "" ||
              formData.jyxl != ""
            ) {
              if (value == "") {
                callback("请输入学校名称");
              }
            }
            callback();
          }
        },
        jyzymc: {
          validator: (rule, value, callback) => {
            var formData = this.formData;
            if (
              formData.jyks != "" ||
              formData.jyjs != "" ||
              formData.jyxxmc != "" ||
              formData.jyxl != ""
            ) {
              if (value == "") {
                callback("请输入专业名称");
              }
            }
            callback();
          }
        },
        jyxl: {
          validator: (rule, value, callback) => {
            var formData = this.formData;
            if (
              formData.jyks != "" ||
              formData.jyjs != "" ||
              formData.jyxxmc != "" ||
              formData.jyzymc != ""
            ) {
              if (value == "") {
                callback("请输入学历");
              }
            }
            callback();
          }
        }
      };
      var validator = new schema(descriptor);
      return validator.validate(
        {
          jyks: this.formData.jyks,
          jyjs: this.formData.jyjs,
          jyxxmc: this.formData.jyxxmc,
          jyzymc: this.formData.jyzymc,
          jyxl: this.formData.jyxl
        },
        (errors, fields) => {
          if (errors) {
            //验证失败，错误是所有错误的数组
            //字段是由字段名称键入的对象，数组为
            // /每个字段的/ errors
            return this.handleErrors(errors, fields);
          }
          //验证通过
          // this.errors = [];
        }
      );
    },
    saveAction() {
      this.validate()
        .then(res => {
          this.errors = [];
          console.log("-------");
        })
        .catch(error => {
          console.log(error);
        });
    }
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