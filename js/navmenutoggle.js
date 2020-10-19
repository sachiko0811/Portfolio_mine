$(function() {

    // $('.nav-toggle').on('click', function() {
    //     console.log('VicRoy: ')
    //     $('.nav-toggle, .nav-second-nav').toggleClass('show');
    // });

    $(function(){
        $('.btn-trigger').on('click', function() {
          $(this).toggleClass('active');

          // remove "fadeInDown" class before jumping to another section
          if ($(this).hasClass('active')) {
              let nodeList = document.querySelectorAll('.fadeInDown');
              let items = Array.from(nodeList);
              items.map(i => {
                  i.classList.remove('fadeInDown')
              })
          }

          $('.nav-toggle, .nav-second-nav').toggleClass('show');
          document.body.classList.toggle('popup-stop-scroll')
          return false;
        });
      });

})

