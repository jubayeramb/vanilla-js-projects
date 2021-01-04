const heightInput = document.getElementById('height');
const weightInput = document.getElementById('weight')
const resultButton = document.getElementById('result');
const resetButton = document.getElementById('reset');
let bmiScore = document.getElementById('score');
let massageResult = document.getElementById('massage');
let resultDiv = document.querySelector(".result-msg")



// definig function for calculating BMI 
bmiCalc = () => {
    let heightValue = heightInput.value / 39.37;
    let weightValue = weightInput.value;
    let bmi = (weightValue / (Math.pow(heightValue, 2))).toFixed(2);
    if (heightValue != 0 && weightValue != 0) {
        bmiScore.innerHTML = bmi;
    }

    if (bmi >= 0 && bmi <= 14.99) {
        massageResult.innerHTML = "→ Very Severely Underweight!";
        resultDiv.style.backgroundColor = " #ffa60033";
        // text color not defined here because they will inherit default color
    } else if (bmi >= 15 && bmi <= 16.99) {
        massageResult.innerHTML = "→ Severely Underweight!";
        resultDiv.style.backgroundColor = " #ffa60033";
        // text color not defined here because they will inherit default color
    } else if (bmi >= 17 && bmi <= 18.55) {
        massageResult.innerHTML = "→ Underweight!";
        massageResult.style.color = "#969300";
        resultDiv.style.backgroundColor = "#96930038"
    } else if (bmi >= 18.56 && bmi <= 25.99) {
        massageResult.innerHTML = "→ Normal (Healthy Weight)!";
        resultDiv.style.backgroundColor = "#009c0038";
        massageResult.style.color = " #009c00";
    } else if (bmi >= 26 && bmi <= 30.99) {
        massageResult.innerHTML = "→ Overweight!";
        massageResult.style.color = " #c00000";
        resultDiv.style.backgroundColor = "#c000004b";
    } else if (bmi >= 31 && bmi <= 35.99) {
        massageResult.innerHTML = "→ Obese Class II (Moderately Obese)!"
        massageResult.style.color = "#e00000";
        resultDiv.style.backgroundColor = "#e000003d";
    } else if (bmi >= 36 && bmi <= 40) {
        massageResult.innerHTML = "→ Obese Class II (Severely Obese)!";
        massageResult.style.color = "#f00000";
        resultDiv.style.backgroundColor = "#f000003a";
    } else if (bmi > 40) {
        massageResult.innerHTML = "→ Obese Class III (Very Severely Obese)!";
        massageResult.style.color = "#ff0000";
        resultDiv.style.backgroundColor = "#ff000048";
    }

} //end of the function defination

// assigning functions for the buttons 
resultButton.addEventListener("click", function (e) {
    bmiCalc();
})
// calling bmiCalc function for ENTER key 
weightInput.addEventListener("keypress", function (e) {
    if (e.keyCode == 13) {
        bmiCalc();
    }
})

resetButton.addEventListener("click", function (e) {
    heightInput.value = "";
    weightInput.value = "";
    bmiScore.innerHTML = "";
    massageResult.innerHTML = "";
    resultDiv.style.background = "#00a2ff38"
})