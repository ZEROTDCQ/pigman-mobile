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
          <van-field
            v-model="formData.xmks"
            placeholder="开始时间（yyyy mm dd）"
            :error-message="errors['xmks']?errors['xmks'][0].message:''"
          />
          <van-field
            v-model="formData.xmjs"
            placeholder="结束时间（yyyy mm dd）"
            :error-message="errors['xmjs']?errors['xmjs'][0].message:''"
          />
          <van-field
            v-model="formData.xmmc"
            placeholder="项目名称"
            :error-message="errors['xmmc']?errors['xmmc'][0].message:''"
          />
          <van-field
            v-model="formData.xmzw"
            placeholder="项目职务"
            :error-message="errors['xmzw']?errors['xmzw'][0].message:''"
          />
          <van-field
            v-model="formData.xmms"
            type="textarea"
            rows="2"
            autosize
            placeholder="项目描述"
            :error-message="errors['xmms']?errors['xmms'][0].message:''"
          />
          <van-field
            v-model="formData.xmzz"
            type="textarea"
            rows="2"
            autosize
            placeholder="项目职责"
            :error-message="errors['xmzz']?errors['xmzz'][0].message:''"
          />
        </van-cell-group>
      </div>
      <div class="bottom-btn">
        <a class="btn-primary" href="javascript:;" @click="saveAction">确定</a>
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
        xmks: "",
        xmjs: "",
        xmmc: this.$store.state.project_name,
        xmzw: this.$store.state.project_post,
        xmms: this.$store.state.project_describe,
        xmzz: this.$store.state.project_duty
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
      var formData = this.formData;
      // 验证是否符合yyyy(-|\/|\s)mm(-|\/|\s)dd格式
      var reg = /\d{4}([-\/\s])\d{1,2}\1\d{1,2}/;
      var descriptor = {
        xmks: {
          validator: (rule, value, callback) => {
            var date = new Date(value);
            if (
              formData.xmmc != "" ||
              formData.xmzw != "" ||
              formData.xmms != "" ||
              formData.xmzz != "" ||
              value != "" ||
              formData.xmjs != ""
            ) {
              if (!reg.test(value) || date == "Invalid Date") {
                callback("请输入有效时间");
              }
              if (value != "" && formData.xmjs != "") {
                // 判断开始时间是否比结束时间晚
                var xmjs = new Date(formData.xmjs).getTime();
                if (new Date(value).getTime() > xmjs) {
                  callback("请输入有效开始时间");
                }
              }
            }
            callback();
          }
        },
        xmjs: {
          validator: (rule, value, callback) => {
            var date = new Date(value);
            if (value != "" || reg.test(formData.xmks)) {
              // 验证结束时间是否符合格式
              if (!reg.test(value) || date == "Invalid Date") {
                callback("请输入有效时间");
              }
            }
            if (value != "" && formData.xmks != "") {
              // 判断结束时间是否比开始时间早
              var xmks = new Date(formData.xmks).getTime();
              if (new Date(value).getTime() < xmks) {
                callback("请输入有效结束时间");
              }
            }
            callback();
          }
        },
        xmmc: {
          validator: (rule, value, callback) => {
            if (reg.test(formData.xmks) && !value) {
              callback("请输入项目名称");
            }
            callback();
          }
        },
        xmzw: {
          validator: (rule, value, callback) => {
            if (reg.test(formData.xmks) && !value) {
              callback("请输入项目职务");
            }
            callback();
          }
        },
        xmms: {
          validator: (rule, value, callback) => {
            if (reg.test(formData.xmks) && !value) {
              callback("请输入项目描述");
            }
            callback();
          }
        },
        xmzz: {
          validator: (rule, value, callback) => {
            if (reg.test(formData.xmks) && !value) {
              callback("请输入项目职责");
            }
            callback();
          }
        }
      };
      var validator = new schema(descriptor);
      return validator.validate(
        {
          xmks: formData.xmks,
          xmjs: formData.xmjs,
          xmmc: formData.xmmc,
          xmzw: formData.xmzw,
          xmms: formData.xmms,
          xmzz: formData.xmzz
        },
        (errors, fields) => {
          if (errors) {
            //验证失败，错误是所有错误的数组
            //字段是由字段名称键入的对象，数组为
            // /每个字段的/ errors
            return this.handleErrors(errors, fields);
          }
        }
      );
    },
    saveAction() {
      this.validate()
        .then(() => {
          this.errors = [];
          let formData = this.formData;
          let project_time = this.formatDate(formData.xmks)
            ? this.formatDate(formData.xmks) +
              " - " +
              this.formatDate(formData.xmjs)
            : "";
          this.$store.commit("setFormState", {
            project_time,
            project_name: formData.xmmc,
            project_post: formData.xmzw,
            project_describe: formData.xmms,
            project_duty: formData.xmzz
          });
          this.$router.back();
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