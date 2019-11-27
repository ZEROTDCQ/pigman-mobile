// 分享插件
function Share(ele) {
  this.ele = $(ele);
  this.init();
}
Share.prototype = {
  init() {
    this.ele.hover(function () {
      console.log(111)
    })
  }
}