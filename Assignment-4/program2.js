// 2.Write a program to reverse a string ("Hello John" => "olleH nhoJ") 
// input mentioned :- string ("Hello John" => "olleH nhoJ") 
function reverseWord(str) 
{
  return str
    .split(' ')
    .map(word => word.split('').reverse().join(''))   // using arrow function
    .join(' ');
}

console.log("The reverse word is::", reverseWord("Hello John")); // Output: "olleH nhoJ"
