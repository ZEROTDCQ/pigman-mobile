import '@/assets/css/common/reset.scss'
import './newsdetail.scss'

import {
  mshareR
} from "./mshare.js"

import {
  instance
} from '@/http.js'


function news() {
  this.baseUrl = "http://192.168.0.106"; //服务器地址

  this.instance = instance; // axios引入

  this.oBtnBack = $(".btn-back"); //回退按钮
  this.oBtnShare = $(".btn-share"); //分享按钮

  this.oContent = $("#mainContent"); //内容部分

  this.oRecommend = $("#Recommend"); //推荐部分

  this.init();
}

news.prototype = {
  /**点击回退按钮重定向页面地址 */
  btnBackClick: function () {
    window.location.href = "/home_news.html";
  },


  /**
   * qq 浏览器分享函数
   * @method qqShare
   */
  qqShare: function (config) {
    var type = config.type;
    //微信好友 1, 微信朋友圈 8, 弹出原生 0
    type = type ? ((type == 1) ? 8 : 1) : '';
    console.log(type);
    var share = function () {
      var shareInfo = {
        'url': config.url,
        'title': config.title,
        'description': config.desc,
        'img_url': config.img,
        'img_title': config.title,
        'to_app': type,
        'cus_txt': ''
      };
      if (window.browser) {
        browser.app && browser.app.share(shareInfo);
      } else if (window.qb) {
        qb.share && qb.share(shareInfo);
      }
    };
    // if (qqBridgeLoaded) {
    share();
    // } else {
    //   loadqqApi(share);
    // }
  },

  /**点击分享按钮功能实现 */
  shareClick: function () {
    newsri.qqShare({
      title: '我的第一次移动端分享开发',
      url: 'http://192.168.0.114:3000/news_detail.html?id=2',
      desc: '来来来，块来围观啦！',
      img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573827701439&di=768680de5e63e50dc8e7601199fe3ec9&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2F4009952ada95f6e21c9631d07ec2cf05dff90180.jpg',
      type: 0
    })
  },


  /**加载等待动画 */
  addLoadAnimation: function () {
    let html = `<div id="load">
                  <div class="container">
                    <div class="load-box">
                      <div class="spinner">
                        <div class="rect1"></div>
                        <div class="rect2"></div>
                        <div class="rect3"></div>
                        <div class="rect4"></div>
                        <div class="rect5"></div>
                      </div>
                      <span>加载中...</span>
                    </div>
                  </div>
                </div>`
    $('#main')[0].style.position = 'fixed';
    $('#main')[0].style.overflow = 'hidden'; //隐藏滚动条

    $('body').append(html);
  },

  /**移除等待动画 */
  removeLoadAnimation: function () {
    let oLoad = $("#load");

    $('#main')[0].style.position = '';
    $('#main')[0].style.overflow = ''; //出现滚动条

    return {
      hide: function (time) {
        if (!time) {
          oLoad.hide()
        } else {
          let timr = setInterval(function () {
            oLoad.hide()
            clearInterval(timr);
          }, time)
        }
      },
      fail: function () {
        oLoad.find('.container').text("加载失败,请刷新页面...");
      }
    }

  },


  /**http请求数据，在回调中执行渲染函数 */
  getData: function (id) {
    this.instance.post("api/mobileapi/newsDetail", {
      type: 0,
      id: id
    }).then(res => { //回调函数
      let data = res.data.data;

      this.RenderingContent(data);

      this.removeLoadAnimation().hide(500);
    }).catch(res => {
      this.removeLoadAnimation().fail();
    });
  },

  /**返回地址栏指定参数 */
  getUrlParam: function (name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg); //匹配目标参数
    if (r != null) return unescape(r[2]);
    return null; //返回参数值
  },

  /**时间搓转时间格式 */
  timeCo: function (dater) {
    var date = new Date(dater * 1000); //如果date为13位不需要乘1000
    var Y = date.getFullYear() + '-';
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    var D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate());
    return Y + M + D;
  },

  /**渲染新闻详情内容 */
  RenderingContent: function (data) {
    let content = `<h1 class="title">${data.title}</h1>
                    <div class="news_info">
                      <span><i class="iconfont">&#xe663;</i>${data.from_where}</span>
                      <span><i class="iconfont">&#xe675;</i>${this.timeCo(data.create_time)}</span>
                    </div>
                    <div class="article">${data.content}</div>`
    this.oContent.html(content);
  },

  /**渲染相关推荐内容 */
  RenderingRecommend: function (data) {
    let html = "";
    for (let i = 0; i < data.length; i++) {
      html += `<div class="rl-item">
                  <div class="news-feature">
                    <img src="${this.baseUrl + data[i].picture}"
                      alt="">
                  </div>
                  <div class="news-txt">
                    <div>
                      <h3 class="news-tit"><a href="/news_detail.html?id=${data[i].id}">${data[i].title}</a></h3>
                      <div class="news-info">
                        <span><i class="iconfont">&#xe663;</i>${data[i].from_where}</span>
                        <span><i class="iconfont">&#xe675;</i>${this.timeCo(data[i].create_time)}</span>
                      </div>
                    </div>
                    <p class="news-desc">${data[i].simple_desc}</p>
                  </div>
                </div>`
    }

    this.oRecommend.html(html);
  },

  /**初始化 */
  init: function () {
    //加载等待动画
    this.addLoadAnimation()
    // 绑定事件
    this.oBtnBack.on('click', this.btnBackClick);
    this.oBtnShare.on('click', this.shareClick);

    // 获取数据
    let id = this.getUrlParam('id');
    this.getData(id);
  }
}


var newsri = new news();
