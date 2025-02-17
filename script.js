// ! Shows and hides the hamburger menu
const bars = document.getElementById("bars");
const close = document.getElementById("close");
const hamburgerMenu = document.getElementById("hamburger-menu");

bars.addEventListener("click", () => {
    hamburgerMenu.style.transform = "translateX(0)";
});

close.addEventListener("click", () => {
    hamburgerMenu.style.transform = "translateX(-100%)";
});

// ! makes the accordion menu work like an accordion
document.querySelectorAll(".accordion-link").forEach((item) => {
    item.addEventListener("click", () => {
        const subMenu = item.querySelector("ul");

        // Close other submenus
        document.querySelectorAll(".accordion-link ul").forEach((menu) => {
            if (menu !== subMenu) {
                menu.style.maxHeight = null;
                menu.style.marginTop = "0px";
            }
        });

        // Toggle the clicked submenu
        if (subMenu.style.maxHeight) {
            subMenu.style.maxHeight = null;
            subMenu.style.marginTop = "0px";
        } else {
            subMenu.style.maxHeight = subMenu.scrollHeight + "px";
            subMenu.style.marginTop = "0.5em";
        }
    });

    // Prevent submenu from closing when clicking inside it
    item.querySelectorAll("ul li").forEach((subMenuItem) => {
        subMenuItem.addEventListener("click", (event) => {
            event.stopPropagation();
        });
    });
});
