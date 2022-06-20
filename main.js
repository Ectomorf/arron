//hamburger menu//

let menuButton = document.querySelector('.menu-button');
let navBlock = document.querySelector('nav');

menuButton.addEventListener('click', (e) => {
    menuButton.classList.toggle('active');
    navBlock.classList.toggle('active');
});