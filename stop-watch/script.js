const stopWatch = document.querySelector('#watch')
const progressBarParentDiv = document.querySelector('.progress');
const progressBar = document.querySelector('#progress-bar');
const ulForLaps = document.querySelector("#time-laps");

let hourDisplay = document.querySelector("#hours");
let minuteDisplay = document.querySelector("#minutes");
let secondDisplay = document.querySelector("#seconds");
let macrosecondDisplay = document.querySelector("#macroseconds");

const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const lapsBtn = document.querySelector("#laps");
const resetBtn = document.querySelector("#reset");

// ----hour, minute, second-----  ARE FOR VARIABLES!!! 
let hr = 0;
let min = 0;
let sec = 0;
let macroSecond = 0;
let watchStarted = false;
var timeOutFunc = undefined;
var timeIntervalFunc = undefined;

// ----------defining Time Calculation Function for calculating Sec, Min, Hours, etc. -----------
timeCalculation = () => {
    if (watchStarted == true) {

        sec++;
        if (sec == 60) {
            min++;
            sec = 0;
        }
        if (min == 60) {
            hr++;
            min = 0;
        }
            if (hr == 24) {
                hr = 0;
                clearTimeout(timeOutFunc);
            }
        }
        // displaying time after calculation.
        secondDisplay.textContent = sec < 10 ? "0" + sec : sec;
        minuteDisplay.textContent = min < 10 ? "0" + min : min;
    hourDisplay.textContent = hr < 10 ? "0" + hr : hr;
    
    // progressBar
    progressBarParentDiv.style.backgroundColor = 'rgb(150, 150, 150)';
    progressBar.style.width = ((sec/60)*100) + '%';

    timeOutFunc = setTimeout(timeCalculation, 1000);
    }
// defining function for counting Macro Seconds.
macroSecFunc = () => {
    if (watchStarted == true) {
     timeIntervalFunc = setInterval(function () {
        macroSecond+=1;
        if (macroSecond >= 100) {
            macroSecond = 0;
        }
        macrosecondDisplay.textContent = macroSecond < 10 ? ":0" + macroSecond : ':' + macroSecond;
    },10
    )   
    }
}

//   ----------defining function to hide and show watch after clicking the Stop button-------------
var watchDisplayed = true;
var setIntervalForDisplayingWatch = undefined;
var setTimeOutForDisplayingWatch = undefined;

stopWatchDisplay = () => {
    if (watchStarted == false) { 
        setIntervalForDisplayingWatch = setInterval(function () {
            setTimeOutForDisplayingWatch = setTimeout(function () {
                if (watchDisplayed == true) {
                    stopWatch.style.display = "none";
                    watchDisplayed = false;
                }
            }, 500);
            if (watchDisplayed == false) {
                stopWatch.style.display = "block";
                watchDisplayed = true;
            }
        }, 1000);
    }
}



//    ------------------Event Listener for buttons---------------------------


// For Start Button.
startBtn.addEventListener("click", function (e) {
    if (watchStarted == false) {
        watchStarted = true;
        startBtn.textContent = "Start";
        macroSecFunc();
        timeCalculation();
    }
    stopWatch.style.display = "block";  
    clearInterval(setIntervalForDisplayingWatch);
    clearTimeout(setTimeOutForDisplayingWatch);
})

// For Stop Button.
stopBtn.addEventListener("click", function (e) {
    if (watchStarted == true) {
        watchStarted = false;
        startBtn.textContent = "Resume";
        clearTimeout(timeOutFunc);
        clearInterval(timeIntervalFunc);
        stopWatchDisplay();
    }
})

// Laps Button.
lapsBtn.addEventListener("click", function (e) {
     let hour = hr < 10 ? "0" + hr : hr;
    let minute = min < 10 ? "0" + min : min;
    let second = sec < 10 ? "0" + sec : sec;

     let liForLaps = document.createElement("li");
    liForLaps.appendChild(document.createTextNode(hour + ":" + minute + ":" + second + ":" + macroSecond));
    ulForLaps.appendChild(liForLaps);
})

// For Reset Button.
resetBtn.addEventListener("click", function (e) {
    if (watchStarted == true) {
        watchStarted = false;
        clearTimeout(timeOutFunc);
        clearInterval(timeIntervalFunc);
    }
    clearInterval(setIntervalForDisplayingWatch);
    clearTimeout(setTimeOutForDisplayingWatch);
    progressBarParentDiv.style.backgroundColor = 'rgb(15, 17, 26)';
    progressBar.style.width = 0;
    startBtn.textContent = "Start";
    stopWatch.style.display = "block";
        sec = 0;
        min = 0;
        hr = 0;
        macroSecond = 0;
        hours.textContent = "00";
        minutes.textContent = "00";
        seconds.textContent = "00";
        macroseconds.textContent = ":00";  //  ====>>>>this one is completely different element with the colone!!!!!!!!
     ulForLaps.innerHTML = "";

})





//  ======>>>>>>>   ------this part/function also works well. All of this are part of experimental process !!!! ------  <<<<<<<=======


// watchCycle = () => {
//     if (watchStarted == true) {
//         sec++;

//     let { hour, minute, second } = timeCalculation(sec);

//     secondDisplay.textContent = second < 10 ? "0" + second : second;
//     minuteDisplay.textContent = minute < 10 ? "0" + minute : minute;
//     hourDisplay.textContent = hour < 10 ? "0" + hour : hour;
    
//     var timeOutFunc = setTimeout(watchCycle, 1000);
        
//     }
// }

// timeCalculation = (sec) => {
//     minute = parseInt(sec / 60);
//     second = parseInt(sec % 60);

//     hour = parseInt(minute / 60);
//     if (minute == 60) {
//         minute = 0;
//     }
    
//     return {hour, minute, second};
// }








