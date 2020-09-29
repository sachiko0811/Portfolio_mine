$(function() {
	$(window).on('load scroll', function() {
		var scrollPos = $(this).scrollTop();
		if ( scrollPos > 100 ) {
            $('header').addClass('is-scrolled');
            $('#nav-laptop-logo').addClass('is-scrolled-logo');
		} else {
            $('header').removeClass('is-scrolled');
            $('#nav-laptop-logo').removeClass('is-scrolled-logo');
		}
	});
});	