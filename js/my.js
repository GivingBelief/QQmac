$(function () {
  let num = 0
  let timer = null
  $(window).mousewheel(function (event) {

    clearTimeout(timer)
    //监听屏幕的上下滚动：1 是向上，-1是向下
    // console.log(event.deltaY);
    timer = setTimeout(function () {
      if (event.deltaY == -1) {
        num++
      } else {
        num--
      }
      //滑动滚轮调用
      one()
    }, 300)


  })

  $('.nav span').click(function () {
    let index = $(this).index();
    //将角标与全局变量同步,防止各走各的
    num = index
    $(this).addClass('active').siblings().removeClass('active')
    $('.page').eq(index).show().siblings('.page').hide()
    //点击事件调用
    one()
  })

  //封装动画共同代码
  function one() {
    if (num > $('.page').length - 1) {
      num = $('.page').length - 1
    } else if (num < 0) {
      num = 0
    }
    // console.log(num);
    //头部的显示消失
    if (num == 0) {
      $('header').css('visibility', 'hidden')
    } else {
      $('header').css('visibility', 'visible')
    }

    setTimeout(function () {
      $('.page').eq(num).removeClass('loop').siblings('.page').addClass('loop')
    }, 1)


    //指示器样式
    $('.nav span').eq(num).addClass('active').siblings().removeClass('active')
    //切换屏
    $('.page').eq(num).show().siblings('.page').hide()
  }
})
