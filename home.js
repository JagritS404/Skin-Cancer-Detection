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
  
