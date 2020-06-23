'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Shared = function Shared() {
    _classCallCheck(this, Shared);
};

var menu = document.getElementById('menu');
var menuIcon = document.getElementById('menuIcon');
var menuList = document.getElementById('menuList');
var menuNav = document.getElementById('headerNavInfo');

var menuIsOpened = false;
var menuListIsOpened = false;

function openList(mode) {
    menuListIsOpened = true;
    menuList.style.display = 'block';
    if (mode) {
        menu.classList.toggle('menu--opened');
        menuIcon.classList.toggle('icon--opened');
    }
}

function closeList(mode) {
    menuListIsOpened = false;
    menuList.style.display = 'none';
    if (mode) {
        menu.classList.toggle('menu--opened');
        menuIcon.classList.toggle('icon--opened');
    }
}

function openMenu() {
    menu.style.display = 'block';
    menuNav.style.display = 'none';
    menuIsOpened = true;
}

function closeMenu() {
    menu.style.display = 'none';
    menuNav.style.display = 'flex';
    menuIsOpened = false;
    closeList();
}

document.addEventListener('DOMContentLoaded', function () {
    if (window.innerWidth > 676) {
        closeMenu();
    } else {
        menu.style.display = 'block';
        menuNav.style.display = 'none';
        menuIsOpened = true;
        closeList(false);
    }
});

window.addEventListener('resize', function () {
    if (menuIsOpened && window.innerWidth > 676) {
        closeMenu(false);
    } else if (!menuIsOpened && window.innerWidth <= 676) {
        openMenu(false);
    }
});

menuIcon.addEventListener('click', function () {
    if (menuListIsOpened) {
        closeList(true);
    } else {
        openList(true);
    }
});

menuList.addEventListener('click', function () {
    closeList(true);
});
//# sourceMappingURL=script.js.map
