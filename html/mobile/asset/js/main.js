$(document).ready(function() {
	
    var prevArrow = "<a href='#' class='arrow arrow--left'><span class='icon icon-angle-left'></span></a>";
    var nextArrow = "<a href='#' class='arrow arrow--right'><span class='icon icon-angle-right'></span></a>";
	
	// scroll
	$(window).scroll(function () {

		var scrollpos = $(window).scrollTop();
		// back to top
		if(scrollpos > $(window).height()) {
			$(".button__backtop").removeClass("button--hide");
		} else {
			$(".button__backtop").addClass("button--hide");
		}
	});
	
    // slider
    if($('#js-hl').length>0) {
		$('#js-hl').slick({
			autoplay: true,
			slidesToShow: 1,
			autoplaySpeed: 10000,
			pauseOnFocus: true,
			fade: false,
			dots: true,
			arrows: true,
			cssEase: 'ease',
			prevArrow: prevArrow,
			nextArrow: nextArrow
		});
	}
    if($('#js-team').length>0) {
		$('#js-team').slick({
			autoplay: true,
			slidesToShow: 1,
			autoplaySpeed: 10000,
			pauseOnFocus: true,
			fade: false,
			dots: false,
			arrows: true,
			cssEase: 'ease',
			prevArrow: prevArrow,
			nextArrow: nextArrow
		});
	}
    if($('#js-schedule').length>0) {
		$('#js-schedule').slick({
			autoplay: false,
			slidesToShow: 1,
			pauseOnFocus: true,
			fade: false,
			dots: false,
			arrows: true,
			cssEase: 'ease',
			prevArrow: prevArrow,
			nextArrow: nextArrow
		});
	}
    if($('.js-fixture').length>0) {
		$('.js-fixture').slick({
			autoplay: false,
			slidesToShow: 1,
			pauseOnFocus: true,
			fade: false,
			dots: false,
			arrows: true,
			cssEase: 'ease',
			prevArrow: prevArrow,
			nextArrow: nextArrow
		});
	}
	
	// search
	$('#js-search').click(function(e){
		e.preventDefault();
		$('.search__bar').toggleClass('search--hide');
		var has = $('.search__bar').hasClass('search--hide');
		if(!has){
			$('#search').focus();
		}
	});
	
	// menu
	$('#js-menu').click(function(e){
		e.preventDefault();
		$(this).toggleClass('active');
		$('#js-nav').toggleClass('nav--hide');
	});
        
	// back to top
	$('#js-backtop').click(function(e){
		e.preventDefault();
        $("html, body").animate({
            scrollTop: $('body').offset().top
        });
	});
        
	// tabs
    $('[data-type="tabs"]').each(function(){

        var $active, $content, $links = $(this).find('a');
        $active = $($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
        //$active = $active.parent();
        var $activeNameClass = $active.attr('class');
        $active.addClass('active');
        $content = $($active.attr('href'));

        $links.not($active).each(function () {
            $($(this).attr('href')).addClass('tab__hide');
        });

        $(this).on('click', 'a', function(e){
            $active.removeClass('active');
            $content.addClass('tab__hide');

            $active = $(this);
            $content = $($(this).attr('href'));

            $active.addClass('active');
            $content.removeClass('tab__hide');

            e.preventDefault();
        });
    });
});
