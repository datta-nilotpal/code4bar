document.addEventListener("DOMContentLoaded", function() {
  const header = document.querySelector('header');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('nav a, .topnav a');
  let lastScrollPosition = window.pageYOffset; // Initialize lastScrollPosition at the current scroll position

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
    let currentScrollPosition = window.pageYOffset; // Get the current scroll position
    let scrollRange = window.innerHeight * 0.3; // 30vh
    let scroll = document.body.scrollTop || document.documentElement.scrollTop;
    let opacity = Math.min(scroll / scrollRange, 1);
    header.style.backgroundColor = `rgba(4, 1, 18, ${opacity})`;
    
    activateLinkOnScroll();

    // Show/hide header based on the scroll direction
    if (currentScrollPosition > lastScrollPosition) {
      // Scrolling down, hide the header
      header.style.top = '-100px'; // Adjust this value to match your header's height
    } else {
      // Scrolling up, show the header
      header.style.top = '0';
    }
    // Update lastScrollPosition to the current scroll position
    lastScrollPosition = currentScrollPosition;
  });

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
