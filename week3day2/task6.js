// ​Task 6 (50 min) - Accessible Accordion​
// 349.​ ​Replace the CSS-only accordion from Week 2 with JavaScript​
// ​350.​​Each toggle button has aria-expanded='false'. Clicking opens the panel, sets​
// ​aria-expanded='true', closes any other open panel.​
// ​351.​ ​Keyboard: up/down moves focus between headers, Home/End jump to first/last, Enter/Space​
// ​toggles​​
// 352.​ ​Persist open state in sessionStorage​

const accordianBtn = document.querySelector(".accordion button");
const accordianP = document.querySelector(".accordion p");

accordianBtn.addEventListener("click", () => {
    accordianP.classList.toggle("open-accordion");
    accordianBtn.ariaExpanded =
        accordianBtn.ariaExpanded === "false" ? "true" : "false";
    sessionStorage.setItem("accordian", accordianBtn.ariaExpanded);
});

if (sessionStorage.getItem("accordian") === "true") {
    accordianP.classList.add("open-accordion");
    accordianBtn.ariaExpanded = "true";
}

const tabBtn1 = document.querySelector("#tab1-btn");
const tabBtn2 = document.querySelector("#tab2-btn");
const tabContent1 = document.querySelector("#tab1-content");
const tabContent2 = document.querySelector("#tab2-content");

tabBtn1.addEventListener("click", () => {
    tabContent1.classList.add("tab-open");
    tabContent2.classList.remove("tab-open");
    tabBtn1.ariaExpanded = tabBtn1.ariaExpanded === "false" ? "true" : "false";
    tabBtn2.ariaExpanded = tabBtn1.ariaExpanded === "true" ? "false" : "true";
    sessionStorage.setItem("tab1", tabBtn1.ariaExpanded);
    sessionStorage.setItem("tab2", tabBtn2.ariaExpanded);
});

if (sessionStorage.getItem("tab1") === "true") {
    tabContent1.classList.add("tab-open");
    tabContent2.classList.remove("tab-open");
    tabBtn1.ariaExpanded = "true";
    tabBtn2.ariaExpanded = "false";
}

tabBtn2.addEventListener("click", () => {
    tabContent2.classList.add("tab-open");
    tabContent1.classList.remove("tab-open");
    tabBtn2.ariaExpanded = tabBtn2.ariaExpanded === "false" ? "true" : "false";
    tabBtn1.ariaExpanded = tabBtn2.ariaExpanded === "true" ? "false" : "true";
    sessionStorage.setItem("tab2", tabBtn2.ariaExpanded);
    sessionStorage.setItem("tab1", tabBtn1.ariaExpanded);
});

if (sessionStorage.getItem("tab2") === "true") {
    tabContent2.classList.add("tab-open");
    tabContent1.classList.remove("tab-open");
    tabBtn2.ariaExpanded = "true";
    tabBtn1.ariaExpanded = "false";
}

const starContainer = document.querySelector(".star-container");
starContainer.addEventListener("click", (event) => {
    const btn = event.target.closest("button");
    const parentElement = btn.parentElement;
    const parentChildren = parentElement.children;
    let flag = 1;
    for (let i = 0; i < parentChildren.length; i++) {
        const element = parentChildren[i];
        if (flag === 1) {
            element.classList.add("star-selected");
        } else {
            element.classList.remove("star-selected");
        }
        if (element == btn) {
            flag = 0;
        }
    }
});

const focusableElements = document.querySelectorAll("button");
let i = 0;
// console.log(focusableElements);
document.addEventListener("keyup", (event) => {
    // ArrowUp
    // ArrowDown
    // Home
    // End
    const currentFocus = document.activeElement;

    if (event.key === "ArrowUp") {
        // console.log(currentFocus in focusableElements.values);
        if (i === 0) {
            i = focusableElements.length - 1;
        } else {
            i--;
        }
    }
    if (event.key === "ArrowDown") {
        if (i === 7) {
            i = 0;
        } else {
            i++;
        }
    }

    if (event.key === "Home") {
        i = 0;
    }

    if (event.key === "End") {
        i = focusableElements.length - 1;
    }

    focusableElements[i].focus();
});
