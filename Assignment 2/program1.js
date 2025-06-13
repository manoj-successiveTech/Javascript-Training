// 1. Generate two random numbers between 1 and 10 (inclusive) that are not the same.

function getRandomInt(min, max) 
{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let num1 = getRandomInt(1, 10);
let num2;

do {
  num2 = getRandomInt(1,10);
} while (num2 === num1);

console.log("First random number:", num1);
console.log("Second random number (different):", num2);