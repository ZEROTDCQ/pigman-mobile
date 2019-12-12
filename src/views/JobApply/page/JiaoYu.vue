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
<<<<<<< HEAD
            placeholder="开始时间（年-月）"
=======
            placeholder="开始时间（yyyy-mm-dd）"
>>>>>>> e0cef4e243c2a78b5dad97f0ffc85e3a2e641656
            :error-message="errors['jyks']?errors['jyks'][0].message:''"
          />
          <van-field
            v-model="formData.jyjs"
<<<<<<< HEAD
            placeholder="结束时间（年-月）"
=======
            placeholder="结束时间（yyyy-mm-dd）"
>>>>>>> e0cef4e243c2a78b5dad97f0ffc85e3a2e641656
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
<<<<<<< HEAD
=======
      <div class="bottom-btn">
        <a class="btn-primary" href="javascript:;" @click="saveAction">确定</a>
      </div>
>>>>>>> e0cef4e243c2a78b5dad97f0ffc85e3a2e641656
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
<<<<<<< HEAD
        jyxxmc: "",
        jyzymc: "",
        jyxl: ""
=======
        jyxxmc: this.$store.state.school,
        jyzymc: this.$store.state.professional,
        jyxl: this.$store.state.education
>>>>>>> e0cef4e243c2a78b5dad97f0ffc85e3a2e641656
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
<<<<<<< HEAD
      var descriptor = {
        jyks: {
          validator: (rule, value, callback) => {
=======
      // 验证是否符合yyyy(-|\/|\s)mm(-|\/|\s)dd格式
      var reg = /\d{4}([-\/\s])\d{1,2}\1\d{1,2}/;
      var descriptor = {
        jyks: {
          validator: (rule, value, callback) => {
            var date = new Date(value);
>>>>>>> e0cef4e243c2a78b5dad97f0ffc85e3a2e641656
            var formData = this.formData;
            if (
              formData.jyxxmc != "" ||
              formData.jyzymc != "" ||
              formData.jyxl != "" ||
<<<<<<< HEAD
              formData.jyjs != ""
            ) {
              if (value == "" || new Date(value) == "Invalid Date") {
                callback("请输入有效时间");
              }
=======
              value != "" ||
              formData.jyjs != ""
            ) {
              if (!reg.test(value) || date == "Invalid Date") {
                callback("请输入有效时间");
              }
              if (value != "" && formData.jyjs != "") {
                // 判断开始时间是否比结束时间晚
                var jyjs = new Date(formData.jyjs).getTime();
                if (new Date(value).getTime() > jyjs) {
                  callback("请输入有效开始时间");
                }
              }
>>>>>>> e0cef4e243c2a78b5dad97f0ffc85e3a2e641656
            }
            callback();
          }
        },
        jyjs: {
          validator: (rule, value, callback) => {
<<<<<<< HEAD
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
=======
            var date = new Date(value);
            var formData = this.formData;
            if (value != "" || formData.jyks != "") {
              // 验证结束时间是否符合格式
              if (!reg.test(value) || date == "Invalid Date") {
                callback("请输入有效时间");
              }
            }
            if (value != "" && formData.jyks != "") {
              // 判断结束时间是否比开始时间早
              var jyks = new Date(formData.jyks).getTime();
              if (new Date(value).getTime() < jyks) {
                callback("请输入有效结束时间");
              }
            }
>>>>>>> e0cef4e243c2a78b5dad97f0ffc85e3a2e641656
            callback();
          }
        },
        jyxxmc: {
          validator: (rule, value, callback) => {
            var formData = this.formData;
<<<<<<< HEAD
            if (
              formData.jyks != "" ||
              formData.jyjs != "" ||
              formData.jyzymc != "" ||
              formData.jyxl != ""
            ) {
=======
            if (formData.jyks != "") {
>>>>>>> e0cef4e243c2a78b5dad97f0ffc85e3a2e641656
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
<<<<<<< HEAD
            if (
              formData.jyks != "" ||
              formData.jyjs != "" ||
              formData.jyxxmc != "" ||
              formData.jyxl != ""
            ) {
=======
            if (formData.jyks != "") {
>>>>>>> e0cef4e243c2a78b5dad97f0ffc85e3a2e641656
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
<<<<<<< HEAD
            if (
              formData.jyks != "" ||
              formData.jyjs != "" ||
              formData.jyxxmc != "" ||
              formData.jyzymc != ""
            ) {
=======
            if (formData.jyks != "") {
>>>>>>> e0cef4e243c2a78b5dad97f0ffc85e3a2e641656
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
<<<<<<< HEAD
          console.log("-------");
=======
          let formData = this.formData;
          let education_time = this.formatDate(formData.jyks)
            ? this.formatDate(formData.jyks) +
              " - " +
              this.formatDate(formData.jyjs)
            : "";
          this.$store.commit("setFormState", {
            education_time,
            school: formData.jyxxmc,
            professional: formData.jyzymc,
            education: formData.jyxl
          });
          this.$router.back();
>>>>>>> e0cef4e243c2a78b5dad97f0ffc85e3a2e641656
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