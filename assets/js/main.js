(function ($) {

	$('.slider').slick({
		arrows: false,
		fade: true,
	  	cssEase: 'linear',
	  	autoplay: true,
	  	autoplaySpeed: 3000
	})

	$('.specialists').slick({
		prevArrow: '<div class="prev"></div>',
		nextArrow: '<div class="next"></div>'
	});

	$('.mobile-button').click(function(e){
		e.preventDefault();
		$(this).toggleClass('opened');
		$('.full-menu').slideToggle(200);
	});
	$('.t').click(function(){
		$('.mobile-button').toggleClass('opened');
		$('.full-menu').slideToggle(200);
	})

}(jQuery));