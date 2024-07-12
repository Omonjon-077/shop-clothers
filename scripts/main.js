import products from './products.js';

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
}
const initApp = () => {
    // load list product
    let listProductHTML = document.querySelector('#productsOne .pro-container');
    let listProductTwoHTML = document.querySelector('#productsTwo .pro-container');
    listProductHTML.innerHTML = null;
    listProductTwoHTML.innerHTML = null;

    products.forEach(product => {
        let newProduct = document.createElement('div');
        newProduct.classList.add('pro');

        if (product.company === "Louis Vuitton") {
            newProduct.innerHTML =
                `
                <img src="${product.img}" alt="" class="">
                <div class="des">
                    <span>${product.company}</span>
                    <h5>${product.name}</h5>
                    <div class="star">
                       <i class='bx bxs-star'></i>
                       <i class='bx bxs-star'></i>
                       <i class='bx bxs-star'></i>
                       <i class='bx bxs-star'></i>
                       <i class='bx bx-star'></i>
                    </div>
                    <h4>$${product.price}</h4>
                </div>
                <a href="#"><i class="uil uil-shopping-cart-alt card"></i></a>
            `;
            listProductHTML.appendChild(newProduct);
        } else if (product.company === "Gucci") {
            newProduct.innerHTML =
                `
                <img src="${product.img}" alt="" class="">
                <div class="des">
                    <span>${product.company}</span>
                    <h5>${product.name}</h5>
                    <div class="star">
                       <i class='bx bxs-star'></i>
                       <i class='bx bxs-star'></i>
                       <i class='bx bxs-star'></i>
                       <i class='bx bxs-star'></i>
                       <i class='bx bx-star'></i>
                    </div>
                    <h4>$${product.price}</h4>
                </div>
                <a href="#"><i class="uil uil-shopping-cart-alt card"></i></a>
            `;
            listProductTwoHTML.appendChild(newProduct);
        }
    });
};
initApp();