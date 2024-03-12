document.addEventListener('DOMContentLoaded', function () {
    const moods = document.querySelectorAll('.mood');
    const dates = document.querySelectorAll('.date');

    const defaultColor = '#505050';
    let activeColor = defaultColor;

    function handleMoodClick(mood) {
        if (mood.classList.contains('selected')) {
            mood.classList.remove('selected');
            activeColor = defaultColor;
        } else {
            moods.forEach(mood => {
                mood.classList.remove('selected');
            });

            mood.classList.add('selected');
            activeColor = getComputedStyle(mood).color;
        }
    }

    function handleDateClick(date) {
        date.style.backgroundColor = activeColor;
        date.style.color = '#202C39';

        if (activeColor === defaultColor) {
            date.style.color = '#edbf98';
        }
    }

    moods.forEach(mood => {
        mood.addEventListener('click', () => {
            handleMoodClick(mood);
        });
    });

    dates.forEach(date => {
        date.addEventListener('click', () => {
            handleDateClick(date);
        });
    });
});
