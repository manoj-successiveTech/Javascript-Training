// 4. Write a function expression that takes in a number and returns its square.

let squareNum = function(num) 
{
    return num ** 2;               // enter square of the number-num
}
let number = parseInt(window.prompt("Please enter a number:"));// Prompt user to enter a number
let square = squareNum(number); //
console.log("The Square of Num is:", square);
window.alert("The Square of " + number + " is " + square);  // Display the result