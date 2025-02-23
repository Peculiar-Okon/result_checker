
// Select the hamburger icon and the navigation links
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

// Add a click event listener to the hamburger icon
hamburger.addEventListener('click', () => {
  // Toggle the 'active' class on the nav links
  navLinks.classList.toggle('active');
});