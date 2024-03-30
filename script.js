<script>
document.addEventListener('DOMContentLoaded', function () {
    const menuItems = document.querySelectorAll('.menu-item');

    function setActiveMenuItem() {
        const currentHash = window.location.hash;
        let foundActive = false;

        menuItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === currentHash) {
                item.classList.add('active');
                foundActive = true;
            }
        });

        // Set the first menu item as active if no hash or no match is found
        if (!foundActive && !currentHash) {
            menuItems[0].classList.add('active');
        }
    }

    menuItems.forEach(item => {
        item.addEventListener('click', function (e) {
            // Prevent the default jump on click
            e.preventDefault();

            // Remove 'active' class from all menu items before setting it on the clicked one
            menuItems.forEach(item => item.classList.remove('active'));

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

    // Set the correct active menu item on page load
    setActiveMenuItem();

    // Optionally, listen for hash changes to set active menu item
    // Useful for forward/backward navigation in history
    window.addEventListener('hashchange', setActiveMenuItem);
});
</script>
