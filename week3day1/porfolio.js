const main = document.getElementById("main");
const projectSection = document.getElementsByClassName("project");
const sections = document.getElementsByTagName("section");
const featuredCardOne = document.querySelector(".featured");
const nonFeaturedCard = document.querySelectorAll(".non-featured");

// Parent
const parent = document.querySelector(".project");
console.log(parent);

// First Child
const firstChild = parent.firstElementChild;
console.log(firstChild);

// Next Sibling
const siblingChild = firstChild.nextElementSibling;
console.log(siblingChild);

// Last Child
const lastChild = parent.lastElementChild;
console.log(lastChild);

function addCard(title, body, imageUrl) {
    const card = document.createElement("div");
    card.classList.add("non-featured");

    const img = document.createElement("img");
    img.setAttribute("src", imageUrl);

    const heading = document.createElement("h1");
    heading.textContent = title;

    const link = document.createElement("a");
    link.textContent = "Check Out \u2192";

    const content = document.createElement("div");
    content.classList.add("non-featured-content");
    content.appendChild(heading);
    content.appendChild(link);

    card.appendChild(img);
    card.appendChild(content);

    parent.appendChild(card);
}

function removeCard(id) {
    const num = id > 1 ? id : 2;
    const card = parent.children[num];
    card.remove();
}

function clearAllCards() {
    const children = Array.from(parent.children);
    children.map((card) => {
        card.remove();
    });
}
