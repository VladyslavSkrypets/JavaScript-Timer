window.addEventListener('load', () => {
    let date = localStorage.getItem('date');
    if (isNaN(date)) {
        setClock();
        document.querySelector('#date').value = date;
    }
})


let time_btn = document.querySelector('#time_btn');
time_btn.addEventListener('click', () => {
    let date = document.querySelector('#date').value;
    if (isNaN(date)) {
        localStorage.setItem('date', date);
    };
    setClock();
});


function getTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor((t / 1000) % 60),
        minutes = Math.floor((t / 1000 / 60) % 60),
        hours = Math.floor((t / 1000/60/60) % 24) - 2 ,
        days = Math.floor((t / (1000*60*60*24)));

    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
};


function setClock() {
    let day = document.querySelector('#days'),
        hour = document.querySelector('#hours'),
        minute = document.querySelector('#minutes'),
        second = document.querySelector('#seconds'),
        timeInterval = setInterval(updateClock, 1000);

    function updateClock() {
        let t = getTimeRemaining(localStorage.getItem('date'));
        day.textContent = t.days;
        hour.textContent = t.hours;
        minute.textContent = t.minutes;
        second.textContent = t.seconds;

        if (t.total <= 0) {
            clearInterval(timeInterval);
        }
    }
};