// Write a function expression that takes in two numbers and returns their sum.

let sumNum = function(num1, num2) {
    // Taking the sum of the two numbers
    return num1 + num2;
}


let num1 = Number(window.prompt("Please enter the first number:"));
let num2 = Number(window.prompt("Please enter the second number:"));

// Calculate the sum of the two numbers
let sum = sumNum(num1, num2);

// Log the result to the console
console.log("The sum of the numbers is:", sum);

// Display the result in an alert box
window.alert("The sum of " + num1 + " and " + num2 + " is " + sum);

