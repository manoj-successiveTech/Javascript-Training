// 4. Write a program to convert given string to upperCase OR lowerCase

function convertCase(str, toUpperCase = true) 
{
    if (toUpperCase) {
        return str.toUpperCase(); // Convert to uppercase
    } else {
        return str.toLowerCase(); // Convert to lowercase
    }
}   
// Example usage
let inputString = "Hello World";
let upperCaseString = convertCase(inputString, true);
let lowerCaseString = convertCase(inputString, false); 
console.log("Uppercase: ", upperCaseString); // Output: "HELLO WORLD"
console.log("Lowercase: ", lowerCaseString); // Output: "hello world" 
