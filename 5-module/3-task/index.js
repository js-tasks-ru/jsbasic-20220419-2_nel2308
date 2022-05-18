function initCarousel() {
  let arrowLeftBtn = document.querySelector('.carousel__arrow_left');
  let arrowRightBtn = document.querySelector('.carousel__arrow_right');
  let inner = document.querySelector('.carousel__inner');
  const slidesLen = inner.querySelectorAll(':scope > div').length;
  const stepSize = 500;
  
  let step = 0;
  function update() {
    inner.style.transform = 'translateX(-' + (stepSize * step) + 'px)';

    if (step <= 0) {
      arrowLeftBtn.style.display = 'none';
    } else {
      arrowLeftBtn.style.display = '';
    }

    if (step >= (slidesLen - 1)) {
      arrowRightBtn.style.display = 'none';
    } else {
      arrowRightBtn.style.display = '';
    }
  }

  update();

  arrowLeftBtn.addEventListener('click', function (event) {
    event.preventDefault();
    
    if (step > 0) {
      step--;
      update();
    }
  });

  
  arrowRightBtn.addEventListener('click', function (event) {
    event.preventDefault();

    console.warn('AR', step,  arrowRightBtn.style.display);
    
    if (step < slidesLen) {
      step++;
      update();
    }
  });

}
