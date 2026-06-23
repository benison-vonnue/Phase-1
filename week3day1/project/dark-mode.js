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

const btn = document.querySelector(".theme-btn");
btn.addEventListener("click", onClick);

function onClick() {
    changeTheme();
    btn.setAttribute("aria-pressed", !isDarkMode);
}
