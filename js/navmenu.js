$(function() {

    $('#container').load('../html/nav.html');

    // $('.nav-toggle').on('click', function() {
    //     console.log('VicRoy: ')
    //     $('.nav-toggle, .nav-second-nav').toggleClass('show');
    // });

    $(function(){
        $('.btn-trigger').on('click', function() {
          $(this).toggleClass('active');
          $('.nav-toggle, .nav-second-nav').toggleClass('show');
          return false;
        });
      });

})

