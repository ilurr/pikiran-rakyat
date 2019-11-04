$(document).ready(function() {
	var header_top = $('.header').outerHeight();
	var header_bottom = $('.header__bottom').outerHeight();
	var header_space = header_top - header_bottom;
	
    var prevArrow = "<a href='#' class='arrow arrow--left'><span class='icon icon-angle-left'></span></a>";
    var nextArrow = "<a href='#' class='arrow arrow--right'><span class='icon icon-angle-right'></span></a>";
		
    var prevArrowV = "<a href='#' class='arrow arrow--up'><span class='icon icon-angle-up'></span></a>";
    var nextArrowV = "<a href='#' class='arrow arrow--down'><span class='icon icon-angle-down'></span></a>";
		
	// scroll
	$(window).scroll(function () {

		var scrollpos = $(window).scrollTop();
		// back to top
		if(scrollpos > $(window).height()) {
			$(".button__backtop").removeClass("button--hide");
		} else {
			$(".button__backtop").addClass("button--hide");
		}
		
		if(scrollpos > header_space) {
			$("body").addClass("is--scroll");
			$(".header").css("padding-bottom",header_bottom+"px");
		} else {
			$("body").removeClass("is--scroll");
			$(".header").removeAttr("style");
		}
	});
	
    // slider
    if($('.js--big').length>0) {
		$('.js--big').slick({
			autoplay: true,
			slidesToShow: 1,
			autoplaySpeed: 10000,
			pauseOnFocus: true,
			fade: true,
			dots: true,
			arrows: false,
			asNavFor: '.js--small',
			cssEase: 'ease'
		});
	}
    if($('.js--small').length>0) {
		$('.js--small').slick({
			asNavFor: '.js--big',
			slidesToShow: 4,
			adaptiveHeight: false,
			focusOnSelect: true,
		});
	}
    if($('.js--editors').length>0) {
		$('.js--editors').slick({
			autoplay: true,
			slidesToShow: 3,
			autoplaySpeed: 8000,
			pauseOnFocus: true,
			fade: false,
			dots: false,
			arrows: true,
			cssEase: 'ease',
			prevArrow: prevArrow,
			nextArrow: nextArrow
		});
	}
    if($('.js--network').length>0) {
		$('.js--network').slick({
			autoplay: true,
			slidesToShow: 4,
			autoplaySpeed: 7000,
			pauseOnFocus: true,
			fade: false,
			dots: false,
			arrows: true,
			cssEase: 'ease',
			prevArrow: prevArrow,
			nextArrow: nextArrow
		});
	}
    if($('.js--network-sidebar').length>0) {
		$('.js--network-sidebar').slick({
			autoplay: true,
			slidesToShow: 4,
			autoplaySpeed: 10000,
			pauseOnFocus: true,
			fade: false,
			vertical: true,
			dots: false,
			arrows: true,
			cssEase: 'ease',
			prevArrow: prevArrowV,
			nextArrow: nextArrowV
		});
	}
	
	// sticky share
    if($('.js--tower').length>0) {
		$(".js--tower").stick_in_parent({
			parent: ".js--tower-parent",
			inner_scrolling: false,
			spacer: false,
			offset_top:70,
		}).on('sticky_kit:bottom', function(e) {
			$(this).parent().css('position', 'static');
		}).on('sticky_kit:unbottom', function(e) {
		});
	}

	// gallery
    if($('.js--gallery').length>0) {
		$('.js--gallery').magnificPopup({
			mainClass: 'mfp-with-zoom',
			delegate: '.gallery__item', 
			type: 'image',
			closeBtnInside: false,
			verticalFit: true,
			removalDelay: 300,
			gallery:{
				enabled: true,
				preload: [0,2],
				tCounter: '<span class="mfp-counter">%curr% <i>dari</i> %total%</span>',
				arrowMarkup: '<button title="%title%" type="button" class="arrow arrow--%dir%"><span class="icon icon-angle-%dir%"></span></button>', 
			},
			zoom: {
				enabled: true,
				duration: 300, 
				opener: function(element) {
					return element.find('img');
				}
			}

		});
	}
	
	// ads
	$('#js--close').click(function(e){
		e.preventDefault();
		$('.ads__horizontal').hide();
	});
});
