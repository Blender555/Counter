// script.js
const endDate = new Date('2031-10-20T00:00:00').getTime(); // End date: 20th October 2031

const countDown = () => {
    const now = new Date().getTime(); // Get current time
    const timeLeft = endDate - now; // Calculate the time remaining until 2031

    if (timeLeft >= 0) {
        const seconds = Math.floor((timeLeft / 1000) % 60);
        const minutes = Math.floor((timeLeft / 1000 / 60) % 60);
        const hours = Math.floor((timeLeft / 1000 / 60 / 60) % 24);
        const days = Math.floor((timeLeft / 1000 / 60 / 60 / 24) % 7); // Days in a week
        const weeks = Math.floor((timeLeft / 1000 / 60 / 60 / 24 / 7) % 4.345); // Weeks in a month (approx)
        const months = Math.floor((timeLeft / 1000 / 60 / 60 / 24 / 30.4375) % 12); // Months
        const years = Math.floor(timeLeft / 1000 / 60 / 60 / 24 / 365); // Years

        document.getElementById("years").textContent = years;
        document.getElementById("months").textContent = months;
        document.getElementById("weeks").textContent = weeks;
        document.getElementById("days").textContent = days;
        document.getElementById("hours").textContent = hours;
        document.getElementById("minutes").textContent = minutes;
        document.getElementById("seconds").textContent = seconds;
    } else {
        document.getElementById("countdown").textContent = "The countdown has ended!";
    }
};

// Update the countdown every second
setInterval(countDown, 1000);
