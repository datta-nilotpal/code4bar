document.addEventListener("DOMContentLoaded", function() {
  // Select elements
  const header = document.querySelector('header');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('nav a, .topnav a');
  
  // Initialize last scroll position
  let lastScrollTop = 0;

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
    let scrollRange = window.innerHeight * 0.3; // 30% of the viewport height
    let scroll = document.body.scrollTop || document.documentElement.scrollTop;
    
    // Calculate header background opacity
    let opacity = Math.min(scroll / scrollRange, 1);
    header.style.backgroundColor = `rgba(4, 1, 18, ${opacity})`;

    // Determine scroll direction
    let st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
      // Downscroll code
      header.style.top = "0"; // Move header back to its original position
    } else {
      // Upscroll code
      header.style.top = "-60px"; // Hide the header
    }
    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    
    activateLinkOnScroll();
  });

  activateLinkOnScroll();
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});
