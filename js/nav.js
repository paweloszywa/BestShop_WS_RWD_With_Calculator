document.addEventListener('DOMContentLoaded', function() {

    const hamburgerIcon = document.querySelector('.hamburger-container');
    const showMenu = document.querySelector('.menu');
    const closeMenu = document.querySelector(".menu").children;
    const closeAll = document.querySelectorAll('.close-nav');

    hamburgerIcon.addEventListener('click', function () {
        this.classList.toggle('hamburger-active');
        showMenu.classList.toggle('menu-active');
    });

    for (let i = 0; i < closeMenu.length; i++) {
        closeMenu[i].addEventListener("click", function () {
            hamburgerIcon.classList.remove('hamburger-active');
            showMenu.classList.remove('menu-active');
        });
    }

    for (let i = 0; i < closeAll.length; i++) {
        closeAll[i].addEventListener("click", function () {
            hamburgerIcon.classList.remove('hamburger-active');
            showMenu.classList.remove('menu-active');
        });
    }
});

