<template>
  <!-- 活动报名 -->
  <div class="activity_apply page_wrap">
    <div class="aa-head">
      <div class="aa-btn btn-back fl">
        <a href="javascript:;">
          <i class="iconfont">&#xe6f4;</i>
        </a>
      </div>
      <h5 class="aa-tit">活动报名</h5>
    </div>
    <div class="aa-con">
      <div class="ticket-summary">
        <div class="ticket-info-wrap ts">
          <div class="ticket-img"></div>
          <div class="ticket-info">
            <p class="ac-title">北京●中国人力资源科技年度峰会隆重开启 10月18日周五...</p>
            <p class="ac-date gray">时间：10-24 09:00</p>
            <p class="ac-address gray">地点：北京朝阳区瑰丽酒店</p>
          </div>
        </div>
        <div class="ticket-cell ts">
          <div class="ticket-type">
            <span>特价免费票</span>
          </div>
          <div class="ticket-price">
            <span>¥{{$calc.accMul(ticketInfo.price, formData.ticketNum)}}</span>
          </div>
          <div class="ticket-num">
            <button
              type="button"
              :class="['stepper__minus', {disabled: formData.ticketNum == 1}]"
              @click="changeCount(0)"
            >-</button>
            <input type="number" class="stepper__input" readonly :value="formData.ticketNum" />
            <button
              type="button"
              :class="['stepper__plus', {disabled: formData.ticketNum == ticketInfo.limit}]"
              @click="changeCount(1)"
            >+</button>
          </div>
        </div>
      </div>

      <div class="form-wrap gap">
        <div class="form-head line">
          <span>填写报名信息</span>
        </div>
        <div class="form-body">
          <div class="cell-item field line">
            <div class="cell-label">
              <span>姓名</span>
            </div>
            <div class="cell-value">
              <input
                type="text"
                placeholder="请输入您的姓名"
                class="field__control"
                v-model="formData.name"
              />
            </div>
          </div>
          <div class="cell-item field line">
            <div class="cell-label">
              <span>手机</span>
            </div>
            <div class="cell-value">
              <input
                type="text"
                placeholder="请输入您的手机号"
                class="field__control"
                v-model="formData.phone"
              />
            </div>
          </div>
          <div class="cell-item field line">
            <div class="cell-label">
              <span>公司</span>
            </div>
            <div class="cell-value">
              <input
                type="text"
                placeholder="请输入您的公司（选填）"
                class="field__control"
                v-model="formData.company"
              />
            </div>
          </div>
          <div class="cell-item field line">
            <div class="cell-label">
              <span>职位</span>
            </div>
            <div class="cell-value">
              <input
                type="text"
                placeholder="请输入您的职位（选填）"
                class="field__control"
                v-model="formData.zhiwei"
              />
            </div>
          </div>
          <div class="cell-item field line">
            <div class="cell-label">
              <span>行业</span>
            </div>
            <div class="cell-value">
              <input
                type="text"
                placeholder="请输入您的行业（选填）"
                class="field__control"
                v-model="formData.hangye"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="submit-wrap">
        <button class="submit-primary" @click="submit">提交</button>
      </div>
    </div>

    <div class="toast">
      <transition name="scale-toast">
        <div v-if="toastMsg" class="message">{{toastMsg}}</div>
      </transition>
    </div>
    <transition name="popup">
      <div v-if="resStatus" class="popup-overlay"></div>
    </transition>
    <transition name="popup-panel">
      <div v-if="resStatus" class="popup-panel">
        <div class="icon-success"></div>
        <p class="response-status">预定成功！</p>
        <p class="response-txt">您的报名信息会在1－2个小时内审完毕，请耐心等待…</p>
        <div class="pp-btn" @click="resStatus = ''">返回</div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      toastMsg: "",
      toastTimer: null,
      resStatus: "",
      ticketInfo: {
        id: 1,
        date: "2019-9-9 10:09 ~ 13:09",
        ticketType: "免费票",
        price: 35,
        num: 1,
        limit: 10
      },
      formData: {
        ticketNum: "",
        name: "",
        phone: "",
        company: "",
        zhiwei: "",
        hangye: ""
      }
    };
  },
  methods: {
    changeCount(flag) {
      let count = Number(this.formData.ticketNum);
      if (flag && count < this.ticketInfo.limit) {
        count += 1;
      } else if (!flag && count > 1) {
        count -= 1;
      }
      this.formData.ticketNum = count;
    },
    submit() {
      clearTimeout(this.toastTimer);
      this.toastTimer = setTimeout(() => {
        this.toastMsg = "";
      }, 1000);
      if (this.formData.name == "") {
        this.toastMsg = "请输入姓名";
        return;
      } else if (this.formData.phone == "") {
        this.toastMsg = "请输入电话";
        return;
      }

      this.resStatus = "预定成功！";
      // this.$instance
      //   .post("/api/api/ticketMsg", {
      //     activity_id: this.ticketInfo.id,
      //     count: this.formData.ticketNum,
      //     name: this.formData.name,
      //     phone: this.formData.phone,
      //     company: this.formData.company,
      //     position: this.formData.zhiwei,
      //     industry: this.formData.hangye
      //   })
      //   .then(res => {
      //     console.log(res);
      //     this.toastMsg = "报名成功";
      //     alert("报名成功，如有疑问请联系客服！");
      //   })
      //   .catch(error => {
      //     console.log(error);
      //     alert("申请失败，如有疑问请联系客服！");
      //   });
    }
  },
  created() {
    // 获取当前活动信息
    // let ticketData = window.ticket;
    // this.ticketInfo.date = this.format.date(ticketData.start_time) + '~' + this.format.date(ticketData.end_time);
    // this.ticketInfo.ticketType = ticketData.is_free == 0 ? "付费票" : "免费票";
    // this.ticketInfo.price = ticketData.is_free == 0 ? ticketData.price : 0;
    // let numReg = /num=(\d+)/
    // this.ticketInfo.num = location.href.match(numReg) ? Number(location.href.match(numReg)[1]) : 1;
    // this.ticketInfo.num = this.ticketInfo.num <= ticketData.limit ? this.ticketInfo.num : ticketData.limit;
    this.formData.ticketNum = this.ticketInfo.num;
  }
};
</script>

<style lang="scss">
.popup-overlay {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.65);
  z-index: 511;
}
.popup-panel {
  position: fixed;
  z-index: 512;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 315px;
  padding: 20px 14px;
  box-sizing: border-box;
  background: #fff;
  border-radius: 10px;
  text-align: center;
  line-height: 1.5;
  .icon-success {
    margin: 0 auto 8px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: #eee;
  }
  .response-status {
    margin-bottom: 10px;
    font-size: 20px;
    color: #333;
  }
  .response-txt {
    display: block;
    margin: 0 30px 10px;
    font-size: 12px;
    color: $primarycolor;
  }
  .pp-btn {
    height: 44px;
    line-height: 44px;
    font-size: 16px;
    color: #fff;
    background: $primarycolor;
    border-radius: 5px;
  }
}
.popup-enter-active,
.popup-leave-active {
  transition: opacity 0.24s;
}
.popup-enter, .popup-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.popup-panel-enter-active,
.popup-panel-leave-active {
  transition: transform 0.24s, opacity 0.24s;
}
.popup-panel-enter, .popup-panel-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translate(-50%, -50%) scale(0.5);
  opacity: 0;
}

.toast {
  position: fixed;
  z-index: 910;
  left: 0;
  top: 50%;
  width: 100%;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
}
.message {
  padding: 0 17px;
  height: 44px;
  line-height: 44px;
  font-size: 16px;
  border-radius: 4px;
  color: #fff;
  background: rgba($color: #000000, $alpha: 0.8);
}
.scale-toast-enter-active {
  transition: transform 0.24s;
}
.scale-toast-enter {
  transform: scale(1.2);
}
</style>

<style lang="scss">
html,
body,
.page_wrap {
  position: relative;
  width: 100%;
  height: 100%;
  background: #f5f5f5;
  overflow: hidden;
}
.aa-head {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 44px;
  line-height: 44px;
  font-size: 16px;
  background: #fff;
  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 0;
    border-top: 1px solid #eee;
    transform: scaleY(0.5);
  }
  .aa-btn {
    position: absolute;
    top: 0;
    color: #333;
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
  .aa-tit {
    margin: 0 44px;
    font-size: 16px;
    font-weight: normal;
    text-align: center;
    color: #333;
  }
}
.aa-con {
  position: absolute;
  top: 44px;
  bottom: 0;
  width: 100%;
  overflow: hidden;
  overflow-y: auto;
}
.ticket-summary {
  padding: 0 10px;
  background: #fff;
  .ts {
    padding: 10px 0;
  }
  .ticket-info-wrap {
    display: flex;
    border-bottom: 1px solid #eee;
    .ticket-img {
      flex-shrink: 0;
      width: 80px;
      height: 80px;
      margin-right: 10px;
      background: #eee;
    }
    .ticket-info {
      flex: 1;
      overflow: hidden;
    }
  }
  .ticket-info {
    line-height: 1.5;
    .ac-title {
      font-size: 14px;
      color: #333;
      @include text_ellipsis(2);
    }
    .gray {
      font-size: 12px;
      color: #999;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  .ticket-cell {
    position: relative;
    display: flex;
    justify-content: space-between;
    height: 28px;
    line-height: 28px;
    font-size: 16px;
    .ticket-type {
      color: #333;
    }
    .ticket-price {
      position: absolute;
      left: 50%;
      top: 10px;
      transform: translateX(-50%);
      color: #f00;
    }
    .ticket-num {
      flex-shrink: 0;
      width: 92px;
      font-size: 0;
    }
  }
}
.ticket-cell {
  .stepper__minus,
  .stepper__plus {
    outline: none;
    position: relative;
    width: 28px;
    height: 28px;
    margin: 0;
    font-size: 16px;
    color: #333;
    vertical-align: middle;
    background-color: #f2f3f5;
    border: 0;
    &.disabled {
      color: #ccc;
    }
  }
  .stepper__input {
    outline: none;
    box-sizing: border-box;
    width: 32px;
    height: 28px;
    margin: 0 2px;
    padding: 0;
    color: #323233;
    font-size: 14px;
    text-align: center;
    vertical-align: middle;
    background-color: #f2f3f5;
    border: 0;
    border-width: 1px 0;
    border-radius: 0;
    -webkit-appearance: none;
  }
}
</style>

<style lang="scss">
.form-wrap {
  margin-top: 10px;
  background: #fff;
  .line {
    position: relative;
    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 0;
      border-top: 1px solid #eee;
    }
  }
  .form-head {
    padding: 0 10px;
    height: 30px;
    line-height: 30px;
    font-size: 16px;
    color: #333;
  }
  .cell-item {
    padding: 10px;
    font-size: 14px;
    line-height: 24px;
  }
}
.cell-item {
  padding: 10px;
  font-size: 14px;
  line-height: 24px;
  .cell-label {
    color: #333;
  }
  .field__control {
    display: block;
    box-sizing: border-box;
    width: 100%;
    height: 24px;
    font-size: 14px;
    min-width: 0;
    margin: 0;
    padding: 0;
    color: #333;
    text-align: left;
    background-color: transparent;
    border: 0;
    resize: none;
    outline: none;
    &::placeholder {
      color: #999;
    }
  }
}
.submit-wrap {
  padding: 10px;
  .submit-primary {
    outline: none;
    border: none;
    border-radius: 2px;
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 16px;
    color: #fff;
    background: $primarycolor;
  }
}
</style>