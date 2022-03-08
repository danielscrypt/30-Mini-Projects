const hour = document.querySelector('.hour')
const minute = document.querySelector('.minute')
const second = document.querySelector('.second')
const time = document.querySelector('.time')
const dateText = document.querySelector('.date')
const toggle = document.querySelector('.toggle')
const html = document.body


function dayFunc (day) {
    const days = ['Domenica' , 'Lunedi' , 'Mardeti' , 'Mercoledi' , 'Giovedi' , 'Venerdi' , 'Sabato']

    today = days[day] ; 
    return today
}

toggle.addEventListener('click' , (e) => {
   
if (html.classList.contains('dark')) {
        html.classList.remove('dark')
        toggle.innerText = 'Dark Mode'
    } else {
        html.classList.add('dark')
        toggle.innerText = 'Light Mode'
    }
})


setInterval(() => {
	d = new Date(); //object of date()
	hr = d.getHours();
	min = d.getMinutes();
	sec = d.getSeconds();
    dayName = d.getDay();
    date = d.getDate();
    month = d.getUTCMonth();
    year = d.getFullYear();

	hr_rotation = 30 * hr + min / 2; //converting current time
	min_rotation = 6 * min;
	sec_rotation = 6 * sec;

	hour.style.transform = ` translate(-50% ,  -100%) rotate(${hr_rotation}deg)`;
	minute.style.transform = ` translate(-50% ,  -100%) rotate(${min_rotation}deg)`;
	second.style.transform = ` translate(-50% ,  -100%) rotate(${sec_rotation}deg)`;

    

    time.innerText = `${hr}:${min < 10 ? `0${min}`: min}:${sec < 10 ? `0${sec}`: sec} `; 
    dateText.innerText = `${dayFunc(dayName)} - ${date < 10 ? `0${date}`: date}/${month < 10 ? `0${month+1}`: month + 1}/${year}`
}, 1000);

function mode (h) {
    if (h > 20 || h < 6 ) {
        html.classList.add('dark')
        toggle.innerText = 'Light Mode'
    } else {
        html.classList.remove('dark')
        toggle.innerText = 'Dark Mode'

    }
}

d = new Date(); //object of date()
hr = d.getHours();
mode(hr)
