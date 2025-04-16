document.addEventListener('DOMContentLoaded', () => {
    // Appliance data
    const appliances = [
        {
            name: "Panasonic NRBP242VD",
            type: "Top Freezer Refrigerator",
            features: "Energy-efficient, inverter technology, spacious 9.0 cu.ft.",
            image: "images/fridge.jpg"
        },
        {
            name: "Whirlpool WVWD850BKG",
            type: "Top Load Washing Machine",
            features: "8.5kg capacity, fully automatic, water-efficient",
            image: "images/washing-machine.jpg"
        },
        {
            name: "LG NeoChef Microwave",
            type: "Microwave Oven",
            features: "Smart inverter, even heating, compact design",
            image: "images/microwave.jpg"
        },
        {
            name: "Samsung AR09TYHYEWKNTC",
            type: "Split-Type Air Conditioner",
            features: "Wind-Free cooling, energy-saving, fast cooling performance",
            image: "images/aircon.jpg"
        },
        {
            name: "Philips HD9650 Airfryer XXL",
            type: "Air Fryer",
            features: "Fat removal technology, 1.4kg capacity, digital display",
            image: "images/airfryer.jpg"
        },
        {
            name: "Sharp Healsio AX-XA20",
            type: "Steam Oven",
            features: "Superheated steam, multi-level cooking, smart settings",
            image: "images/steam-oven.jpg"
        },
        {
            name: "Dyson V15 Detect",
            type: "Cordless Vacuum Cleaner",
            features: "Laser dust detection, HEPA filter, up to 60 min runtime",
            image: "images/vacuum.jpg"
        },
        {
            name: "LG OLED C3 55-Inch",
            type: "Smart TV",
            features: "OLED Evo panel, Dolby Vision & Atmos, webOS Smart TV platform",
            image: "images/tv.jpg"
        },
        {
            name: "Zojirushi NS-TSC10",
            type: "Micom Rice Cooker & Warmer",
            features: "Fuzzy logic technology, 5.5-cup capacity, automatic keep warm",
            image: "images/rice-cooker.jpg"
        },
        {
            name: "Blueair Blue Pure 211+",
            type: "Air Purifier",
            features: "HEPA silent technology, covers up to 540 sq ft, washable filters",
            image: "images/air-purifier.jpg"
        }
    ];

    // Render appliance cards
    const applianceCards = document.getElementById('applianceCards');
    if (applianceCards) {
        appliances.forEach(appliance => {
            const card = document.createElement('div');
            card.classList.add('appliance-card');
            card.innerHTML = `
                <img src="${appliance.image}" alt="${appliance.name}">
                <h4>${appliance.name}</h4>
                <p><strong>Type:</strong> ${appliance.type}</p>
                <p>${appliance.features}</p>
            `;
            applianceCards.appendChild(card);
        });
    }

    // Contact form validation
    const form = document.getElementById("contactForm");
    const status = document.getElementById("formStatus");

    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            if (name && email && message) {
                status.textContent = "Message sent successfully!";
                form.reset();
            } else {
                status.textContent = "Please fill out all fields.";
            }
        });
    }

    const scrollBtn = document.getElementById("scrollToTop");

    window.addEventListener("scroll", () => {
        scrollBtn.classList.toggle("show", window.scrollY > 300);
    });

    scrollBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});


document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("last-modified").textContent = document.lastModified;

document.getElementById("menuToggle").addEventListener("click", function () {
    document.querySelector("nav ul").classList.toggle("active");
});
