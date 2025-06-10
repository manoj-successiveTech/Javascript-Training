// 4. Write a program to convert given string to upperCase OR lowerCase.

function convertCase(str, toUpper) 
{
  return toUpper ? str.toUpperCase() : str.toLowerCase(); // ternary operator - ?
}

console.log("The output upperCase is ::" ,convertCase("Hello World", true));  // Output: "HELLO WORLD"
console.log("The output lowercase is ::" ,convertCase("Hello World", false)); // Output: "hello world"
