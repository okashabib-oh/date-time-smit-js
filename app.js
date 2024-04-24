let myDate = new Date()

const myTime = myDate.toLocaleString('default', {
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
// if(myTime > 3){
//     document.getElementById('greeting').innerHTML += "Good Afternoon";
// }else{
//     document.getElementById('greeting').innerHTML += "Good Night";

// }

if(myTime < "11:59 AM"){
    document.getElementById("greeting").innerHTML += "Good Morning";
}else if(myTime >= "12:00 PM" && myTime < "18:00 PM"){
    document.getElementById("greeting").innerHTML += "Good Afternoon"
}else if(myTime >= "18:00 PM" && myTime < "24:00 PM"){
    document.getElementById("greeting").innerHTML += "Good Evening"
}