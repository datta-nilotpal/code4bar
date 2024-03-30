document.addEventListener("DOMContentLoaded", function() {
  const header = document.querySelector('header');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('nav a, .topnav a');

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
	@@ -20,7 +20,7 @@ document.addEventListener("DOMContentLoaded", function() {
    });
  }

  window.addEventListener('scroll', function() {
    let scrollRange = window.innerHeight * 0.3;
    let scroll = document.body.scrollTop || document.documentElement.scrollTop;
    let opacity = Math.min(scroll / scrollRange, 1);
	@@ -30,16 +30,15 @@ document.addEventListener("DOMContentLoaded", function() {
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
