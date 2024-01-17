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

/* three dots color change */

window.addEventListener('scroll', function() {
    // Get the scroll position
    const scrollPosition = window.scrollY || window.pageYOffset;
    console.log(scrollPosition);
    console.log(window.innerHeight);

    // Calculate which dot to highlight based on the scroll position
    const dotIndex = Math.floor(scrollPosition / window.innerHeight) + 1;
    console.log(dotIndex);

    // Reset all dots to default color
    document.querySelectorAll('.dot').forEach(dot => {
      dot.style.backgroundColor = '#ffffff';
    });

    // Highlight the dot at the calculated index
    const highlightedDot = document.querySelector(`.dot:nth-child(${dotIndex})`);
    if (highlightedDot) {
      highlightedDot.style.backgroundColor = '#9370D9';
    }
  });
