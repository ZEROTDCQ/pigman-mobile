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
              <span>上传图片简历</span>
            </div>
            <div class="pig-cell-value upload">
              <van-uploader v-model="fileList"></van-uploader>
            </div>
            <div class="pig-cell-desc">手机端仅支持上传JPG、PNG等图片格式，其他格式请访问PC端。</div>
          </div>
        </div>
      </div>
      <div class="form-blick gap bg-fff">
        <van-cell title="个人信息" is-link :value="personInfoStatus" :to="{name: 'person'}" />
      </div>
      <div class="form-block gap bg-fff">
        <div class="form-head">
          <h5 class="form-title">求职意向</h5>
        </div>
        <div class="form-body">
          <van-cell-group>
            <van-field placeholder="当前薪资" />
            <van-field placeholder="期望薪资" />
            <van-field placeholder="期望城市" />
          </van-cell-group>
        </div>
      </div>
      <div class="form-block gap bg-fff">
        <div class="form-head">
          <h5 class="form-title">语言能力</h5>
        </div>
        <div class="form-body">
          <van-cell-group>
            <van-field placeholder="语言类型" />
            <van-field placeholder="掌握程度" />
            <van-field placeholder="听说" />
            <van-field placeholder="读写" />
          </van-cell-group>
        </div>
      </div>
      <div class="form-block gap bg-fff">
        <div class="form-head">
          <h5 class="form-title">获奖经历</h5>
        </div>
        <div class="form-body">
          <van-cell-group>
            <van-field placeholder="起止时间" />
            <van-field placeholder="奖项名称" />
          </van-cell-group>
        </div>
      </div>
      <div class="form-block gap bg-fff">
        <div class="form-head">
          <h5 class="form-title">教育经历</h5>
        </div>
        <div class="form-body">
          <div class="info-item">
            <router-link :to="{name: 'jiaoyu'}" class="add-info-btn">+新增教育经历</router-link>
          </div>
        </div>
      </div>
      <div class="form-block gap bg-fff">
        <div class="form-head">
          <h5 class="form-title">实习经历</h5>
        </div>
        <div class="form-body">
          <div class="info-item">
            <router-link :to="{name: 'shixi'}" class="add-info-btn">+新增实习经历</router-link>
          </div>
        </div>
      </div>
      <div class="form-block gap bg-fff">
        <div class="form-head">
          <h5 class="form-title">工作经历</h5>
        </div>
        <div class="form-body">
          <div class="info-item">
            <router-link :to="{name: 'gongzuo'}" class="add-info-btn">+新增工作经历</router-link>
          </div>
        </div>
      </div>
      <div class="form-block gap bg-fff">
        <div class="form-head">
          <h5 class="form-title">项目经历</h5>
        </div>
        <div class="form-body">
          <div class="info-item">
            <router-link :to="{name: 'xiangmu'}" class="add-info-btn">+新增项目经历</router-link>
          </div>
        </div>
      </div>
    </div>
    <transition name="slide-left">
      <router-view />
    </transition>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      fileList: [
        { url: "https://img.yzcdn.cn/vant/leaf.jpg" },
        { url: "https://img.yzcdn.cn/vant/leaf.jpg" }
      ]
    };
  },
  computed: {
    ...mapGetters(["personInfoStatus"])
  },
  methods: {
    backAction() {
      history.back();
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
    font-size: 12px;
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
    height: 30px;
    line-height: 30px;
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
      font-size: 14px;
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
.van-field__error-message {
  color: #ee0a24;
  font-size: 12px;
  text-align: left;
}
</style>