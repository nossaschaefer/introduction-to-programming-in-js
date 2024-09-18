// 01) oddNumbers function
// Implement a oddNumbers function.

//  The function has two parameters, both are numbers.
//  Iterate over all numbers between first number and the second number.
//  Store all oddNumbers in string, seperated by a comma and return the string.
//  Allowed are only positive numbers, add a check.

function oddNumbers(num1, num2) {
  let result = "";
  for (let i = num1; i <= num2; i++) {
    if (i % 2 !== 0 && i > 0) {
      result += ", " + i;
    }
  }
  result = result.slice(1);
  return result;
}

console.log(oddNumbers(0, 4));
// result should be: 1,3

console.log(oddNumbers(10, 33));
// result should be: 11,13,15,17,19,21,23,25,27,29,31,33

// Steffens Lösung:

// function oddNumbers(a, b) {
//   if (a >= 0 && b >= 0 && typeof a === "number" && typeof b === "number") {
//     let string = "";
//     for (let index = a; index < b + 1; index++) {
//       if (index % 2 != 0) {
//         string = string + index + ", ";
//       }
//     }
//     string = string.slice(0, -2);
//     return string;
//   } else {
//     return "invalid input";
//   }
// }
