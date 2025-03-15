// Dynamic Footer Information
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Hamburger Menu Toggle
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", () => {
    if (menu.style.display === "flex") {
        menu.style.display = "none";
        menuToggle.textContent = "☰"; // Hamburger icon
    } else {
        menu.style.display = "flex";
        menuToggle.textContent = "✖"; // Close icon
    }
});
