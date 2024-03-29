// Toggle responsive navigation menu
function toggleResponsiveMenu() {
  var nav = document.getElementById("myTopnav");
  if (nav.className === "topnav") {
    nav.className += " responsive";
  } else {
    nav.className = "topnav";
  }
}

// Wait for the entire page to load before initializing scroll spy
window.addEventListener('load', function() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('nav a');

  function updateActiveLink() {
    let index = sections.length;

    while(--index && window.scrollY + 50 < sections[index].offsetTop) {}

    navLinks.forEach((link) => link.classList.remove('active'));
    navLinks[index].classList.add('active');
  }

  updateActiveLink(); // Run on load in case the user is not at the top of the page
  window.addEventListener('scroll', updateActiveLink);
});

document.addEventListener("DOMContentLoaded", function() {
  // Attaching the toggle function to the menu icon
  document.querySelector('.icon').addEventListener('click', toggleResponsiveMenu);
});
