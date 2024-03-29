// Toggle responsive navigation menu
function toggleResponsiveMenu() {
  var nav = document.getElementById("myTopnav");
  if (nav.className === "topnav") {
    nav.className += " responsive";
  } else {
    nav.className = "topnav";
  }
}

document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('nav a, .topnav a'); // Adjusted for your specific HTML structure

  function activateLinkOnScroll() {
    let scrollPosition = window.scrollY + window.innerHeight / 2; // Adjust based on your layout

    sections.forEach((section, index) => {
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

  // Run the function on scroll and resize for dynamic adjustment
  window.addEventListener('scroll', activateLinkOnScroll);
  window.addEventListener('resize', activateLinkOnScroll);

  // Initial activation in case the page is loaded with an initial scroll position
  activateLinkOnScroll();

  // Attach the toggle function to the menu icon for responsive menu
  document.querySelector('.icon').addEventListener('click', toggleResponsiveMenu);
});
