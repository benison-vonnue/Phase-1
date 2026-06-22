// ​Task 3 (40 min) - Functions - Four Ways​
// ​304.​ ​Write greet(name, greeting='Hello') as: a function declaration, a function expression, an arrow​
// ​function, and an object method​
// ​305.​ ​Build a calculator object with add, subtract, multiply, divide - handle division by zero​
// ​306.​ ​Write createMultiplier(factor) - a factory returning a function that multiplies by factor. Verify:​
// ​createMultiplier(3)(7) === 21​
// ​307.​ ​Demonstrate arguments object vs rest parameters - show why arrow functions cannot use​
// ​arguments​

function greet1(name, greeting = "Hello") {
    console.log(greeting + ", " + name);
}

const greet2 = function (name, greeting = "Hello") {
    console.log(greeting + ", " + name);
};

const greet3 = (name, greeting = "Hello") => {
    console.log(greeting + ", " + name);
};

greet1("Benison");
greet2("Abin");
greet3("vaishak");

const calculator = {
    num1: 0,
    num2: 0,
    add() {
        return this.num1 + this.num2;
    },
    sub() {
        return this.num1 - this.num2;
    },
    mul() {
        return this.num1 * this.num2;
    },
    div() {
        if (this.num2 === 0 && this.num1 !== 0) {
            return Infinity;
        }
        return this.num1 / this.num2;
    },
};

calculator.num1 = 2;
calculator.num2 = 3;
console.log(
    calculator.add(),
    calculator.sub(),
    calculator.mul(),
    calculator.div()
);

function createMultiplier(num1, num2) {
    return num1 * num2;
}

console.log(createMultiplier(3, 7) === 21);

function objectFunction({ name, occupation = "Developer", place = "Kerala" }) {
    console.log(`Name: ${name}`);
    console.log(`Occupation: ${occupation}`);
    console.log(`Place: ${place}`);
}

objectFunction({ place: "Delhi", name: "Benison" }); //Order doesnt matter since it used named references

function restFunction(factor, ...nums) {
    nums.map((n) => {
        console.log(n * factor);
    });
}

restFunction(2, 1, 2, 3, 4); // Order matters

function regularLog() {
    console.log(arguments);
}

regularLog();

const arrowLog = () => {
    console.log(arguments);
};

arrowLog();
