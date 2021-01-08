let dateAndDay = document.querySelector("#date-day");
// let hours = document.querySelector("#hours");
// let minutes = document.querySelector("#minutes");
// let seconds = document.querySelector("#seconds");
let greetings = document.querySelector("#greeting");
let testTime = document.querySelector("#local-time");


greetingFunction = () => {
    let hour = new Date().getHours() ;
    let minute = new Date().getMinutes();
    // console.log(hour);
    if (hour >= 1 && hour <= 4) {
        greetings.innerHTML = "Be Prepare For FAZAR Prayer, Dear!";
    }else if (hour >= 5 && hour <= 11) {
        greetings.innerHTML = "Good Morning, Dear!";
    } else if (hour >= 12 && hour <= 17) {
        greetings.innerHTML = "Good Afternoon, Dear!";
    } else if (hour > 17 && hour <= 20) {
        greetings.innerHTML = "Good Evening, Dear!";
    }
    else if (hour > 20 && hour <=23 || hour ==0) {
        greetings.innerHTML = "Good Night, Dear!";
    }
    
}
time = () => {
    dateAndDay.innerHTML = new Date().toDateString();
    testTime.innerHTML = new Date().toLocaleTimeString();
    greetingFunction();
    // hours.innerHTML = new Date().getHours();
    // minutes.innerHTML = new Date().getMinutes();
    // seconds.innerHTML = new Date().getSeconds();
}

setInterval(time, 1000);