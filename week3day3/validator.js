// ​Task 5 (55 min) - FormValidator Class​
// ​377.​ ​​Build FormValidator(form, rules) - rules maps field names to arrays of rule objects​
// ​378. Support: required, minLength(n), maxLength(n), pattern(regex), email, match(otherField),​
// ​custom(fn)​
// ​380.​ ​Validate on blur (individual field) and on submit (all fields)​
// ​381.​ ​Show inline errors in span.field-error. Add/remove is-invalid and is-valid CSS classes.​
// ​379.​ ​Apply to the registration form from Week 1​

class FormValidator {
    constructor(form, rules) {
        this.form = form;
        this.rules = rules;
        this.inputs = this.getFormInputs();
        this.addEventListeners();
    }

    getFormInputs = () => {
        return this.form.querySelectorAll("input");
    };

    runChecks = (target) => {
        if (target.tagName.toLowerCase() === "button") return;
        let flag = true;
        if (!this.rules[target.name].length) return;
        this.rules[target.name].forEach((fn) => {
            if (flag) {
                if (!fn.apply(target, [])) {
                    flag = false;
                }
            }
        });
        if (!flag) {
            target.nextElementSibling.style.display = "inline";
        } else {
            target.nextElementSibling.style.display = "none";
        }
    };

    addEventListeners = () => {
        this.form.addEventListener(
            "blur",
            (event) => {
                event.preventDefault();
                this.runChecks(event.target);
            },
            true
        );

        this.form.addEventListener(
            "submit",
            (event) => {
                event.preventDefault();
                for (let each of this.inputs) {
                    this.runChecks(each);
                }
                console.log("Submitted");
            },
            true
        );
    };
}

function required() {
    return this.value !== "";
}

function minLength(n) {
    return this.value.length >= n;
}

function maxLength(n) {
    return this.value.length <= n;
}

function pattern(regex) {
    return regex.test(this.value);
}

function email() {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(this.value);
}

function match(otherField) {
    return (
        this.value === document.querySelector(`input[name=${otherField}]`).value
    );
}

const form = document.querySelector("#form");

const formValidator = new FormValidator(form, {
    "name-input": [
        required,
        function () {
            return minLength.call(this, 3);
        },
    ],
    "email-input": [required, email],
    "phone-input": [
        required,
        function () {
            return pattern.call(this, /^[789]\d{9}$/);
        },
    ],
    "username-input": [
        required,
        function () {
            return minLength.call(this, 3);
        },
        function () {
            return maxLength.call(this, 16);
        },
    ],
    "password-input": [
        required,
        function () {
            return minLength.call(this, 3);
        },
        function () {
            return maxLength.call(this, 32);
        },
    ],
    "confirm-password-input": [
        required,
        function () {
            return match.call(this, "password-input");
        },
    ],
    notifications: [],
    "skill-level-input": [required],
    "color-input": [required],
    "job-title-input": [required],
});
