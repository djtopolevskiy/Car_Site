// import Swiper from 'swiper/bundle';

// import 'swiper/css/bundle';

const swiper_why = new Swiper('.mySwiper_why', {
  effect: 'cube',
  grabCursor: true,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
  pagination: {
    el: '.swiper-pagination_why',
  },
});

swiper_why;
export default swiper_why;
