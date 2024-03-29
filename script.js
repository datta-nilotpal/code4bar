function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('nav a');

  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;

    sections.forEach(function(section) {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (currentScroll >= sectionTop && currentScroll < sectionTop + sectionHeight) {
        const targetId = '#' + section.id;
        navLinks.forEach(function(link) {
          link.classList.remove('active');
          if (link.getAttribute('href') === targetId) {
            link.classList.add('active');
          }
        });
      }
    });
  });
});
