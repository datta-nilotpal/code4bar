document.addEventListener("DOMContentLoaded", function() {
  const header = document.querySelector('header');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.menu a');

  function activateLinkOnScroll() {
    let scrollPosition = window.scrollY + window.innerHeight / 2;

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

  function updateHeaderBackground() {
    if(window.scrollY > 0) {
      header.style.backgroundColor = '#040112'; // Opaque background when not at the top
    } else {
      header.style.backgroundColor = 'transparent'; // Transparent background at the top
    }
  }

  window.addEventListener('scroll', function() {
    updateHeaderBackground();
    activateLinkOnScroll();
  });

  updateHeaderBackground(); // Ensure correct background is set on page load
  activateLinkOnScroll();
});

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
