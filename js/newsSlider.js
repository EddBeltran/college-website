var swiper = new Swiper(".news-slider", {
    slidesPerView: 1,
    spaceBetween: 40,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    breakpoints: {
      425: {
        slidesPerView: 1,
        spaceBetween: 40,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
});