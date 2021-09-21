
setInterval(()=>{
const time = document.querySelector("#time");
const tarikh= document.querySelector("#tarikh");
const lang = navigator.language;
let date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();

let dayNum = date.getDate();
let dayName = date.toLocaleString(lang,{weekday: "long"});
let monthName = date.toLocaleString(lang,{month: "long"});
let year = date.getFullYear();


let day_night = "AM";
if(hours > 12) {
    day_night = "PM";
    hours = hours - 12;
}
if(hours < 10) {
    hours = "0" + hours;
}
if(minutes < 10){
    minutes = "0" + minutes;
}
if(seconds < 10) {
    seconds = "0" + seconds;
}
time.textContent = hours + ":" + minutes + ":" + seconds + " " + day_night;
tarikh.textContent = dayNum + " " + dayName + " " + monthName + " " + year;
});
