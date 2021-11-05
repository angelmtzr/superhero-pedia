const toggler = document.getElementById("menuToggler");
const icon1 = document.getElementById("icon1");
const icon2 = document.getElementById("icon2");
const menu = document.getElementById("mobile-menu");

toggler.addEventListener('click', () => {
    icon1.classList.toggle("hidden");
    icon2.classList.toggle("hidden");
    menu.classList.toggle("hidden");
});