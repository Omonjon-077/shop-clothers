import products from './products.js';
// Site Products View functions
if ($('.home-page').length) {
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
                <button type="button" data-id="${product.id}"><i class="uil uil-shopping-cart-alt card add-cart"></i></button>
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
                <button type="button" data-id="${product.id}"><i class="uil uil-shopping-cart-alt card add-cart"></i></button>
            `;
                listProductTwoHTML.appendChild(newProduct);
            }
        });
    };
    initApp();
}
if ($('.shop-page').length) {
    const initApp = () => {
        // load list product
        let listProductHTML = document.querySelector('#productsOne .pro-container');
        listProductHTML.innerHTML = null;

        products.forEach(product => {
            let newProduct = document.createElement('div');
            newProduct.classList.add('pro');

            if (product.company) {
                newProduct.innerHTML =
                    `
                <img src="../${product.img}" alt="" class="">
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
                <button type="button" data-id="${product.id}"><i class="uil uil-shopping-cart-alt card add-cart"></i></button>
            `;
                listProductHTML.appendChild(newProduct);
            }
        });
    };
    initApp();
}

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

function getLastNum() {
    let lastNumCounter = localStorage.getItem('resultNum') ? localStorage.getItem('resultNum') : null;
    if (lastNumCounter > 0) {
        cartQuantity.innerText = lastNumCounter;
    }
}

let cartQuantity = document.querySelector('.result-num');
getLastNum();
window.addEventListener('click', (e) => {
    let addButton = e.target;
    if (addButton.classList.contains('add-cart')) {
        cartQuantity.innerText = ++cartQuantity.innerText;
        cartQuantity.style.display = 'flex';
        localStorage.setItem('resultNum', cartQuantity.textContent);
    }
});

