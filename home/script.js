document.addEventListener('DOMContentLoaded', function() {
  
  // Année automatique
  const years = document.querySelectorAll('[id^="year"]');
  years.forEach(year => {
    year.textContent = new Date().getFullYear();
  });

  // Menu burger
  const navToggles = document.querySelectorAll('[id^="navToggle"]');
  const navs = document.querySelectorAll('[id^="mainNav"]');
  
  navToggles.forEach((toggle, index) => {
    toggle.addEventListener('click', () => {
      navs[index].classList.toggle('active');
      toggle.classList.toggle('active');
    });
  });

  
  // Header scroll shadow
  window.addEventListener('scroll', () => {
    const header = document.querySelector('.site-header');
    if (window.scrollY > 20) {
      header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)';
    } else {
      header.style.boxShadow = 'none';
    }
  });
});