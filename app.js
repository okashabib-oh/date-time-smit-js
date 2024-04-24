let myDate = new Date()

const myTime = myDate.toLocaleTimeString('default', {
    hour: '2-digit',
    minute: '2-digit'
});

const wholeDate = myDate.toLocaleString('default', {
    weekday: 'short',
    day: '2-digit',
    month: 'long',
    year: 'numeric'
}).replace(/,/g, '');

let dateDiv = document.getElementById('timeDiv')
let wholeDateDiv = document.getElementById('wholeDate')

dateDiv.innerHTML = myTime;
wholeDateDiv.innerHTML = wholeDate;