$(function(){
	$(window).scroll(function(){
		var topMain=50;//
		var tou=$("#tou");
		if ($(window).scrollTop()>topMain){//如果滚动条顶部的距离大于topMain则就nav导航就添加类.nav_scroll，否则就移除
			tou.fadeIn("slow");
		}else{
			tou.fadeOut("slow");
		}
	});
})