// Script for navigation bar
const bar = document.querySelector('.bar'),
    close = document.querySelector('.close'),
    nav = document.querySelector('.navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    });
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    });
}

if ($('.main-img').length) {
    let mainImg = document.querySelector('.main-img'),
        smallImg = document.querySelectorAll('.small-img');

    smallImg.forEach(img => {
        img.addEventListener('click', () => {
            mainImg.src = img.src;
        })
    });
};