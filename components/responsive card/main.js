document.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelector('.ss-categories');
    const submenu = document.querySelector('.ss-categories-submenu');
  
    button.addEventListener('click', function() {
      submenu.classList.toggle('show'); // Toggle añade o quita la clase "show"
    });
  });