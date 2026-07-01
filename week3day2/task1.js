const topLevelDiv1 = document.querySelector(".section1 .top-level");
const middleLevelDiv1 = document.querySelector(".section1 .middle-level");
const bottomLevelDiv1 = document.querySelector(".section1 .bottom-level");

// Bubbling
topLevelDiv1.addEventListener("click", (e) => {
    console.log("Top Level Clicked", e.currentTarget);
});

middleLevelDiv1.addEventListener("click", (e) => {
    console.log("Middle Level Clicked", e.currentTarget);
});

bottomLevelDiv1.addEventListener("click", (e) => {
    console.log("Bottom Level Clicked", e.currentTarget);
});
// Stop Propogation
const topLevelDiv2 = document.querySelector(".section2 .top-level");
const middleLevelDiv2 = document.querySelector(".section2 .middle-level");
const bottomLevelDiv2 = document.querySelector(".section2 .bottom-level");

topLevelDiv2.addEventListener("click", (e) => {
    e.stopPropagation();
    console.log("Top Level Clicked", e.currentTarget);
});

middleLevelDiv2.addEventListener("click", (e) => {
    e.stopPropagation();
    console.log("Middle Level Clicked", e.currentTarget);
});

bottomLevelDiv2.addEventListener("click", (e) => {
    e.stopPropagation();
    console.log("Bottom Level Clicked", e.currentTarget);
});

// Stop Immediate Propogation
const topLevelDiv3 = document.querySelector(".section3 .top-level");
const middleLevelDiv3 = document.querySelector(".section3 .middle-level");
const bottomLevelDiv3 = document.querySelector(".section3 .bottom-level");

topLevelDiv3.addEventListener("click", (e) => {
    e.stopPropagation();
    console.log("Top Level Clicked", e.currentTarget);
});

middleLevelDiv3.addEventListener("click", (e) => {
    e.stopPropagation();
    console.log("Middle Level Clicked", e.currentTarget);
});

bottomLevelDiv3.addEventListener("click", (e) => {
    e.stopImmediatePropagation();
    // e.stopPropagation();
    console.log("Div 3 Level Clicked 1", e.currentTarget);
});
// not
bottomLevelDiv3.addEventListener("click", (e) => {
    e.stopPropagation();
    console.log("Div 3 Level Clicked 1", e.currentTarget);
});

document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("prevented default submit");
});

document.querySelector("a").addEventListener("click", (e) => {
    e.preventDefault();
    console.log("prevented default go to");
});
