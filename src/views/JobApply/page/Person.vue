<template>
  <!-- 个人信息路由页面 -->
  <div class="add-experience jiaoyu">
    <div class="page-head">
      <div class="ph-btn btn-back fl">
        <a href="javascript:;" @click="backAction">
          <i class="iconfont">&#xe6f4;</i>
        </a>
      </div>
      <h5 class="ph-tit">个人信息</h5>
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
            v-model="formData.grxm"
            placeholder="姓名"
            :error-message="errors['grxm']?errors['grxm'][0].message:''"
          />
          <van-field
            v-model="formData.grsjhm"
            placeholder="手机号码"
            :error-message="errors['grsjhm']?errors['grsjhm'][0].message:''"
          />
          <van-field
            v-model="formData.gryx"
            placeholder="邮箱"
            :error-message="errors['gryx']?errors['gryx'][0].message:''"
          />
          <van-field
            v-model="formData.grxb"
            placeholder="性别"
            :error-message="errors['grxb']?errors['grxb'][0].message:''"
          />
          <van-field
            v-model="formData.grnl"
            placeholder="年龄"
            :error-message="errors['grnl']?errors['grnl'][0].message:''"
          />
          <van-field
            v-model="formData.grgzjy"
            placeholder="工作经验"
            :error-message="errors['grgzjy']?errors['grgzjy'][0].message:''"
          />
          <van-field
            v-model="formData.grzgxl"
            placeholder="最高学历"
            :error-message="errors['grzgxl']?errors['grzgxl'][0].message:''"
          />
          <van-field
            v-model="formData.grszd"
            placeholder="所在地"
            :error-message="errors['grszd']?errors['grszd'][0].message:''"
          />
          <van-field
            v-model="formData.grzjgs"
            placeholder="最近公司"
            :error-message="errors['grzjgs']?errors['grzjgs'][0].message:''"
          />
          <van-field
            v-model="formData.grzjhm"
            placeholder="证件号码"
            :error-message="errors['grzjhm']?errors['grzjhm'][0].message:''"
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
        grxm: this.$store.state.name,
        grsjhm: this.$store.state.phone,
        gryx: this.$store.state.email,
        grxb: this.$store.state.sex,
        grnl: this.$store.state.age,
        grgzjy: this.$store.state.experience,
        grzgxl: this.$store.state.top_education,
        grszd: this.$store.state.address,
        grzjgs: this.$store.state.recen_company,
        grzjhm: this.$store.state.idcard
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
        grxm: {
          type: "string",
          required: true,
          message: "请输入个人姓名"
        },
        grsjhm: [
          {
            type: "number",
            required: true,
            transform(value) {
              return !value ? "" : Number(value);
            },
            message: "请输入正确的手机号码"
          }
          // {
          //   validator(rule, value, callback) {
          //     // 错误消息数组，为空表示无错误，在return之前调用callback，则返回callback传入的错误信息
          //     if (value.length != 11) {
          //       callback("请输入正确的手机号码");
          //     }
          //     callback();
          //   }
          // }
        ],
        gryx: [
          {
            validator(rule, value, callback) {
              if (!/@/.test(value)) {
                callback("请输入正确的邮箱");
              }
              callback();
            }
          }
        ],
        grxb: { type: "enum", enum: ["男", "女"], message: "请输入男或女" },
        grnl: [
          {
            type: "number",
            required: true,
            transform(value) {
              return Number(value);
            },
            message: "请输入正确的年龄"
          },
          {
            validator(rule, value, callback) {
              if (value <= 0) {
                callback("请输入正确的年龄");
              }
              callback();
            }
          }
        ],
        grgzjy: {
          type: "string",
          required: true,
          message: "请输入工作经验"
        },
        grzgxl: {
          type: "string",
          required: true,
          message: "请输入最高学历"
        },
        grszd: {
          type: "string",
          required: true,
          message: "请输入所在地"
        },
        grzjgs: {
          type: "string",
          required: true,
          message: "请输入最近公司"
        },
        grzjhm: {
          type: "string",
          required: true,
          message: "请输入证件号码"
        }
      };
      var validator = new schema(descriptor);
      return validator.validate(
        {
          grxm: this.formData.grxm,
          grsjhm: this.formData.grsjhm,
          gryx: this.formData.gryx,
          grxb: this.formData.grxb,
          grnl: this.formData.grnl,
          grgzjy: this.formData.grgzjy,
          grzgxl: this.formData.grzgxl,
          grszd: this.formData.grszd,
          grzjgs: this.formData.grzjgs,
          grzjhm: this.formData.grzjhm
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
          let formData = this.formData;
          this.$store.commit("setFormState", {
            name: formData.grxm,
            phone: formData.grsjhm,
            email: formData.gryx,
            sex: formData.grxb,
            age: formData.grnl,
            experience: formData.grgzjy,
            top_education: formData.grzgxl,
            address: formData.grszd,
            recen_company: formData.grzjgs,
            idcard: formData.grzjhm
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

<style lang="scss">
<<<<<<< HEAD
.bottom-btn {
  padding: 10px;
  .btn-primary {
    display: block;
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 16px;
    color: #fff;
    background: $primarycolor;
    border-radius: 2px;
    &:active {
      background: #4aa046;
    }
  }
}
=======

>>>>>>> e0cef4e243c2a78b5dad97f0ffc85e3a2e641656
</style>