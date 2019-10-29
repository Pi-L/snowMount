const IMAGES = document.querySelectorAll('img');
const burgers = document.querySelectorAll('[class*="burger"]');
const NAV = document.querySelector('.sm-c-nav');
const TOP = parseInt(window.getComputedStyle(NAV).getPropertyValue('top'), 10);

// hide images if not loaded
IMAGES.forEach(img => {
    img.addEventListener('error', function (e) {
        e.target.style.visibility = 'hidden';
    })
});

burgers.forEach((burger) => {
    burger.addEventListener('click', function clickBurger() {
        this.classList.toggle('openBurger');
    });
});

let navThreshold = false;
window.addEventListener('scroll', function () {

    if (window.pageYOffset <= TOP) {
        NAV.style.top = `${TOP - window.pageYOffset}px`;
        if (navThreshold) {
            NAV.classList.remove('beforeNav');
            navThreshold = false
        }
    }
    else if (window.pageYOffset > TOP) {
        NAV.style.top = 0;
        if (!navThreshold) {
            NAV.classList.add('beforeNav');
            navThreshold = true;
        }
    }
});