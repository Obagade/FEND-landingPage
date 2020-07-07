/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

const navbarList = document.getElementById("navbar__list");
const theSections = document.querySelectorAll('section');
const mybutton = document.getElementById("myBtn");

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
for(let i = 0; i < theSections.length; i++) {
  const newList = document.createElement("li");
  const sections = document.getElementsByTagName("section");
  newList.innerHTML = `<a href="#${sections[i].id}">${sections[i].id}</a>`;
  navbarList.appendChild(newList);
}

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
function inViewport(element) {
  let bounding = element.getBoundingClientRect();
  return (
      bounding.top >= 0 &&
      bounding.left >= 0 &&
      bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

window.addEventListener("scroll", function() {
  for (const section of theSections) {
      if (inViewport(section)) {
          section.classList.add("your-active-class");
      } else {
          section.classList.remove("your-active-class");
      }
  }
});


// scroll to top and When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};


function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
  
  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  mybutton.addEventListener('click', topFunction);
