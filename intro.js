// Initialize Swiper
document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.nav-button');

  const currentPage = window.location.pathname.split("/").pop();

  buttons.forEach((button) => {
    const buttonHref = button.getAttribute('href').split("/").pop();

    if (buttonHref === currentPage) {
      button.classList.add('active');
    }
  });
});

const mySwiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
  },
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  }
});
