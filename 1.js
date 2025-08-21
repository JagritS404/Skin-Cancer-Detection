// Initialize Swiper
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.nav-button');
  
    // Get the current page's URL and extract just the filename (e.g., "model.html")
    const currentPage = window.location.pathname.split("/").pop();
  
    // Loop through buttons and match their href to the current page
    buttons.forEach((button) => {
      const buttonHref = button.getAttribute('href').split("/").pop(); // Extracts just the filename from href
  
      if (buttonHref === currentPage) {
        button.classList.add('active'); // Add the active class to the matching button
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
