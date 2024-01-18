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

  // change the color of navbar when scrolling

  // Get the navigation bar element
  const navbar = document.querySelector('.navbar-section');

  // Function to update the navigation bar color based on the current section
  function updateNavbarColor() {
    // Get the current section
    const currentSection = document.querySelector('section.active');
    console.log(currentSection);

    // Get the class name of the current section
    const sectionClassName = currentSection.className;
    console.log(sectionClassName);

    // Reset the navigation bar color
    navbar.style.backgroundColor = ''; 

    // Update the navigation bar color based on the section class
    if (sectionClassName.includes('home-section-01')) {
      navbar.style.backgroundColor = '#FFFFFF'; // Set the color for home-section-1
    } else if (sectionClassName.includes('home-section-02')) {
      navbar.style.backgroundColor = '#00FF00'; // Set the color for home-section-2
    }
    // Add more conditions as needed for other sections
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
      const isVisible = rect.top <= window.innerHeight * threshold && rect.bottom >= 0;

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
