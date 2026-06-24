// ​Task 3 (45 min) - Control Flow Patterns​
// ​337.​ ​Write gradeToLetter(score) four ways: if/else, switch, ternary chain, lookup object. Benchmark​
// ​1M calls with console.time().​
// ​338.​ ​Write processQueue(items) using three loops: while (until empty), do/while (at least once),​
// ​for...of over a Map​
// ​339.​ ​Write validateUser(user) using && short-circuit to check: user exists, user.email exists, email​
// ​includes @, role is admin​
// ​340.​ ​Refactor a provided deeply-nested if/else to use early returns - no nesting deeper than one​
// ​level​
function gradeToLetter1(score) {
    if (score >= 80) {
        return "A";
    }
    if (score >= 60) {
        return "B";
    }
    if (score >= 40) {
        return "C";
    }
    if (score >= 20) {
        return "D";
    }
    return "E";
}

function gradeToLetter2(score) {
    switch (true) {
        case score >= 80:
            return "A";
        case score >= 60:
            return "B";
        case score >= 40:
            return "C";
        case score >= 20:
            return "D";
        default:
            return "E";
    }
}

function gradeToLetter3(score) {
    return score >= 80
        ? "A"
        : score >= 60
          ? "B"
          : score >= 40
            ? "C"
            : score >= 20
              ? "D"
              : "E";
}

console.time();
for (let i = 0; i < 10000000; i++) {
    gradeToLetter1(64);
}
console.timeEnd();

console.time();
for (let i = 0; i < 10000000; i++) {
    gradeToLetter2(64);
}
console.timeEnd();

console.time();
for (let i = 0; i < 10000000; i++) {
    gradeToLetter3(64);
}
console.timeEnd();

//lookup object pattern doubt

const items = new Map();

for (let i = 0; i < 100; i++) {
    items.set(i + 1, `Task ${i + 1}`);
}

function processQueueWhile(items) {
    let i = 1;
    while (i <= 100) {
        items.get(i);
        setTimeout(() => {}, 2000);
        i++;
    }
}

function processQueueDoWhile(items) {
    let i = 1;
    do {
        items.get(i);
        setTimeout(() => {}, 2000);
        i++;
    } while (i <= 100);
}

function processQueueFor(items) {
    for (let pair of items) {
        const [key, value] = pair;
        setTimeout(() => {}, 2000);
    }
}

processQueueWhile(items);
console.log("Process Queue Completed with while");

processQueueDoWhile(items);
console.log("Process Queue Completed with Do while");

processQueueFor(items);
console.log("Process Queue Completed with for");

function validateUser(user) {
    if (!(user && user.email)) return false;

    if (String(user.email).search(/@/g) === -1) return false;

    if (user.role !== "admin") return false;

    return true;
}
