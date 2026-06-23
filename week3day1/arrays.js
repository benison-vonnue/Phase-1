//​Task 5 (45 min) - Arrays & Objects - Mastery​
// ​312.​ ​Given 20 employee objects (name, dept, salary, yearsExp), chain methods to: filter Engineering​
// ​with salary > 70000, map to {name, salary}, sort by salary descending - all in one expression​
// ​313.​ ​Destructure a nested config object into flat variables in a single destructuring statement​
// ​314. Merge two objects with spread. Show Object.entries(), keys(), values() on the result.​
// ​315.​ ​Write deepClone(obj) that clones a flat object without JSON.parse/stringify​

const employee = [
    {
        name: "Name 1",
        dept: "Engineering",
        salary: 20000,
        yearExp: 0.5,
    },
    {
        name: "Name 2",
        dept: "Engineering",
        salary: 35000,
        yearExp: 1,
    },
    {
        name: "Name 3",
        dept: "Engineering",
        salary: 15000,
        yearExp: 0.2,
    },
    {
        name: "Name 4",
        dept: "Operation",
        salary: 80000,
        yearExp: 3,
    },
    {
        name: "Name 5",
        dept: "Operation",
        salary: 70000,
        yearExp: 3,
    },
    {
        name: "Name 6",
        dept: "Operation",
        salary: 80000,
        yearExp: 3.5,
    },
    {
        name: "Name 7",
        dept: "Engineering",
        salary: 48000,
        yearExp: 2.4,
    },
    {
        name: "Name 8",
        dept: "Operation",
        salary: 90000,
        yearExp: 4,
    },
    {
        name: "Name 9",
        dept: "Operation",
        salary: 120000,
        yearExp: 5,
    },
    {
        name: "Name 10",
        dept: "Engineering",
        salary: 350000,
        yearExp: 9,
    },
    {
        name: "Name 11",
        dept: "Engineering",
        salary: 90000,
        yearExp: 3.5,
    },
    {
        name: "Name 12",
        dept: "Operation",
        salary: 200000,
        yearExp: 5,
    },
    {
        name: "Name 13",
        dept: "Engineering",
        salary: 240000,
        yearExp: 5.5,
    },
    {
        name: "Name 14",
        dept: "Engineering",
        salary: 15000,
        yearExp: 0.2,
    },
    {
        name: "Name 15",
        dept: "Operation",
        salary: 27000,
        yearExp: 0.9,
    },
    {
        name: "Name 16",
        dept: "Engineering",
        salary: 75000,
        yearExp: 2,
    },
    {
        name: "Name 17",
        dept: "Engineering",
        salary: 95000,
        yearExp: 3,
    },
    {
        name: "Name 18",
        dept: "Engineering",
        salary: 43000,
        yearExp: 1.7,
    },
    {
        name: "Name 19",
        dept: "Engineering",
        salary: 55000,
        yearExp: 2.3,
    },
    {
        name: "Name 20",
        dept: "Operation",
        salary: 120000,
        yearExp: 2.7,
    },
];

const result1 = employee
    .filter((emp) => emp.salary > 70000)
    .map((emp) => ({
        name: emp.name,
        salary: emp.salary,
    }))
    .sort((a, b) => b.salary - a.salary);

console.log(result1);

const { name, salary } = result1[0];

console.log(name, salary);

const obj1 = {
    name: "Benison",
    rollNo: "21",
};

const obj2 = {
    dept: "CSE",
    year: 4,
};

const mergedObj = {
    ...obj1,
    ...obj2,
};

console.log(
    Object.entries(mergedObj),
    Object.keys(mergedObj),
    Object.values(mergedObj)
);

const cloneMergedObj = { ...mergedObj };

cloneMergedObj.name = "Abin";

console.log(cloneMergedObj);
console.log(mergedObj);
