/* hamburger icon */
const menuBtn = document.querySelector('.hamburger-btn-wrapper');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
    document.getElementById('myNav').style.width = '100%';
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
    document.getElementById('myNav').style.width = '0%';
  }
});

/* three dots color change */

window.addEventListener('scroll', function () {
  // Get the scroll position
  const scrollPosition = window.scrollY || window.pageYOffset;
  console.log(scrollPosition);
  console.log(window.innerHeight);

  // Calculate which dot to highlight based on the scroll position
  const dotIndex = Math.floor(scrollPosition / window.innerHeight) + 1;
  console.log(dotIndex);

  // Reset all dots to default color
  document.querySelectorAll('.dot').forEach((dot) => {
    dot.style.backgroundColor = '#ffffff';
  });

  // Highlight the dot at the calculated index
  const highlightedDot = document.querySelector(`.dot:nth-child(${dotIndex})`);
  if (highlightedDot) {
    highlightedDot.style.backgroundColor = '#9370D9';
  }
});
/*
// change the color of navbar when scrolling

const navbar = document.querySelector('.navbar-section');
const navbarLogo = document.querySelector('.navbar-logo-img');
const navbarLinks = document.querySelectorAll('.navbar-links a');

function updateNavbarColor() {
  const currentSection = document.querySelector('section.active');
  console.log(currentSection);

  const sectionClassName = currentSection.className;
  console.log(sectionClassName);

  navbar.style.backgroundColor = '';
  navbar.style.boxShadow = '';

  if (sectionClassName.includes('home-section-01')) {
    navbar.style.backgroundColor = '#FFFFFF';
  } else if (sectionClassName.includes('home-section-02')) {
    navbar.style.backgroundColor = '#191919';
    navbarLogo.src = './assets/navbar-logo-white.svg';
    navbar.style.boxShadow = '0px 4px 4px #C3C3C3';
    navbarLinks.forEach((link) => {
      link.style.color = '#FFFFFF';
    });
  }
}

// Function to handle scroll events and update the navigation bar color
function handleScroll() {
  // Set a threshold to determine the active section based on scroll position
  const threshold = 0.5;

  // Get all the sections
  const sections = document.querySelectorAll('section');

  // Check each section's position and mark the active section
  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    const isVisible =
      rect.top <= window.innerHeight * threshold && rect.bottom >= 0;

    if (isVisible) {
      section.classList.add('active');
    } else {
      section.classList.remove('active');
    }
  });

  // Update the navigation bar color based on the active section
  updateNavbarColor();
}

// Attach the handleScroll function to the window scroll event
window.addEventListener('scroll', handleScroll);

// Call the handleScroll function initially to set the initial state
handleScroll();
*/
