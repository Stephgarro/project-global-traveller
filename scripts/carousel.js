const carousel = [...document.querySelectorAll('.carousel__container')];
const next = [...document.querySelectorAll('.carousel__arrow--next')];
const previous = [...document.querySelectorAll('.carousel__arrow--previous')];
const smallMedia = window.matchMedia('(max-width: 480px)');


if (smallMedia.matches) {
  carousel.forEach((item, i) => {
    let container = item.getBoundingClientRect();
    let containerWidth = container.width;
  
  
    next[i].addEventListener('click', () => {
      item.scrollLeft += containerWidth/6;
    })
  
  
    previous[i].addEventListener('click', () => {
      item.scrollLeft -= containerWidth/6;
    })
  }
  )
} else {
  carousel.forEach((item, i) => {
    let container = item.getBoundingClientRect();
    let containerWidth = container.width;
  
  
    next[i].addEventListener('click', () => {
      item.scrollLeft += containerWidth/3;
    })
  
  
    previous[i].addEventListener('click', () => {
      item.scrollLeft -= containerWidth/3;
    })
  }
  )
};
