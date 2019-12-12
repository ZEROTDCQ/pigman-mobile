import '@/assets/css/common/reset.scss'

(function (header) {
  if (typeof module !== "undefined" && typeof exports === "object") {
    module.exports = header
  } else if (typeof define === "function" && (define.amd || define.cmd)) {
    define(header)
  } else {
    if (!window.PM) {
      window.PM = { M: {} }
    }
    window.PM.M = {
      smartbox: header()
    }
  }
})(function () {
  const hotKeyApi = '//wq.jd.com/bases/searchhotword/GetHotWords?_=1576122128842&sceneval=2&callback=jsonpCBKB'
  return 111;
})