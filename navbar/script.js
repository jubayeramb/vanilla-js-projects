const hamburger = document.querySelector('.navbar .hamburger');
const navbarMenu = document.querySelector('.navbar .nav-menu');

hamburger.addEventListener("click", () => {
    navbarMenu.classList.toggle('toggle-menu');
    hamburger.classList.toggle('open');
});


// console.log(navbarMenu);