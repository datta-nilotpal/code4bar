document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                // Add the animation class to all whyus-card elements at once
                document.querySelectorAll('#whyus-section .whyus-card').forEach(card => {
                    card.classList.add('animate-on-scroll');
                });
                
                // Stop observing the #whyus-section to ensure animation only happens once
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 }); // Adjust this value based on when you want the animation to start

    // Start observing the #whyus-section, not individual cards
    const whyUsSection = document.querySelector('#whyus-section');
    observer.observe(whyUsSection);
});
