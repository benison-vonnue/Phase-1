// ​Task 2 (40 min) - this Binding - All Four Rules​
// ​366. ​​Demonstrate all four: default binding (standalone call), implicit (method call), explicit​
// ​(call/apply/bind), new (constructor)​
// ​367.​ ​Show this-loss: assign a class method to a variable, call it, show this is undefined in strict​
// ​mode. Fix three ways: arrow in constructor, .bind(), class field.​
// ​368.​ ​Build bindAll(obj) that binds all enumerable methods to obj​
// ​369.​ Show that arrow class fields fix this even in setTimeout callbacks​

// Here global object is global so result will be undefined. Running it in node runtime. In browser DOM is global element so every element created will be connected to window.

// Default Binding

var x = 40;

function foo() {
    console.log(this.x);
}

foo.x = 40;

foo();

// Implicit Binding
var x = 20;

const myObj = {
    x: 50,
    foo: function () {
        console.log(this.x);
    },
};

myObj.foo(); // 50
const foo = myObj.foo;
foo(); // 20

// Explicit Binding
const obj = {
    x: "Hi there",
};

function foo(name, age) {
    console.log(`${this.x}, my name is ${name}, and I'm ${age} years old`);
}

foo.call(obj, "Diego", 31); // runs function with binded obj as global object
// 'Hi there, my name is Diego, and I'm 31 years old'

foo.apply(obj, ["Diego", 31]); // run function with binded obj as global obj parameters are in array
// 'Hi there, my name is Diego, and I'm 31 years old'

const bar = foo.bind(obj, "Diego", 31); // returns function with binded global obj
bar(); // 'Hi there, my name is Diego, and I'm 31 years old'

// constructor binding

function foo(name, age) {
    this.name = name;
    this.age = age;
}

const bar = new foo("Diego", 31);

console.log(`My name is ${bar.name}, and I'm ${bar.age} years old`);

// Causes error in both normal and strict mode
class Task {
    x = "not nice";
    bar() {
        console.log(`${this.x}`);
    }
}

const obj = new Task();

const foo = obj.bar;
foo();

//solved it using bind
class Task {
    x = "nice";
    bar() {
        console.log(`${this.x}`);
    }
}

const obj = new Task();

const foo = obj.bar.bind(obj);
foo();

// solved it using constructor
class Task {
    x = "nice";
    constructor() {
        this.bar = () => {
            console.log(`${this.x}`);
        };
    }
}

const obj = new Task();

const foo = obj.bar;
foo();

// solved using class field
class Task {
    x = "nice";
    bar = () => {
        console.log(`${this.x}`);
    };
}

const obj = new Task();

const foo = obj.bar;
foo();

class Developer {
    constructor(skill) {
        this.skill = skill;
    }
    says() {
        console.log(this.skill + " rocks!");
    }
}

// function Developer(skill) {
//     this.skill = skill;
//     this.says = function () {
//         console.log(this.skill + " rocks!");
//     };
// }
const john = new Developer("Ruby");

john.says();
// const johnSays = john.says;
// johnSays();  undefined rocks!

function bindAll(object1) {
    let methods = Object.getOwnPropertyNames(
        Object.getPrototypeOf(object1)
    ).filter(function (p) {
        return typeof object1[p] === "function";
    });
    methods.forEach((method) => {
        if (method !== "constructor") {
            object1[method] = object1[method].bind(object1);
        }
    });
}

bindAll(john);

const johnSays = john.says;
johnSays();

class Task {
    x = "nice";
    bar = () => {
        console.log(`${this.x}`);
    };
}

const obj = new Task();

const foo = obj.bar;

setTimeout(() => {
    foo();
}, 2000);
