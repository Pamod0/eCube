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
})

/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById('myNav').style.width = '100%';
  }
  
  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeNav() {
    document.getElementById('myNav').style.width = '0%';
  }