"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// problem 1:
//  Create a TypeScript function filterEvenNumbers that accepts an array of numbers and returns a new array containing only the even numbers.
// let newArr:number[]
function filterEvenNumbers(arr) {
    const evenNumber = arr.filter(elem => elem % 2 === 0);
    console.log(evenNumber);
}
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));
// Problem 2:
// Write a function reverseString that takes a string as input and returns the reversed version of that string.
function reverseString(value) {
    let char = value.split("");
    return char.reverse().join("");
}
console.log(reverseString("kathika"));
//# sourceMappingURL=solutions.js.map