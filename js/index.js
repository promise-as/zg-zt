$(function(){
  // 鼠标点击切换
  function clickTab(aimEle, cont, classname){
    $(aimEle).click(function(){
      // 阻止点击穿透
      event.stopPropagation();
      var that = this;
      $(aimEle).removeClass(classname);
      $(that).addClass(classname);

      $(cont).click(function(){
        // 阻止点击穿透
        event.stopPropagation();
      });
      
      // 点击空白处隐藏
      $(document).click(function(){
        $(that).removeClass(classname);
      });
    });
  };
  // 免费兑换
  clickTab('.dh', '.dh-detail', 'on');
  // 更多班次
  clickTab('.r-more', null, 'on');
  // 科目
  clickTab('.r-subject li', null, 'on');

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