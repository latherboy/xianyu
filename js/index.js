$(function () {
	var MySwiper1 = new Swiper(".index_banner",{
		autoplay: 3000,//可选选项，自动滑动
		pagination: '.swiper-pagination',
		loop: true,
		speed:1500,
		autoplayDisableOnInteraction: false,
		observer:true,
		observeParents:true

	});
	var registeSwiper = new Swiper('#registerCont',{
		speed:500,
		onSlideChangeStart: function(){
			$("#gzBtn a").removeClass('regUseCurr');
			$("#gzBtn a").eq(registeSwiper.activeIndex).addClass('regUseCurr');
		},
		autoHeight: true
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
	var MySwiper2 = new Swiper(".post_banner",{
		slidesPerView: 'auto',
		paginationClickable: true,
		spaceBetween: 30,
		observer:true,
		observeParents:true
	})
	$(window).scroll(function(){
		var topMain=$("#banner").height()+$("#classify1").height()+$(".fenjiexian").height()*2+$("#classify2").height();//
		var anniu=$("#gzBtn");
		if ($(window).scrollTop()>topMain){//如果滚动条顶部的距离大于topMain则就nav导航就添加类.nav_scroll，否则就移除
			anniu.addClass("anniu_scroll");
		}else{
			anniu.removeClass("anniu_scroll");
		}
	});
})


