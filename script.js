document.addEventListener('DOMContentLoaded', function () {
    const menuItems = document.querySelectorAll('.menu-item');

    menuItems.forEach(item => {
        item.addEventListener('click', function (e) {
            // Prevent the default jump on click
            e.preventDefault();

            // Remove 'active' class from all menu items
            menuItems.forEach(item => {
                item.classList.remove('active');
            });

            // Add 'active' class to clicked item
            this.classList.add('active');

            // Smooth scroll to the target section
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    'behavior': 'smooth',
                    'top': targetSection.offsetTop
                });
            }
        });
    });
});
