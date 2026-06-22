// ​Task 4 (45 min) - Closures in Practice​
// ​308.​ Build createCounter() returning { increment, decrement, getCount, reset } - the count must be​
// ​completely private​
// ​309.​ ​Build memoize(fn) using a Map as cache - wrap a slow Fibonacci and measure first vs second​
// ​call time​
// ​310.​ ​Build once(fn) - ensures fn is called at most once; subsequent calls return the first result​
// ​311.​ Build createRateLimiter(fn, maxCalls, windowMs) that throws if fn is called more than maxCalls​
// ​times in windowMs​

function createCounter() {
    let counter = 0;

    function getCount() {
        return counter;
    }

    function increament() {
        counter++;
    }

    function decrement() {
        counter--;
    }

    function reset() {
        counter = 0;
    }

    return {
        increament,
        decrement,
        getCount,
        reset,
    };
}

let counter = createCounter();
counter.increament(); // 0 + 1
counter.increament(); // 1 + 1
console.log(counter.getCount()); // 1

// memoize function
function fibonacci(n) {
    if (n === 1 || n === 0) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

function memoize(func) {
    const cache = new Map();
    return (value) => {
        if (!cache.get(value)) {
            cache.set(value, func(value));
        }
        return cache.get(value);
    };
}

const cacheFibonacci = memoize(fibonacci);

console.time();
console.log(fibonacci(8));
console.timeEnd();

console.time();
console.log(cacheFibonacci(8));
console.timeEnd(); //will have low time

//once function
function once(func) {
    let called = false;
    return (value) => {
        if (!called) {
            func(value);
            called = true;
        }
    };
}

function greet(name) {
    console.log(`hii, ${name}`);
}

const greetOnce = once(greet);
greetOnce("Benison");
greetOnce("Aby");
greetOnce("Beena");

//rate limiter
function createRateLimiter(fn, maxCalls, windowMs) {} //Doubt
