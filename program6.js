// Q6. Write a function expression that takes in a number and returns true if it's even and false if it's odd.

function checkEven(num) {
    return num % 2 === 0;
}
let input = window.prompt("Please enter a number:");  //enter a number using prompt()
let num = Number(input);                          // Convert the input to a number

// Check if the number is even or odd
if (checkEven(num)) {
    window.alert("The number is Even");
} else {
    window.alert("The number is Odd");
}
