const swiper = new Swiper(".swiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  freeMode: true,
  loop: true,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
