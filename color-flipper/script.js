const hexButton = document.querySelector('#hex');
const simpleButton = document.querySelector('#simple');
let colorCode = document.querySelector("#color-code");
const button = document.querySelector('#btn');

const fixedColor = ["red", "green", "#F15025", "Rgba(133,122,200)"];
const hexColor = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

let hex = true;
hexButton.addEventListener('click', function () {
    hex = true;
    hexButton.classList.add('bottom-border');
    simpleButton.classList.remove('bottom-border');
})
simpleButton.addEventListener("click", function () {
    hex = false;
    simpleButton.classList.add('bottom-border');
    hexButton.classList.remove('bottom-border');
})

setBgColor = () => {
    let randomBgColor = undefined;
    if (hex == true) {
        let hexColorCode = "#";
        for (let i = 0; i < 6; i++) {
            hexColorCode += hexColor[getRandomNumber()];
        }
        randomBgColor = hexColorCode;
    } else {
        randomBgColor = fixedColor[getRandomNumber()];
    }
    document.body.style.backgroundColor = randomBgColor;
    colorCode.textContent = randomBgColor;
}
getRandomNumber = () => {
    if (hex == true) {
        return Math.floor(Math.random() * hexColor.length);
    } else {
        return Math.floor(Math.random() * fixedColor.length);
    }
}