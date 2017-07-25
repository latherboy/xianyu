(function () {
	var MySwiper = new Swiper("#banner",{
		autoplay: 3000,//可选选项，自动滑动
		pagination: '.swiper-pagination',
		loop: true,
		speed:1500,
		autoplayDisableOnInteraction: false,
		observer:true,
		observeParents:true
	});
	var map = new AMap.Map('container',{

		zoom: 16,
		center: [108.875905,34.218258]//new AMap.LngLat(116.39,39.9)

	});
	var marker = new AMap.Marker({
		position: [108.875905,34.218258],//marker所在的位置
		map:map//创建时直接赋予map属性
	});
	AMap.plugin(['AMap.ToolBar'],function(){
		//创建并添加工具条控件
		var toolBar = new AMap.ToolBar();
		map.addControl(toolBar);
	})
})()