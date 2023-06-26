let openMenu = document.querySelector('.openMenu');
let closeMenu = document.querySelector('.closeMenu');
let navList = document.querySelector('.nav-list');

function openNavbar() {
    navList.classList.add("update-navList");
    closeMenu.classList.add('b');
    openMenu.classList.add('n');
}
function closeNavbar() {
    navList.classList.remove("update-navList");

    closeMenu.classList.remove('b');
    openMenu.classList.remove('n');

}