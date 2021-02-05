const stopWatch = document.querySelector('#watch')
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
let hour = 0;
let minute = 0;
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
            minute++;
            sec = 0;
        }
        if (minute == 60) {
            hour++;
            minute = 0;
        }
            if (hour == 24) {
                hour = 0;
                clearTimeout(timeOutFunc);
            }
        }
        // displaying time after calculation.
        secondDisplay.textContent = sec < 10 ? "0" + sec : sec;
        minuteDisplay.textContent = minute < 10 ? "0" + minute : minute;
        hourDisplay.textContent = hour < 10 ? "0" + hour : hour;
        
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


//    ------------------Event Listener for buttons---------------------------

// For Start Button.
startBtn.addEventListener("click", function (e) {
    if (watchStarted == false) {
        watchStarted = true;
        macroSecFunc();
        timeCalculation();
    } else if (watchStarted == true) {
        stopWatch.style.display = "block";  
    };
    clearInterval(setIntervalForDisplayingWatch);
    clearTimeout(setTimeOutForDisplayingWatch);
})

// For Stop Button.
stopBtn.addEventListener("click", function (e) {
    if (watchStarted == true) {
        watchStarted = false;
        clearTimeout(timeOutFunc);
        clearInterval(timeIntervalFunc);
        stopWatchDisplay();
    }
})

// Laps Button.
lapsBtn.addEventListener("click", function (e) {
    
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
    stopWatch.style.display = "block";
        sec = 0;
        minute = 0;
        hour = 0;
        macroSecond = 0;
        hours.textContent = "00";
        minutes.textContent = "00";
        seconds.textContent = "00";
        macroseconds.textContent = ":00";  //  ====>>>>this one is completely different element with the colone!!!!!!!!
            
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








