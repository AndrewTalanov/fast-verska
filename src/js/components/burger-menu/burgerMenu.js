const burger = document.querySelector('.burger__menu');
const burgerLines = document.querySelectorAll('.burger__menu div');

const togglerBurger = (burgerLines) => {
    burgerLines.forEach(el => {
        el.classList.toggle('animate');
    });
}

burger.addEventListener('click', () => togglerBurger(burgerLines));