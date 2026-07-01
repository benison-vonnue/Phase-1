// Task 4 (50 min) - Advanced Array Methods​
// ​373.​ ​Given orders (each with an items array), use flatMap to get all items with their parent order id​
// ​374.​ ​Use findLast and findLastIndex on a log array to find the most recent error entry​
// ​375.​ ​Build chunk(arr, size), zip(...arrays) that interleaves arrays, and groupBy(arr, keyFn) without​
// ​Object.groupBy​
// ​376.​ ​Use Array.from({ length: 12 }, (_, i) => ...) to generate a monthly calendar array​

orders = [
    { orderId: 1, items: ["item1", "item2", "item3"] },
    { orderId: 2, items: ["item4", "item2", "item5", "item6"] },
    { orderId: 3, items: ["item8", "item7", "item9"] },
];

const flattedOrders = orders.flatMap((order) => {
    return order.items.map((item) => {
        return {
            orderId: order.orderId,
            item: item,
        };
    });
});

console.log(flattedOrders);

logs = ["error: log1", "log: log2", "log: log3", "error: log4", "log: log5"];

const errorLog = logs.findLast((log) => log.startsWith("error"));
const errorIndex = logs.findLastIndex((log) => log.startsWith("error"));

console.log(errorLog, errorIndex);

function someFunction(item) {
    console.log(`Ran some function on ${item}`);
}

const chuck = (arr, size) => {
    const arr1 = arr.slice(0, size);
    const arr2 = arr.slice(size);

    arr1.forEach((each) => {
        someFunction(each);
    });
    // console.log("Chuck Completed");
    if (arr2.length == 0) return;

    chuck(arr2, size);
};

chuck(logs, 2);

const zip = (...arrays) => {
    return [...arrays].flat();
};

const zipArr = zip(["1", "2", "3"], ["4", "5"], ["6", "7"], ["8", "9"]);

console.log(zipArr);

const groupBy = (arr, keyFn) => {
    const result = {};
    arr.map((each) => {
        const fncResult = keyFn(each);
        result[fncResult] = Object.hasOwn(result, fncResult)
            ? [...result[fncResult], each]
            : [each];
    });
    return result;
};

const groupedResult = groupBy(logs, (each) =>
    each.startsWith("error") ? "error" : "log"
);

console.log(groupedResult);

const calendar = Array.from({ length: 12 }, (item, i) => {
    const month = new Date(0, i).toLocaleString("en-US", { month: "long" });
    let monthStart = new Date(2026, i, 1);
    let monthEnd = new Date(2026, i + 1, 1);
    let monthLength = (monthEnd - monthStart) / (1000 * 60 * 60 * 24);
    return Array.from({ length: monthLength }, (item, i) => i + 1);
});

console.log(calendar);
