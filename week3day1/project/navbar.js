const navBtn = document.querySelector(".hamburger");
const navContainer = document.querySelector(".nav-mobile .nav-container");

let isOpen = false;

navBtn.addEventListener("click", () => {
    if (!isOpen) {
        navContainer.classList.add("open");
        navContainer.setAttribute("aria-expanded", "true");
        isOpen = !isOpen;
    } else {
        navContainer.classList.remove("open");
        navContainer.setAttribute("aria-expanded", "false");
        isOpen = !isOpen;
    }
});
