// This one is for guessing a random number!
const nameField = document.getElementById("name");
const numberField = document.querySelector("#number");
const getNumberBtn = document.getElementById("get-number-btn");
const progress = document.getElementById("progress");
const result = document.getElementById("result");
var timeConsumption = document.getElementById("total-time");

// showValue function for generating random number
showValue = () => {
    const startTime = new Date().getSeconds();
    var yourName = nameField.value;
    var yourNumber = numberField.value;

    // yourNumber is the value of the user input
    if (yourNumber == 0) {
        confirm("Please enter a number!");
    } else {
        // for loop for generating random number
        for(var i = 0; i != yourNumber;) {
            var roundRandomNumber = Math.round(Math.random()*10000);
            i = roundRandomNumber;
            // showProgress = () => { progress.innerHTML = i;}
            if (i == yourNumber) {
                result.innerHTML =  yourName ?  yourName + ", Your Number is: " + i :  "Your Number is: " + i;
                break;
            }else {
                // setInterval(progress.innerHTML = i, 0.000000000001);
                console.log(i);
            }
        }   
    }
    // Time calculation
    const endTime = new Date().getSeconds();
    var totalTime = endTime - startTime;
    timeConsumption.innerHTML = "Total Time Consumption: " + totalTime + " seconds";
} //end of the showValue function defination

// Added ENTER key listener for number inpur field 
numberField.addEventListener("keypress", function (event) {
    if (event.keyCode === 13) {
        showValue();
    }
});
// reset function for reset button to reset everything
resetEverything = () => {
    nameField.value = "";
    numberField.value = "";
    result.innerHTML = "";
    timeConsumption.innerHTML = "";
}

