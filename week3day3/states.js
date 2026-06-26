// ​Task 3 (45 min) - Pure Functions & Immutable State​
// ​370.​ ​Write impure updateUser(users, id, changes) that mutates the array. Write the pure version.​
// ​Verify the original is unchanged.​
// ​371.​ ​Build a five-step pipeline: parseCSV, validateRows, transformRows, filterInvalid, formatOutput -​
// ​each a pure function with no side effects​
// ​372.​ ​Write deepFreeze(obj) that recursively freezes all nested objects​

// const users = ["Benison", "Vaishak", "Abin", "Aswin", "Hawas"];
const fs = require("fs");
const { format } = require("path");

// function updateUsersImpure(users, id, changes) {
//     if (changes !== "pop") return;

//     users.pop(id);

//     return users;
// }

// let usersReturned = updateUsersImpure(users, 2, "pop");

// console.log(`Users Variable: ${users}, Users Returned: ${usersReturned}`);

// function updateUserPure(users, id, changes) {
//     if (changes !== "pop") return;

//     const result = [...users];
//     result.pop(id);

//     return result;
// }

// usersReturned = updateUserPure(users, 2, "pop");

// console.log(`Users Variable: ${users}, Users Returned: ${usersReturned}`);

fs.readFile("./week3day3/data.csv", "utf8", (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }

    const csvArray = parseCSV(data);

    const validatedCSV = validateCSV(csvArray);

    const transformedCSV = transformCSV(validatedCSV);

    const validCSV = filterInvalid(transformedCSV);

    const formatOutputCSV = formatOutput(validCSV);

    console.log(data);
    console.log(csvArray);
    console.log(validatedCSV);
    console.log(transformedCSV);

    console.log(validCSV);
    console.log(formatOutputCSV);
});

function parseCSV(csv) {
    return csv.split("\n").map((row) => row.split(","));
}

function validateCSV(csvArray) {
    const result = JSON.parse(JSON.stringify(csvArray));
    result[0].push("isValid");
    const regex = /^[0-9]{3}-[0-9]{4}$/;
    for (let i = 1; i < result.length; i++) {
        result[i].push(regex.test(result[i][4]));
    }
    return result;
}

function transformCSV(validatedCSV) {
    const result = JSON.parse(JSON.stringify(validatedCSV));
    result.forEach((each, i) => {
        if (i === 0) return;
        each[4] = each[4].replace(/^([0-9]{3})-([0-9]{4})$/, "$1$2");
    });
    return result;
}

function filterInvalid(transformedCSV) {
    const result = JSON.parse(JSON.stringify(transformedCSV));
    const toRemove = [];
    result[0].pop();
    for (let i = 1; i < result.length; i++) {
        if (!result[i][5]) {
            toRemove.push(i);
        } else {
            result[i].pop();
        }
    }
    toRemove.forEach((each) => {
        result.splice(each, 1);
    });
    return result;
}

function formatOutput(validCSV) {
    const result = [];
    validCSV.forEach((each, i) => {
        const map = {};
        if (i === 0) return;
        each.forEach((each, i) => {
            map[validCSV[0][i]] = each;
        });
        result.push(map);
    });
    return result;
}

function deepFreeze(obj) {
    if (typeof obj && !Object.isFrozen(obj)) {
        console.log(obj, "freezed");
        Object.freeze(obj);
        Object.values(obj).forEach((each) => {
            deepFreeze(each);
        });
    }
}

const employee = {
    name: "Alice",
    role: "Developer",
    contact: {
        email: "alice@company.com",
        phone: {
            work: "555-0199",
            mobile: "555-0122",
        },
    },
};
deepFreeze(employee);

employee.contact.phone.work = "Benison";

console.log(employee);
