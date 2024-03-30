document.addEventListener("DOMContentLoaded", function() {
  const header = document.querySelector('header');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('nav a, .topnav a');
  let lastScrollPosition = 0; // New variable to store the last scroll position

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
    let scrollRange = window.innerHeight * 0.3; // 30vh
    let scroll = document.body.scrollTop || document.documentElement.scrollTop;
    let opacity = Math.min(scroll / scrollRange, 1);
    header.style.backgroundColor = `rgba(4, 1, 18, ${opacity})`;
    activateLinkOnScroll();

    // Hide/show header on scroll up/down
    if (scroll > lastScrollPosition) {
      // Scrolling down, bring the header back
      header.style.top = '0';
    } else {
      // Scrolling up, move the header out of view
      header.style.top = '-100px'; // Adjust as needed based on your header's height
    }
    lastScrollPosition = scroll <= 0 ? 0 : scroll; // Update lastScrollPosition, but not below 0
  });

  activateLinkOnScroll();
});

// Smooth scroll for anchor links remains unchanged
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
