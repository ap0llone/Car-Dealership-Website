const header = document.querySelector('#header');
const menu = document.querySelector('#menu-icon');

menu.addEventListener('click', function(){
    header.classList.toggle('open');
    menu.classList.toggle('bx-x');
});