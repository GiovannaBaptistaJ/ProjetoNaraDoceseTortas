const headerNav = document.querySelector('.header_nav-js');
const headerSvg = document.querySelector('.svg-menu-mobile-js');

headerSvg.addEventListener('click', openMenuMobile)

function openMenuMobile() {
    headerNav.classList.toggle('header_navAtivado');
   
}

console.log(headerNav);