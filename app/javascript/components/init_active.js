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

///////////////////////////////////
// Cards-effects

const circles = document.querySelectorAll('.circles--item');
const cards = document.querySelectorAll('.card');

const circle_left = document.querySelector('.circle-left');
const circle_md = document.querySelector('.circle-md');
const circle_right = document.querySelector('.circle-right');


const card_1 = document.querySelector('.card-1');
const card_2 = document.querySelector('.card-2');
const card_3 = document.querySelector('.card-3');


circle_right.addEventListener('click', () => {
  removeActiveClasses();
  circle_right.classList.add('circle-active');
  card_3.classList.add('card--active');
})

circle_left.addEventListener('click', () => {
  removeActiveClasses();
  circle_left.classList.add('circle-active');
  card_1.classList.add('card--active');
})

circle_md.addEventListener('click', () => {
  removeActiveClasses();
  circle_md.classList.add('circle-active');
  card_2.classList.add('card--active');
})

// cards.forEach(card => {
//   circles.forEach((circle) => {
//     circle.addEventListener('click', () => {
//       removeActiveClasses();
//       circle.classList.add('circle-active');

//       circle.addEventListener('click', () => {
//         currentActive++
//         card.classList.add('card--active');

//         console.log(currentActive);
//       })
//     })
//   })
// })

/////////////////////////////////////
// Remove Active classes from both card and circle

function removeActiveClasses() {
  circles.forEach(circle => {
    circle.classList.remove('circle-active')
  })

  cards.forEach(card => {
    card.classList.remove('card--active');
  })
}

}

export { initActive };
