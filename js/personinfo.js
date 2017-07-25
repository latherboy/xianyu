(function () {
	var registeSwiper = new Swiper('#registerCont',{
		speed:500,
		onSlideChangeStart: function(){
			$("#gzBtn a").removeClass('regUseCurr');
			$("#gzBtn a").eq(registeSwiper.activeIndex).addClass('regUseCurr');
		},
		autoHeight: true,
		observer:true,
		observeParents:true,
	});
	$("#gzBtn a").on('touchstart mousedown',function(e){
		e.preventDefault();
		$("#gzBtn a").removeClass('regUseCurr');
		$(this).addClass('regUseCurr');
		registeSwiper.slideTo( $(this).index() );
	});
	$("#gzBtn a").click(function(e){
		e.preventDefault();
	});
	$(window).scroll(function(){
		var topMain=$("#dingbu").innerHeight();
		var tou=$("#dingbu");
		if ($(window).scrollTop()>topMain){
			tou.css({"backgroundColor":"#fff","border-bottom":"0.01rem soild #e7e7e7"});
			$("#dingbu .back").attr("src","images/cokedetails_back.png");
			$("#dingbu .erweima").attr("src","images/icon_qr_black.png");
			$("#dingbu .share").attr("src","images/pond_tool_bar_share.png");
		}else{
			tou.css("background","none");
			$("#dingbu .back").attr("src","images/mms_back.png");
			$("#dingbu .erweima").attr("src","images/icon_qr.png");
			$("#dingbu .share").attr("src","images/fishpond_share_icon_white.png");
		}
	});
})()