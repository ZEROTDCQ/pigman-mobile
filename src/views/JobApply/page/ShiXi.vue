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
          <van-field
            v-model="formData.sxks"
            placeholder="开始时间（yyyy-mm-dd）"
            :error-message="errors['sxks']?errors['sxks'][0].message:''"
          />
          <van-field
            v-model="formData.sxjs"
            placeholder="结束时间（yyyy-mm-dd）"
            :error-message="errors['sxjs']?errors['sxjs'][0].message:''"
          />
          <van-field
            v-model="formData.sxgsmc"
            placeholder="公司名称"
            :error-message="errors['sxgsmc']?errors['sxgsmc'][0].message:''"
          />
          <van-field
            v-model="formData.sxzwmc"
            placeholder="职位名称"
            :error-message="errors['sxzwmc']?errors['sxzwmc'][0].message:''"
          />
          <van-field
            v-model="formData.sxgzzz"
            type="textarea"
            rows="2"
            autosize
            placeholder="工作职责"
            :error-message="errors['sxgzzz']?errors['sxgzzz'][0].message:''"
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
        sxks: "",
        sxjs: "",
        sxgsmc: this.$store.state.internship_company,
        sxzwmc: this.$store.state.internship_name,
        sxgzzz: this.$store.state.internship_duty
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
        sxks: {
          validator: (rule, value, callback) => {
            var date = new Date(value);
            if (
              formData.sxgsmc != "" ||
              formData.sxzwmc != "" ||
              formData.sxgzzz != "" ||
              value != "" ||
              formData.sxjs != ""
            ) {
              if (!reg.test(value) || date == "Invalid Date") {
                callback("请输入有效时间");
              }
              if (value != "" && formData.sxjs != "") {
                // 判断开始时间是否比结束时间晚
                var sxjs = new Date(formData.sxjs).getTime();
                if (new Date(value).getTime() > sxjs) {
                  callback("请输入有效开始时间");
                }
              }
            }
            callback();
          }
        },
        sxjs: {
          validator: (rule, value, callback) => {
            var date = new Date(value);
            if (value != "" || formData.sxks != "") {
              // 验证结束时间是否符合格式
              if (!reg.test(value) || date == "Invalid Date") {
                callback("请输入有效时间");
              }
            }
            if (value != "" && formData.sxks != "") {
              // 判断结束时间是否比开始时间早
              var sxks = new Date(formData.sxks).getTime();
              if (new Date(value).getTime() < sxks) {
                callback("请输入有效结束时间");
              }
            }
            callback();
          }
        },
        sxgsmc: {
          validator: (rule, value, callback) => {
            if (formData.sxks != "" && !value) {
              callback("请输入实习公司名称");
            }
            callback();
          }
        },
        sxzwmc: {
          validator: (rule, value, callback) => {
            if (formData.sxks != "" && !value) {
              callback("请输入实习职位名称");
            }
            callback();
          }
        },
        sxgzzz: {
          validator: (rule, value, callback) => {
            if (formData.sxks != "" && !value) {
              callback("请输入实习工作职责");
            }
            callback();
          }
        }
      };
      var validator = new schema(descriptor);
      return validator.validate(
        {
          sxks: formData.sxks,
          sxjs: formData.sxjs,
          sxgsmc: formData.sxgsmc,
          sxzwmc: formData.sxzwmc,
          sxgzzz: formData.sxgzzz
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
          let internship_time = this.formatDate(formData.sxks)
            ? this.formatDate(formData.sxks) +
              " - " +
              this.formatDate(formData.sxjs)
            : "";
          this.$store.commit("setFormState", {
            internship_time,
            internship_company: formData.sxgsmc,
            internship_name: formData.sxzwmc,
            internship_duty: formData.sxgzzz
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