$(function() {
    $('.nav-toggle').on('click', function() {
        $('.nav-toggle, .nav-second-nav').toggleClass('show');
    });

    $('#container').load('../html/nav.html');
})