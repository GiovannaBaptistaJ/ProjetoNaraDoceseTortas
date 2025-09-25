const footerNav = document.querySelector('.footer_nav-js');
const footerSvg = document.querySelector('.svg-menu-mobile-js-footer');
console.log(footerNav)
console.log(footerSvg)


footerSvg.addEventListener('click', openMenuMobile)

function openMenuMobile() {
    footerNav.classList.toggle('footer_navAtivado');
   
}

