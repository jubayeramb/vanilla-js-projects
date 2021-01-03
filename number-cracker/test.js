// This one is for guessing a random number!
const nameField = document.getElementById("name");
const numberField = document.querySelector("#number");
const progress = document.getElementById("progress");
const result = document.getElementById("result");



showValue = () => {
    var yourName = nameField.value;
    var yourNumber = numberField.value;
    if (yourNumber == 0) {
        confirm("Please enter a number!");
    } else {
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

}
resetEverything = () => {
    nameField.value = "";
    numberField.value = "";
    result.innerHTML = "";
}

