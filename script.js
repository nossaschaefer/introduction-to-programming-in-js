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
  console.log("Welcome " + name);
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
