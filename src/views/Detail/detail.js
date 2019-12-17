// import '@/assets/css/common/reset.scss'
import './css/detail.scss'

// 创建轮播图
(function () {
  let pagination = document.getElementsByClassName('ms_pagination')[0];
  let swiper1 = new Swiper('.swiper-container-wheel', {
    loop: true,
    on: {
      imagesReady: function () {
        pagination.innerText = this.realIndex + 1 + '/' + (this.slides.length - 2);
      },
      slideChangeTransitionEnd: function () {
        let activeIndex = this.realIndex;
        let length = this.slides.length;
        pagination.innerText = activeIndex + 1 + '/' + (length - 2);
      }
    }
  });


  let makeSwiper = new Swiper('.swiper-container-make', {
    slidesPerView: 'auto',
  });

  let recommSwiper = new Swiper('.swiper-container-recommend', {
    slidesPerView: 'auto',
  });
}());

// 遮罩上拉
(function () {
  // 遮罩
  let coverBg = $('.cover_bg');
  // 上拉panel
  let panel = '';
  // 上拉panel_close
  let panelClose = $('.cover_panel .panel_close');
  // 触发遮罩上拉的元素
  let modMore = $('.summary_wrap .more');
  // 
  let scrollTop = 0;
  modMore.on('click', function () {
    panel = $(this).data('panel');
    if (panel) {
      scrollTop = $('html, body').scrollTop();
      // $('body').addClass('overflowHide').css('top', -scrollTop);
      $('html').addClass('overflowHide');
      coverBg.addClass('show');
      $(`.panel_${panel}`).addClass('show');
    }
  })
  coverBg.on('click', () => {
    // $('body').removeClass('overflowHide').css('top', 0);
    // $('html, body').scrollTop(scrollTop);
    $('html').removeClass('overflowHide');
    coverBg.removeClass('show');
    $(`.panel_${panel}`).removeClass('show');
  })
  panelClose.on('click', function () {
    // $('body').removeClass('overflowHide').css('top', 0);
    // $('html, body').scrollTop(scrollTop);
    $('html').removeClass('overflowHide');
    coverBg.removeClass('show');
    $(`.panel_${panel}`).removeClass('show');
  })
  console.log(modMore)
}());

// tab切换
(function () {
  let tabs = $('.detail_tab .item');
  let detailList = $('.detail_list');
  let details = $('.detail_list .detail_item');
  tabs.on('click', function () {
    let index = $(this).index()
    $(this).addClass('curr').siblings().removeClass('curr');
    let translateX = index * 100;
    detailList.css('transform', `translateX(-${translateX}%)`);
    details.eq(index).addClass('curr').siblings().removeClass('curr');
  })
}())