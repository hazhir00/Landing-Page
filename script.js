const bars = document.getElementById("bars");
const close = document.getElementById("close");
const hamburgerMenu = document.getElementById("hamburger-menu");

bars.addEventListener("click", () => {
   hamburgerMenu.style.transform = "translateX(0)";
});

close.addEventListener("click", () => {
   hamburgerMenu.style.transform = "translateX(-100%)";
});
