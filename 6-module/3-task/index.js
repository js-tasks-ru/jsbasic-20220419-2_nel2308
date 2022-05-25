import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  #inner;
  #stepSize = 500;
  #step = 0;
  #arrowLeftBtn;
  #arrowRightBtn;
  updateCarousel() {
    this.#inner.style.transform = 'translateX(-' + (this.#stepSize * this.#step) + 'px)';

    if (this.#step <= 0) {
      this.#arrowLeftBtn.style.display = 'none';
    } else {
      this.#arrowLeftBtn.style.display = '';
    }

    if (this.#step >= (this.slides.length - 1)) {
      this.#arrowRightBtn.style.display = 'none';
    } else {
      this.#arrowRightBtn.style.display = '';
    }
  }
  initCarousel() {
    this.#arrowLeftBtn = this._container.querySelector('.carousel__arrow_left');
    this.#arrowRightBtn =  this._container.querySelector('.carousel__arrow_right');
    this.#inner =  this._container.querySelector('.carousel__inner');
    
    this.#arrowLeftBtn.addEventListener('click',  (event) => {
      event.preventDefault();
      
      if (this.#step > 0) {
        this.#step--;
        this.updateCarousel();
      }
    });
  
    
    this.#arrowRightBtn.addEventListener('click', (event) => {
      event.preventDefault();
  
      if (this.#step < this.slides.length) {
        this.#step++;
        this.updateCarousel();
      }
    });

    
    this.updateCarousel();
  
  
  }
  

  constructor(slides) {
    this.slides = slides;

    this._container = document.createElement('div');
    this._container.className = 'carousel';
    this._container.innerHTML = `    <div class="carousel__arrow carousel__arrow_right">
    <img src="/assets/images/icons/angle-icon.svg" alt="icon">
  </div>
  <div class="carousel__arrow carousel__arrow_left">
    <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
  </div>`

    let innerDiv = document.createElement('div');
    innerDiv.className = 'carousel__inner'

    for (let i in slides) {
      let slide = slides[i];
      let div = document.createElement('div');
    div.className = 'carousel__slide';
    div.dataset.id = slide.id;
    div.innerHTML = `
  <img src="/assets/images/carousel/${slide.image}" class="carousel__img" alt="slide">
  <div class="carousel__caption">
    <span class="carousel__price">€${slide.price}</span>
    <div class="carousel__title">${slide.name}</div>
    <button type="button" class="carousel__button">
      <img src="/assets/images/icons/plus-icon.svg" alt="icon">
    </button>
  </div>
`
let button = div.querySelector('.carousel__button');
    button.addEventListener('click', function(){
        let event = new CustomEvent('product-add', {
          bubbles: true,
          detail: div.dataset.id,
        });

        document.body.dispatchEvent(event);
    });

    innerDiv.appendChild(div);


    }

    this._container.appendChild(innerDiv);
    this.initCarousel();

  }

  get elem() {
    return this._container;
  }
}

