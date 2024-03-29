document.addEventListener("DOMContentLoaded", function() {
  const header = document.querySelector('header'); // Select the header
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('nav a, .topnav a'); // Adjusted for specific HTML structure

  function activateLinkOnScroll() {
    let scrollPosition = window.scrollY + window.innerHeight / 2; // Adjust based on layout

    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      const sectionBottom = sectionTop + section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
        navLinks.forEach((link) => {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + section.id) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', function() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      header.style.backgroundColor = "#040112";
    } else {
      header.style.backgroundColor = "transparent";
    }
    
    activateLinkOnScroll();
  });

  window.addEventListener('resize', activateLinkOnScroll);

  activateLinkOnScroll();

  const menuIcon = document.querySelector('.icon');
  if (menuIcon) {
    menuIcon.addEventListener('click', toggleResponsiveMenu);
  }
});
