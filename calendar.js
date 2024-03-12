document.addEventListener('DOMContentLoaded', function () {
    const calendar = document.getElementById('calendar');
    const title = document.getElementById('title');

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    title.textContent = `${currentYear} Mood Calendar`
    const firstDay = new Date(`January 1 ${currentYear}`);

    const monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    function createMonthDiv(monthName) {
        const monthDiv = document.createElement('div');
        monthDiv.classList.add('month');
        monthDiv.innerHTML = `<h2>${monthName}</h2>`;
        return monthDiv;
    }

    function createWeekDiv(weekName) {
        const weekDiv = document.createElement('div');
        weekDiv.classList.add('week');
        weekDiv.innerHTML = `<h3>${weekName}</h3>`;
        return weekDiv;
    }

    function createDayDiv(dayIndex) {
        const dayDiv = document.createElement('div');
        dayDiv.classList.add('day');
        dayDiv.innerHTML = `<button class="date">${dayIndex}</button>`;
        return dayDiv;
    }

    function createEmptySpotDiv() {
        const emptySpot = document.createElement('div');
        emptySpot.classList.add('day', 'empty');
        return emptySpot;
    }

    function createCalendar() {
        monthsOfYear.forEach(monthName => {
            const monthDiv = createMonthDiv(monthName);
            calendar.appendChild(monthDiv);

            const weeksOfMonthDiv = document.createElement('div');
            weeksOfMonthDiv.classList.add('weeks');

            daysOfWeek.forEach(weekName => {
                const weekDiv = createWeekDiv(weekName);
                weeksOfMonthDiv.appendChild(weekDiv);
            });

            monthDiv.appendChild(weeksOfMonthDiv);

            const daysInMonth = new Date(currentYear, monthsOfYear.indexOf(monthName) + 1, 0).getDate();
            const daysOfMonthDiv = document.createElement('div');
            daysOfMonthDiv.classList.add('days');
            const firstDayOfMonth = new Date(currentYear, monthsOfYear.indexOf(monthName), 1).getDay();

            if (firstDayOfMonth !== 0) {
                for (let i = 0; i < firstDayOfMonth; i++) {
                    const emptySpot = createEmptySpotDiv();
                    daysOfMonthDiv.appendChild(emptySpot);
                }
            }

            for (let dayIndex = 1; dayIndex <= daysInMonth; dayIndex++) {
                const dayDiv = createDayDiv(dayIndex);
                daysOfMonthDiv.appendChild(dayDiv);
            }

            monthDiv.appendChild(daysOfMonthDiv);
        });
    }

    createCalendar();
});
