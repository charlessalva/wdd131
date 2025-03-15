// Dynamic Footer Information
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Hamburger Menu Toggle
const menuToggle = document.getElementById("menu-toggle");
const menu = document.querySelector("nav");

menuToggle.addEventListener("click", () => {
    menu.classList.toggle("show");
    menuToggle.textContent = menu.classList.contains("show") ? "✖" : "☰";
});

