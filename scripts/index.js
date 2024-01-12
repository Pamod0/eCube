/* mobile navbar */

/* hamburger icon */
const menuBtn = document.querySelector('.hamburger-btn-wrapper');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
        document.getElementById('myNav').style.width = '100%';
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
        document.getElementById('myNav').style.width = '0%';
    }
});

/* navbar color change */

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar-wrapper');
    const homeSection1 = document.querySelector('#home-section-1');
    const homeSection2 = document.querySelector('#home-section-2');
    const homeSection3 = document.querySelector('#home-section-3');
    const honeSection4 = document.querySelector('#home-section-4');
});
