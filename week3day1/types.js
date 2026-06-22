console.log(typeof null);
// Type null predict - Type object - bug

console.log(typeof []);
// type object

console.log(typeof {});
// type object

console.log(typeof NaN);
// type NaN - Number

console.log(typeof function () {});
// type object - function

console.log(0 == false);
// type bool - true

console.log("" == false);
// type bool - true

console.log(null == undefined);
// type bool - false

console.log(null === undefined);
// type bool - false

console.log(NaN === NaN);
// type bool - false

console.log(1 + "2");
// type string - 12

console.log("3" - 1);
// type number - 2

console.log(true + true);
// type bool - number - 2

console.log(typeof ([] + []));
// type object - string
// If you literally type {} + {} into your code or console, JavaScript forces the objects into primitive values (strings)

console.log(typeof ([] + {}));
// type object - string
// If you literally type {} + {} into your code or console, JavaScript forces the objects into primitive values (strings)
