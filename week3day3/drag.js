// ​Task 7 (50 min) - Drag-and-Drop Kanban Board​

// ​386.​ Three-column Kanban (To Do, In Progress, Done) using HTML5 Drag and Drop API​
// ​387.​ dragstart: store card id in dataTransfer. dragover: preventDefault. dragenter: show drop target.​
//      ​drop: move card.​​
// 388. Add/delete cards via per-column form. Persist state to localStorage.
// ​389.​ Keyboard: Space to pick up, arrow keys to move between columns, Space to drop

let draggedContent = null;
let draggedId = null;

const dragEvent = (event) => {
    draggedContent = event.target.textContent;
    draggedId = event.target.parentElement.id;
};

class CardCollection {
    collection = {
        toDo: [],
        progress: [],
        done: [],
    };

    constructor() {
        if (localStorage.getItem("toDo") !== null) {
            this.collection.toDo = JSON.parse(localStorage.getItem("toDo"));
        }
        if (localStorage.getItem("progress") !== null) {
            this.collection.progress = JSON.parse(
                localStorage.getItem("progress")
            );
        }
        if (localStorage.getItem("done") !== null) {
            this.collection.done = JSON.parse(localStorage.getItem("done"));
        }
        this.render();
    }

    addToDo = (item) => {
        if (item.length === 0) return;
        this.collection.toDo.push(item);
        localStorage.setItem("toDo", JSON.stringify(this.collection.toDo));
        this.render();
    };

    addProgress = (item) => {
        if (item.length === 0) return;
        this.collection.progress.push(item);
        localStorage.setItem(
            "progress",
            JSON.stringify(this.collection.progress)
        );
        this.render();
    };

    addDone = (item) => {
        if (item.length === 0) return;
        this.collection.done.push(item);
        localStorage.setItem("done", JSON.stringify(this.collection.done));
        this.render();
    };

    removeTodo = (item) => {
        this.collection.toDo = this.collection.toDo.filter(
            (each) => each !== item
        );
        localStorage.setItem("toDo", JSON.stringify(this.collection.toDo));
        this.render();
    };

    removeProgress = (item) => {
        this.collection.progress = this.collection.progress.filter(
            (each) => each !== item
        );
        localStorage.setItem(
            "progress",
            JSON.stringify(this.collection.progress)
        );
        this.render();
    };

    removeDone = (item) => {
        this.collection.done = this.collection.done.filter(
            (each) => each !== item
        );
        localStorage.setItem("done", JSON.stringify(this.collection.done));
        this.render();
    };

    render = () => {
        this.renderTodo();
        this.renderProgress();
        this.renderDone();
    };

    renderTodo = () => {
        const cardContainer = document.querySelector("#to-do .card-container");
        cardContainer.replaceChildren();
        this.collection.toDo.forEach((each) => {
            const div = document.createElement("div");
            div.setAttribute("draggable", "true");
            div.classList.add("card");
            div.textContent = each;
            div.addEventListener("dragstart", dragEvent);
            div.setAttribute("tabIndex", -1);
            cardContainer.appendChild(div);
        });
    };

    renderProgress = () => {
        const cardContainer = document.querySelector(
            "#progress .card-container"
        );
        cardContainer.replaceChildren();
        this.collection.progress.forEach((each) => {
            const div = document.createElement("div");
            div.setAttribute("draggable", "true");
            div.classList.add("card");
            div.textContent = each;
            div.addEventListener("dragstart", dragEvent);
            div.setAttribute("tabIndex", -1);
            cardContainer.appendChild(div);
        });
    };

    renderDone = () => {
        const cardContainer = document.querySelector("#done .card-container");
        cardContainer.replaceChildren();
        this.collection.done.forEach((each) => {
            const div = document.createElement("div");
            div.setAttribute("draggable", "true");
            div.classList.add("card");
            div.textContent = each;
            div.addEventListener("dragstart", dragEvent);
            div.setAttribute("tabIndex", -1);
            cardContainer.appendChild(div);
        });
    };
}

const cardCollection = new CardCollection();

// heading btn
const toDoBtn = document.querySelector("#to-do > h2 > button");
const progressBtn = document.querySelector("#progress > h2 > button");
const doneBtn = document.querySelector("#done > h2 > button");

// form btn
const todoFormBtn = document.querySelector("#to-do > div > .form > button");
const progressFormBtn = document.querySelector(
    "#progress > div > .form > button"
);
const doneFormBtn = document.querySelector("#done > div > .form > button");

// form input
const todoFormInput = document.querySelector("#to-do > div > .form > input");
const progressFormInput = document.querySelector(
    "#progress > div > .form > input"
);
const doneFormInput = document.querySelector("#done > div > .form > input");

// form
const toDoForm = document.querySelector("#to-do > div > .form");
const progressForm = document.querySelector("#progress > div > .form");
const doneForm = document.querySelector("#done > div > .form");

toDoBtn.addEventListener("click", () => {
    toDoForm.style.display = "flex";
});

progressBtn.addEventListener("click", () => {
    progressForm.style.display = "flex";
});

doneBtn.addEventListener("click", () => {
    doneForm.style.display = "flex";
});

todoFormBtn.addEventListener("click", () => {
    const value = todoFormInput.value;
    cardCollection.addToDo(value);
    todoFormInput.value = "";
    toDoForm.style.display = "none";
});

progressFormBtn.addEventListener("click", () => {
    const value = progressFormInput.value;
    cardCollection.addProgress(value);
    progressFormInput.value = "";
    progressForm.style.display = "none";
});

doneFormBtn.addEventListener("click", () => {
    const value = doneFormInput.value;
    cardCollection.addDone(value);
    doneFormInput.value = "";
    doneForm.style.display = "none";
});

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
    card.addEventListener("dragstart", dragEvent);
});

const cardContainers = document.querySelectorAll(".card-container");

cardContainers.forEach((cardContainer) => {
    cardContainer.addEventListener("dragover", (event) => {
        event.preventDefault();
    });

    cardContainer.addEventListener("drop", (event) => {
        if (draggedId === "to-do-container") {
            cardCollection.removeTodo(draggedContent);
        }
        if (draggedId === "progress-container") {
            cardCollection.removeProgress(draggedContent);
        }
        if (draggedId === "done-container") {
            cardCollection.removeDone(draggedContent);
        }
        if (cardContainer.id === "to-do-container") {
            cardCollection.addToDo(draggedContent);
        }
        if (cardContainer.id === "progress-container") {
            cardCollection.addProgress(draggedContent);
        }
        if (cardContainer.id === "done-container") {
            cardCollection.addDone(draggedContent);
        }
    });
});

let isSelected = false;
let index = 0;

// Not Completed
window.addEventListener("keydown", (event) => {
    const cards = document.querySelectorAll(".card");

    if (event.key === "ArrowUp") {
        console.log(index);
        if (!(document.activeElement in cards)) {
            cards[index].focus();
        } else {
            if (isSelected) {
            } else {
                index = index - 3 > 0 ? index - 3 : cards.length + (index - 3);
                cards[index.focus()];
            }
        }
    }
});
