  let body = document.body;
  
  let works = Array.from(document.querySelectorAll('.works-work_work'))
  let blackBgs = Array.from(document.querySelectorAll('.black-background'))
  let closeBtns = Array.from(document.querySelectorAll('.close-btn'))
  let showBtns = Array.from(document.querySelectorAll('.work-image'))

  const test = () => {
    works.forEach( (work, i) => {
      
      var blackBg = blackBgs[i]
      var closeBtn = closeBtns[i]
      var showBtn = showBtns[i]
    
      closePopUp(blackBg);
      closePopUp(closeBtn);
      closePopUp(showBtn);
      
      function closePopUp(elem) {
        if(!elem) return;
        elem.addEventListener('click', function() {
          work.classList.toggle('is-show');
          body.classList.toggle('popup-stop-scroll')
        });
      }
      
    })
  }
  
  test()