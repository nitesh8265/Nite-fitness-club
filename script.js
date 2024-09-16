// scripts.js

// Select the burger menu and navigation links
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

// Toggle the 'active' class on the nav-links when the burger is clicked
burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

