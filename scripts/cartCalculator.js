const counter = document.querySelector('[data-counter]');


window.addEventListener('click', (ev) => {
    if (ev.target.dataset.action === 'plus') {
        let counterWrapper = ev.target.closest('.counter-wrap');
        let counter = counterWrapper.querySelector('[data-counter]');
        if (counter.innerText < 10) {
            counter.innerText = ++counter.innerText;
        }
    }
    if (ev.target.dataset.action === 'minus') {
        let counterWrapper = ev.target.closest('.counter-wrap');
        let counter = counterWrapper.querySelector('[data-counter]');
        if (parseInt(counter.innerText) > 1) {
            counter.innerText = --counter.innerText;
        }
    }
});