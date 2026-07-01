// ​Task 4 (40 min) - Custom Errors & Global Handlers​
// ​341.​ ​Create ValidationError extending Error with statusCode, message, and field name​
// ​342.​ ​Write parseUserInput(input) that throws TypeError, RangeError, or ValidationError for specific​
// ​failures​
// ​343.​ ​Catch each error type separately with different handling​
// ​344.​ Add window.onerror and window.addEventListener('unhandledrejection') that display errors in a​
// ​visible overlay on the page​

class ValidationError extends Error {
    constructor(statusCode, message, fieldName, options) {
        super(message, options);

        this.statusCode = statusCode;
        this.fieldName = fieldName;
        this.name = "ValidationError";
    }
}

// try {
//     throw new ValidationError(401, "email not found", "email");
// } catch (e) {
//     console.error(e.statusCode);
//     console.error(e.message);
//     console.error(e.fieldName);
// }

const IDS_IN_DB = [1, 32, 54, 54, 65];

function parseUserInput(input) {
    try {
        const n = parseInt(input);
        if (Number.isNaN(n)) {
            throw new TypeError();
        }
        if (n < 0) {
            throw new RangeError();
        }
        if (n in IDS_IN_DB) {
            throw new ValidationError(401, "user not found", "user_id");
        }
    } catch (e) {
        if (e instanceof TypeError) {
            console.error(e.name, "enter a number");
        } else if (e instanceof RangeError) {
            console.error(e.name, "enter valid input");
        } else if (e instanceof ValidationError) {
            console.error(e.name, "invalid user id");
        }
    }
}

parseUserInput("hello");
parseUserInput("-3");
parseUserInput("4");

const overlay = document.querySelector(".error-overlay");
const errorMessage = document.querySelector(".error-message p");

const makeRejection = () => {
    return new Promise((resolve, reject) => {
        reject(new Error("Something went wrong!"));
    });
};

window.addEventListener("unhandledrejection", (e) => {
    console.error(e, "from unhandledrejection event listener");
    errorMessage.textContent =
        errorMessage.textContent + `${e} from unhandledrejection listener`;
    overlay.style.display = "flex";
});

window.addEventListener("click", () => {
    makeRejection();
    throw new TypeError();
});

window.onerror = (e) => {
    errorMessage.textContent =
        errorMessage.textContent + `${e} from window.onerror`;
    overlay.style.display = "flex";
    return true;
};
