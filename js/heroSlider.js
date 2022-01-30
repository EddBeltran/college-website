var swiper = new Swiper(".hero-slider", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
});