<template>
  <div class="supply" id="app">
    <div class="page-head">
      <div class="ph-btn btn-back fl">
        <a href="javascript:;" @click="backAction">
          <i class="iconfont">&#xe6f4;</i>
        </a>
      </div>
      <h5 class="ph-tit">供货合作申请</h5>
    </div>
    <div class="page-body">
      <div class="form-block bg-fff">
        <div class="form-head">选择您可供货的商品种类【多选】*</div>
        <div class="form-body">
          <van-checkbox-group v-model="formData.type">
            <van-cell-group>
              <van-cell
                v-for="(item, index) in typeList"
                clickable
                :key="item"
                :title="item"
                @click="toggle(index)"
              >
                <van-checkbox :name="item" ref="checkboxes" slot="right-icon" />
              </van-cell>
            </van-cell-group>
          </van-checkbox-group>
        </div>
      </div>
      <div class="form-block gap bg-fff">
        <div class="form-head">供应商信息</div>
        <div class="form-body">
          <van-cell-group>
            <van-field
              type="textarea"
              v-model="formData.sketch"
              :rows="2"
              autosize
              placeholder="公司简介*"
            />
            <van-field
              type="textarea"
              v-model="formData.detailed"
              :rows="2"
              autosize
              placeholder="供应商品明细* 多个商品以逗号分隔"
            />
            <van-field v-model="formData.name" placeholder="联系人*" />
            <van-field v-model="formData.phone" placeholder="联系人手机号*" />
          </van-cell-group>
        </div>
      </div>
      <div class="form-block gap bg-fff">
        <div class="form-head">资历证明</div>
        <div class="form-body">
          <van-cell-group>
            <van-cell class="vertical" title="营业执照*">
              <van-uploader
                :max-count="3"
                v-model="uploadList1"
                :after-read="afterRead1"
                @delete="deleteItem1"
              ></van-uploader>
            </van-cell>
            <van-cell class="vertical" title="流通许可/生产许可证*">
              <van-uploader
                :max-count="3"
                v-model="uploadList2"
                :after-read="afterRead2"
                @delete="deleteItem2"
              ></van-uploader>
            </van-cell>
            <van-cell class="vertical" title="授权许可*">
              <van-uploader
                :max-count="3"
                v-model="uploadList3"
                :after-read="afterRead3"
                @delete="deleteItem3"
              ></van-uploader>
            </van-cell>
          </van-cell-group>
        </div>
      </div>
      <div class="bottom-btn">
        <a class="btn-primary" href="javascript:;" @click="submit">提交</a>
      </div>
    </div>
  </div>
</template>

<script>
import schema from "async-validator";
export default {
  data() {
    return {
      typeList: [
        "乳品烘焙",
        "冷热速食",
        "厨房食品",
        "水产海鲜（冷冻）",
        "水产海鲜（鲜活）",
        "水果",
        "鸡鸭禽类",
        "米面粮油",
        "蔬菜",
        "蛋类",
        "豆/血制品",
        "酒水饮料",
        "零食",
        "猪肉",
        "牛肉",
        "羊肉",
        "南北干货",
        "调味品",
        "半成品",
        "鲜花",
        "包装类耗材",
        "冷藏冷冻柜",
        "配送电动车",
        "办公耗材",
        "仓储设备",
        "保温箱",
        "其它"
      ],
      formData: {
        type: [],
        sketch: "",
        detailed: "",
        name: "",
        phone: "",
        business_license: [],
        licensing: [],
        production_license: []
      },
      uploadList1: [],
      uploadList2: [],
      uploadList3: [],
      errors: []
    };
  },
  computed: {
    toast() {
      return this.errors.length == 0 ? "" : this.errors[0].message;
    }
  },
  methods: {
    backAction() {
      history.back();
    },
    toggle(index) {
      this.$refs.checkboxes[index].toggle();
    },
    afterRead1(file, detail) {
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
          this.formData.business_license.push(data);
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          toast.clear();
        });
    },
    deleteItem1(file, detail) {
      this.formData.business_license.splice(detail.index, 1);
      console.log(this.formData);
    },
    afterRead2(file, detail) {
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
          this.formData.licensing.push(data);
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          toast.clear();
        });
    },
    deleteItem2(file, detail) {
      this.formData.licensing.splice(detail.index, 1);
      console.log(this.formData);
    },
    afterRead3(file, detail) {
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
          this.formData.production_license.push(data);
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          toast.clear();
        });
    },
    deleteItem3(file, detail) {
      this.formData.production_license.splice(detail.index, 1);
      console.log(this.formData);
    },
    handleErrors(errors, fields) {
      this.errors = errors;
    },
    validate() {
      var descriptor = {
        type: {
          validator: (rule, value, callback) => {
            // 判断品类个数是否大于1
            if (value.length <= 0) {
              callback("请选择可供货品类");
            }
            callback();
          }
        },
        sketch: {
          type: "string",
          required: true,
          message: "请输入公司简介"
        },
        detailed: {
          type: "string",
          required: true,
          message: "请填写供应明细"
        },
        name: {
          type: "string",
          required: true,
          message: "请输入联系人"
        },
        phone: {
          type: "string",
          required: true,
          message: "请输入联系电话"
        },
        business_license: {
          validator(rule, value, callback) {
            if (value.length <= 0) {
              callback("请上传营业执照");
            }
            callback();
          }
        },
        licensing: {
          validator(rule, value, callback) {
            if (value.length <= 0) {
              callback("请上传许可证");
            }
            callback();
          }
        },
        production_license: {
          validator(rule, value, callback) {
            if (value.length <= 0) {
              callback("请上传授权许可");
            }
            callback();
          }
        }
      };
      var validator = new schema(descriptor);
      var formData = this.formData;
      return validator.validate(
        {
          type: formData.type,
          sketch: formData.sketch,
          detailed: formData.detailed,
          name: formData.name,
          phone: formData.phone,
          business_license: formData.business_license,
          licensing: formData.licensing,
          production_license: formData.production_license
        },
        (errors, fields) => {
          if (errors) {
            this.handleErrors(errors, fields);
          }
        }
      );
    },
    submit() {
      this.validate()
        .then(() => {
          this.errors = [];
          // 自定义加载图标
          const toast = vant.Toast.loading({
            message: "提交中...",
            forbidClick: true,
            loadingType: "spinner"
          });
          this.$instance
            .post("/api/api/CooperationIntentionList", this.formData)
            .then(res => {
              console.log(res);
              if (res.data.code == 200) {
                toast.clear();
                vant.Dialog.alert({
                  message: "您已成功提交供货申请，请等待客服人员联系。"
                }).then(() => {
                  // on close
                  location.reload();
                });
              }
            })
            .catch(error => {
              console.log(error);
              toast.clear();
            });
        })
        .catch(error => {
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
html,
body,
.supply {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.supply {
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
</style>

<style lang="scss">
.van-hairline--top-bottom::after,
.van-hairline-unset--top-bottom::after {
  border-width: 1px 0;
}
.van-cell {
  padding: 10px 16px;
  color: #323233;
  font-size: 14px;
  line-height: 24px;
  &:not(:last-child)::after {
    border-bottom: 1px solid #ebedf0;
  }
  &.vertical {
    flex-direction: column;
    .van-cell__value {
      text-align: left;
    }
  }
}
.van-checkbox__icon {
  font-size: 20px;
  .van-icon {
    border-width: 1px;
  }
}
.van-checkbox__icon--checked .van-icon {
  color: #fff;
  background-color: $primarycolor;
  border-color: $primarycolor;
}

.van-uploader {
  margin-top: 8px;
}
.van-uploader__preview {
  margin: 0 8px 8px 0;
}
.van-uploader__preview-image {
  width: 80px;
  height: 80px;
}
.van-uploader__preview-delete {
  top: -8px;
  right: -8px;
  font-size: 18px;
  border-radius: 100%;
}
.van-uploader__upload {
  width: 80px;
  height: 80px;
  margin: 0 8px 8px 0;
  border: 1px dashed #e5e5e5;
  border-radius: 4px;
}
.van-uploader__upload-icon {
  font-size: 24px;
}
.van-image-preview__index {
  top: 10px;
  font-size: 14px;
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
</style>

<style lang="scss">
.form-block {
  .form-head {
    padding: 0 16px;
    height: 44px;
    line-height: 44px;
    font-size: 16px;
    font-weight: bold;
    color: #333;
  }
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