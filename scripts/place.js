document.addEventListener("DOMContentLoaded", function () {
    // Set the current year in the footer
    document.getElementById("year").textContent = new Date().getFullYear();

    // Set last modified date
    document.getElementById("lastModified").textContent = document.lastModified;

    // Wind Chill Calculation
    function calculateWindChill(temp, windSpeed) {
        return (temp <= 10 && windSpeed > 4.8)
            ? (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(1) + "°C"
            : "N/A";
    }

    // Get values and apply wind chill calculation
    let temp = parseFloat(document.getElementById("temp").textContent);
    let windSpeed = parseFloat(document.getElementById("wind-speed").textContent);
    document.getElementById("wind-chill").textContent = calculateWindChill(temp, windSpeed);
});
