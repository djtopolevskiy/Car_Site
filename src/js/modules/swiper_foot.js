const swiper_foot = new Swiper('.mySwiper_foot', {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination_foot',
    clickable: true,
  },
});
swiper_foot;
export default swiper_foot;
