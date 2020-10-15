  let body = document.body;
  
  function popupImage() {
    // let popup = document.querySelector('works-work_work');
    // var popup = document.getElementsByClassName('works-work_work');
    var popup = document.getElementById('works-one');
    if(!popup) return;
  
    var blackBg = document.getElementById('js-black-bg');
  
    var blackBg = document.getElementById('js-black-bg');
    var closeBtn = document.getElementById('js-close-btn');
    var showBtn = document.getElementById('works-image-one');
    // var showDesc = document.getElementById('works-work_desc');
  
    closePopUp(blackBg);
    closePopUp(closeBtn);
    closePopUp(showBtn);
    // closePopUp(showDesc);
    function closePopUp(elem) {
      if(!elem) return;
      elem.addEventListener('click', function() {
        popup.classList.toggle('is-show');
        body.classList.toggle('popup-stop-scroll')
      });
    }
  }
  popupImage();

  function popupImageSecond() {
    // let popup = document.querySelector('works-work_work');
    // var popup = document.getElementsByClassName('works-work_work');
    var popup = document.getElementById('works-two');
    if(!popup) return;
  
    var blackBg = document.getElementById('js-black-bg-two');
  
    var blackBg = document.getElementById('js-black-bg-two');
    var closeBtn = document.getElementById('js-close-btn-two');
    var showBtn = document.getElementById('works-image-two');
  
    closePopUp(blackBg);
    closePopUp(closeBtn);
    closePopUp(showBtn);
    function closePopUp(elem) {
      if(!elem) return;
      elem.addEventListener('click', function() {
        popup.classList.toggle('is-show');
        body.classList.toggle('popup-stop-scroll')
      });
    }
  }
  popupImageSecond();