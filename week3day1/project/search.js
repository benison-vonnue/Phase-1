// ​Task 5 (55 min) - Live Search Filter on Services Page​
// ​345.​ Search input above the services grid. Debounce keyup handler by 300ms using​
// ​setTimeout/clearTimeout.​
// ​346.​ ​Filter visible service cards so only those matching the search term show - hide others with​
// ​display: none​
// ​347.​ ​Highlight matching text inside each card with a span.highlight​
// ​348.​ Show 'No results found' when nothing matches. Show a clear (×) button when input has​
// ​content.​

const input = document.querySelector("#search-input");
const resetBtn = document.querySelector("#reset");

const article1 = document.querySelector("#article1");
const article2 = document.querySelector("#article2");
const article3 = document.querySelector("#article3");
const sectionContainer = document.querySelector("#services-grid");
const contentNotFound = article3.parentElement.parentElement.lastElementChild;

const article1Content = new String(article1.textContent);
const article2Content = new String(article2.textContent);
const article3Content = new String(article3.textContent);

resetBtn.addEventListener("click", () => {
    input.value = "";
    const keyupEvent = new Event("keyup");
    input.dispatchEvent(keyupEvent);
});

input.addEventListener("keyup", (event) => {
    const re = new RegExp(String(input.value).toLowerCase());

    // const searchText = event.target.value;
    // const regex = new RegExp(searchText, "gi");
    // let text = sectionContainer.innerHTML;
    // text = text.replace(/(<mark class="highlight">|<\/mark>)/gim, "");
    // const newText = text.replace(regex, '<span class="highlight">$&</span>');
    // sectionContainer.innerHTML = newText;

    if (!article1Content.toLowerCase().match(re)) {
        article1.classList.add("none");
    } else {
        article1.classList.remove("none");
    }

    if (!article2Content.toLowerCase().match(re)) {
        article2.classList.add("none");
    } else {
        article2.classList.remove("none");
    }

    if (!article3Content.toLowerCase().match(re)) {
        article3.classList.add("none");
    } else {
        article3.classList.remove("none");
    }

    if (
        article1.classList.contains("none") &&
        article2.classList.contains("none") &&
        article3.classList.contains("none")
    ) {
        contentNotFound.classList.remove("none");
    } else {
        contentNotFound.classList.add("none");
    }
});
