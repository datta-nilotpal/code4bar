document.addEventListener('DOMContentLoaded', function () {
    const menuItems = document.querySelectorAll('.menu-item');

    // Function to set the active menu item
    function setActiveMenuItem() {
        let activeSet = false;
        const currentHash = window.location.hash;

        menuItems.forEach((item, index) => {
            // Remove active class from all items
            item.classList.remove('active');

            // Set the first item as active if no hash is present or match is found
            if (!activeSet) {
                if (currentHash && item.getAttribute('href') === currentHash) {
                    item.classList.add('active');
                    activeSet = true;
                } else if (!currentHash && index === 0) {
                    item.classList.add('active');
                    activeSet = true;
                }
            }
        });
    }

    // Initialize the correct active menu item
    setActiveMenuItem();

    // Listen to click events on menu items for smooth scrolling
    menuItems.forEach(item => {
        item.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default anchor click behavior

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                window.scrollTo({
                    'behavior': 'smooth',
                    'top': targetSection.offsetTop
                });
            }

            // Update the active class on click
            setActiveMenuItem();
        });
    });

    // Optionally, update the active menu item on hash change
    window.addEventListener('hashchange', setActiveMenuItem);
});
