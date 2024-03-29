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
    // Change header background color when scrolled
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      header.style.backgroundColor = "#040112"; // Set header color on scroll
    } else {
      header.style.backgroundColor = "transparent"; // Reset header color when not scrolled
    }
    
    activateLinkOnScroll(); // Activate link on scroll
  });

  window.addEventListener('resize', activateLinkOnScroll); // Ensure link activation adjusts on window resize

  // Initial link activation check
  activateLinkOnScroll();

  // Attach toggle function to the responsive menu icon
  const menuIcon = document.querySelector('.icon');
  if (menuIcon) {
    menuIcon.addEventListener('click', toggleResponsiveMenu);
  }
});
