$(function () {
	var MySwiper1 = new Swiper("#banner", {
		autoplay: 3000,//可选选项，自动滑动
		pagination: '.swiper-pagination',
		loop: true,
		speed: 1500,
		autoplayDisableOnInteraction: false,
		observer: true,
		observeParents: true
	});
	var MySwiper2 = new Swiper(".pond_banner",{
		slidesPerView: 'auto',
		paginationClickable: true,
		spaceBetween: 30,
		observer:true,
		observeParents:true,
		freeMode : true,
		slidesOffsetBefore : 40,
		slidesOffsetAfter : 40
	});
	var MySwiper3 = new Swiper(".localtyrant_banner",{
		slidesPerView: 'auto',
		paginationClickable: true,
		spaceBetween: 30,
		observer:true,
		observeParents:true,
		freeMode : true,
		slidesOffsetBefore : 40,
		slidesOffsetAfter : 40
	});
	var MySwiper3 = new Swiper(".chinesestyle_banner",{
		slidesPerView: 'auto',
		paginationClickable: true,
		spaceBetween: 30,
		observer:true,
		observeParents:true,
		freeMode : true,
		slidesOffsetBefore : 40,
		slidesOffsetAfter : 40
	});
	var MySwiper4 = new Swiper(".fakeanimal_banner",{
		slidesPerView: 'auto',
		paginationClickable: true,
		spaceBetween: 30,
		observer:true,
		observeParents:true,
		freeMode : true,
		slidesOffsetBefore : 40,
		slidesOffsetAfter : 40
	});
	var MySwiper5 = new Swiper(".pondspecial_banner",{
		slidesPerView: 'auto',
		paginationClickable: true,
		spaceBetween: 30,
		observer:true,
		observeParents:true,
		freeMode : true,
		slidesOffsetBefore : 40,
		slidesOffsetAfter : 40
	});
})