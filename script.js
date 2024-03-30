document.addEventListener("DOMContentLoaded", function() {
  const header = document.querySelector('header');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('nav a, .topnav a');
  let lastScrollPosition = window.pageYOffset;

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

  window.addEventListener('scroll', function() {
    let currentScrollPosition = window.pageYOffset;

    // Scrolling up
    if (currentScrollPosition < lastScrollPosition) {
      header.style.top = '-60px'; // Adjust here for header's height
    } else {
      // Scrolling down or stopped
      header.style.top = '0';
    }
    
    lastScrollPosition = currentScrollPosition; // Update the last known scroll position

    // Opacity effect for the header on scroll, recalculated with every scroll event
    let scrollRange = window.innerHeight * 0.3; // 30vh
    let opacity = Math.min(currentScrollPosition / scrollRange, 1);
    header.style.backgroundColor = `rgba(4, 1, 18, ${opacity})`;

    activateLinkOnScroll();
  });

  // Ensuring the header and navigation links activate upon initial load
  activateLinkOnScroll();

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});
