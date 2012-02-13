/* use js to write the frame of the single show swipe */
document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);

var show,
  //处理海报
  el,
  //添加演出详情中的标签
  i,
  page,
  dots = document.querySelectorAll('#nav li'),
  //下面的演出数据对象在异步加载中处理
  singleShow = [
    {
      img : 'images/Pengui.png',
      simMsg : '顶你个肺部顶你个肺部',
      collectVal : 'yes',
      date: '11-12-31',
      city : '佛山',
      type : '电音',
      free : 'yes',
      local : '佛山市禅城区什么什么路莲花体育馆里面',
      time : '11-21-31 20:30~11:333',
      type : '电音',
      kind : '大型演出',
      artist : '马小龙个小朋友和大朋友',
      price : '免费',
      intro : '佛山市禅城区什么什么路线莲花体育馆里屌你啊哈哈哈我真系好欠缺屌啊屌屌屌，点解讲甘多粗口面'
    },
    {
      img : 'images/Pengui.png',
      simMsg : '顶你个肺部顶你个肺部',
      collectVal : 'yes',
      date: '11-12-31',
      city : '佛山',
      type : '电音',
      free : 'yes',
      local : '佛山市禅城区什么什么路莲花体育馆里面',
      time : '11-21-31 20:30~11:333',
      type : '电音',
      kind : '大型演出',
      artist : '马小龙个小朋友和大朋友',
      price : '免费',
      intro : '佛山市禅城区什么什么路线莲花体育馆里屌你啊哈哈哈我真系好欠缺屌啊屌屌屌，点解讲甘多粗口面'
    }
  ];

gallery = new SwipeView('#wrapper',{ numberiOfPages: singleShow.length });
      
// Load initial data

for (i=0; i<3; i++) {
  page = i==0 ? singleShow.length-1 : i-1;
  //append替换字符串
  //整个演出的html节点
  el = document.createElement('section');
  el.className = 'single-show';
  //北京图片用字符串替换
  el.style.background = 'url(../images/Pengui.png)';
  el.innerHTML = "<section class='single-show'>"+
        //顶部简单介绍panel
        "<section class='show-message round5 box-shadow transparent relative'>"+
          "<p>"+ singleShow[page].simMsg +"</p>"+
        "</section>"+
        "<section id='collect-press' class='relative'>★</section>"+
        //大型菜单的控制panel
        "<section class='show-Miscellaneou round5 box-shadow transparent relative' id='show-Miscellaneou'>"+
          "<p>"+
            "<span class='show-date'>"+ singleShow[page].date +"</span>"+
            "<span class='show-local'>"+ singleShow[page].city +"</span>"+
            "<span class='show-type'>"+ singleShow[page].type +"</span>"+
            "<span class='show-kind'>"+ singleShow[page].kind +"</span>"+
            "<span class='free-note'></span>"+
          "</p>"+
        "</section>"+
        //大菜单
        "<section id='show-detail' class='box-shadow round5 transparent relative'>"+
          //location
          "<div class='message-box'>"+
            "<div class='title'>"+
              "<a class='message-box-icon'></a>"+
              "<a>地址:</a>"+
            "</div>"+
            "<div class='message-box-text'>"+
              singleShow[page].local +
            "</div>"+
          "</div>"+
          //date
          "<div class='message-box'>"+
            "<div class='title'>"+
              "<a class='message-box-icon time-icon'></a>"+
              "<a>时间:</a>"+
            "</div>"+
            "<div class='message-box-text'>"+
              singleShow[page].time +
            "</div>"+
          "</div>"+
          //type
          "<div class='message-box'>"+
            "<div class='title'>"+
              "<a class='message-box-icon type-icon'></a>"+
              "<a>曲风:</a>"+
            "</div>"+
            "<div class='message-box-text'>"+
              singleShow[page].type +
            "</div>"+
          "</div>"+
          //kind
          "<div class='message-box'>"+
            "<div class='title'>"+
              "<a class='message-box-icon scale-icon'></a>"+
              "<a>类型:</a>"+
            "</div>"+
            "<div class='message-box-text'>"+
              singleShow[page].kind +
            "</div>"+
          "</div>"+
          //artists
          "<div class='message-box'>"+
            "<div class='title'>"+
              "<a class='message-box-icon cha-icon'></a>"+
              "<a>参演:</a>"+
            "</div>"+
            "<div class='message-box-text'>"+
              singleShow[page].artist +
            "</div>"+
          "</div>"+
          //price
          "<div class='message-box'>"+
            "<div class='title'>"+
              "<a class='message-box-icon price-icon'></a>"+
              "<a>票价:</a>"+
            "</div>"+
            "<div class='message-box-text'>"+
              singleShow[page].price +
            "</div>"+
          "</div>"+
          //msg
          "<div class='message-box'>"+
            "<div class='title'>"+
              "<a class='message-box-icon explain-icon'></a>"+
              "<a>简介:</a>"+
            "</div>"+
            "<div class='message-box-text'>"+
              singleShow[page].intro +
            "</div>"+
          "</div>"+
        "</section>"+
      "</section>";
  show.masterPages[i].appendChild(el)
}

//快速滑动处理函数
show.onFlip(function (){
	var el,
		upcoming,
		i;

	for (i=0; i<3; i++) {
		upcoming = show.masterPages[i].dataset.upcomingPageIndex;

		if (upcoming != show.masterPages[i].dataset.pageIndex) {
			el = show.masterPages[i].querySelector('img');
			el.className = 'loading';
			el.src = slides[upcoming].img;
			el.width = slides[upcoming].width;
			el.height = slides[upcoming].height;
			
			el = show.masterPages[i].querySelector('span');
			el.innerHTML = slides[upcoming].desc;
		}
	}
	
	document.querySelector('#nav .selected').className = '';
	dots[show.pageIndex+1].className = 'selected';
});



show.onMoveOut(function () {
	show.masterPages[show.currentMasterPage].className = show.masterPages[show.currentMasterPage].className.replace(/(^|\s)swipeview-active(\s|$)/, '');
});

show.onMoveIn(function () {
	var className = show.masterPages[show.currentMasterPage].className;
	/(^|\s)swipeview-active(\s|$)/.test(className) || (show.masterPages[show.currentMasterPage].className = !className ? 'swipeview-active' : className + ' swipeview-active');
});
