console.log("Arrays");
// 06) - arrays
// 01) removeItem function
// Implement a removeItem function.

//  The first parameter is an array.
//  The second parameter is a number. It's the non-zero-based index of the item that should get deleted.
//  Remove the item and return an array.
//  Ensure that the original array was not mutated.
// TODO: Implement the removeItem function

function removeItem(array, num) {
  const arrayCopy = structuredClone(array);
  arrayCopy.splice(--num, 1);
  return arrayCopy;
}

const animals = ["Dog", "Cat", "Lion"];
console.log(removeItem(animals, 1));
// result should be: ["Cat", "Lion"]

console.log(animals);
// result should be still: ["Dog", "Cat", "Lion"]

const fruits = ["Watermelon", "Banana", "Cherry", "Kiwi", "Pineapple", "Apple"];
console.log(removeItem(fruits, 3));
// result should be: ["Watermelon", "Banana", "Kiwi", "Pineapple", "Apple"]

console.log(fruits);
// result should be still: ["Watermelon", "Banana", "Cherry", "Kiwi", "Pineapple", "Apple"]

console.log("(02) sumOfCharacters function");
// Implement a sumOfCharacters function.

//  The function has one parameter, which is an array.
//  Check the type of each array entry. If it's a string then store the count of characters.
//  The function returns the total sum of all characters.
// TODO: Implement the sumOfCharacters function

function sumOfCharacters(arr) {
  let totalCharacters = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string") {
      totalCharacters += arr[i].length;
    }
  }
  return totalCharacters;
}

const arr = ["Hello", "1", " "];
console.log(sumOfCharacters(arr));
// result should be: 7

const arr1 = ["Luke", "Anakin", true, "Obi Wan", 333];
console.log(sumOfCharacters(arr1));
// result should be: 17

const arr2 = [
  "Code is",
  "like humor",
  ".",
  "When you have",
  "to explain it, it's bad!",
];
console.log(sumOfCharacters(arr2));
// result should be: 55
