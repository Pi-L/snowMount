const IMAGES = document.querySelectorAll('img');
const BURGERS = document.querySelectorAll('[class*="burger"]');
const NAV = document.querySelector('.sm-c-nav');
const TOP = parseInt(window.getComputedStyle(NAV).getPropertyValue('margin-top'), 10);
const FOLIOLINKS = document.querySelectorAll('.sm-c-portfolio__container__figure__card a');
const MODAL = document.querySelector('.sayHelloModal');
const SAYHELLO = document.querySelector('.sm-c-nav__menu__link--hello');

// hide images if not loaded
IMAGES.forEach(img => {
    img.addEventListener('error', function hideImageError(e) {
        e.target.style.visibility = 'hidden';
    })
});

BURGERS.forEach((burger) => {
    burger.addEventListener('click', function clickBurger() {
        this.classList.toggle('openBurger');
    });
});

let navThreshold = false;
window.addEventListener('scroll', function winScroll() {
    if (window.pageYOffset <= TOP) {
        if (navThreshold) {
            NAV.classList.remove('beforeNav');
            navThreshold = false
        }
    }
    else if (window.pageYOffset > TOP) {
        if (!navThreshold) {
            NAV.classList.add('beforeNav');
            navThreshold = true;
        }
    }
});

FOLIOLINKS.forEach((myLink) => {
    myLink.addEventListener('focus', function linkFocusIn() {
        this.parentNode.classList.toggle('focusedLink');
    });
    myLink.addEventListener('blur', function linkFocusIn() {
        this.parentNode.classList.toggle('focusedLink');
    });
});



document.addEventListener('click', function closeModal(e) {

    if (!MODAL.contains(e.target)) {
        MODAL.classList.add('inactive');
    }
    if (SAYHELLO.contains(e.target)) {
        MODAL.classList.remove('inactive');
    }
    e.stopPropagation();
});
