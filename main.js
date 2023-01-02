const search = document.querySelector('.search')
const menu = document.querySelector('.menu')
const cart = document.querySelector('.cart')

function searchButton() {
    search.classList.replace('unselected' , 'selected')
    menu.classList.replace('selected' , 'unselected')
    cart.classList.replace('selected' , 'unselected')
}
function menuButton() {
    search.classList.replace('selected' , 'unselected')
    menu.classList.replace('unselected' , 'selected')
    cart.classList.replace('selected' , 'unselected')
}
function cartButton() {
    search.classList.replace('selected' , 'unselected')
    menu.classList.replace('selected' , 'unselected')
    cart.classList.replace('unselected' , 'selected')
}