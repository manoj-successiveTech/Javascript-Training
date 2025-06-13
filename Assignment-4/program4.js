// 4. Write a program to convert given string to upperCase OR lowerCase.

function convertCase(str, toUpper) 
{
  return toUpper ? str.toUpperCase() : str.toLowerCase(); // ternary operator - ?
}

let userInput = prompt("Enter a string to convert:");       // Take input from the user

let convertTo = prompt("Convert to upper case? (yes/no)");   // Ask the user whether to convert to upper case or lower case
let toUpper = convertTo.toLowerCase() === "yes";            // Determine the conversion type
let convertedString = convertCase(userInput, toUpper);


alert("The output is :: " + convertedString);           // Display the result