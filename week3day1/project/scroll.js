const scrollIndicator = document.querySelector(".scroll-indicator");
const scrollUpBtn = document.querySelector(".scroll-up-btn button");

window.addEventListener("scroll", () => {
    // scrollIndicator.style.width = `${(scrollY / 1413) * 100}%`;

    if (scrollY >= 300) {
        scrollUpBtn.parentElement.style.opacity = "100%";
    } else {
        scrollUpBtn.parentElement.style.opacity = "0%";
    }
});

scrollUpBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});

function addWidth() {
    scrollIndicator.style.width = `${(scrollY / 1413) * 100}%`;
    requestAnimationFrame(addWidth);
}

requestAnimationFrame(addWidth);
