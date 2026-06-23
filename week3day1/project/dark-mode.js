let isDarkMode = localStorage.getItem("theme");

if (isDarkMode === "true") {
    document.documentElement.setAttribute("data-theme", "dark");
} else {
    document.documentElement.setAttribute("data-theme", "");
}

function changeTheme() {
    if (isDarkMode) {
        document.documentElement.setAttribute("data-theme", "");
    } else {
        document.documentElement.setAttribute("data-theme", "dark");
    }
    isDarkMode = !isDarkMode;
    localStorage.setItem("theme", isDarkMode);
}

const btns = document.querySelectorAll(".theme-btn");

Array.from(btns).map((btn) => {
    btn.addEventListener("click", onClick);
});

function onClick(e) {
    changeTheme();
    e.currentTarget.setAttribute("aria-pressed", !isDarkMode);
}
