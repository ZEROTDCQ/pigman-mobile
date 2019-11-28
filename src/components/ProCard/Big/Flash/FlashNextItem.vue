<template>
  <!-- 即将开抢、明日预告组件 -->
  <div class="pro-item card-flashnext-row">
    <div class="pro-feature">
      <a href="javascript:;">
        <img
          :src="baseUrl + '/uploads/admin/images/20191107/6142f198ea658934e0b987b45a0dad72.jpg'"
          alt
        />
      </a>
    </div>
    <div class="pro-info-wrap">
      <p class="pro-name">
        <a href="javascript:;" title>【买5斤送5斤】攀枝花凯特新鲜大芒果</a>
      </p>
      <div>
        <p class="desc">限量{{20}}件 | 今天16:00开始</p>
        <p class="origin-price">
          <del>原价：¥{{45.5}}</del>
        </p>
        <div class="pro-price">
          <em>¥{{35.5}}</em>
          <a href="javascript:;" class="btn-buy">
            <i class="iconfont">&#xe619;</i>提醒我
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // props: {
  //   data: {
  //     type: Object
  //   }
  // },
  // data() {
  //   return {
  //     when() {
  //       var server_time = this.data.time + "";
  //       var start_time = this.data.start_time + "";
  //       if (start_time.length == 10) {
  //         // php unix时间戳(s)转js时间戳(ms)
  //         server_time = server_time + "000";
  //         start_time = start_time + "000";
  //       }
  //       var serverDate = new Date(Number(server_time));
  //       var startDate = new Date(Number(start_time));
  //       // 判断今天还是明天
  //       var date = "今天";
  //       if (startDate.getDate() > serverDate.getDate()) {
  //         date = "明天";
  //       }
  //       var hours =
  //         startDate.getHours() < 10
  //           ? "0" + startDate.getHours()
  //           : startDate.getHours();
  //       var minutes =
  //         startDate.getMinutes() < 10
  //           ? "0" + startDate.getMinutes()
  //           : startDate.getMinutes();
  //       return date + [hours, minutes].join(":") + "开始";
  //     }
  //   };
  // }
};
</script>

<style lang="scss">
.card-flashnext-row {
  padding: 10px;
  display: flex;
  background: #fff;
  overflow: hidden;
  .pro-feature {
    flex-shrink: 0;
    position: relative;
    float: left;
    margin-right: 10px;
    width: 140px;
    height: 140px;
    background: #ccc;
    img {
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      width: 100%;
      min-height: 100%;
    }
  }
  .pro-info-wrap {
    flex: 1;
    padding: 10px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
    .pro-name {
      font-size: 14px;
      word-break: break-all;
      text-align: justify;
      color: #000;
      @include text_ellipsis(2);
      a:hover {
        color: $primarycolor;
      }
    }
  }
  .desc {
    margin-bottom: 10px;
    height: 16px;
    line-height: 16px;
    font-size: 11px;
    color: $primarycolor;
  }
  .origin-price {
    margin-bottom: 10px;
    height: 16px;
    line-height: 16px;
    font-size: 11px;
    color: #999;
  }
  .pro-price {
    height: 24px;
    line-height: 24px;
    overflow: hidden;
    em {
      float: left;
      margin-right: 4px;
      font-style: normal;
      font-size: 16px;
      font-weight: bold;
      color: #f26161;
    }
    del {
      float: left;
      font-size: 10px;
      color: #999;
    }
  }
  .btn-buy {
    position: relative;
    float: right;
    width: 65px;
    height: 24px;
    font-size: 10px;
    line-height: 24px;
    text-align: center;
    color: #f26161;
    background: #fff;
    border-radius: 12px;
    transition: all 0.2s ease;
    overflow: hidden;
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      border: 1px solid #f26161;
      border-radius: 12px;
      box-sizing: border-box;
      overflow: hidden;
    }
    .iconfont {
      position: relative;
      font-size: 16px;
      margin-right: 2px;
      // top: -2px;
      vertical-align: middle;
    }
    &:hover {
      color: #fff;
      background: #f26161;
    }
  }
}
</style>