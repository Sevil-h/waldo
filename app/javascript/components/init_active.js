const initActive = () => {

const slides = document.querySelectorAll('.slider__container');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

let activeSlide = 0;

rightBtn.addEventListener('click', () => {
  activeSlide ++

  if (activeSlide > slides.length -1) {
    activeSlide = 0;
  }

  setActiveSlide();
})

leftBtn.addEventListener('click', () => {
  activeSlide --

  if (activeSlide < 0) {
    activeSlide = slides.length - 1;
  }

  setActiveSlide();
})

function setActiveSlide() {
  slides.forEach((slide) => slide.classList.remove('active'));

  slides[activeSlide].classList.add('active');
}

}

export { initActive };
