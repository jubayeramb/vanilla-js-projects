const sidebarToggleBtn = document.querySelector('.sidebar-toggle');
const sidebar = document.querySelector('.sidebar');
const closeBtn = document.querySelector('.close-button');

sidebarToggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('show');
});
closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('show');
});