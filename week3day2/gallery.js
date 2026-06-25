const images = document.querySelectorAll(".img-card");
const overlay = document.querySelector(".overlay");

let isOverlayOpen = false;
let n = 0;

function setN(i) {
    n = Math.abs(n + i) % 6;
}

images.forEach((card) => {
    card.addEventListener("click", () => {
        let src = card.firstElementChild.getAttribute("src");

        src = src.replace("800", "1920/1080");

        overlay.firstElementChild.setAttribute("src", src);
        overlay.style.display = "flex";
        document.body.style.overflow = "hidden";
        isOverlayOpen = !isOverlayOpen;
    });
});

function closeOverlay() {
    overlay.style.display = "none";
    document.body.style.overflow = "auto";
    isOverlayOpen = !isOverlayOpen;
}

overlay.addEventListener("click", closeOverlay);

window.addEventListener("keyup", (e) => {
    if (e.key === "Escape" && isOverlayOpen) {
        closeOverlay();
        return;
    }

    if (e.key === "ArrowUp") {
        e.preventDefault();
        // console.log("Working");
        // console.log(images[0]);
        if (document.activeElement.tagName.toLowerCase() === "body") {
            n = 0;
        } else {
            setN(-3);
        }
        images[n].focus();
    }

    if (e.key === "ArrowDown") {
        e.preventDefault();
        // console.log("Working");
        // console.log(images[0]);
        if (document.activeElement.tagName.toLowerCase() === "body") {
            n = 0;
        } else {
            setN(3);
        }
        images[n].focus();
    }

    if (e.key === "ArrowLeft") {
        e.preventDefault();
        // console.log("Working");
        // console.log(images[0]);
        if (document.activeElement.tagName.toLowerCase() === "body") {
            n = 0;
        } else {
            setN(-1);
        }
        images[n].focus();
    }

    if (e.key === "ArrowRight") {
        e.preventDefault();
        // console.log("Working");
        // console.log(images[0]);
        if (document.activeElement.tagName.toLowerCase() === "body") {
            n = 0;
        } else {
            setN(1);
        }
        images[n].focus();
    }

    if (e.key === "Enter" || e.key === "Space") {
        const clickEvent = new Event("click");
        images[n].dispatchEvent(clickEvent);
    }
});

let touchstartX, touchendX;

window.addEventListener("touchstart", function (event) {
    touchstartX = event.changedTouches[0].screenX;
});

window.addEventListener("touchend", function (event) {
    touchendX = event.changedTouches[0].screenX;
    handleGesture();
});

function handleGesture() {
    if (touchendX < touchstartX && isOverlayOpen) {
        setN(1);
        const clickEvent = new Event("click");
        images[n].dispatchEvent(clickEvent);
    }

    if (touchendX > touchstartX && isOverlayOpen) {
        setN(-1);
        const clickEvent = new Event("click");
        images[n].dispatchEvent(clickEvent);
    }
}
