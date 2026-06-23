const focusableElement = navContainer.querySelectorAll("a[href]", "button");

const firstElement = focusableElement[0];
const lastElement = focusableElement[focusableElement.length - 1];

navContainer.addEventListener("keydown", (event) => {
    if (event.key !== "tab") return;

    if (event.shiftKey) {
        event.preventDefault();
        firstElement.focus();
    }
});
