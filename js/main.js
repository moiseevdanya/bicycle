function ibg() {
	$.each($(".ibg"), (function (t, s) {
		$(this).find("img").length > 0 && $(this).css("background-image", 'url("' + $(this).find("img").attr("src") + '")')
	}))
}
$(".slider__body").length > 0 && $(".slider__body").slick({
	dots: !0,
	arrows: !1,
	accessibility: !1,
	slidesToShow: 1,
	autoplaySpeed: 3e3,
	adaptiveHeight: !0,
	nextArrow: '<button type="button" class="slick-next"></button>',
	prevArrow: '<button type="button" class="slick-prev"></button>',
	responsive: [{
		breakpoint: 768,
		settings: {}
	}]
}), $(".wrapper").addClass("loaded"), $(".icon-menu").click((function (t) {
	$(this).toggleClass("active"), $(".menu__body").toggleClass("active"), $("body").toggleClass("lock")
})), ibg();