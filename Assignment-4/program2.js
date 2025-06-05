// 2.Write a program to reverse a string ("Hello John" => "olleH nhoJ")  


function reverseString(str)       // declare the function name - reverseString
{
    // Split the string into an array of characters   
    return str.split("").reverse().join("");         // reverse the array, and join it back into a string
}

let originalString = "hello John";
let reversedString = reverseString(originalString);
console.log("the reverse a string ::" ,reversedString); // Output: "nhoJ olleh"