const btnMinus = document.querySelector('[data-action="minus"]'),
      btnPlus = document.querySelector('[data-action="plus"]'),
      counter = document.querySelector('[data-counter]');

btnMinus.addEventListener('click', () => {
    if (parseInt(counter.innerText) > 1) {
        counter.innerText = --counter.innerText;
    }
});

btnPlus.addEventListener('click', () => {
    if (parseInt(counter.innerText) < 10) {
        counter.innerText = ++counter.innerText;
    }
});