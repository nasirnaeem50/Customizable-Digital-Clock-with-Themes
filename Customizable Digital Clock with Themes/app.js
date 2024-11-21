const timezones = {
    "America/New_York": { name: "New York", theme: "blue" },
    "Europe/London": { name: "London", theme: "green" },
    "Asia/Tokyo": { name: "Tokyo", theme: "red" },
    "Australia/Sydney": { name: "Sydney", theme: "dark" },
    "Asia/Kolkata": { name: "Mumbai", theme: "light" },
    "Asia/Karachi": { name: "Pakistan", theme: "default" }
};

let intervalId; // Variable to store the interval ID

// Function to update the clock for the selected country
function updateClock() {
    const selectedCountry = document.getElementById('country').value;
    const clockContainer = document.getElementById('clockContainer');
    const clockLabel = document.getElementById('clockLabel');
    const clock = document.getElementById('clock');

    // Clear previous interval
    clearInterval(intervalId);

    // Change the theme based on selected country
    clockContainer.className = `clock-container ${timezones[selectedCountry].theme}`;

    // Update clock label
    clockLabel.textContent = timezones[selectedCountry].name;

    // Update time every second
    intervalId = setInterval(() => {
        const date = new Date();
        const timezoneOffset = date.toLocaleString("en-US", { timeZone: selectedCountry });
        const timezoneDate = new Date(timezoneOffset);
        
        const hours = String(timezoneDate.getHours()).padStart(2, '0');
        const minutes = String(timezoneDate.getMinutes()).padStart(2, '0');
        const seconds = String(timezoneDate.getSeconds()).padStart(2, '0');
        const timeString = `${hours}:${minutes}:${seconds}`;
        
        clock.textContent = timeString;
    }, 1000);
}

// Event listener for country selection
document.getElementById('country').addEventListener('change', updateClock);

// Update the clock initially
updateClock(); // Initial call to display the time immediately
