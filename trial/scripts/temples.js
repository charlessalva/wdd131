// Dynamic Footer Information
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Hamburger Menu Toggle
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.querySelector("nav ul");

    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");

        // Toggle the button icon between ☰ and ✖
        if (navMenu.classList.contains("active")) {
            menuToggle.innerHTML = "✖"; // Close icon
        } else {
            menuToggle.innerHTML = "☰"; // Hamburger icon
        }
    });
});

