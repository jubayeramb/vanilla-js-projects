let dateAndDay = document.querySelector("#date-day");
// let hours = document.querySelector("#hours");
// let minutes = document.querySelector("#minutes");
// let seconds = document.querySelector("#seconds");
let greetings = document.querySelector("#greetings");
let testTime = document.querySelector("#local-time");



greetingFunction = () => {

}
time = () => {
    dateAndDay.innerHTML = new Date().toDateString();
    testTime.innerHTML = new Date().toLocaleTimeString();
    // hours.innerHTML = new Date().getHours();
    // minutes.innerHTML = new Date().getMinutes();
    // seconds.innerHTML = new Date().getSeconds();
}

setInterval(time, 1000);