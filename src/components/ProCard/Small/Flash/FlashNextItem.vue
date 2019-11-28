<template>
  <!-- 即将开抢、明日预告组件 -->
  <div class="pro-item card-flashnext">
    <div class="pro-item-inner">
      <div class="pro-img">
        <a href="javascript:;">
          <img
            :src="baseUrl + '/uploads/admin/images/20191107/6142f198ea658934e0b987b45a0dad72.jpg'"
            alt
          />
        </a>
      </div>
      <div class="pro-info">
        <p class="pro-name">
          <a href="javascript:;" title>【买5斤送5斤】攀枝花凯特新鲜大芒果</a>
        </p>
        <p class="desc">限量{{20}}件 | 今天16:00开始</p>
        <div class="pro-price">
          <em>¥{{35.5}}</em>
          <del>¥{{45.5}}</del>
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

<style lang="scss" scoped>
.card-flashnext {
  width: 172px;
  border-radius: 5px;
  background: #fff;
  overflow: hidden;
  .pro-img {
    position: relative;
    height: 120px;
    overflow: hidden;
    img {
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      width: 100%;
      min-height: 100%;
    }
  }
  .pro-info {
    padding: 10px 5px;
  }
  .pro-name {
    margin-bottom: 10px;
    line-height: 14px;
    height: 28px;
    max-height: 28px;
    font-size: 12px;
    text-align: justify;
    color: #333;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    word-break: break-all;
    overflow: hidden;
    text-overflow: ellipsis;
    a:hover {
      color: $primarycolor;
    }
  }
  .desc {
    margin-bottom: 10px;
    font-size: 10px;
    line-height: 12px;
    color: #54b64f;
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
    .btn-buy {
      position: relative;
      float: right;
      padding: 0 6px;
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
}
</style>