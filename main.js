const input = document.getElementById("date");
const showYears = document.querySelector(".year span");
const showMonths = document.querySelector(".month span");
const showDays = document.querySelector(".day span");

function calculateAge() {
    const birthDate = input.value;

    if (!birthDate) {
        return;
    }

    const birthDateObj = new Date(birthDate);
    const currentDate = new Date();

    let years = currentDate.getFullYear() - birthDateObj.getFullYear();
    let months = currentDate.getMonth() - birthDateObj.getMonth();
    let days = currentDate.getDate() - birthDateObj.getDate();

    // Adjust if the birth month hasn't happened yet this year
    if (months < 0) {
        years--;
        months += 12;
    }

    // Adjust if the current day is earlier in the month than the birthday
    if (days < 0) {
        months--;
        // Get the last day of the previous month
        const lastMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
        days += lastMonth.getDate();
    }

    showYears.textContent = years;
    showMonths.textContent = months;
    showDays.textContent = days;
}

input.addEventListener("change", calculateAge);
