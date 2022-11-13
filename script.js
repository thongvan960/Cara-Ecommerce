
var bar = document.querySelector("#bar");
var navbar = document.querySelector("#narbar");
var close = document.querySelector('#close')

if (bar) {
    bar.addEventListener('click', () => {
        navbar.classList.add('active')
    })
}

if (close) {
    close.addEventListener('click', () => {
        navbar.classList.remove('active')
    })
}