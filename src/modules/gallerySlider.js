const gallerySlider = () => {
    const slide = document.querySelectorAll('.gallery-slide'),
      slider = document.querySelector('.gallery-slider');
  
    let currentSlide = 0,
      interval;
  
    const prevSlide = (elem, index) => {
      elem[index].style.display = 'none';
    };
  
    const nextSlide = (elem, index) => {
      elem[index].style.display = 'flex';
    };
  
    const autoPlaySlide = () => {
      prevSlide(slide, currentSlide);
      currentSlide++;
      if (currentSlide >= slide.length) {
        currentSlide = 0;
      }
      nextSlide(slide, currentSlide);
    };
  
    const startSlide = (time = 3000) => {
      interval = setInterval(autoPlaySlide, time);
    };
  
    const stopSlide = () => {
      clearInterval(interval);
    };
  
    slider.addEventListener('click', (event) => {
      event.preventDefault();
  
      let target = event.target;;
  
      prevSlide(slide, currentSlide);
  
      if (target.closest('.next')) {
        currentSlide++;
      } else if (target.closest('.prev')) {
        currentSlide--;
      }
  
      if (currentSlide >= slide.length) {
        currentSlide = 0;
      }
      if (currentSlide < 0) {
        currentSlide = slide.length - 1;
      }
  
      nextSlide(slide, currentSlide);
    });
  
    slider.addEventListener('mouseover', (event) => {
      if (event.target.closest('.slider-arrow') || event.target.closest('.gallery-slide')) {
        stopSlide();
      }
    });
  
    slider.addEventListener('mouseout', (event) => {
      if (event.target.closest('.slider-arrow') || event.target.closest('.gallery-slide')) {
        startSlide();
      }
    });
  
    startSlide();
    
  };
  
  export default gallerySlider;