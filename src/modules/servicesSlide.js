import animate from "./animate";
const servicesSlider = (minWidth = 222) => {
  const slide = document.querySelectorAll('.services-slide'),
      slider = document.querySelector('.services-slider'),
      maxWidth = minWidth * (slide.length - 5);
  let currentWidth = 0;

  slide.forEach((elem, index) => {
    if (index === 0) {
      elem.style.cssText = `
        -webkit-transition: .2s linear;
        -moz-transition: .2s linear;
        -o-transition: .2s linear;
        transition: .2s linear;
        min-width: 210px;
        `;
    } else {
      elem.style.cssText = `min-width: 210px;`;
    }
  });

  const moveSlide = (changeSlide) => {
    currentWidth += +changeSlide;

    if (currentWidth <= 6) {
      currentWidth = 4;
      slide[0].style.marginLeft = `-${currentWidth}px`;
      currentWidth = 0;
    }else if (currentWidth >= maxWidth) {
      currentWidth = maxWidth;
      slide[0].style.marginLeft = `-${currentWidth}px`;
    }
    slide[0].style.marginLeft = `-${currentWidth}px`;

  };

  slider.addEventListener('click', (event) => {
    let target = event.target;
    event.preventDefault();
    if (target.closest('.next')) {
      moveSlide(minWidth);
    }
    if (target.closest('.prev')) {
      moveSlide(-minWidth);
    }
  });
};

export default servicesSlider;