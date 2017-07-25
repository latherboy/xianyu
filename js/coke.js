$(function () {
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
		spaceBetween: 20,
		observer:true,
		observeParents:true
	})
	$(window).scroll(function(){
		var topMain=$("#tou").height();//
		var topMain1 = $("#top").innerHeight()+$("#seniority").innerHeight()+$(".fenjiexian").innerHeight();
		var tou=$("#tou");
		if ($(window).scrollTop()>topMain){//如果滚动条顶部的距离大于topMain则就nav导航就添加类.nav_scroll，否则就移除
			tou.css("backgroundColor","#fff");
		}else{
			tou.css("background","none");
		};
		var btn = $("#gzBtn");
		if ($(window).scrollTop()>topMain1){//如果滚动条顶部的距离大于topMain则就nav导航就添加类.nav_scroll，否则就移除
			btn.addClass("gzBtn_scroll");
		}else{
			btn.removeClass("gzBtn_scroll");
		};


	});
})
function resetTabs(){
	$("#tabcontent > div").hide(); //Hide all content
	$("#tabs a").attr("id",""); //Reset id's
}
var myUrl = window.location.href; //get URL
var myUrlTab = myUrl.substring(myUrl.indexOf("#")); // For localhost/tabs.html#tab2, myUrlTab = #tab2
var myUrlTabName = myUrlTab.substring(0,4); // For the above example, myUrlTabName = #tab
(function(){
	$("#tabcontent > div").hide(); // Initially hide all content
	$("#tabs li:first a").attr("id","current"); // Activate first tab
	$("#tabcontent > div:first").fadeIn(); // Show first tab content
	$("#tabs a").on("click",function(e) {
		e.preventDefault();
		if ($(this).attr("id") == "current"){ //detection for current tab
			return
		}
		else{
			resetTabs();
			$(this).attr("id","current"); // Activate this
			$($(this).attr('name')).fadeIn(); // Show content for current tab
		}
	});
	for (i = 1; i <= $("#tabs li").length; i++) {
		if (myUrlTab == myUrlTabName + i) {
			resetTabs();
			$("a[name='"+myUrlTab+"']").attr("id","current"); // Activate url tab
			$(myUrlTab).fadeIn(); // Show url tab content
		}
	}
})()
