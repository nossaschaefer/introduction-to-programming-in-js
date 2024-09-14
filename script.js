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

//01) Spot the errors and fix them

const size = 25;
let result;

if (size > 10 && size < 20) {
  result = "Greater than 10";
} else if (size > 20) {
  result = "Greater than 20";
} else {
  result = "Lower than 10";
}

console.log(result);
// Returns Greater than 10 but should return Greater than 20

// 02) oddEven function
// Implement an oddEven function.

//  The function has one parameter which is a number
//  If the number is an even number, the function returns the string even
//  If the number is an od number, the function returns the string odd
// TODO: Implement the oddEven function

console.log(oddEven(4));
// result should be even

console.log(oddEven(3));
// result should be odd

console.log(oddEven(-1));
// result should be odd

console.log(oddEven(10));
// result should be even

function oddEven(number) {
  if (number % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}

// 03) oldYoung function
// Implement a oldYoung function.

//  The function has one parameter which is a number
//  If the number is less than 16, return "children"
//  If the number is less than 50, return "young person"
//  Otherwise return "elder person"
//  If the number is not a number or a negative number a string invalid parameter
// TODO: Implement the oldYoung function

console.log(oldYoung(27));
// result should be young person

console.log(oldYoung(6));
// result should be children

console.log(oldYoung(-1));
// result should be invalid parameter

console.log(oldYoung(86));
// result should be elder person

console.log(oldYoung("hi"));
// result should be elder person

function oldYoung(number) {
  if (number < 0 || typeof number !== "number") {
    return "invalid parameter";
  } else if (number < 16) {
    return "children";
  } else if (number < 50) {
    return "young person";
  } else {
    return "elder person";
  }
}
