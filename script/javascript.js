document.addEventListener('DOMContentLoaded', () => {
    // ჰამბურგერ მენიუს გახსნა
    const menuToggle = document.querySelector('#mobile-menu');
    const mainNav = document.querySelector('.main-nav');

    menuToggle.addEventListener('click', () => {
        mainNav.classList.toggle('active');
    });

    // ქვემენიუების მართვა მობილურზე
    const dropdownHeaders = document.querySelectorAll('.dropdown-header');

    dropdownHeaders.forEach(header => {
        header.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                const parent = header.parentElement;
                parent.classList.toggle('open');
            }
        });
    });
});