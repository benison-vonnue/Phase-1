// ​Task 7 (50 min) - Scroll Animations & Progress Bar​
// ​353.​ Add IntersectionObserver to all section headings and feature cards on the home page - add​
// ​class=visible to trigger CSS animations​
// ​354.​ ​Add reading progress bar to the blog article page: fixed div width tracks scrollY /​
// ​document.body.scrollHeight​
// ​355.​ ​Add back-to-top button that appears after 300px scroll - smooth scroll on click​
// ​356.​ Use requestAnimationFrame for the progress bar update​

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const options = {
    root: null,
    rootMargin: "0px",
    threshold: 1,
};

const callback = (entries, observer) => {
    entries.forEach(async (element) => {
        if (element.isIntersecting) {
            element.target.classList.add("visible");
            await sleep(600);
            element.target.classList.remove("target");
        }
    });
};

const observer = new IntersectionObserver(callback, options);

const targets = document.querySelectorAll(".target");

for (const target of targets) {
    observer.observe(target);
}
