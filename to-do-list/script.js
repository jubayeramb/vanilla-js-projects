 const root = document.documentElement
const userInput = document.getElementById("user-input");
const button = document.getElementById("add-items");
const ul = document.querySelector("ul");
const list = ul.children
const themeButton = document.querySelector('.theme-changer button');


// this section is for changing theme color
var defaultTheme = true;
function darkTheme() {
     root.style.setProperty("--themeColor", "#323f4b ");
    root.style.setProperty("--secondaryColor", "#1f2933");
    root.style.setProperty("--fontColor", "#bdbdbd");
    themeButton.innerHTML = 'Deafult Theme'
    defaultTheme = false;
}
function defaultThemeFunc() {
    root.style.setProperty("--themeColor", "#ffffff ");
    root.style.setProperty("--secondaryColor", "##f1f1f1");
    root.style.setProperty("--fontColor", "#181818");
    themeButton.innerHTML = 'Dark Mode'
    defaultTheme = true;
}

function themeChanger() {
    themeButton.classList.toggle('dark-theme-button');
    defaultTheme ? darkTheme() : defaultThemeFunc();
}

// this section is for adding line through onClick on list items


// console.log("eachList.length = " , eachList.length)
// for (var i = 0; i < eachList.length; i++) {
//     console.log("this is count ", i);
//     console.log(eachList[i]);
//     eachList[i].addEventListener("click", function () {
        
//         console.log(eachList[i])
        
//     })
// }


// for (var i = 0; i < list.length; i++) { 
//     console.log(list.item(i))
//     list.item(i).addEventListener('click', function (e) {
//         for (var countDown = 0; countDown < i; countDown++) {
//             console.log(list.item(i))
//         }
//     })
// }















