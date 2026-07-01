const ul = document.querySelector("ul");

function addUl() {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = document.querySelector("input").value;
    span.setAttribute("contenteditable", "true");
    const input = document.createElement("input");
    input.setAttribute("type", "checkbox");
    const btn = document.createElement("button");
    btn.textContent = "remove";
    btn.setAttribute("data-function", "remove");

    li.appendChild(input);
    li.appendChild(span);
    li.appendChild(btn);
    ul.appendChild(li);
}

ul.addEventListener("click", (e) => {
    const button = e.target.closest("button");
    if (button) {
        if (button.dataset.function === "add") {
            addUl();
            return;
        }
        button.parentElement.remove();
        return;
    }
    const input = e.target.closest("input[type=checkbox]");
    if (input) {
        input.parentElement.children[1].style.textDecoration = "line-through";
    }
});
