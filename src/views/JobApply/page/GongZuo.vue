<template>
  <!-- 新增工作经历路由页面 -->
  <div class="add-experience gongzuo">
    <div class="page-head">
      <div class="ph-btn btn-back fl">
        <a href="javascript:;" @click="backAction">
          <i class="iconfont">&#xe6f4;</i>
        </a>
      </div>
      <h5 class="ph-tit">工作经历</h5>
      <div class="ph-btn btn-save fr">
        <a href="javascript:;" @click="saveAction">
          <i class="iconfont">&#xe609;</i>
        </a>
      </div>
    </div>
    <div class="page-body">
      <div class="form-body">
        <van-cell-group>
<<<<<<< HEAD
          <van-field v-model="gzks" placeholder="开始时间" />
          <van-field v-model="gzjs" placeholder="结束时间" />
          <van-field v-model="gzgsmc" placeholder="公司名称" />
          <van-field v-model="gzzwmc" placeholder="职位名称" />
          <van-field v-model="gzgzzz" placeholder="工作职责" />
        </van-cell-group>
      </div>
=======
          <van-field
            v-model="formData.gzks"
            placeholder="开始时间（yyyy mm dd）"
            :error-message="errors['gzks']?errors['gzks'][0].message:''"
          />
          <van-field
            v-model="formData.gzjs"
            placeholder="结束时间（yyyy mm dd）"
            :error-message="errors['gzjs']?errors['gzjs'][0].message:''"
          />
          <van-field
            v-model="formData.gzgsmc"
            placeholder="公司名称"
            :error-message="errors['gzgsmc']?errors['gzgsmc'][0].message:''"
          />
          <van-field
            v-model="formData.gzzwmc"
            placeholder="职位名称"
            :error-message="errors['gzzwmc']?errors['gzzwmc'][0].message:''"
          />
          <van-field
            v-model="formData.gzgzzz"
            type="textarea"
            rows="2"
            autosize
            placeholder="工作职责"
            :error-message="errors['gzgzzz']?errors['gzgzzz'][0].message:''"
          />
        </van-cell-group>
      </div>
      <div class="bottom-btn">
        <a class="btn-primary" href="javascript:;" @click="saveAction">确定</a>
      </div>
>>>>>>> e0cef4e243c2a78b5dad97f0ffc85e3a2e641656
    </div>
  </div>
</template>

<script>
<<<<<<< HEAD
=======
import schema from "async-validator";
>>>>>>> e0cef4e243c2a78b5dad97f0ffc85e3a2e641656
export default {
  data() {
    return {
      formData: {
        gzks: "",
        gzjs: "",
<<<<<<< HEAD
        gzgsmc: "",
        gzzwmc: "",
        gzgzzz: ""
      }
=======
        gzgsmc: this.$store.state.work_company,
        gzzwmc: this.$store.state.work_name,
        gzgzzz: this.$store.state.work_duty
      },
      errors: []
>>>>>>> e0cef4e243c2a78b5dad97f0ffc85e3a2e641656
    };
  },
  methods: {
    backAction() {
      this.$router.back();
    },
<<<<<<< HEAD
    saveAction() {}
=======
    handleErrors(errors, fields) {
      this.errors = fields;
    },
    validate() {
      var formData = this.formData;
      // 验证是否符合yyyy(-|\/|\s)mm(-|\/|\s)dd格式
      var reg = /\d{4}([-\/\s])\d{1,2}\1\d{1,2}/;
      var descriptor = {
        gzks: {
          validator: (rule, value, callback) => {
            var date = new Date(value);
            if (
              formData.gzgsmc != "" ||
              formData.gzzwmc != "" ||
              formData.gzgzzz != "" ||
              value != "" ||
              formData.gzjs != ""
            ) {
              if (!reg.test(value) || date == "Invalid Date") {
                callback("请输入有效时间");
              }
              if (value != "" && formData.gzjs != "") {
                // 判断开始时间是否比结束时间晚
                var gzjs = new Date(formData.gzjs).getTime();
                if (new Date(value).getTime() > gzjs) {
                  callback("请输入有效开始时间");
                }
              }
            }
            callback();
          }
        },
        gzjs: {
          validator: (rule, value, callback) => {
            var date = new Date(value);
            if (value != "" || reg.test(formData.gzks)) {
              // 验证结束时间是否符合格式
              if (!reg.test(value) || date == "Invalid Date") {
                callback("请输入有效时间");
              }
            }
            if (value != "" && formData.gzks != "") {
              // 判断结束时间是否比开始时间早
              var gzks = new Date(formData.gzks).getTime();
              if (new Date(value).getTime() < gzks) {
                callback("请输入有效结束时间");
              }
            }
            callback();
          }
        },
        gzgsmc: {
          validator: (rule, value, callback) => {
            if (reg.test(formData.gzks) != "" && !value) {
              callback("请输入实习公司名称");
            }
            callback();
          }
        },
        gzzwmc: {
          validator: (rule, value, callback) => {
            if (reg.test(formData.gzks) != "" && !value) {
              callback("请输入实习职位名称");
            }
            callback();
          }
        },
        gzgzzz: {
          validator: (rule, value, callback) => {
            if (reg.test(formData.gzks) != "" && !value) {
              callback("请输入实习工作职责");
            }
            callback();
          }
        }
      };
      var validator = new schema(descriptor);
      return validator.validate(
        {
          gzks: formData.gzks,
          gzjs: formData.gzjs,
          gzgsmc: formData.gzgsmc,
          gzzwmc: formData.gzzwmc,
          gzgzzz: formData.gzgzzz
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
          let work_time = this.formatDate(formData.gzks)
            ? this.formatDate(formData.gzks) +
              " - " +
              this.formatDate(formData.gzjs)
            : "";
          this.$store.commit("setFormState", {
            work_time,
            work_company: formData.gzgsmc,
            work_name: formData.gzzwmc,
            work_duty: formData.gzgzzz
          });
          this.$router.back();
        })
        .catch(error => {
          console.log(error);
        });
    }
>>>>>>> e0cef4e243c2a78b5dad97f0ffc85e3a2e641656
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