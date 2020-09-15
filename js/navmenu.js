$(function() {

    $('#container').load('../html/nav.html');
    
    $('.nav-toggle').on('click', function() {
        $('.nav-toggle, .nav-second-nav').toggleClass('show');
    });

})

