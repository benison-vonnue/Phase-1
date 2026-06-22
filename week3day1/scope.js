// ​Task 2 (40 min) - var, let, const - Scoping Rules​
// ​300.​ ​Create scope.js. Write five pairs of identical-looking code using var vs let/const - show the​
// ​difference in hoisting and block-scoping​
// ​301.​ ​Demonstrate the temporal dead zone: access a let variable before its declaration, note the​
// ​ReferenceError. Rewrite with var - note it logs undefined instead.​
// ​302.​ ​Create three levels of nested functions. Inside the innermost, successfully log a variable from​
// ​each outer scope.​
// ​303.​ ​Show the var-in-loop closure bug (setTimeout in a for loop) and fix it with let​

console.log(variable1); //undefined
//console.log(variable2) throws ReferenceError
//console.log(variable3) throws ReferenceError

var variable1 = "variable1";
let variable2 = "variable2";
const variable3 = "variable3";

console.log(variable1, variable2, variable3);

variable1 = "new variable1";
variable2 = "new variable2";
// variable3 = "new variable3"; Causes type error

//using let & const
const function1 = () => {
    const var1 = "This";

    const function2 = () => {
        const var2 = "is a";

        const function3 = () => {
            const var3 = "variable";

            console.log(var1, var2, var3);
        };

        function3();
    };

    function2(var1);
};

function1();

for (var i = 1; i <= 3; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000);
}

for (let i = 1; i <= 3; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000);
}
