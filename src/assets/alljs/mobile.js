htmlFontSize();
$(function(){
	// 设置网站基准 html fontsize
	htmlFontSize();
	$(window).resize(function(){
		htmlFontSize();
	});
	// 设置当前页面标题以及返回路径 开始
	var gobackBtn = $(".header_back");
	var pageInfo = $("#pageInfo"),
		pageInfoTitle = pageInfo.data('title'),
		pageInfoGoback = pageInfo.data('goback');
	console.log(pageInfoTitle)
	if (pageInfoTitle) {
		$(".page_title").html(pageInfoTitle);
	};
	gobackBtn.on('click',function() {
		if (pageInfoGoback) {
			gourl(pageInfoGoback);
		} else{
			// historyUtils.back();
            history.go(-1);
		};
	});
});


// 设置基准 html fontsize 函数
function htmlFontSize(){
	var win = $(window),
		winH = win.height(),
		winW = win.width(),
		minSize;
	winW > winH ? minSize = winH : minSize = winW ;
	var hfs = ~~(minSize*100000/36)/10000+"px";
	$("html").css('font-size', hfs);
}


