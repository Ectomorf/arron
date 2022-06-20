//hamburger menu//

let menuButton = document.querySelector('.menu-button');
let navBlock = document.querySelector('nav');
let adressBlock = document.querySelector('.adress-block');

menuButton.addEventListener('click', (e) => {
    menuButton.classList.toggle('active');
    navBlock.classList.toggle('active');
    adressBlock.classList.toggle('active');
});