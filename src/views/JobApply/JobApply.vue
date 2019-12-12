<template>
  <!-- 职位申请 -->
  <div class="job_apply">
    <div class="page-head">
      <div class="ph-btn btn-back fl">
        <a href="javascript:;" @click="backAction">
          <i class="iconfont">&#xe6f4;</i>
        </a>
      </div>
      <h5 class="ph-tit">职位申请</h5>
    </div>
    <div class="page-body">
      <div class="summary-info bg-fff">
        <h3 class="si-company">香港猪先生有限公司</h3>
        <p class="si-bm-xl-jy">
          <i class="iconfont">&#xea9a;</i>
          <span>技术</span>
          <span class="sep">-</span>
          <span>本科</span>
          <span class="sep">-</span>
          <span>应届生</span>
        </p>
        <p class="si-lx-zw-dz">
          <i class="iconfont">&#xe657;</i>
          <span>全职</span>
          <span>产品品质控制</span>
          <span>广东 深圳</span>
        </p>
      </div>

      <div class="form-block gap bg-fff">
        <div class="form-head">
          <h5 class="form-title">上传</h5>
        </div>
        <div class="form-body">
          <div class="pig-cell vertical">
            <div class="pig-cell-title">
              <span :class="{upload_error: errors['resume']?true:false}">上传图片简历</span>
            </div>
            <div class="pig-cell-value upload">
              <van-uploader
                :max-count="3"
                v-model="fileList"
                :after-read="afterRead"
                @delete="deleteItem"
              ></van-uploader>
            </div>
            <div class="pig-cell-desc">手机端仅支持上传JPG、PNG等图片格式，其他格式请访问PC端。</div>
          </div>
        </div>
      </div>
      <div class="form-blick gap bg-fff">
        <van-cell title="个人信息*" is-link :to="{name: 'person'}">
          <span
            :class="['personal_status', {validate_error: validateError && !personInfoStatus}]"
          >{{personInfoStatus?'编辑':'点击填写'}}</span>
          <van-icon
            slot="right-icon"
            name="arrow"
            style="line-height: inherit;"
            :class="{validate_error: validateError && !personInfoStatus}"
          />
        </van-cell>
      </div>
      <div class="form-block gap bg-fff">
        <div class="form-head">
          <h5 class="form-title">求职意向*</h5>
        </div>
        <div class="form-body">
          <van-cell-group>
            <van-field
              v-model="formData.current_salary"
              placeholder="当前薪资"
              :error-message="errors['qzdqxz']?errors['qzdqxz'][0].message:''"
            />
            <van-field
              v-model="formData.salary_expectation"
              placeholder="期望薪资"
              :error-message="errors['qzqwxz']?errors['qzqwxz'][0].message:''"
            />
            <van-field
              v-model="formData.city"
              placeholder="期望城市"
              :error-message="errors['qzqwcs']?errors['qzqwcs'][0].message:''"
            />
          </van-cell-group>
        </div>
      </div>
      <div class="form-block gap bg-fff">
        <div class="form-head">
          <h5 class="form-title">语言能力</h5>
        </div>
        <div class="form-body">
          <van-cell-group>
            <van-field v-model="formData.language_type" placeholder="语言类型" />
            <van-field v-model="formData.language_degree" placeholder="掌握程度" />
            <van-field v-model="formData.hear" placeholder="听说" />
            <van-field v-model="formData.read_write" placeholder="读写" />
          </van-cell-group>
        </div>
      </div>
      <div class="form-block gap bg-fff">
        <div class="form-head">
          <h5 class="form-title">获奖经历</h5>
        </div>
        <div class="form-body">
          <van-cell-group>
            <van-field v-model="formData.winning_time" placeholder="起止时间" />
            <van-field v-model="formData.winning_name" placeholder="奖项名称" />
          </van-cell-group>
        </div>
      </div>
      <div class="form-block gap bg-fff">
        <div class="form-head">
          <h5 class="form-title">教育经历</h5>
        </div>
        <div class="form-body">
          <div
            v-if="jiaoyuInfo.education_time"
            class="jiaoyu-info fb-inner"
            @click="$router.push({name: 'jiaoyu'})"
          >
            <van-cell-group>
              <van-cell clickable title="教育时间" :value="jiaoyuInfo.education_time" />
              <van-cell clickable title="学校名称" :value="jiaoyuInfo.school" />
              <van-cell clickable title="专业名称" :value="jiaoyuInfo.professional" />
              <van-cell clickable title="学历" :value="jiaoyuInfo.education" />
            </van-cell-group>
          </div>
          <div v-else class="info-item">
            <router-link :to="{name: 'jiaoyu'}" class="add-info-btn">+新增教育经历</router-link>
          </div>
        </div>
      </div>
      <div class="form-block gap bg-fff">
        <div class="form-head">
          <h5 class="form-title">实习经历</h5>
        </div>
        <div class="form-body">
          <div
            v-if="shixiInfo.internship_time"
            class="jiaoyu-info fb-inner"
            @click="$router.push({name: 'shixi'})"
          >
            <van-cell-group>
              <van-cell clickable title="实习时间" :value="shixiInfo.internship_time" />
              <van-cell clickable title="公司名称" :value="shixiInfo.internship_company" />
              <van-cell clickable title="职位名称" :value="shixiInfo.internship_name" />
              <van-cell clickable title="工作职责" :value="shixiInfo.internship_duty" />
            </van-cell-group>
          </div>
          <div v-else class="info-item">
            <router-link :to="{name: 'shixi'}" class="add-info-btn">+新增实习经历</router-link>
          </div>
        </div>
      </div>
      <div class="form-block gap bg-fff">
        <div class="form-head">
          <h5 class="form-title">工作经历</h5>
        </div>
        <div class="form-body">
          <div
            v-if="gongzuoInfo.work_time"
            class="jiaoyu-info fb-inner"
            @click="$router.push({name: 'gongzuo'})"
          >
            <van-cell-group>
              <van-cell clickable title="工作时间" :value="gongzuoInfo.work_time" />
              <van-cell clickable title="公司名称" :value="gongzuoInfo.work_company" />
              <van-cell clickable title="职位名称" :value="gongzuoInfo.work_name" />
              <van-cell clickable title="工作职责" :value="gongzuoInfo.work_duty" />
            </van-cell-group>
          </div>
          <div v-else class="info-item">
            <router-link :to="{name: 'gongzuo'}" class="add-info-btn">+新增工作经历</router-link>
          </div>
        </div>
      </div>
      <div class="form-block gap bg-fff">
        <div class="form-head">
          <h5 class="form-title">项目经历</h5>
        </div>
        <div class="form-body">
          <div
            v-if="xiangmuInfo.project_time"
            class="jiaoyu-info fb-inner"
            @click="$router.push({name: 'xiangmu'})"
          >
            <van-cell-group>
              <van-cell clickable title="项目时间" :value="xiangmuInfo.project_time" />
              <van-cell clickable title="项目名称" :value="xiangmuInfo.project_name" />
              <van-cell clickable title="项目职务" :value="xiangmuInfo.project_post" />
              <van-cell clickable title="项目描述" :value="xiangmuInfo.project_describe" />
              <van-cell clickable title="项目职责" :value="xiangmuInfo.project_duty" />
            </van-cell-group>
          </div>
          <div v-else class="info-item">
            <router-link :to="{name: 'xiangmu'}" class="add-info-btn">+新增项目经历</router-link>
          </div>
        </div>
      </div>
      <div class="bottom-btn">
        <a class="btn-primary" href="javascript:;" @click="submit">提交</a>
      </div>
    </div>
    <transition name="slide-left">
      <router-view />
    </transition>
  </div>
</template>

<script>
import schema from "async-validator";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      fileList: [],
      formData: {
        // -----简历-----
        resume: [],
        // -----求职意向-----
        current_salary: "",
        salary_expectation: "",
        city: "",
        // -----语言能力-----
        language_type: "",
        language_degree: "",
        hear: "",
        read_write: "",
        // -----获奖经历-----
        winning_time: "",
        winning_name: ""
      },
      validateError: false,
      errors: {}
    };
  },
  computed: {
    ...mapGetters([
      "personInfoStatus",
      "personInfo",
      "jiaoyuInfo",
      "shixiInfo",
      "gongzuoInfo",
      "xiangmuInfo"
    ]),
    toast() {
      var firstKey =
        Object.keys(this.errors).length > 0
          ? Object.keys(this.errors)[0]
          : null;
      return firstKey ? this.errors[firstKey][0].message : "";
    }
  },
  methods: {
    afterRead(file, detail) {
      console.log(file, detail);
      // file 当前上传的文件
      var fd = new FormData();
      fd.append("type", "file");
      fd.append("file", file.file);
      // 自定义加载图标
      const toast = vant.Toast.loading({
        message: "上传中...",
        forbidClick: true,
        loadingType: "spinner"
      });
      this.$instance
        .post("/api/api/postimg", fd)
        .then(res => {
          var { data } = res.data;
          this.formData.resume.push(data);
          console.log(this.formData);
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          toast.clear();
        });
    },
    deleteItem(file, detail) {
      console.log(detail.index);
      this.formData.resume.splice(detail.index, 1);
      console.log(this.formData);
    },
    backAction() {
      history.back();
    },
    handleErrors(errors, fields) {
      if (fields) {
        this.errors = fields;
      }
    },
    validate() {
      var formData = this.formData;
      var descriptor = {
        resume: {
          validator: (rule, value, callback) => {
            console.log(value);
            if (value.length <= 0) {
              callback("请上传简历");
            }
            callback();
          }
        },
        personStatus: {
          validator(rule, value, callback) {
            if (!value) {
              callback("请填写个人信息");
            }
            callback();
          }
        },
        qzdqxz: {
          validator: (rule, value, callback) => {
            if (!value) {
              callback("请输入当前薪资");
            }
            callback();
          }
        },
        qzqwxz: {
          validator: (rule, value, callback) => {
            if (!value) {
              callback("请输入期望薪资");
            }
            callback();
          }
        },
        qzqwcs: {
          validator: (rule, value, callback) => {
            if (!value) {
              callback("请输入期望城市");
            }
            callback();
          }
        }
      };
      var validator = new schema(descriptor);
      var formData = this.formData;
      return validator.validate(
        {
          resume: formData.resume,
          personStatus: this.personInfoStatus,
          qzdqxz: formData.current_salary,
          qzqwxz: formData.salary_expectation,
          qzqwcs: formData.city
        },
        (errors, fields) => {
          if (errors || this.personInfoStatus) {
            //验证失败，错误是所有错误的数组
            //字段是由字段名称键入的对象，数组为
            // /每个字段的/ errors
            this.validateError = true;
            return this.handleErrors(errors, fields);
          }
          this.validateError = false;
        }
      );
    },
    submit() {
      this.validate()
        .then(() => {
          this.errors = {};
          // 自定义加载图标
          const toast = vant.Toast.loading({
            message: "提交中...",
            forbidClick: true,
            loadingType: "spinner"
          });
          this.$instance
            .post("/api/api/positionApply", {
              position_id: 16,
              ...this.formData,
              ...this.personInfo,
              ...this.jiaoyuInfo,
              ...this.shixiInfo,
              ...this.gongzuoInfo,
              ...this.xiangmuInfo
            })
            .then(res => {
              if (res.data.code == 200) {
                toast.clear();
                vant.Dialog.alert({
                  message: "您已成功提交职位申请，请等待客服人员联系。"
                }).then(() => {
                  // on close
                  location.reload();
                });
              }
            })
            .catch(error => {
              console.log(error);
            })
            .finally(() => {
              toast.clear();
            });
        })
        .catch(error => {
          console.log("验证不通过");
          console.log(error);
        })
        .finally(() => {
          if (this.toast) {
            vant.Toast(this.toast);
          }
        });
    }
  }
};
</script>

<style lang="scss">
.slide-left-enter,
.slide-left-leave-to {
  transform: translateX(100%);
}
.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 0.24s ease-in-out;
}
.info-item {
  .add-info-btn {
    display: block;
    height: 68px;
    line-height: 68px;
    font-size: 14px;
    color: $primarycolor;
    text-align: center;
    &:active {
      background-color: #f2f3f5;
    }
  }
}
</style>

<style lang="scss">
html,
body,
.job_apply {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.job_apply {
  position: relative;
  background: #f5f5f5;
}
.page-head {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 44px;
  font-size: 16px;
  line-height: 44px;
  color: #fff;
  background: $primarycolor;
  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background: #eee;
    transform: scaleY(0.5);
    transform-origin: center bottom;
  }
  .ph-btn {
    position: absolute;
    top: 0;
    a {
      display: block;
      padding: 0 10px;
    }
  }
  .fl {
    left: 0;
  }
  .fr {
    right: 0;
  }
  .ph-tit {
    margin: 0 44px;
    font-size: 16px;
    font-weight: normal;
    text-align: center;
  }
}
.page-body {
  position: absolute;
  top: 44px;
  bottom: 0;
  width: 100%;
  overflow: hidden;
  overflow-y: auto;
}
.gap {
  margin-top: 6px;
}
.bg-fff {
  background: #fff;
}
.add-experience {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  overflow: hidden;
  overflow-y: auto;
  background: #f5f5f5;
}
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
</style>

<style lang="scss">
.summary-info {
  padding: 10px;
  color: #333;
  .si-company {
    font-size: 18px;
    margin-bottom: 10px;
  }
  .si-bm-xl-jy,
  .si-lx-zw-dz {
    font-size: 14px;
    .iconfont {
      margin-right: 2px;
    }
  }
  .si-bm-xl-jy {
    margin-bottom: 5px;
  }
  .si-lx-zw-dz {
    overflow: hidden;
    span {
      margin-right: 10px;
    }
  }
}

.form-block {
  .form-head {
    position: relative;
    height: 44px;
    line-height: 44px;
    padding: 0 10px;
    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 1px;
      background: #eee;
      transform: scaleY(0.5);
    }
    .form-title {
      font-size: 16px;
      color: #333;
    }
  }
}

.pig-cell {
  display: flex;
  box-sizing: border-box;
  width: 100%;
  padding: 10px;
  overflow: hidden;
  color: #333;
  font-size: 14px;
  line-height: 24px;
  background-color: #fff;
  &.vertical {
    flex-direction: column;
  }
  .upload_error {
    color: #ee0a24;
  }
  .pig-cell-value.upload {
    margin-top: 10px;
  }
  .pig-cell-desc {
    font-size: 12px;
    color: #999;
  }
}
.van-uploader__preview {
  position: relative;
  margin: 0 8px 8px 0;
}
.van-uploader__preview-image {
  display: block;
  width: 80px;
  height: 80px;
  border-radius: 4px !important;
}
.van-uploader__preview-delete {
  position: absolute;
  top: -8px;
  right: -8px;
  color: #969799;
  font-size: 18px;
  background-color: #fff;
  border-radius: 100%;
}
.van-uploader__upload {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  box-sizing: border-box;
  width: 80px;
  height: 80px;
  margin: 0 8px 8px 0;
  background-color: #fff;
  border: 1px dashed #e5e5e5;
  border-radius: 4px;
}
.van-uploader__upload-icon {
  color: #969799;
  font-size: 24px;
}
.van-image-preview__index {
  top: 10px;
  font-size: 14px;
}

.van-cell {
  position: relative;
  display: flex;
  box-sizing: border-box;
  width: 100%;
  padding: 10px;
  overflow: hidden;
  color: #323233;
  font-size: 14px;
  line-height: 24px;
  background-color: #fff;
  &:not(:last-child)::after {
    border-bottom: 1px solid #ebedf0;
  }
}
.van-cell__left-icon,
.van-cell__right-icon {
  min-width: 1em;
  height: 24px;
  font-size: 16px;
  line-height: 24px;
}
.van-cell__right-icon {
  margin-left: 5px;
  color: #969799;
}
.personal_status.validate_error,
.van-icon-arrow.validate_error {
  color: #ee0a24;
}

.van-field__error-message {
  color: #ee0a24;
  font-size: 12px;
  text-align: left;
}
.van-toast {
  width: 90px;
  min-height: 90px;
  padding: 16px;
  font-size: 14px;
  line-height: 20px;
  border-radius: 4px;
}
.van-toast--text,
.van-toast--html {
  width: -webkit-fit-content;
  width: fit-content;
  min-width: 96px;
  min-height: unset;
  padding: 8px 12px;
}
.van-toast--text .van-toast__text,
.van-toast--html .van-toast__text {
  margin-top: 0;
}
.van-toast__loading {
  padding: 4px;
}
.van-loading__spinner {
  width: 30px;
  height: 30px;
}
.van-toast__text {
  margin-top: 8px;
}
.van-dialog {
  width: 320px;
  font-size: 16px;
  border-radius: 16px;
}
.van-dialog__message {
  padding: 24px;
  font-size: 14px;
  line-height: 20px;
}
.van-button--large {
  height: 50px;
  line-height: 48px;
}
.van-hairline--top::after {
  border-top-width: 1px;
}
.van-button {
  font-size: 16px;
}
input,
button,
textarea {
  color: inherit;
  font: inherit;
}
</style>