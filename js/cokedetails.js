(function () {
	$(window).scroll(function(){
		var topMain=$("#tou").innerHeight();
		var tou=$("#tou>h2");
		if ($(window).scrollTop()>topMain){
			tou.html("<b style='color: #ff4444;font-weight: 600'>￥446</b>");
		}else{
			tou.html("宝贝详情");
		}
	});
})()