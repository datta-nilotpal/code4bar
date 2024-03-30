document.addEventListener("DOMContentLoaded", function() {
  const header = document.querySelector('header');
  let lastScrollTop = 0;

  window.addEventListener('scroll', function() {
    let currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // When scrolling down or stopped, show the header
    if (currentScrollTop < lastScrollTop || currentScrollTop <= 0) {
      header.style.top = "0";
    } else {
      // When scrolling up, hide the header
      header.style.top = "-60px";
    }
    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // Avoid negative values

    // Handle header opacity based on scroll position for transparency effect
    let scrollRange = window.innerHeight * 0.3; // 30vh as in the original functionality
    let opacity = Math.min(currentScrollTop / scrollRange, 1);
    header.style.backgroundColor = `rgba(4, 1, 18, ${opacity})`;
  });

  // Smooth scroll and link activation as previously implemented
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  function activateLinkOnScroll() {
    let scrollPosition = window.scrollY + window.innerHeight / 2;
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a, .topnav a');

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

  window.addEventListener('scroll', activateLinkOnScroll);
  activateLinkOnScroll();
});
