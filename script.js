
// Mobile menu toggle
const menuBtn = document.getElementById('menu-btn');
const mobileNav = document.getElementById('mobile-nav');

menuBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('hidden');
});

// Set the active link based on the current page
const navLinks = document.querySelectorAll('nav a');
const currentPage = window.location.pathname.split('/').pop(); // Get the current page name from the URL

navLinks.forEach(link => {
    if (link.getAttribute('href').includes(currentPage)) {
        link.classList.add('text-blue-400', 'font-semibold');  // Add active styles
    } else {
        link.classList.remove('text-blue-400', 'font-semibold');  // Remove active styles
    }
});

// Mobile menu active link highlighting
const mobileNavLinks = document.querySelectorAll('#mobile-nav a');
mobileNavLinks.forEach(link => {
    if (link.getAttribute('href').includes(currentPage)) {
        link.classList.add('text-blue-400', 'font-semibold');  // Add active styles
    } else {
        link.classList.remove('text-blue-400', 'font-semibold');  // Remove active styles
    }
});
