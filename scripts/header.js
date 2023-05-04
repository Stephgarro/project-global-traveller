/* Cuando hago CLICK .button, .nav TOGGLE 'activo' */
const button = document.querySelector('.menu__btn')
const nav    = document.querySelector('.menu__navegation')

button.addEventListener('click',()=>{
    nav.classList.toggle('activo')
})