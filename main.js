/* hamburger menu */

const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('nav');

menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('active');
    menu.classList.toggle('active');
});