$(function () {
  theaMsForm($('.sign-in'));
  
  // 头部显示app下载二维码
  $('.s-wap').hover(function () {
    $('.app-download').show();
  }, function () {
    $('.app-download').hide();
  });

  // 点击元素不是同辈, 点击空白处内容隐藏
  function noPeerClick(btn, cont, classname) {
    $(btn).each(function () {
      var that = this;
      $(that).click(function () {
        $(btn).removeClass(classname);
        $(that).addClass(classname);
        // 阻止点击穿透
        event.stopPropagation();
      });
      // 点击空白处隐藏
      $(document).click(function () {
        $(that).removeClass(classname);
      });
    });
    // 显示的内容里有点击事件
    $(cont).click(function () {
      event.stopPropagation();
    });
  };
  // 免费兑换
  noPeerClick('.dh', '.dh-detail', 'on');
  // 更多班次
  noPeerClick('.r-more', null, 'on');

  // 点击元素是同辈
  function peerClick(btn, cont, classname) {
    $(btn).each(function (i) {
      var that = this;
      $(that).click(function () {
        $(that).addClass(classname).siblings().removeClass(classname);
        $($(cont)[i]).addClass(classname).siblings().removeClass(classname);
      });
    });
  }
  // 套餐切换
  peerClick('.l-head span', '.l-detail .d-file', 'on');
  // 科目
  peerClick('.r-subject li', null, 'on');

  // 文件树
  function fileTree(outerBox, headBox, classname) {
    $(outerBox).each(function (i) {
      var that = this;
      $(that).find(headBox).click(function () {
        $($(outerBox)[i]).toggleClass(classname);
      });
    });
  };
  // 第1层
  fileTree('.l-first', '.f-head', 'show');
  // 第2层
  fileTree('.f-second', '.s-head', 'show');
  // 第3层
  fileTree('.s-three', '.t-head', 'show');
});