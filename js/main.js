document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.querySelector(".menu-toggle");
    const navWrapper = document.querySelector(".mobile-nav-wrapper");
    const barIcon = toggleBtn.querySelector(".bar");
    const closeIcon = toggleBtn.querySelector(".close");
  
    toggleBtn.addEventListener("click", () => {
      const isOpen = navWrapper.classList.toggle("show");
      barIcon.style.display = isOpen ? "none" : "inline";
      closeIcon.style.display = isOpen ? "inline" : "none";
    });
  });

  
  document.querySelectorAll('.accordion-toggle').forEach(button => {
  button.addEventListener('click', () => {
    const item = button.parentElement;
    const openItem = document.querySelector('.accordion-item.open');

    if (openItem && openItem !== item) {
      openItem.classList.remove('open');
    }

    item.classList.toggle('open');
  });
});
