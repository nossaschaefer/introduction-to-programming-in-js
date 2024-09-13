console.log("Hello World");
console.log("N" + "o" + "s" + "s" + "a");

// Error! Make it work
console.log("Hallo");
// Error! Make it work
console.log("That doesn't work");
// should return true. Change only the operator to fix it.
console.log(50 + 2 >= 52);
// should be false. Change only the operator to fix it.
console.log("333" !== 333);
// Wrong result: Expected 555 not 855. Change only the operator to fix it.
console.log((600 + 510) / 2);
// Wrong result: Expected a Number 4 received 22
console.log(2 + 2);
console.log(25 / 5); // Result: 5
console.log(50 / 10); // Result: 5
console.log(25 / 5 === 50 / 10);

// TODO: implement welcomeMsg function
function welcomeMsg(name) {
  return "Welcome " + name;
}

console.log(welcomeMsg("Jane"));
console.log(welcomeMsg("Marc"));

// TODO: implement calcGrossPrice function

function calcGrossPrice(netPrice, taxRate) {
  return netPrice + netPrice * taxRate;
}
console.log(calcGrossPrice(20, 0.19));
console.log(calcGrossPrice(40, 0.16));

// TODO: Implement the addPositive function
function addPositive(num1, num2) {
  return Math.abs(num1) + Math.abs(num2);
}

console.log(addPositive(2, 3));
// result1 should be 5

console.log(addPositive(3, -5));
// result2 should be 8

console.log(addPositive(-1, -8));
// result2 should be 9

// Spot the errors and fix them

let userName = "Brad";
userName = "Jenna";

function getUserNameLength(userName) {
  return userName.length;
}

console.log(getUserNameLength(userName) > 4);
// ^______________ Should log true

console.log("Breakline");
// Implement a isString function.

//  The function has one parameter which could be any kind of data type
//  The function is written as a function expression
//  The function returns a boolean. It returns only true, when the data type is a string otherwise it will return false
// TODO: Implement the isString function

let isString = function (anyDataType) {
  return typeof anyDataType === "string";
};

console.log(isString("Hello"));
// result should be true

console.log(isString(3));
// result should be false

console.log(isString(undefined));
// result should be false

console.log(isString(""));
// result should be true

console.log(isString("John" + "Doe"));
// result should be true
