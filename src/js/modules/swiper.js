const swiper_top = new Swiper('.mySwiper_top', {
  effect: 'fade',
  pagination: {
    el: '.swiper-pagination',
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});
swiper_top;
export default swiper_top;
