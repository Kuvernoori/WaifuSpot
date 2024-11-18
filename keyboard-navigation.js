document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('#menu .nav-link');
    let currentIndex = -1;

    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowRight') {
            event.preventDefault();
            currentIndex = (currentIndex + 1) % menuItems.length;
            menuItems[currentIndex].focus();
        } else if (event.key === 'ArrowLeft') {
            event.preventDefault();
            currentIndex = (currentIndex - 1  + menuItems.length) % menuItems.length;
            menuItems[currentIndex].focus();
        }
    });

});